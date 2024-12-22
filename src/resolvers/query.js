const Query = {
    welcome: () => {
        return "Olá!"
    },
    markers: (_, __, context) => {
        const { markers } = context;
        return markers;
    },
    marker: (_, args, context) => {
        const { id } = args;
        const { markers } = context;
        return markers.find(marker => marker.id === id);
    },
}

export default Query;
