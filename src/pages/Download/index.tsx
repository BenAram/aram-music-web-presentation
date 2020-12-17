import React from 'react'
import { Redirect } from 'react-router-dom'

import App from '../../components/App'
import Header from '../../components/Header'

import '../../styles/pages/Download.css'

function Download() {
    const userAgent: string = navigator.userAgent.toLowerCase()
    const isCellphone: boolean = (userAgent.includes('ios') || userAgent.includes('android'))

    return <App>
        {!isCellphone ? <Redirect to="/login" /> : null}
        <Header path="download" />
    </App>
}

export default Download