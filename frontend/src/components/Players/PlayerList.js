import React, { useState, useEffect } from 'react'
import Player from './Player'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useHistory } from 'react-router-dom'

const PlayerList = () => {
    const [players, setPlayers] = useState([])
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)

    const history = useHistory()

    const goToFirstPage = () => {
        setPage(1)
    }
    const goToLastPage = () => {
        setPage(totalPages)
    }
    const goToNextPage = () => {
        setPage(page => page + 1)
    }
    const goToPrevPage = () => {
        setPage(page => page - 1)
    }

    const changePage = (event) => {
        const pageNumber = Number(event.target.textContent);
        setPage(pageNumber)

    }
    const getPaginationGroup = () => {
        let start = Math.floor((page - 1) / 5) * 5;
        return new Array(5).fill().map((_, idx) => start + idx + 1)
    }
    useEffect(() => {
        fetch(`http://localhost:3001/players?page=${page}`)
            .then(res => res.json())
            .then(data => {
                setPlayers(data.players)
                setTotalPages(data.totalPages)
                history.push(`players?page=${page}`)

            }
            )
            .catch(e => console.log("Could not load match list" + e))

    }, [page])

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
            <div className="pagination">
                {/* First button */}
                <button
                    onClick={goToFirstPage}
                    className={`prev ${page === 1 ? 'disabled' : ''}`}
                >
                    First
                </button>

                {/* previous button */}
                <button
                    onClick={goToPrevPage}
                    className={`prev ${page === 1 ? 'disabled' : ''}`}
                >
                    prev
                </button>

                {/* show page numbers */}
                {getPaginationGroup().map((item, index) => (
                    <button
                        key={index}
                        onClick={changePage}
                        className={`paginationItem ${page === item ? 'active' : null}`}
                    >
                        <span>{item}</span>
                    </button>
                ))}

                {/* next button */}
                <button
                    onClick={goToNextPage}
                    className={`next ${page === totalPages ? 'disabled' : ''}`}
                >
                    next
                </button>
                <button
                    onClick={goToLastPage}
                    className={`prev ${page === totalPages ? 'disabled' : ''}`}
                >
                    Last
                </button>
            </div>
        </>
    )
}

export default PlayerList
