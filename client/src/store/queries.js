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
export const GET_CURRENT_USER = gql`
    query {
        getCurrentUser {
            _id
            username
            email
            password
            avatar
            joinDate
            favorites {
                _id
                title
                imageUrl
            }
        }
    }`;

export const SIGNIN_USER = gql`
    query($username: String!, $password: String!) {
        signinUser(username: $username, password: $password) {
            token
        }
    }`;

/* User Mutations */

export const SIGNUP_USER = gql`
    mutation($username: String!, $email: String!, $password: String!) {
        signupUser(username: $username, email: $email, password: $password) {
            token
        }
    }
`;

/* Post Mutations */
export const ADD_POST = gql`
    mutation(
        $title: String!,
        $imageUrl: String!
        $categories: [String]!
        $description: String!
        $creatorId: ID!
    ) {
        addPost(
            title: $title
            imageUrl: $imageUrl
            categories: $categories
            description: $description
            creatorId: $creatorId
        ) {
            title
            imageUrl
            categories
            description
            createdDate
        }
    }
`;
