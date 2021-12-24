import {AppInitialState, appReducer, setAppError, setAppInfo, setShowHeader} from '../app-reducer'


let startState: AppInitialState = {
    showHeader: true,
    info: '',
    error: ''
}


describe('App reducer', () => {
    it('Header component must be hide', () => {
        const action = setShowHeader(false)

        const endState = appReducer(startState, action)

        expect(startState).not.toBe(endState)
        expect(endState.showHeader).toBeFalsy()
    })
    it('App info message must be changed', () => {
        const action = setAppInfo('hello world')

        const endState = appReducer(startState, action)

        expect(startState).not.toBe(endState)
        expect(endState.info).toBe('hello world')
        expect(endState.error).toBe('')
    })
    it('App error message must be changed', () => {
        const action = setAppError('some error')

        const endState = appReducer(startState, action)

        expect(startState).not.toBe(endState)
        expect(endState.error).toBe('some error')
        expect(endState.info).toBe('')
    })
})