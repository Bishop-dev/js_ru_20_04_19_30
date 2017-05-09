import React, {Component as BasicComponent} from 'react'

export default (OriginalComponent) => class DecoratedComponent extends BasicComponent {

    state = {
        openArticleId: null
    };

    render() {
        return <OriginalComponent {...this.props} {...this.state} toggleArticle={this.toggleArticle}/>;
    }

    toggleArticle = id => ev => {
        console.log('ololo');
        this.setState({
            openArticleId: id
        })
    }

}