import React from 'react'

import Chat from '../../images/chat.svg'
import Comment from '../../images/comment.svg'
import Music from '../../images/music.svg'
import Player from '../../images/player.svg'
import Playlist from '../../images/playlist.svg'
import WalkInTheCity from '../../images/walk-in-the-city.svg'

import '../../styles/pages/Landing.css'

import App from '../../components/App'
import Header from '../../components/Header'
import ItemLanding from '../../components/ItemLanding'

function Landing(){
    return (
        <App>
            <Header path="landing" />
            <main>
                <ItemLanding Image={Music} Title="O melhor aplicativo de músicas da atualidade" Subtitle="Há todo tipo de música disponível e você também pode criar elas!!" />
                <ItemLanding Image={Player} Title="Player avançado" Subtitle="Nosso player de músicas é o mais moderno que existe, podendo trocar de música com atalhos." />
                <ItemLanding Image={Playlist} Title="Monte playlist" Subtitle="Você pode montar playlists personalizadas ou selecionar alguma de seu gosto." />
                <ItemLanding Image={WalkInTheCity} Title="Ouça música em qualquer lugar" Subtitle="Com nosso serviço você pode baixar músicas sem precisar pagar e ouvir elas em seu celular." />
                <ItemLanding Image={Comment} Title="Faça comentários" Subtitle="Compartilhe sobre sua opinião sobre cada música e ajude-a a se tornar famosa." />
                <ItemLanding Image={Chat} Title="Bate-papo" Subtitle="Adicione amigos, ouça música com eles ou converse em chat global/particular." />
            </main>
        </App>
    )
}

export default Landing