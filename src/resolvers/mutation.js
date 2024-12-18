const Mutation = {
    addMarker: (_, { newMarker }, context) => {
        const { markers } = context
        markers.push(newMarker)
        return newMarker
    },
    updateMarker: (_, { marker }, context) => {
        const { markers } = context;
        for (let i = 0; i < markers.length; i++) {
            const markerAux = markers[i]
            if (markerAux.nome == marker.nome) {
                markers[i] = { ...markerAux, ...marker }
                return markers[i]
            }
        }
        return null
    }
};

export default Mutation
