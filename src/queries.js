import {gql} from 'apollo-boost';

const getBooksQuery = gql`
    {
        books{
            name
            genere
            id
            author{
                name
            }
        }
    }
`;

const getAuthorsQuery = gql`
    {
        authors{
            name
            id
        }
    }
`;

const addBookMutation = gql`
    mutation($name: String!, $genere: String!, $authorid: ID!){
        addBook(name: $name, genere: $genere, authorid: $authorid){
            name
            id
        }
    }
`;

const getBookQuery = gql`
    mutation($id: ID!){
        book(id: $id){
            name
            genere
            author{
                id
                name
                age
                books{
                    name
                    id
                }
            }
        }
    }
`;

export {
    getBookQuery,
    getBooksQuery, 
    getAuthorsQuery,
    addBookMutation
};