import React from 'react'
import s from './Gradient.module.css'
import {useDispatch} from 'react-redux'
import {removeGradient} from '../../store/gradient-reducer'
import { Link } from 'react-router-dom'

type GradientType = {
    id: string
    color1: string
    color2: string
}


export const Gradient = (props: GradientType) => {
    const dispatch = useDispatch()
    const {id, color1, color2} = props

    const removeGradientHandler = () => {
        dispatch(removeGradient(id))
    }

    return (
        <div className={s.gradient}>
            <div style={{background: `linear-gradient(to right, ${color1},${color2}`}} className={s.container}>
               <div className={s.colorsText}>
                    <h4>{color1}</h4>
                    <h4>{color2}</h4>
                   <span onClick={removeGradientHandler} className={s.del}>X</span>
                   <Link to={`edit/${id}`}>EDIT</Link>
                </div>
            </div>
        </div>
    )
}