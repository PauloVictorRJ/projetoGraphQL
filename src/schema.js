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
        id: Int!    
        nome: String!
        latLng: LatLng!        
    }

    type LatLng {  
        latitude: Float!
        longitude: Float!
    }

    input UpdateMarkerInput {
        id: Int!
        nome: String!
        latLng: LatLngInput 
    }

    input AddMarkerInput {
        nome: String!
        latLng: LatLngInput!  
    }

    input LatLngInput {  
        latitude: Float!
        longitude: Float!
    }
`;

export default typeDefs
