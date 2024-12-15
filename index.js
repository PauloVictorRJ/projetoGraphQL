import { ApolloServer, gql } from "apollo-server";

const cities = [
    {
        id: "1",
        nome: "Rio de Janeiro / RJ",
        pais: "Brasil",
        atualizado: 1733961894,
    },
    {
        id: "2",
        nome: "São Paulo",
        pais: "Brasil",
        atualizado: 1733961894,
    },
    {
        id: "3",
        nome: "Curitiba",
        pais: "Brasil",
        atualizado: 1733961894,
    },
    {
        id: "4",
        nome: "Salvador",
        pais: "Brasil",
        atualizado: 1733961894,
    }
];

const points = [
    {
        id: "1",
        cityId: 1,
        nome: "Cristo Redentor",
        latitude: -22.951916,
        preco: 99.97,
        longitude: -43.210487
    },
    {
        id: "2",
        cityId: 1,
        nome: "Pão de Açúcar",
        latitude: -22.948726,
        preco: 99.97,
        longitude: -43.156143
    },
    {
        id: "3",
        cityId: 2,
        nome: "Avenida Paulista",
        latitude: -23.561684,
        preco: 99.97,
        longitude: -46.655981
    },
    {
        id: "4",
        cityId: 2,
        nome: "Parque Ibirapuera",
        latitude: -23.587416,
        preco: 99.97,
        longitude: -46.657953
    },
    {
        id: "5",
        cityId: 3,
        nome: "Jardim Botânico",
        latitude: -25.441105,
        preco: 99.97,
        longitude: -49.276855
    },
    {
        id: "6",
        cityId: 3,
        nome: "Ópera de Arame",
        latitude: -25.401700,
        preco: 99.97,
        longitude: -49.266860
    },
    {
        id: "7",
        cityId: 4,
        nome: "Pelourinho",
        latitude: -12.971854,
        preco: 99.97,
        longitude: -38.508743
    },
    {
        id: "8",
        cityId: 4,
        nome: "Elevador Lacerda",
        latitude: -12.971111,
        preco: 99.97,
        longitude: -38.510833
    }
]

const typeDefs = gql`
    type Query {
        welcome: String
        cities: [city]
        city(id: String!, nome: String!): city!
        points: [point]
        point(id: String!): point!
        pointsOfCity(cityId: String): [point]
    }

    type city {
        id: String
        nome: String
        pais: String
        atualizado: Int
    }

    type point {
        id: String
        nome: String
        preco: Float
        desconto: Float
        latitude: Float
        longitude: Float
        cityId: String
    }
`;

const resolvers = {
    Query: {
        welcome: () => {
            return "Olá!";
        },
        cities: () => {
            return cities;
        },
        city: (_, args) => {
            const id = args.id;
            const nome = args.nome;
            return cities.filter(city => {
                return city.id == id || city.nome == nome; 
            })[0];
        },
        points: () => {
            return points;
        },
        point: (_, args) => {
            const id = args.id;
            return points.filter(point => point.id == id)[0];
        },
        pointsOfCity: (_, args) => {
            const id = args.cityId;
            return points.filter(point => point.cityId == id);
        },
    }
};

const server = new ApolloServer({ typeDefs, resolvers });
server
    .listen()
    .then((serverInfo) => {
        console.log(`Serviço em execução: ${serverInfo.url}`);
    });