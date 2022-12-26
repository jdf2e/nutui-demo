const NutUIResolver = () => {
  return (name: string) => {
    if (name.startsWith('Nut')) {
      return {
        name: name.slice(3),
        from: '@nutui/nutui-taro',
        sideEffects: `@nutui/nutui-taro/dist/packages/${name.slice(3).toLowerCase()}/style`
      }
    }
  }
}

export default NutUIResolver;
