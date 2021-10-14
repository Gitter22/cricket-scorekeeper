import React, { useState } from 'react'
import NewMatchForm from '../components/MatchCenter/NewMatchForm'
import { Route } from 'react-router'

const Home = () => {
    const [showForm, setShowForm] = useState(false)

    const formToggler = () => {
        setShowForm(true)
    }
    return (
        <div className="home">
            {!showForm && <button onClick={formToggler}> Get Started</button>}
            {showForm && <Route exact path="/matches/new" component={NewMatchForm} />}
        </div>
    )
}

export default Home
