import React from 'react'
import {Input} from '../input/Input'
import s from './Header.module.css'


export const Header = () => {
    return (
        <div className={s.header}>
            HEADER
            <Input/>
            <Input/>
        </div>
    )
}