import React, {ChangeEvent, FC, useState} from 'react'
import {useDispatch} from 'react-redux'
import {useModal} from '../../hooks/useModal'
import {Button} from '../button/Button'
import {Modal} from '../modal/Modal'
import {Input} from '../input/Input'
import {addNewGradient} from '../../store/gradient-reducer'
import {v4} from 'uuid'
import s from './AddNewColorModal.module.css'

type AddColorModalProps = {
    buttonDisable: boolean
}



export const AddNewColorModal: FC<AddColorModalProps> = ({buttonDisable}) => {
    const dispatch = useDispatch()
    let [color1, setColor1] = useState<string>('')
    let [color2, setColor2] = useState<string>('')

    const {isOpen, onToggle} = useModal(false)


    const onChangeInput1Handler = (e: ChangeEvent<HTMLInputElement>) => setColor1(e.currentTarget.value)
    const onChangeInput2Handler = (e: ChangeEvent<HTMLInputElement>) => setColor2(e.currentTarget.value)

    const clickButtonHandler = () => {
        dispatch(addNewGradient({id: v4(), color1, color2}))
        onToggle()
    }


    return (
        <>
            <Button  onClick={()=> onToggle()} disabled={buttonDisable}>Add new
                color</Button>

            <Modal open={isOpen} onClick={() => onToggle()}>
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
                    <Button style={{background: '#3eb451'}} onClick={clickButtonHandler}>Add color</Button>
                </div>
            </Modal>
        </>
    )
}
