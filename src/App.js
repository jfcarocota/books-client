import React, {Component} from 'react';
import './App.css';

import ApolloClient from 'apollo-boost';
import {ApolloProvider} from '@apollo/react-hooks';

import BookList from './components/BookList';
import AddBook from './components/AddBook';

const client = new ApolloClient({
  uri: 'http://localhost:5000/books-api'
});

export default class App extends Component{

  render() {
    return (
       <div id="main">
         <h1>Books List</h1>
         <ApolloProvider client={client}>
            <AddBook/>
            <BookList/>
         </ApolloProvider>
       </div>
    );
  }
}
