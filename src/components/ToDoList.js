import React from 'react';
import ToDoItem from './ToDoItem'
class ToDoList extends React.Component {
    
    state = {
        tasks: this.props.tasks,
        draft: ''
    }

    updateDraft = event => {
        this.setState({draft: event.target.value})
    }

    addTask = () => {
        const {tasks, draft} = this.state
        tasks.push({text: draft, done: false });
        this.setState({tasks, draft: ''})
    }
    
    render () {
        
        const {title} = this.props
        const {tasks, draft} = this.state
        
        return (
            <div>
                <h1>
                    {title}
                </h1>
                
                {tasks.map(task => <ToDoItem text={task.text} done={task.done}/>)}

                <input type="texct" onChange={this.updateDraft} value={draft}/>
                <button onClick={this.addTask}> Add </button>
            </div>
        )
    }
}

export default ToDoList;