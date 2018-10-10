import React from 'react';

class ToDoList extends React.Component {
    
    state = {
        tasks: this.props.tasks,
        draft: ''
    }

    updateDraft = event => {
        this.setState({draft: event.target.value})
    }

    addTask = () => {
        const list = this.state.tasks;
        list.push(this.state.draft);
        this.setState({tasks: list, draft: ''})
    }
    
    render () {
        return (
            <div>
                <h1>
                    {this.props.title}
                </h1>
                
                {this.state.tasks.map(task => <div><p> {task} </p></div>)}

                <input type="text" onChange={this.updateDraft} value={this.state.draft}/>
                <button onClick={this.addTask}> Add </button>
            </div>
        )
    }
}

export default ToDoList;