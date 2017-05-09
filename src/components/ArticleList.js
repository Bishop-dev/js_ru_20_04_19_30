import React from 'react'
import Article from './Article'
import PropTypes from 'prop-types'
import toggleAccordeon from '../decorators/toggleAccordeon'

function ArticleList(props) {

    const {openArticleId, toggleArticle} = props;

    const elements = props.articles.map(article => <li key={article.id}>
        <Article article={article}
                isOpen={openArticleId === article.id}
                 toggleOpen={toggleArticle(article.id)}
        />
    </li>);

    return (
            <ul>
                {elements}
            </ul>
    );

}

ArticleList.propTypes = {
    articles: PropTypes.array,
    toggleArticle: PropTypes.func.isRequired
};

export default toggleAccordeon(ArticleList);
