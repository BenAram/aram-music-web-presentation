import React from 'react'
import { Link } from 'react-router-dom'

import '../../styles/components/Header.css'

import Logo from '../../images/logo.png'

import client from '../../services/client'
import url from '../../services/url'

interface HeaderProps {
    path: string
}

function Header(props: HeaderProps) {
    const userAgent: string = navigator.userAgent.toLowerCase()
    const isCellphone: boolean = (userAgent.includes('ios') || userAgent.includes('android'))

    return <header className="main-header">
        <div className="logo">
            <img src={Logo} alt="Logo" />
            <h1>Aram Music</h1>
        </div>
        <div className="buttons">
            {props.path !== 'about' ? <Link to="/about">
                Sobre
            </Link> : null}
            {props.path !== 'landing' ? <Link to="/">
                Início
            </Link> : null}
            {props.path !== 'contact' ? <Link to="/contact">
                Contato
            </Link> : null}
            <span>|</span>
            {props.path !== 'login' && props.path !== 'download' ? <a href={isCellphone ? `${url}/download` : client}>
                {isCellphone ? 'Baixar' : 'Logar'}
            </a> : null}
        </div>
    </header>
}

export default Header