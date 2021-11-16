import React, { useEffect, useState } from 'react'
import { Link, Route, Switch, useLocation } from 'react-router-dom'
import MatchList from '../components/Matches/MatchList'

const Matches = () => {

    return (
        <div>
            <Link to="/matches/new">Create New Match</Link>
            <MatchList />


        </div >
    )
}

export default Matches
