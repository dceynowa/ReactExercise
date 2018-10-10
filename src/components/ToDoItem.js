import React from 'react';

import './ToDoItem.css'

class ToDoItem extends React.Component {
    static defaultProps = {
        done: false
    }

    state = {
        done: this.props.done
    }

    toggleDone = () => {
        this.setState({done: !this.state.done})
    }

    render () {
        const {text} = this.props
        return (
            <div onClick={this.toggleDone} className={this.state.done ? 'doneTodo' : ''}>
                <p>{text}</p>
            </div>
        )
    }
}

export default ToDoItem;