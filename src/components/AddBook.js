import React, {Component, Fragment} from 'react';
import {gql} from 'apollo-boost';
import {graphql} from 'react-apollo';
import FormField from './FormField';
import TextInput from './TextInput';
import LabelField from './LabelField';
import FormBlock from './FormBlock'

const getAutohrsQuery = gql`
    {
        authors{
            name
            id
        }
    }
`;

class AddBook extends Component{


    displayAuthors(){
        const data = this.props.data;
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
                <Fragment>
                    <LabelField name="Book name:"/>
                    <TextInput/>
                </Fragment>
            );
        }

        const bookGenere = ()=>{
            return(
                <Fragment>
                    <LabelField name="Book genere:"/>
                    <TextInput/>
                </Fragment>
            );
        }

        const bookAuthor = ()=>{
           return(
               <Fragment>
                    <LabelField name="Book author:"/>
                    <select>
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

            <form id="add-book">
                {formContent()}
                <button>+</button>
            </form>
        );
    }
}

export default graphql(getAutohrsQuery)(AddBook);