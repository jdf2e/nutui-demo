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
        "customName": (name, file) => {
          if (name == 'Locale') {
            return '@nutui/nutui/dist/packages/locale/lang';
          } else {
            return `@nutui/nutui/dist/packages/_es/${name}`;
          }
        },
        "style": (name, file) => name.toLowerCase().replace('_es/', '') + '/index.scss',
        "camel2DashComponentName": false
      },
      'nutui3-vue'
    ]
  ]
}
