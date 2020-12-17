import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import About from './pages/About'
import Contact from './pages/Contact'
import Download from './pages/Download'
import Landing from './pages/Landing'

function Routes(){
    return <BrowserRouter>
        <Route exact path="/" component={Landing} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/download" component={Download} />
    </BrowserRouter>
}

export default Routes