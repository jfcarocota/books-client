import React, {Component} from 'react';

export default class FormBlock extends Component{

    constructor(props){
        super(props);

        this.state = {
            content: props.content ? props.content : 'Your content here'
        }
    }

    render() {
        const {content} = this.state;
        return (
            <form id="add-book">
                {content}
                <button>+</button>
            </form>
        );
    }
}