import { gql } from '@apollo/client';

function getSocial() {
  let GET_SOCIAL;

  GET_SOCIAL = gql`
    query {
        social{
          data {
            id
            attributes {
              instagram
              twitter
              linkedin
              github
          }
        }
      }
    }
    `;

  return GET_SOCIAL

}

export default getSocial;
