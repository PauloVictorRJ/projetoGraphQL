const Query = {
    welcome: () => {
        return "Olá!"
    },
    markers: (_, __, context) => {
        const { markers } = context
        return markers
    },
    marker: (_, args, context) => {
        const { nome } = args
        const { markers } = context
        return markers.filter(marker => marker.nome === nome)[0]
    },
}

export default Query
