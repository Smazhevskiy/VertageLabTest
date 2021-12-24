import React from 'react'
import {Header} from '../header/Header'
import {Routes} from '../routes/Routes'
import s from './App.module.css'
import {useTypedSelector} from '../../hooks/useTypedSelector'
import {Alerts} from '../Alerts/Alerts'


function App() {
    const {showHeader} = useTypedSelector(state => state.app)
    return (
        <div className={s.app}>
            <div className={s.container}>
                {showHeader && <Header/>}
                <Routes/>
                <Alerts/>
            </div>
        </div>
    )
}

export default App
