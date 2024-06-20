import { gql } from '@apollo/client';

function getBlogs(language) {
    let GET_PROJECTS;

    GET_PROJECTS = gql`
    query {
        projects {
          data {
            id
            attributes {
              title: title${language}
              description: description${language}
              blog: blog${language}
              demoLink
              github
              banner {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
          }
        }
      }
    `;

    return GET_PROJECTS

}

export default getBlogs;