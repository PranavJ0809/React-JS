import {createSlice } from '@reduxjs/toolkit';  // this generates slice
import {nanoid } from '@reduxjs/toolkit';  // this is not IMP -> it  just basically generates unique ID's

const initialState = {
    todos : [{id : 1, text : "Hello World"}]
}


// this variables like name, initialState are fixed, and they provided by redux-toolkit
// also any reducer function takes 2 variables by default only -> they are state and action
// "state" provides the value for all the things in the initial state
// "action" basically provides us with some values required to call a method

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers : {
        addTodo : (state, action) => {
            const todo = {
                id : nanoid(),
                text : action.payload
            }
            state.todos.push(todo)  // adding newly created todo into old one's
        },
        removeTodo : (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
    }
})

// we basically have to export the Slice in 2 different parts
export const {addTodo, removeTodo} = todoSlice.actions
export default todoSlice.reducer