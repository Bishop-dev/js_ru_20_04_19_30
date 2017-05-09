import React, {Component} from 'react'
import CommentList from './CommentList'
import PropTypes from 'prop-types'

class Article extends Component {
    static propTypes = {
        article: PropTypes.shape({
            title: PropTypes.string.isRequired,
            text: PropTypes.string,
            comments: PropTypes.array
        }),
        //from toggleOpen decorator
        isOpen: PropTypes.bool,
        toggleArticle: PropTypes.func.isRequired
    };

/*
    componentWillMount() {
        console.log('---', 'mounting')
    }
*/
    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate');
        return nextProps.isOpen != this.props.isOpen;
    }

    componentWillUpdate() {
        console.log('---', 'updating')
    }

    render() {
        const {article, toggleArticle} = this.props;
        console.log(toggleArticle);
        return (
            <section>
                <h2 onClick={toggleArticle}>
                    {article.title}
                </h2>
                {this.getBody()}
            </section>
        )
    }

    getBody() {
        return this.props.isOpen && (
            <div>
                {this.props.article.text}
                <CommentList comments={this.props.article.comments}/>
            </div>
        )
    }
}

export default Article;