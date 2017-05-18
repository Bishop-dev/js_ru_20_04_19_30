import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './style.css'

class CommentForm extends Component {

    static PropTypes = {
        text: PropTypes.string,
        username: PropTypes.string
    };

    state = {
        username: '',
        text: ''
    };

    render () {
        return (
            <div>
                <form>
                    Username: <input type="text"
                                     value={this.state.username}
                                     name="username"
                                     className={this.getClassName('username')}
                                     onChange={this.validate} />
                    Text: <input type="text"
                                 value={this.state.text}
                                 name="text"
                                 className={this.getClassName('text')}
                                 onChange={this.validate} />
                </form>
            </div>
        )
    }

    getClassName = type => this.state[type] && this.state[type].length < 5 ? 'form-input__error' : '';

    validate = ev => {
        if (ev.target.value.length > 20) {
            return;
        }
        const field = ev.target.name;
        this.setState({
            [field]: ev.target.value
        });
    }
}

export default CommentForm