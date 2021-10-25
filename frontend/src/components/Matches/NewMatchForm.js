import React, { useRef, useState, useEffect } from 'react'

const NewMatchForm = () => {
    const [players, setPlayers] = useState([])
    const [availablePlayers, setAvailablePlayers] = useState([players])

    const team1Ref = useRef()
    const team2Ref = useRef()
    const locationRef = useRef()
    const [team1Players, setTeam1Players] = useState([])
    const [team2Players, setTeam2Players] = useState([])

    useEffect(() => {
        fetch('http://localhost:3001/players')
            .then(res => res.json())
            .then(data => setPlayers(data))
            .catch(e => { console.log("Could not load plyers" + e) })
    }, [])

    const team1PlayersHandler = (e) => {
        setTeam1Players(Array.from(e.target.selectedOptions, option => option.value))
    }

    useEffect(() => {
        setAvailablePlayers(players.filter(e => !team1Players.includes(e._id)))
    }, [team1Players, players])


    const team2PlayersHandler = (e) => {
        setTeam2Players(Array.from(e.target.selectedOptions, option => option.value))
    }
    const newMatchHandler = (e) => {
        e.preventDefault()
        const newMatchData = {
            team1: {
                name: team1Ref.current.value,
                players: team1Players
            },
            team2: {
                name: team2Ref.current.value,
                players: team2Players
            },
            location: locationRef.current.value
        }
        fetch('http://localhost:3001/matches', {
            method: 'POST',
            body: JSON.stringify(newMatchData),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(e => { console.log("Error Saving Match" + e) })
    }

    return (
        <div>
            <form onSubmit={newMatchHandler}>
                <h3>Batting team details</h3>
                <div>
                    <label> Enter Team 1 name
                        <div>
                            <input type="text" ref={team1Ref} />
                        </div>
                    </label>
                </div>
                <div>
                    <label>Select a player:
                        <div>
                            <select name="players" id="players" multiple onChange={team1PlayersHandler}>
                                {players.map((e, i) => {
                                    return <option value={e._id} key={i}>{e.name}</option>
                                })}
                            </select>
                        </div>
                    </label>
                </div>
                <h3>Bowling team details</h3>
                <div>
                    <label> Enter Team 2 name
                        <div>
                            <input type="text" ref={team2Ref} />
                        </div>
                    </label>
                </div>
                <div>
                    <label>Select a player:
                        <div>
                            <select name="players" id="players" multiple onChange={team2PlayersHandler}>
                                {availablePlayers.map((e, i) => {
                                    return <option value={e._id} key={i}>{e.name}</option>
                                }
                                )}
                            </select>
                        </div>
                    </label>
                </div>
                <div>
                    <label> Match Location
                        <div>
                            <input type="text" ref={locationRef} />
                        </div>
                    </label>
                </div>
                <div>
                    <button type="submit">Create Match</button>
                </div>
            </form >
        </div >
    )
}

export default NewMatchForm
