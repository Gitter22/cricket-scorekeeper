import React, { useRef } from 'react'


const NewMatchForm = () => {
    const team1 = useRef()
    const team2 = useRef()
    return (
        <div>
            <form>
                <h3>Batting team details</h3>
                <div>
                    <label> Enter Team 1 name<input type="text" ref={team1} /></label>
                </div>
                <div>
                    <label>Select a player:
                        <select name="players" id="players" multiple>
                            <option value="Rashid">Rashid</option>
                            <option value="Abbas">Abbas</option>
                            <option value="Sohel">Sohel</option>
                            <option value="Amir">Amir</option>
                        </select>
                    </label>
                </div>
                <h3>Bowling team details</h3>
                <div>
                    <label> Enter Team 2 name<input type="text" ref={team2} /></label>
                </div>
                <div>
                    <label>Select a player:
                        <select name="players" id="players" multiple>
                            <option value="Rashid">Rashid</option>
                            <option value="Abbas">Abbas</option>
                            <option value="Sohel">Sohel</option>
                            <option value="Amir">Amir</option>
                        </select>
                    </label>
                </div>
            </form >
        </div >
    )
}

export default NewMatchForm
