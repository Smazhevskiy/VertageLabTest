enum APP_ACTIONS_TYPES {
    SET_APP_ERROR = 'APP/SET_APP_ERROR',
    SET_APP_INFO = 'APP/SET_APP_INFO',
    SET_SHOW_HEADER = 'APP/SET_SHOW_HEADER',
}

type AppActions =
    | ReturnType<typeof setAppError>
    | ReturnType<typeof setAppInfo>
    | ReturnType<typeof setShowHeader>

export type AppInitialState = {
    showHeader: boolean
    error: string
    info: string
}

const initialState: AppInitialState = {
    showHeader: true,
    error: '',
    info: ''
}

export const appReducer = (state = initialState, action: AppActions): AppInitialState => {
    switch (action.type) {
        case APP_ACTIONS_TYPES.SET_SHOW_HEADER:
            return {...state, showHeader: action.show}
        case APP_ACTIONS_TYPES.SET_APP_ERROR:
            return {...state, error: action.payload.error}
        case APP_ACTIONS_TYPES.SET_APP_INFO:
            return {...state, info: action.payload.info}
        default:
            return state
    }
}

//ACTIONS
export const setShowHeader = (show: boolean) => ({
    type: APP_ACTIONS_TYPES.SET_SHOW_HEADER,
    show
} as const)


export const setAppError = (error: string) => ({
    type: APP_ACTIONS_TYPES.SET_APP_ERROR,
    payload: {error}
} as const)

export const setAppInfo = (info: string) => ({
    type: APP_ACTIONS_TYPES.SET_APP_INFO,
    payload: {info}
} as const)