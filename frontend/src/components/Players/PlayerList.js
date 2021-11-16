import React, { useState, useEffect } from 'react'
import Player from './Player'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';



const PlayerList = () => {
    const [players, setPlayers] = useState([])
    useEffect(() => {
        fetch('http://localhost:3001/players')
            .then(res => res.json())
            .then(data => setPlayers(data))
            .catch(e => console.log("Could not load match list" + e))

    }, [])
    return (
        <>
            <h1>Players</h1>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    {players.map(player =>
                        <Grid item xs={4}>
                            <Player player={player} key={player._id} />
                        </Grid>
                    )}
                </Grid>
            </Box>
        </>
    )
}

export default PlayerList
