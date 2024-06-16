import { gql } from '@apollo/client';

function getHome(language) {
    let GET_HOME;

    GET_HOME = gql`
    query {
      home{
        data {
          id
          attributes {
            name
            avatar {
              data {
                attributes {
                  url
                }
              }
            }
            logo{
              data {
                attributes {
                  url
                }
              }
            }
            introduction: introduction${language}
            typewriter: typewriter${language}
          }
        }
      }
    }
    `;

    return GET_HOME

}

export default getHome;
