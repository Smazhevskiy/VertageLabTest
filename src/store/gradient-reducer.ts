import {GradientType} from '../pages/Home/Home'
import {v4} from 'uuid'


enum GRADIENT_ACTIONS_TYPES {
    SET_GRADIENTS = 'SET_GRADIENTS',
    ADD_NEW_GRADIENT = 'ADD_NEW_GRADIENT',
    REMOVE_GRADIENT = 'REMOVE_GRADIENT',
    EDIT_GRADIENT_COLOR = 'EDIT_GRADIENT_COLOR',
}

type AppActions =
    | ReturnType<typeof setGradients>
    | ReturnType<typeof addNewGradient>
    | ReturnType<typeof removeGradient>
    | ReturnType<typeof editGradientColor>


const initialState: Array<GradientType> = [
    {id: v4(), color1: '#7FFF00', color2: '#FF4500'},
    {id: v4(), color1: '#008080', color2: '#FFA07A'},
    {id: v4(), color1: '#004080', color2: '#FF507A'},

]

export const gradientReducer = (state = initialState, action: AppActions): Array<GradientType> => {
    switch (action.type) {
        case GRADIENT_ACTIONS_TYPES.SET_GRADIENTS:
            return [...state, ...action.payload]
        case GRADIENT_ACTIONS_TYPES.ADD_NEW_GRADIENT:
            return [{id: action.payload.id, color1: action.payload.color1, color2: action.payload.color2}, ...state]
        case GRADIENT_ACTIONS_TYPES.REMOVE_GRADIENT:
            return state.filter(gr => gr.id !== action.id)
        case GRADIENT_ACTIONS_TYPES.EDIT_GRADIENT_COLOR: {
            const gradient = state.find(gr => gr.id === action.payload.id)
            if (gradient) {
                gradient.color1 = action.payload.color1
                gradient.color2 = action.payload.color2
            }
            return [...state]
        }

        default:
            return state
    }
}

//ACTIONS
export const setGradients = (payload: Array<GradientType>) => ({
    type: GRADIENT_ACTIONS_TYPES.SET_GRADIENTS,
    payload
} as const)

export const addNewGradient = (payload: GradientType) => ({
    type: GRADIENT_ACTIONS_TYPES.ADD_NEW_GRADIENT,
    payload
} as const)

export const removeGradient = (id: string) => ({
    type: GRADIENT_ACTIONS_TYPES.REMOVE_GRADIENT,
    id
} as const)

export const editGradientColor = (payload: GradientType) => ({
    type: GRADIENT_ACTIONS_TYPES.EDIT_GRADIENT_COLOR,
    payload
} as const)

