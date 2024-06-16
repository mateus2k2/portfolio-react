import { gql } from '@apollo/client';

function getAbout(language) {
    let GET_ABOUT;

    GET_ABOUT = gql`
    query {
      about{
        data {
          id
          attributes {
            quote: quote${language}
            body: body${language}
            quoteAuthor
          }
        }
      }
    }
    `;

    return GET_ABOUT

}

export default getAbout;