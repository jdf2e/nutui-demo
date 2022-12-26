const NutUIResolver = () => {
  return (name: string) => {
    if (name.startsWith('Nut')) {
      return {
        name: name.slice(3),
        from: '@nutui/nutui',
        sideEffects: `@nutui/nutui/dist/packages/${name.slice(3).toLowerCase()}/style`
      }
    }
  }
}

export default NutUIResolver;
