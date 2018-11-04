import React from 'react';

import styled from 'styled-components';

import NewTodoForm from '../../components/NewTodoForm/NewTodoForm'
import ToDoItem from '../../components/ToDoItem/ToDoItem'

import * as toDoItemApi from '../../helpers/toDoItemApi'
import * as _ from 'ramda'
import { toDoItemsApiUrl } from '../../helpers/routes';

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
      
    componentDidMount= async () => {
        const tasks = await toDoItemApi.getAll()
        this.setState({tasks : tasks})
    }

    static defaultProps = {
        tasks : [],
        title : 'My Stuff'  
    }

    state = {
        tasks: this.props.tasks,
        draft: ''
    }

    updateDraft = event => {
        this.setState({draft: event.target.value})
    }

    addTask = async () => {
        const {tasks, draft} = this.state
        const task = await toDoItemApi.create({content:draft})
        this.setState({tasks: _.append(task, tasks), draft: ''})
    }
                                                                            
    render () {
        const {title} = this.props
        const {tasks, draft} = this.state
        
        return (
            <Containers>
                <Header>
                    {title}
                </Header>

                {tasks.map(task => <ToDoItem id={task.id} key={task.id} text={task.content} done={task.done}/>)}
                
                <NewTodoForm  
                    onSubmit = {this.addTask}
                    onChange = {this.updateDraft}
                    draft = {draft} />
            </Containers>
        )
    }
}

export default ToDoList;