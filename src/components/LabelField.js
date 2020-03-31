import React, {Component} from 'react';



export default class LabelField extends Component{
    constructor(props){
        super(props)

        this.state = {
            name: props.name ? props.name : 'your input name here'
        }
    }

    render() {
        
        const {name} = this.state;

        return (
            <label>{name}</label>
        );
    }
}