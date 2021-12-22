import React, {ChangeEvent, useState} from 'react'
import {Input} from '../input/Input'
import s from './Header.module.css'
import {Button} from '../button/Button'
import {useDispatch} from 'react-redux'
import {v4} from 'uuid'
import {addNewGradient} from '../../store/gradient-reducer'


export const Header = () => {
    const dispatch = useDispatch()
    let [color1, setColor1] = useState<string>('')
    let [color2, setColor2] = useState<string>('')


    const onChangeInput1Handler = (e: ChangeEvent<HTMLInputElement>) => setColor1(e.currentTarget.value)
    const onChangeInput2Handler = (e: ChangeEvent<HTMLInputElement>) => setColor2(e.currentTarget.value)
    const clickButtonHandler = () => {
        dispatch(addNewGradient({id: v4(), color1, color2}))
    }

    return (
        <div className={s.header}>
            <div className={s.inputsBlock}>
                <Input
                    value={color1}
                    placeholder={'введите hex-code цвета'}
                    onChange={onChangeInput1Handler}
                />
                <Input
                    value={color2}
                    placeholder={'введите hex-code цвета'}
                    onChange={onChangeInput2Handler}
                />
            </div>
            <Button onClick={clickButtonHandler}>Создать</Button>
        </div>
    )
}