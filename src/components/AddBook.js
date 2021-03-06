import React, {Component, Fragment} from 'react';
import {graphql} from 'react-apollo';
import * as compose from 'lodash.flowright';
import FormField from './FormField';
import LabelField from './LabelField';
import {getAuthorsQuery, addBookMutation, getBooksQuery} from '../queries';
import FormGroup from './FormGroup';


class AddBook extends Component{

    constructor(props)
    {
        super(props);

        this.state = {
            name: "",
            genere: "",
            authorid: ""
        }
    }

    displayAuthors(){
        const data = this.props.getAuthorsQuery;
        if(data.loading){
            return <option disabled>Loading authors...</option>;
        }else{
            return data.authors.map(author => {
                return <option key={author.id} value={author.id}>{author.name}</option>;
            });
        }
    }

    render() {
        const bookName = ()=>{
            return(
                <FormGroup content={
                    <Fragment>
                        <LabelField name="Book name:"/>
                        <input className="form-control" onChange={e =>{this.setState({name: e.target.value})}}/>
                    </Fragment>
                }/>
            );
        }

        const bookGenere = ()=>{
            return(
                <FormGroup content={
                    <Fragment>
                        <LabelField name="Book genere:"/>
                        <input className="form-control" onChange={e =>{this.setState({genere: e.target.value})}}/>
                    </Fragment> 
                }/>
            );
        }

        const bookAuthor = ()=>{
           return(
               <Fragment>
                    <LabelField name="Book author:"/>
                    <select className="form-control" onChange={e =>{this.setState({authorid: e.target.value})}}>
                        <option>Select author</option>
                        {this.displayAuthors()}
                    </select>
               </Fragment>
           );
        }
        

        const formContent = ()=>{
            return (
                <Fragment>
                    <FormField content = {bookName()}/>
                    <FormField content = {bookGenere()}/>
                    <div className="field">{bookAuthor()}</div>
                </Fragment>
            );
        }
        

        return (
            <form id="add-book" onSubmit={this.submitForm.bind(this)}>
                {formContent()}
                <button className="btn btn-dark">Add author</button>
            </form>
        );
    }

    submitForm(e){
        e.preventDefault();
        this.props.addBookMutation({
            variables:{
                name: this.state.name,
                genere: this.state.genere,
                authorid: this.state.authorid
            },
            refetchQueries: [{query: getBooksQuery}]
        });
    }
}

export default compose(
    graphql(getAuthorsQuery, {name: 'getAuthorsQuery'}),
    graphql(addBookMutation, {name: 'addBookMutation'})
)(AddBook);