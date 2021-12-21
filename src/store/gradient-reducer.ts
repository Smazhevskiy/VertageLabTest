enum GRADIENT_ACTIONS_TYPES {
    SET_APP_IS_LOADING = 'SET_APP_IS_LOADING'
}

type AppActions = | ReturnType<typeof setAppIsLoading>


export type GradientInitialState = {
    isError: boolean
}

const initialState: GradientInitialState = {
    isError: false,
}


export const gradientReducer = (state = initialState, action: AppActions): GradientInitialState => {
    switch (action.type) {

        default:
            return state
    }
}

//ACTIONS
export const setAppIsLoading = (status: boolean) => ({
    type: GRADIENT_ACTIONS_TYPES.SET_APP_IS_LOADING,
    payload: {status}
} as const)