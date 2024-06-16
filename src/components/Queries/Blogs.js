import { gql } from '@apollo/client';

function getBlogs(language, id) {
    let GET_BLOG;

    GET_BLOG = gql`
    query {
        blogs(filters: { id: { eq: "${id}" } }) {
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