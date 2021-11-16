import React from 'react'
import { useHistory } from 'react-router-dom'


import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

export default function Player({ player }) {

    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <span>{player.name}</span>
            </CardContent>
            <CardActions>
                <Button size="small">Player detail</Button>
            </CardActions>
        </Card>
    );
}