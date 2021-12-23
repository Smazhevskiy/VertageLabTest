import React, {ChangeEvent, useState} from 'react'
import s from './AddNewGradient.module.css'
import {Input} from '../../components/input/Input'
import {Button} from '../../components/button/Button'
import {useDispatch} from 'react-redux'
import {addNewGradient} from '../../store/gradient-reducer'
import {v4} from 'uuid'

export const AddNewGradient = () => {
    const dispatch = useDispatch()
    let [color1, setColor1] = useState<string>('')
    let [color2, setColor2] = useState<string>('')


    const onChangeInput1Handler = (e: ChangeEvent<HTMLInputElement>) => setColor1(e.currentTarget.value)
    const onChangeInput2Handler = (e: ChangeEvent<HTMLInputElement>) => setColor2(e.currentTarget.value)
    const clickButtonHandler = () => {
        dispatch(addNewGradient({id: v4(), color1, color2}))
    }


    return (
        <div className={s.addNew}>
            <div className={s.inputsBlock}>
                <div className={s.inputBody}>
                    <Input
                        value={color1}
                        placeholder={'введите hex-code цвета'}
                        onChange={onChangeInput1Handler}
                    />
                </div>
                <div className={s.inputBody}>
                    <Input
                        value={color2}
                        placeholder={'введите hex-code цвета'}
                        onChange={onChangeInput2Handler}
                    />
                </div>
            </div>
            <Button onClick={clickButtonHandler}>Создать</Button>
        </div>
    )
}