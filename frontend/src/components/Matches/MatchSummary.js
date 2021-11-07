import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

const MatchSummary = () => {
    const [match, setMatch] = useState({})
    const params = useParams()
    const { matchId } = params
    useEffect(() => {
        fetch(`http://localhost:3001/matches/${matchId}`)
            .then(res => res.json())
            .then(data => setMatch(data))
            .catch(e => console.log("Could not load selected match" + e))

    }, [])
    return (
        <div>
            <h1> Match Summary Page</h1>
            <h1>{match.status}</h1>
            <Link to={`/matchcenter/${matchId}`}> Go To Match Center</Link>
        </div >
    )
}

export default MatchSummary
