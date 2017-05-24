import React, {Component} from 'react'
import {connect} from 'react-redux'
import Loader from './Loader'
import Comment from './Comment'
import CommentForm from './CommentForm/index'
import toggleOpen from '../decorators/toggleOpen'
import PropTypes from 'prop-types'
import {loadComments} from '../AC'

class CommentList extends Component {
    componentDidMount() {
        const {isLoaded, isLoading, loadComments, article} = this.props;
        if (!isLoading && !isLoaded) {
            loadComments(article.id);
        }
    }

    componentWillReceiveProps({article, loadComments, isOpen, isLoaded, isLoading}) {
        if (isOpen && !this.props.isOpen) {
            loadComments(article.id);
        }
    }

    render() {
        const {comments, isLoading, isOpen, toggleOpen, articleId} = this.props;
        const linkText = isOpen ? 'hide comments' : 'show comments';
        if (isLoading) {
            return <Loader />
        }
        return (
            <div>
                <a href="#" onClick={toggleOpen}>{linkText}</a>
                {this.getBody(comments, isOpen, articleId)}
            </div>
        );
    }

    getBody(comments, isOpen, articleId) {
        if (!isOpen) {
            return null;
        }
        if (!comments.length) {
            return <div><p>No comments yet</p><CommentForm articleId = {articleId}/></div>
        }
        return (
            <div>
                <ul>
                    {comments.map(id => <li key={id}><Comment id={id}/></li>)}
                </ul>
                <CommentForm articleId = {articleId} />
            </div>
        )
    }
}

CommentList.propTypes = {
    isOpen: PropTypes.bool,
    toggleOpen: PropTypes.func,
    article: PropTypes.object
}

export default connect((state) => ({
    comments: state.comments,
    articleId: state.articleId,
    isLoaded: state.comments.loaded,
    isLoading: state.comments.loading
}), {loadComments})(toggleOpen(CommentList))
