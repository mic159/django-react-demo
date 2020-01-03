import React from 'react'
import ReactDOM from 'react-dom'
import Component from './Component'


ReactDOM.render(
    <Component {...window.bootstrapData} />,
    document.getElementById('content')
)
