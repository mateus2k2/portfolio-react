import { gql } from '@apollo/client';

function getBlogs(language) {
    let GET_BLOG;

    GET_BLOG = gql`
    query {
        blogs {
            data {
                id
                attributes {
                body: body${language}
                title: title${language}
                description: description${language}
                tags: tags${language}
                creation
                banner {
                    data {
                    attributes {
                        url
                    }
                    }
                }
                author
                }
            }
        }
    }
    `;

    return GET_BLOG

}

export default getBlogs;