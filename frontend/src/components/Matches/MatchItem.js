import React from 'react'
import { useHistory } from 'react-router-dom'

const MatchItem = ({ match }) => {
    const history = useHistory()
    const matchItemHandler = (id) => {
        history.push(`/matches/${id}`)
    }


    return (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span onClick={() => matchItemHandler(match._id)} style={{ border: "1px solid", width: "100px", height: "100px" }}>
                {match.team1.name} vs {match.team2.name} at {match.location}
            </span>
        </div >

    )
}

export default MatchItem
