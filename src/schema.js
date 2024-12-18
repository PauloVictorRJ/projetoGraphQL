import { gql } from "apollo-server"

const typeDefs = gql`
    type Query {
        welcome: String
        markers: [Marker]     
        marker(nome: String!): Marker! 
    }

    type Mutation {
        addMarker(newMarker: AddMarkerInput!): Marker!   
        updateMarker(marker: UpdateMarkerInput!): Marker!  
    }

    type Marker {
        nome: String!
        latLng: LatLng!  
        cor: String!        
    }

    type LatLng {  
        latitude: Float!
        longitude: Float!
    }

    input UpdateMarkerInput {
        nome: String
        latLng: LatLngInput 
        cor: String
    }

    input AddMarkerInput {
        nome: String!
        latLng: LatLngInput!  
        cor: String!
    }

    input LatLngInput {  
        latitude: Float!
        longitude: Float!
    }
`;

export default typeDefs
