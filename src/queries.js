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

const getAutohrsQuery = gql`
    {
        authors{
            name
            id
        }
    }
`;

export {
    getBooksQuery, 
    getAutohrsQuery
};