import React, { useState, useEffect } from 'react'

const ScoreEntry = () => {
    const [ball, setBall] = useState("Legal")
    const [bat, setBat] = useState("No Runs")
    const [dismissal, setDismissal] = useState("none")
    const [isLegalBall, setIsLegalBall] = useState(true)
    const [runsInBall, setRunsInBall] = useState(0)

    const [batsman1, setBatsman1] = useState({
        name: "Aadil",
        balls: 0,
        runs: 0,
        fours: 0,
        sixes: 0,
        onStrike: true
    })
    const [batsman2, setBatsman2] = useState({
        name: "Asim",
        balls: 0,
        runs: 0,
        fours: 0,
        sixes: 0,
        onStrike: false
    })

    const [matchBall, setMatchBall] = useState({
        ballNumber: 0,
        ballType: "Legal",
        runType: "No Runs",
        dismissalType: "none",
        onStrikeBatsman: batsman1.name,
        nonStrikeBatsman: batsman2.name,
        bowler: null,

    })

    const ballHandler = (e) => {
        setBall(e.target.value)
    }
    const batHandler = (e) => {
        setBat(e.target.value)

    }
    const dismissalHandler = (e) => {
        setDismissal(e.target.value)
    }

    useEffect(() => {
        if (ball === "Legal") {
            if (bat == "Single") {
                setRunsInBall(1)
            } else if (bat === "Double") {
                setRunsInBall(2)
            } else if (bat === "Three Runs") {
                setRunsInBall(3)
            } else if (bat === "Boundary") {
                setRunsInBall(4)
            } else if (bat === "Five Runs") {
                setRunsInBall(5)
            } else if (bat === "Six") {
                setRunsInBall(6)
            } else {
                setRunsInBall(0)
            }
        }

    }, [ball, bat])
    console.log(runsInBall)
    const matchBallHandler = (e) => {
        e.preventDefault()
        setMatchBall((prevState) => {
            return {
                ...prevState,
                ballNumber: prevState.ballNumber + 1,
                ballType: ball,
                runType: bat,
                dismissalType: dismissal,
                onStrikeBatsman: (bat === "Single" || "Three Runs" || "Five Runs") ? batsman1.name : batsman2.name,
                nonStrikeBatsman: (bat === "No Runs" || "Double" || "Boundary" || "Six") ? batsman2.name : batsman1.name
            }
        }
        )

    }
    return (
        <div>
            <h3>Record ball</h3>
            <form onSubmit={matchBallHandler}>
                <p> Delivery </p>
                <ul>
                    <li><label>

                        <input type="radio" name="ball" value="Legal" checked={ball === "Legal"} onChange={ballHandler} />
                        Legal</label>
                    </li>
                    <li><label><input type="radio" name="ball" value="No Ball" checked={ball === "No Ball"} onChange={ballHandler} />
                        No Ball</label>
                    </li>
                    <li><label><input type="radio" name="ball" value="Wide" checked={ball === "Wide"} onChange={ballHandler} />
                        Wide</label>
                    </li>
                </ul>
                <p> Runs </p>
                <ul>
                    <li><label><input type="radio" name="bat" value="No Runs" checked={bat === "No Runs"} onChange={batHandler} />
                        No Runs</label>
                    </li>
                    <li><label><input type="radio" name="bat" value="Single" checked={bat === "Single"} onChange={batHandler} />
                        Single</label>
                    </li>
                    <li><label><input type="radio" name="bat" value="Double" checked={bat === "Double"} onChange={batHandler} />
                        Double</label>
                    </li>
                    <li><label><input type="radio" name="bat" value="Three Runs" checked={bat === "Three Runs"} onChange={batHandler} />
                        Three Runs</label>
                    </li>
                    <li><label><input type="radio" name="bat" value="Boundary" checked={bat === "Boundary"} onChange={batHandler} />
                        Boundary</label>
                    </li>
                    <li><label><input type="radio" name="bat" value="Five Runs" checked={bat === "Five Runs"} onChange={batHandler} />
                        Five Runs</label>
                    </li>
                    <li><label><input type="radio" name="bat" value="Six" checked={bat === "Six"} onChange={batHandler} />
                        Six</label>
                    </li>
                </ul>
                <p> Dismissal </p>
                <ul>
                    <li><label><input type="radio" name="dismissal" value="Bowled" checked={dismissal === "Bowled"} onChange={dismissalHandler} />
                        Bowled
                    </label>
                    </li>
                    <li><label><input type="radio" name="dismissal" value="Caught" checked={dismissal === "Caught"} onChange={dismissalHandler} />
                        Caught
                    </label>
                    </li>
                    <li><label><input type="radio" name="dismissal" value="Run Out" checked={dismissal === "Run Out"} onChange={dismissalHandler} />
                        Run Out</label>
                    </li>
                    <li><label><input type="radio" name="dismissal" value="LBW" checked={dismissal === "LBW"} onChange={dismissalHandler} />
                        LBW</label>
                    </li>
                    <li><label><input type="radio" name="dismissal" value="Hit Wicket" checked={dismissal === "Hit Wicket"} onChange={dismissalHandler} />
                        Hit Wicket</label>
                    </li>
                </ul>
                <div>
                    <span>Ball:{ball}</span>
                    <span>Runs:{bat}</span>
                    <span>Wicket:{dismissal}</span>
                </div>
                <button type="submit">Save and Next Ball</button>
            </form>
        </div>
    )
}

export default ScoreEntry
