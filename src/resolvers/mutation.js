const Mutation = {
    addMarker: (_, { newMarker }, context) => {
        const { markers } = context;
        const id = markers.length + 1;
        const markerWithId = { ...newMarker, id };
        markers.push(markerWithId);
        return markerWithId;
    },

    updateMarker: (_, { marker }, context) => {
        const { markers } = context;

        if (!marker.id) {
            throw new Error("Id do marcador é obrigatório.");
        }

        for (let i = 0; i < markers.length; i++) {
            const markerAux = markers[i];
            if (markerAux.id === marker.id) {
                markers[i] = {
                    ...markerAux,
                    nome: marker.nome || markerAux.nome,
                    latLng: marker.latLng ? marker.latLng : markerAux.latLng,
                };

                return markers[i];
            }
        }

        throw new Error(`Marcador com o id "${marker.id}" não encontrado.`);
    },
};

export default Mutation;
