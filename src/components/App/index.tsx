import React, { DetailedHTMLProps, HTMLAttributes } from 'react'

import '../../styles/components/App.css'

interface AppProps {
    children: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
}

function App(props: AppProps) {
    return <div id="app">
        { props.children }
    </div>
}

export default App