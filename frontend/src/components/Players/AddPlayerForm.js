import React, { useRef } from 'react'

const AddPlayerForm = () => {
    const playerRef = useRef()

    const addPlayerHandler = (e) => {
        e.preventDefault();
        console.log(playerRef.current.value)
        fetch('http://localhost:3001/players', {
            method: 'POST',
            body: JSON.stringify({
                name: playerRef.current.value
            }),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(e => { console.log("Error Saving Player" + e) })
    }
    return (
        <form onSubmit={addPlayerHandler}>
            <label>Name:<div><input type="text" ref={playerRef} /></div></label>
            <div><button type="submit">Add Player</button></div>
        </form>
    )
}

export default AddPlayerForm
