import {React, StrictMode} from "react";
import { createRoot } from 'react-dom/client';
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { LanguageProvider } from './components/LanguageContext';

const cache = new InMemoryCache({
  typePolicies: {
    BlogEntity: {
      fields: {
        attributes: {
          merge(existing, incoming) {
            return incoming;
          }
        }
      }
    },

    HomeEntity: {
      fields: {
        attributes: {
          merge(existing, incoming) {
            return incoming;
          }
        }
      }
    },

    AboutEntity: {
      fields: {
        attributes: {
          merge(existing, incoming) {
            return incoming;
          }
        }
      }
    },

    ProjectEntity: {
      fields: {
        attributes: {
          merge(existing, incoming) {
            return incoming;
          }
        }
      }
    }
  }
});


const client = new ApolloClient({
  uri: 'https://strapi.88367832.xyz/graphql',
  cache: cache,
});

const root = createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client}>
    <LanguageProvider>
      <StrictMode>
        <App />
      </StrictMode>
    </LanguageProvider>
  </ApolloProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
