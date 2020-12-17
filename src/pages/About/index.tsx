import React from 'react'

import App from '../../components/App'
import Header from '../../components/Header'
import ItemLanding from '../../components/ItemLanding'

import '../../styles/pages/About.css'

function About() {
    return <App>
        <Header path="about" />
        <div id="about-container">
            <ItemLanding Title="O que é esse aplicativo?" Subtitle="Aram Music é um app de músicas online disponível na web e para android, nele você é capaz de escutar músicas de qualquer estilo músical, criar uma conta, bater papo entre amigos e dar sua opinião sobre cada música." />
        </div>
    </App>
}

export default About