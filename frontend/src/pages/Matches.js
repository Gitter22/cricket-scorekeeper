import React, { useEffect, useState } from 'react'
import NewMatchForm from '../components/Matches/NewMatchForm'
import { Link, } from 'react-router-dom'
import MatchList from '../components/Matches/MatchList'

const Matches = () => {

    return (
        <div>
            <h1>Matches</h1>
            <div>
                <MatchList />
            </div>
            <Link to="/matches/new">Create New Match</Link>
            <NewMatchForm />
        </div >
    )
}

export default Matches
