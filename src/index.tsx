import './index.css'
import { store } from './store'
import ReactDOM from 'react-dom'
import React from 'react'
import { App } from './App'
import { Provider } from 'react-redux'

ReactDOM.render(
    <React.StrictMode>
        <Provider store={ store }>
            <App state={ store.getState() }/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root'),
)