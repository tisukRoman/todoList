export const FETCH_DATA = 'FETCH_DATA';
export const ADD_TODO_ITEM = 'ADD_TODO_ITEM';
export const REMOVE_TODO_ITEM = 'REMOVE_TODO_ITEM';
export const UPDATE_TODO_ITEM = 'UPDATE_TODO_ITEM';
export const SHOW_LOADER = 'SHOW_LOADER';
export const HIDE_LOADER = 'HIDE_LOADER';
export const SHOW_ERROR = 'SHOW_ERROR';
export const CLEAR_ERROR = 'CLEAR_ERROR';


export const todoReducer = (state, action) => {
    let arr = []; //intermediate value

    switch (action.type) {
        case FETCH_DATA:
            return {
                ...state,
                todos: [...action.data]
            }
        case ADD_TODO_ITEM:
            return {
                ...state,
                todos: [...state.todos, {
                    id: action.id,
                    number: (state.todos.length + 1).toString(),
                    value: action.value,
                    date: action.date
                }]
            }
        case REMOVE_TODO_ITEM:
            arr = state.todos.filter(todo => todo.id !== action.id); // finds item to del
            arr.forEach((el, i) => el.number = ++i); // changes numerating 
            return {
                ...state,
                todos: [...arr]
            }
        case UPDATE_TODO_ITEM:
            arr = state.todos.map(todo => {
                if (todo.id === action.id) todo.value = action.currentText;
                return todo;
            });
            return {
                ...state,
                todos: [...arr]
            }
        case SHOW_LOADER:
            return {
                ...state,
                isFetching: true
            }
        case HIDE_LOADER:
            return {
                ...state,
                isFetching: false
            }
        case SHOW_ERROR:
            return {
                ...state,
                error: action.error
            }
        case CLEAR_ERROR:
            return {
                ...state,
                error: null
            }
        default:
            return state;
    }
}



