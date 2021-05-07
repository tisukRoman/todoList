import { CHANGE_SCREEN } from './screenReducer'
import React from 'react'
import { ScreenContext } from './screenContext'
import { screenReducer } from './screenReducer'

const ScreenState = ({ children }) => {

    const initialState = {
        screenId: null
    }

    // ---------\ REDUCER
    const [state, dispatch] = React.useReducer(screenReducer, initialState);

    // ---------\ CALLBACK
    const changeScreen = (id) => dispatch({ type: CHANGE_SCREEN, payload: id })

    // ---------\ CONTEXT PROVIDER
    return (
        <ScreenContext.Provider
            value={{
                changeScreen,
                screenId: state.screenId
            }}>
            {children}
        </ScreenContext.Provider>
    )
}

export default ScreenState
