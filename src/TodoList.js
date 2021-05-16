import React,{useContext} from 'react'
import TodoItem from './TodoItem'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import CheckBox from '@material-ui/core/Checkbox'
import { v4 as uuidv4 } from 'uuid'
import {TodosContext,todoReducer} from './context/todosContext'

//inefficient without memo because every time a todo is added the todolist changes and every todo is remapped over and todoitems is resent new props every time. This of course results in a rerender of every todo every time
//purecomponent in the class based approach allowed you to prevent a rerender of already established todos by tracking the props. if a prop was different or new, that todo would rerender, otherwise if it were the same that todo would not be rerendered
//react.memo is a higher order component that replicates this process
const TodoList = (props) => {

        //destructured object passed in from the todosContext useContext allows access to the context. destructure todos from todoStuff
        const todos =useContext(TodosContext)
    // if todos exist render the paper element
    if(todos.length)return (
        <Paper>
            <List>
            {/* i is the index */}
                {todos.map((todo,i)=>(
                <React.Fragment key={i}>
                <TodoItem 
                // id={todo.id} 
                // task={todo.task} 
                // completed={todo.completed} 
                // spread operator to spread all the properties as props
                {...todo}
                />          
                {/* if the index is smaller than the length display the divider, if it is the last one do not */}
                {i<todos.length-1 && <Divider/>}
                </React.Fragment>
                ))}
            </List>
            
        </Paper>
    )
    // if no todos do not render paper
return null
}

export default TodoList
