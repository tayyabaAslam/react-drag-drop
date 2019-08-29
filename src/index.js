import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import {observe} from './buttons-state'
import MainPage from './components/main-page/main-page'

const root = document.getElementById('root')

observe(buttons =>
    ReactDOM.render(<MainPage leftButtons={buttons.leftButtons} rightButtons={buttons.rightButtons}  totalRows={8}/>, root),
)