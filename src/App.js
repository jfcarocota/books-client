import React, {Component, Fragment} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import ApolloClient from 'apollo-boost';
import {ApolloProvider} from '@apollo/react-hooks';

import Container from './components/Container';
import BookList from './components/BookList';
import AddBook from './components/AddBook';

const client = new ApolloClient({
  uri: 'http://localhost:5000/books-api'
});

export default class App extends Component{

  render() {
    return (
      <Container content={
        <Fragment>
          <h1>Books List</h1>
          <ApolloProvider client={client}>
              <AddBook/>
              <br/>
              <BookList/>
          </ApolloProvider>
        </Fragment>
      }/>
    );
  }
}
