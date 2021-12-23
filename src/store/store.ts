import {combineReducers, createStore} from 'redux'
import {gradientReducer} from './gradient-reducer'
import {appReducer} from './app-reducer'


const rootReducer = combineReducers({
    gradient: gradientReducer,
    app: appReducer
})

export const store = createStore(rootReducer)

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch

// @ts-ignore
window.store = store

