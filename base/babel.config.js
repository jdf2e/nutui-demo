module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  plugins: [
    ["@nutui/babel-plugin-separate-import", {
      "libraryName": "@nutui/nutui-jdl",
      "libraryDirectory": "dist/packages",
      "style": "scss"
    }]
  ]
}
