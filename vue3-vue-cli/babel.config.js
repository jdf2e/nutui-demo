module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    [
      "import",
      {
        "libraryName": "@nutui/nutui",
        "libraryDirectory": "dist/packages/_es",
        "style": (name, file) => name.toLowerCase().replace('_es/', '') + '/index.scss',
        "camel2DashComponentName": false
      },
      'nutui3-vue'
    ]
  ]
}
