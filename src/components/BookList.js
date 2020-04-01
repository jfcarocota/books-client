import React, {Component} from 'react';
import {graphql} from 'react-apollo';

import {getBooksQuery} from '../queries';

class BookList extends Component{

    displayBooks(){
        const data = this.props.data;
        if(data.loading){
            return <div>Loading Books...</div>;
        }else{
            return data.books.map(book =>{
                return <li key={book.id} className="list-group-item">{book.name}</li>;
            });
        }
    }

    render() {
        return (
             <ul id="book-list" className="list-group">
                 {this.displayBooks()}
             </ul>
        );
    }
}

export default graphql(getBooksQuery)(BookList);
