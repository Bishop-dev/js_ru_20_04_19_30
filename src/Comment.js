import React, {Component} from 'react'

export default class Comment extends Component {

    render() {
        const {comment} = this.props;
        return (
            <section>
                <h6 onClick={this.toggleOpen}>
                    {comment.user}
                </h6>
                {this.getBody()}
            </section>
        )
    }

    getBody() {
        return <div>{this.props.comment.text}</div>
    }

}
