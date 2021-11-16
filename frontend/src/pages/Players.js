import React from 'react'
import AddPlayerForm from '../components/Players/AddPlayerForm'
import PlayerList from '../components/Players/PlayerList'

const Players = () => {
    return (
        <div>
            <h1>Players</h1>

            <AddPlayerForm />
            <PlayerList />
        </div>
    )
}

export default Players
