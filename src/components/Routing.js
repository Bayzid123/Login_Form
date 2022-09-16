import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Account from './Account'

const Routing = () => {
    return (
        <Router>
            <Routes>
                <Route path = "/" element = {<Account/>} />
            </Routes>
        </Router>
    )
}

export default Routing
