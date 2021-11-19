import React, { useState, useEffect } from 'react'
import MatchItem from './MatchItem'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Pagination from '../utils/Pagination'



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

            <Grid container spacing={2}>

                {matches.length > 0 ? (
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid item>
                            <Pagination
                                data={matches}
                                RenderComponent={MatchItem}
                                title="Matches"
                                pageLimit={5}
                                dataLimit={5}
                            />
                        </Grid>
                    </Box>

                ) : (
                    <h1>No Matches to display</h1>
                )}

            </Grid>

        </>
    )
}

export default MatchList

// {matches.map(match =>
//     <Grid item xs={4}>
//         <MatchItem match={match} key={match._id} />
//     </Grid>