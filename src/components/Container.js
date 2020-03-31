import React, {Component} from 'react';

export default class Container extends Component{

    constructor(props){
        super(props);
        this.state = {
           
            content: props.content ? props.content : 'Your content here'
        }
    }

    render() {
        const {content} = this.state;
        return (
            <div className="container">{content}</div>
        );
    }
}
