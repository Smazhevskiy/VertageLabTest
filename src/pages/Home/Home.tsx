import React, {useEffect} from 'react'
import s from './Home.module.css'
import {v4} from 'uuid'
import {Gradient} from '../../components/gradient/Gradient'
import {useTypedSelector} from '../../hooks/useTypedSelector'
import {useDispatch} from 'react-redux'
import {setGradients} from '../../store/gradient-reducer'

export type GradientType = {
    id: string,
    color1: string,
    color2: string

}

export const Home = () => {
    let startArr = [
        {id: v4(), color1: '#7FFF00', color2: '#FF4500'},
        {id: v4(), color1: '#008080', color2: '#FFA07A'},
        {id: v4(), color1: '#004080', color2: '#FF507A'},

    ]

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setGradients(startArr))
    }, [dispatch])

    const gradients = useTypedSelector(state => state.gradient)


    return (
        <div className={s.home}>
            {gradients.map(g => {
                return <Gradient
                    key={g.id}
                    id={g.id}
                    color1={g.color1}
                    color2={g.color2}
                />
            })}
        </div>
    )
}
