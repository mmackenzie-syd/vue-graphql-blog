import { gql } from 'apollo-boost';

/* Posts Queries */

export const GET_POSTS = gql`
    query {
        getPosts {
            _id
            title
            imageUrl
        }
    }`;

/* User Queries */

/* User Mutations */

/* Post Mutations */
