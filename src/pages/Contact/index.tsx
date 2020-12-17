import React from 'react'
import { FaWhatsapp, FaDiscord } from 'react-icons/fa'

import App from '../../components/App'
import Header from '../../components/Header'

import '../../styles/pages/Contact.css'

function Contact() {
    return <App>
        <Header path="contact" />
        <div id="contact-container">
            <div id="contacts">
                <h2>Contato</h2>
                <hr/>
                <ul>
                    <li>
                        <FaWhatsapp />
                        <a rel="noopener noreferrer" href="https://wa.me/+5511947977895" target="_blank">+55 (11) 94797-7895</a>
                    </li>
                    <li>
                        <FaDiscord />
                        <a href="https://discord.gg/6PN5tAGSmn">Servidor do discord</a>
                    </li>
                </ul>
            </div>
        </div>
    </App>
}

export default Contact