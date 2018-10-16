import React from 'react';

import NewTodoForm from '../../components/NewTodoForm/NewTodoForm'
import ToDoItem from '../../components/ToDoItem/ToDoItem'

class ToDoList extends React.Component {
    
static defaultProps = {
    tasks : [
        {done: true, text: 'Study React'},
        {done: false, text: 'Go for a walk'}
      ],
    title : 'My Stuff'  
}

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
                <NewTodoForm  
                    onSubmit = {this.addTask}
                    onChange = {this.updateDraft}
                    draft = {draft} />
            </div>
        )
    }
}

export default ToDoList;