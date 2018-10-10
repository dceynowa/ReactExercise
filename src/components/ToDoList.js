import React from 'react';

class ToDoList extends React.Component {
    render () {
        return (
            <div>
                <h1>
                    {this.props.title}
                </h1>
            </div>
        )
    }
}

export default ToDoList;