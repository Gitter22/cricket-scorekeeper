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


    const matchBallHandler = (ballRecord) => {
        let matchball = {
            matchId: match._id,
            ...ballRecord,
            didPlayersCross: true,
        }
        fetch(`http://localhost:3001/matchballs/`, {
            method: 'POST',
            body: JSON.stringify(matchball),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(res => res.json())
            .then((data) => console.log(data))
            .catch(e => console.log("Could not load selected match" + e))
    }

    return (
        <div>
            {match.status}
            <ScoreCard scoreCard={match.scoreCard} />
            <ScoreEntry matchBallHandler={matchBallHandler} matchstatus={match.status} />
        </div>
    )
}

export default MatchCenter
