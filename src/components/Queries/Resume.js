import { gql } from '@apollo/client';

function getResume(language) {
    let GET_RESUME;

    GET_RESUME = gql`
    query {
      resume{
        data{
          attributes{
            resume: resume${language} {
              data{
                attributes{
                  url
                }
              }
            }
          }
        }
      }
    }
    
    `;

    return GET_RESUME

}

export default getResume;