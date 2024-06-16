import { gql } from '@apollo/client';

function getStack(type) {
    let GET_STACK;

    GET_STACK = gql`
    query {
      skillTools (filters: {type: {eq: "${type}"}}){
        data {
          id
          attributes {
            name
            iconName
            type
          }
        }
      }
    }
    `;

    return GET_STACK

}

export default getStack;