import { ApolloProvider } from "@apollo/client";
import client from './client';
import Component from "./views/components/Item/component";


function App() {

  return (
    <ApolloProvider client={client}>
      <h1>hola mundo</h1>
      <Component />
    </ApolloProvider>
  );
}

export default App;
