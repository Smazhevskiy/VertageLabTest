import React, {ChangeEvent, useEffect, useState} from 'react'
import s from './EditGradient.module.css'
import {useDispatch} from 'react-redux'
import {Redirect, useParams} from 'react-router-dom'
import {useTypedSelector} from '../../hooks/useTypedSelector'
import {Input} from '../../components/input/Input'
import {Button} from '../../components/button/Button'
import {editGradientColor} from '../../store/gradient-reducer'
import {PATH} from '../../components/routes/pathRoutes'
import {setAppError, setAppInfo, setShowHeader} from '../../store/app-reducer'
import {validateHex} from '../../hooks/useValidation'


export const EditGradient = () => {
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(setShowHeader(false))
    }, [dispatch])


    const {id} = useParams<{ id: string }>()
    const allGradients = useTypedSelector(state => state.gradient)
    const gradient = allGradients.find(gr => gr.id === id)

    let bgColor1 = gradient ? gradient.color1 : 'red'
    let bgColor2 = gradient ? gradient.color2 : 'blue'

    let [color1, setColor1] = useState(bgColor1)
    let [color2, setColor2] = useState(bgColor2)
    const [done, setDone] = useState(false)

    const onChangeColor1Handler = (e: ChangeEvent<HTMLInputElement>) => {
        return setColor1(e.currentTarget.value)
    }

    const onChangeColor2Handler = (e: any) => {
        return setColor2(e.currentTarget.value)
    }

    const setColorsHandler = () => {
        if (validateHex(color1) && validateHex(color2)) {
            dispatch(setAppInfo('Изменения сохранены'))
            dispatch(editGradientColor({id, color1, color2}))
            setDone(true)
        } else {
            dispatch(setAppError('Введите корректный hex-code'))
        }
    }

    if (done) {
        return <Redirect to={PATH.HOME}/>
    }


    return (
        <div className={s.edit}>
            <div className={s.inputsBlock}>
                <Input
                    onChange={onChangeColor1Handler}
                    value={color1}
                    placeholder={'введите hex-code'}
                />
                <Input
                    onChange={onChangeColor2Handler}
                    value={color2}
                    placeholder={'введите hex-code'}
                />
            </div>
            <div className={s.btnBlock}>
                <Button onClick={setColorsHandler}>Применить изменения</Button>
            </div>
            <div style={{background: `linear-gradient(to right, ${color1},${color2}`}} className={s.bgContainer}>
                <div className={s.colorsText}>
                    <h4>{color1}</h4>
                    <h4>{color2}</h4>
                </div>
            </div>
        </div>
    )
}