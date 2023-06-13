import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {ApolloClient, ApolloProvider, createHttpLink, InMemoryCache} from '@apollo/client';
import App from "./App";

const client = new ApolloClient({
    link: createHttpLink({uri: 'http://localhost:80/graphql'}),
    cache: new InMemoryCache()
})

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <App/>
        </ApolloProvider>
    </React.StrictMode>
);