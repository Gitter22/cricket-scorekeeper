import React from 'react'
import { useHistory } from 'react-router-dom'

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MatchItem({ match }) {
    const history = useHistory()
    const matchItemHandler = (id) => {
        history.push(`/matches/${id}`)
    }
    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <div >
                    <span onClick={() => matchItemHandler(match._id)} style={{ border: "1px solid", width: "100px", height: "100px" }}>
                        {match.team1.name} vs {match.team2.name} at {match.location}
                    </span>
                </div >
            </CardContent>
            <CardActions>
                <Button size="small">Match Center</Button>
            </CardActions>
        </Card>
    );
}