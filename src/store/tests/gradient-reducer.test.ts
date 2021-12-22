import {GradientType} from '../../pages/Home/Home'
import {v4} from 'uuid'
import {addNewGradient, editGradientColor, gradientReducer, removeGradient} from '../gradient-reducer'

const id1 = v4()
const id2 = v4()
const id3 = v4()

let startState: Array<GradientType> = [
    {id: id1, color1: '#7FFF00', color2: '#FF4500'},
    {id: id2, color1: '#008080', color2: '#FFA07A'},
    {id: id3, color1: '#004080', color2: '#FF507A'},

]


describe('Cards reducer', () => {
    it('Gradient color should be added', () => {
        const action = addNewGradient({id: '12345f', color1: '#fff', color2: 'ff0000'})

        const endState = gradientReducer(startState, action)

        expect(startState).not.toBe(endState)
        expect(endState.length).toBe(4)
        expect(endState[0].color1).toBe('#fff')
        expect(endState[3].color2).toBe('#FF507A')
    })
    it('Gradient color should be deleted', () => {
        const action = removeGradient(id2)

        const endState = gradientReducer(startState, action)

        expect(startState).not.toBe(endState)
        expect(endState.length).toBe(2)
        expect(endState[1].id).toBe(id3)
    })
    it('Gradient color was changed', () => {
        const action = editGradientColor({id:id3, color1:'#FFD700', color2:'#00FFFF'})

        const endState = gradientReducer(startState, action)

        expect(startState).not.toBe(endState)
        expect(endState.length).toBe(3)
        expect(endState[0].color1).toBe('#7FFF00')
        expect(endState[1].color2).toBe('#FFA07A')
        expect(endState[2].color1).toBe('#FFD700')
        expect(endState[2].color2).toBe('#00FFFF')
        expect(endState[2].id).toBe(id3)
    })
})