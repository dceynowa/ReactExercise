import React from 'react';

import styled from 'styled-components';


const Item = styled.div`
  background: #343744;
  border-radius: 10px;
  padding: 14px;
  margin-bottom: 7px;
  color: ${props => props.done ? '#1fd84d' : '#c7c8cb'}
  text-decoration: ${props => props.done ? 'line-through' : 'auto'}
  `

class ToDoItem extends React.Component {
    toggleDone = () => this.props.toggleDone(this.props.id)

    destroy = () => this.props.destroy(this.props.id)

    render () {
        const {text, done} = this.props
        return (
            <Item done={done}>
                <div onClick={this.toggleDone}>{text}</div>
                <button onClick={this.destroy}>x</button>
            </Item>
        )
    }
}

export default ToDoItem;