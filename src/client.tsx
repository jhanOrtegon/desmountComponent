import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: process.env.REACT_APP_ENPOINT_GRAPHQL,
    cache: new InMemoryCache()
})

export default client;