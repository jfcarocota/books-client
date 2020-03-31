import React, {Component} from 'react';

export default class FormField extends Component{

    constructor(props){
        super(props);

        this.state = {
            content: props.content ? props.content : 'Your input'
        }
    }

    render() {
        const {content} = this.state;
        return (
            <div className="field">{content}</div>
        );
    }
}