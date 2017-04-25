import React, {Component} from 'react'
import CommentList from "./CommentList";

export default class Article extends Component {
/*
    constructor() {
        super()
        this.state = {
            isOpen: false
        }
    }
*/
    state = {
        isOpen: false
    };

    render() {
        const {article} = this.props;
        return (
            <section>
                <h2 onClick={this.toggleOpen}>
                    {article.title}
                </h2>
                {this.getBody()}
            </section>
        )
    }

    getBody() {
        return (
            <div>
                {this.isArticleOpened() && <div>{this.props.article.text}</div>}
                <CommentList comments={this.props.article.comments} />
            </div>
        );
    }

    isArticleOpened() {
        return this.state.isOpen;
    }

    toggleOpen = ev => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

/*
export default function Article(props) {
    const {article} = props
    return (
        <section>
            <h2>
                {article.title}
            </h2>
            <div>
                {article.text}
            </div>
        </section>
    )
}*/
