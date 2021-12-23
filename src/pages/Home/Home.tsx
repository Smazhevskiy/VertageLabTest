import React from 'react'
import s from './Home.module.css'
import {Gradient} from '../../components/gradient/Gradient'
import {useTypedSelector} from '../../hooks/useTypedSelector'

export type GradientType = {
    id: string,
    color1: string,
    color2: string

}



export const Home = () => {
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
