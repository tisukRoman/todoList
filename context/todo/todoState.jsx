import { // ---------\ CONSTATNTS
    ADD_TODO_ITEM, REMOVE_TODO_ITEM, UPDATE_TODO_ITEM,
    SHOW_LOADER, HIDE_LOADER, SHOW_ERROR, CLEAR_ERROR,
    FETCH_DATA, NUMERATE
} from './todoReducer'

import React from 'react'
import { TodoContext } from './todoContext'
import { todoReducer } from './todoReducer'


const todoState = ({ children }) => {

    // ---------\ INITIAL STATE
    const initialState = {
        todos: [],
        isFetching: false,
        error: null
    }


    // ---------\ REDUCER
    const [state, dispatch] = React.useReducer(todoReducer, initialState)


    // ---------\ CALLBACKS FROM REDUCER TO EXPORT
    const addTodo = async (value) => {
        let response = await fetch('https://todo-app-ced95-default-rtdb.europe-west1.firebasedatabase.app/todos.json', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({ value, date: today })
        })
        let data = await response.json();
        dispatch({ type: ADD_TODO_ITEM, value, id: data.name, date: data.date });
    }
    const fetchTodos = async () => {
        clearError();
        loaderTrue();
        try {
            const response = await fetch('https://todo-app-ced95-default-rtdb.europe-west1.firebasedatabase.app/todos.json', {
                method: 'GET',
                headers: { 'Content-type': 'application/json' },
            });
            const data = await response.json();
            if (data) {
                const todos = Object.keys(data).map(key => ({ ...data[key], id: key }));
                dispatch({ type: FETCH_DATA, data: todos });
            }
            return;
        } catch (e) {
            showError(`Не удалось\nзагрузить данные`);
        } finally {
            loaderFalse();
        }
    }
    const updateTodo = async (id, currentText) => {
        clearError();
        try {
            await fetch(`https://todo-app-ced95-default-rtdb.europe-west1.firebasedatabase.app/todos/${id}.json`, {
                method: 'PATCH',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify({ value: currentText })
            });
            dispatch({ type: UPDATE_TODO_ITEM, id, currentText });
        } catch (e) {
            showError(`Не удалось\nобновить данные`);
        }
    }
    const removeTodo = async (id) => {
        await fetch(`https://todo-app-ced95-default-rtdb.europe-west1.firebasedatabase.app/todos/${id}.json`, {
            method: 'DELETE',
            headers: { 'Content-type': 'application/json' },
        })
        dispatch({ type: REMOVE_TODO_ITEM, id });
    }




    // ---------\ CALLBACKS TO USE HERE
    const loaderTrue = () => dispatch({ type: SHOW_LOADER });
    const loaderFalse = () => dispatch({ type: HIDE_LOADER });
    const showError = (error) => dispatch({ type: SHOW_ERROR, error });
    const clearError = () => dispatch({ type: CLEAR_ERROR });


    // ---------\ CONTEXT PROVIDER
    return (
        <TodoContext.Provider
            value={{
                todos: state.todos,
                addTodo,
                removeTodo,
                updateTodo,
                fetchTodos,
                isFetching: state.isFetching,
                error: state.error
            }}>
            {children}
        </TodoContext.Provider>
    )
}
export default todoState


// --------\ Date
let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0');
let yyyy = today.getFullYear();
today = dd + '/' + mm + '/' + yyyy;
