import React, {Component} from 'react';
import {graphql} from 'react-apollo';
import {getBookQuery} from '../queries';

class BookDetails extends Component{

    displayBookDetails(){
        const {book} = this.props.data;
    }

    render() {
        console.log(this.props);
        return (
             <div id="books-details">
                 <p>Output book details...</p>
             </div>
        );
    }
}

export default graphql(
    getBookQuery,
    {options: props =>{
        return {
            variables: {
                id: props.bookid
            }
        }
    }}
)(BookDetails);