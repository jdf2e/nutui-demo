const fse = require('fs-extra');
const config = require('../src/config.json');
const baseUrl = `/Users/peixinyu7/Desktop/jdf2e/nutui-demo/v4-test/eiinu/vite/`;

const copyFile = (from, to) => {
  fse
    .copy(from, to)
    .then(() => {
      console.log('success!>', to);
    })
    .catch((err) => {
      console.error(err);
    });
};
const copyDemo = (name) => {
  const src = `/Users/peixinyu7/Desktop/jdf2e/nutui/src/packages/__VUE/${name.toLowerCase()}/demo.vue`;
  const dst = baseUrl + `src/views/${name}.vue`;
  copyFile(src, dst);
}

const generateRouter = () => {
  let output = `import { createRouter, createWebHashHistory } from "vue-router";\nimport List from '@/views/List.vue';\n`;
  output += config.list.map((name) => {
    return `import ${name} from '@/views/${name}.vue';\n`
  }).join('');
  output += `const routes = [{
    path: '/',
    name: 'index',
    component: List, 
  },
  ${config.list.map((name) => {
    return `
  {
    path: '/${name.toLowerCase()}',
    name: '${name.toLowerCase()}',
    component: ${name}
  },\n`;
  }).join('')}]`;
  output += `
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;
`;
  fse.outputFile(baseUrl + 'src/router/router.ts', output);
}

config.list.forEach((ComponentName) => {
  copyDemo(ComponentName);
})
generateRouter();