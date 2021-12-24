import {applyMiddleware, combineReducers, createStore} from 'redux'
import {gradientReducer} from './gradient-reducer'
import {appReducer} from './app-reducer'
import thunk from 'redux-thunk'


const rootReducer = combineReducers({
    gradient: gradientReducer,
    app: appReducer
})

export const store = createStore(rootReducer,applyMiddleware(thunk))

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch

// @ts-ignore
window.store = store

