const fse = require("fs-extra");
const path = require("path");
const log = console.log;
const { firstLetterUp } = require("./src/utils/utils.js");
const componentsPath = `${process.cwd()}/src/components`;
const topPath = require('./topPath.json').personal_local_path;

if(!(topPath && fse.existsSync(topPath))){
    console.error(
      "请在根目录创建topPath.json,并声明您本地NUTUI-REACT代码库的绝对路径"
    );
    process.exit(1)
}

const configJsonPath = `${topPath}/src/config.json`;

const configBuffer = fse.readFileSync(configJsonPath);

const config = JSON.parse(configBuffer.toString()); //nuiui-react config

let components = [];
let componentsNameList = [];
let importStr = "";

fse.ensureDir(componentsPath);
config.nav.forEach((i) => {
  let right = i.packages.filter(
    (item) => item && item.taro && !item.exportEmpty 
  );
  components.push(...right);
});

components.map((i) => {
  const name = `${i.name.toLowerCase()}`;
  componentsNameList.push(firstLetterUp(name));
  importStr += `import ${firstLetterUp(
    name
  )} from "../../components/${i.name.toLowerCase()}/${i.name.toLowerCase()}";\n`;
});

// import
const importListPath = `${process.cwd()}/src/pages/single/importList.ts`;
  fse.writeFile(
  importListPath,
  `${importStr} \nconst components =[${componentsNameList}]; \nexport default components`
  );

const componentsNameListPath = `${process.cwd()}/componentsNameList.js`;
let str = "";
componentsNameList.forEach((i) => {
  str += `'${i}',`;
});
fse.removeSync(componentsNameListPath);
fse.writeFile(componentsNameListPath, `export const list =[${str}];`);
//写入tsx
components.map((item, index) => {
    const name = item.name.toLowerCase();
  const singleFolder = `${componentsPath}/${name}`;
  const singleDemoPath = `${topPath}/src/packages/${name}/demo.taro.tsx`; //本地组件demo.taro.tsx路径
  const singleComponentPath = `${singleFolder}/${name}.tsx`; //待写入components文件夹的tsx路径
  const singleDemoCssPath = `${topPath}/src/packages/${name}/demo.scss`;
  const singleComponentCssPath = `${singleFolder}/demo.scss`; //待写入components文件夹的tsx路径
  const singleDemo = fse
    .readFileSync(singleDemoPath)
    .toString()
    .replace("@/packages/nutui.react.taro", "@nutui/nutui-react-taro")
    .replace(
      `'@/packages/${name}/demo.scss'`,
      `'./demo.scss'`
    ); //待写入内容
  fse.ensureDir(singleFolder);

  const write = () => {
    fse.writeFile(singleComponentPath, singleDemo, (err) => {
      if (err) {
        log("写入错误,重新写入中", err.path);
        write()
      } else {
        log(`${name} done`);
      }
    });
  };
  if (!fse.existsSync(singleComponentPath)) {
    write()
  } else {
    log(`${item.name}.tsx 已存在`);
  }

  if (
    fse.existsSync(singleDemoCssPath) &&
    !fse.existsSync(singleComponentCssPath)
  ) {
    const singleCssDemo = fse.readFileSync(singleDemoCssPath);
    fse.writeFile(singleComponentCssPath, singleCssDemo, (err) => {
      if (err) {
        log("写入错误", err);
      } else {
        log("done");
      }
    });
  } else {
    log(`${item.name} css文件 已存在`);
  }
});
