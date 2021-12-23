import React from 'react'
import {Header} from '../header/Header'
import {Routes} from '../routes/Routes'
import s from './App.module.css'


function App() {
    return (
        <div className={s.app}>
          <div className={s.container}>
              <Header/>
              <Routes/>
          </div>
        </div>
    )
}

export default App
