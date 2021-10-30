import React, { useState, useEffect } from 'react'
import ScoreEntry from '../components/MatchCenter/ScoreEntry'
import ScoreCard from '../components/MatchCenter/ScoreCard'
import { useParams } from 'react-router-dom'


const MatchCenter = () => {
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
            {match.location}
            <ScoreCard />
            <ScoreEntry />
        </div>
    )
}

export default MatchCenter
