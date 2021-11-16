import React, { useState, useEffect } from 'react'
import MatchItem from './MatchItem'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';



const MatchList = () => {
    const [matches, setMatches] = useState([])
    useEffect(() => {
        fetch('http://localhost:3001/matches')
            .then(res => res.json())
            .then(data => setMatches(data))
            .catch(e => console.log("Could not load match list" + e))

    }, [])
    return (
        <>
            <h1>Matches</h1>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    {matches.map(match =>
                        <Grid item xs={4}>
                            <MatchItem match={match} key={match._id} />
                        </Grid>
                    )}
                </Grid>
            </Box>
        </>
    )
}

export default MatchList
