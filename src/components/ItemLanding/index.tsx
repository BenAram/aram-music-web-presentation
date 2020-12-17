import React from 'react'

import '../../styles/components/ItemLanding.css'

interface ItemLandingProps {
    Image?: any
    Title: string
    Subtitle: string
    margin?: boolean
}

function ItemLanding(props: ItemLandingProps){
    return <section id="item-landing">
        {props.Image ? <img src={props.Image} alt="Imagem" /> : null}
        <h2>{props.Title}</h2>
        <p>{props.Subtitle}</p>
    </section>
}

export default ItemLanding