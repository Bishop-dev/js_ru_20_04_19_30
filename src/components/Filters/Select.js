import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import {connect} from 'react-redux'
import {changeSelection} from '../../AC' 
import 'react-select/dist/react-select.css'

class SelectFilter extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired
    };

    handleChange = selected => this.props.changeSelection(selected.map(option => option.value))

    render() {
        const {articles, selected} = this.props;
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }));
        return <Select
                options={options}
                value={selected}
                multi={true}
                onChange={this.handleChange} />
    }

}

function select(state) {
    return {
        selected: state.filters.selected,
        articles: state.articles
    }
}

export default connect(select, { changeSelection })(SelectFilter)