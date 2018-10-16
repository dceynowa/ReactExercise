import React from 'react';

import styled from 'styled-components';

import NewTodoForm from '../../components/NewTodoForm/NewTodoForm'
import ToDoItem from '../../components/ToDoItem/ToDoItem'

const Containers = styled.div`
    background: #2b2e39;
    margin: 0 auto;
    width: 80%;
    max-width: 600px;
    padding: 14px;
    border-radius: 14px; 
    margin-top: 14px;
`

const Header = styled.h1`
    color: #fff;
`

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
            <Containers>
                <Header>
                    {title}
                </Header>
                
                {tasks.map(task => <ToDoItem text={task.text} done={task.done}/>)}
                <NewTodoForm  
                    onSubmit = {this.addTask}
                    onChange = {this.updateDraft}
                    draft = {draft} />
            </Containers>
        )
    }
}

export default ToDoList;