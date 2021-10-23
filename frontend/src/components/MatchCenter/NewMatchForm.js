import React, { useRef, useState } from 'react'


const NewMatchForm = () => {
    const team1 = useRef()
    const team2 = useRef()
    const [team1Players, setTeam1Players] = useState([])
    const [team2Players, setTeam2Players] = useState([])

    const team1PlayersHandler = (e) => {
        setTeam1Players(Array.from(e.target.selectedOptions, option => option.value))
    }

    const team2PlayersHandler = (e) => {
        setTeam2Players(Array.from(e.target.selectedOptions, option => option.value))

    }

    const newMatchHandler = (e) => {
        e.preventDefault()
        console.log(team1Players, team2Players)
        console.log(team1.current.value, team2.current.value)
    }

    return (
        <div>
            <form onSubmit={newMatchHandler}>
                <h3>Batting team details</h3>
                <div>
                    <label> Enter Team 1 name
                        <div>
                            <input type="text" ref={team1} />
                        </div>
                    </label>
                </div>
                <div>
                    <label>Select a player:
                        <div>
                            <select name="players" id="players" multiple onChange={team1PlayersHandler}>
                                <option value="Rashid">Rashid</option>
                                <option value="Abbas">Abbas</option>
                                <option value="Sohel">Sohel</option>
                                <option value="Amir">Amir</option>
                            </select>
                        </div>
                    </label>
                </div>
                <h3>Bowling team details</h3>
                <div>
                    <label> Enter Team 2 name
                        <div>
                            <input type="text" ref={team2} />
                        </div>
                    </label>
                </div>
                <div>
                    <label>Select a player:
                        <div>
                            <select name="players" id="players" multiple onChange={team2PlayersHandler}>
                                <option value="Rashid">Rashid</option>
                                <option value="Abbas">Abbas</option>
                                <option value="Sohel">Sohel</option>
                                <option value="Amir">Amir</option>
                            </select>
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
