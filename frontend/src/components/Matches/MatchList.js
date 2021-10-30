import React, { useState, useEffect } from 'react'
import MatchItem from './MatchItem'

const MatchList = () => {
    const [matches, setMatches] = useState([])
    useEffect(() => {
        fetch('http://localhost:3001/matches')
            .then(res => res.json())
            .then(data => setMatches(data))
            .catch(e => console.log("Could not load match list" + e))

    }, [])
    return (
        <>
            <h1>Matches</h1>
            <div className="matches">
                {matches.map(match => <MatchItem match={match} key={match._id} />)}
            </div>
        </>
    )
}

export default MatchList
