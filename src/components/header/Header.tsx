import React from 'react'
import s from './Header.module.css'
import {Button} from '../button/Button'


export const Header = () => {


    return (
        <div className={s.header}>
            <Button >add new color</Button>
        </div>
    )
}