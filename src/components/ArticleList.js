import React from 'react'
import Article from './Article'
import PropTypes from 'prop-types'
import accordeon from '../decorators/accordeon'

function ArticleList(props) {

    const {openArticleId, toggleArticle} = props;

    const elements = props.articles.map(article => <li key={article.id}>
        <Article article={article} toggleArticle={toggleArticle} isOpen={article.id === openArticleId} />
    </li>);

    return (
            <ul>
                {elements}
            </ul>
    );

}

ArticleList.propTypes = {
    articles: PropTypes.array
};

export default accordeon(ArticleList);
