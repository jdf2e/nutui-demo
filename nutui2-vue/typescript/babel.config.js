module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  plugins: [
    ["@nutui/babel-plugin-separate-import", {
      "libraryName": "@nutui/nutui",
      "libraryDirectory": "dist/packages",
      "style": "scss"
    }]
  ]
}
