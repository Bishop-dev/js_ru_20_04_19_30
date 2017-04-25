import React, {Component} from 'react'
import Comment from './Comment'

export default class CommentList extends Component {

    state = {
        isOpen: false
    };

    render() {
        return (
            <section>
                <div>
                    <a href="#" onClick={this.toggleOpen}>Comments</a>
                </div>
                {this.getBody()}
            </section>
        )
    }

    getBody() {
        const {comments} = this.props;
        if (!comments) {
            return (<ul></ul>);
        }
        const elements = comments.map(comment => <li key={comment.id}><Comment comment={comment}/></li>);
        return this.isCommentsOpened() && <ul>{elements}</ul>;
    }

    isCommentsOpened() {
        return this.state.isOpen;
    }

    toggleOpen = ev => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

}