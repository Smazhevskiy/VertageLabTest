import React from 'react'
import s from './Header.module.css'
import {AddNewColorModal} from '../AddNewColorModal/AddNewColorModal'


export const Header = () => {


    return (
        <div className={s.header}>
            <AddNewColorModal buttonDisable={false}/>
        </div>
    )
}