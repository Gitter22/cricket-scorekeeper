import React, { useState } from 'react'

const ScoreEntry = (props) => {
    const [ball, setBall] = useState("Legal")
    const [bye, setBye] = useState("None")
    const [bat, setBat] = useState("No Runs")
    const [dismissal, setDismissal] = useState("None")

    const ballHandler = (e) => {
        setBall(e.target.value)
    }
    const byeHandler = (e) => {
        setBye(e.target.value)
    }
    const batHandler = (e) => {
        setBat(e.target.value)

    }
    const dismissalHandler = (e) => {
        setDismissal(e.target.value)
    }

    const ballRecordHandler = (e) => {
        e.preventDefault()
        let ballRecord = {
            ballType: ball,
            byeType: bye,
            runType: bat,
            dismissalType: dismissal,
        }
        props.matchBallHandler(ballRecord)
    }
    return (
        <div>
            <h3>Record ball</h3>
            <form onSubmit={ballRecordHandler}>
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
                <p> Bye </p>
                <ul>
                    <li><label>

                        <input type="radio" name="bye" value="None" checked={bye === "None"} onChange={byeHandler} />
                        None</label>
                    </li>
                    <li><label><input type="radio" name="bye" value="Bye" checked={bye === "Bye"} onChange={byeHandler} />
                        Bye or Leg bye</label>
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
                    <li><label><input type="radio" name="dismissal" value="None" checked={dismissal === "None"} onChange={dismissalHandler} />
                        None
                    </label>
                    </li>
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
                    <span>Bye:{bye}</span>
                    <span>Runs:{bat}</span>
                    <span>Wicket:{dismissal}</span>
                </div>
                {/* {props.matchstatus === "not started" && <button onClick={selectPlayersHandler}>Select Players</button>} */}
                <button type="submit">Save and Next Ball</button>
            </form>
        </div>
    )
}

export default ScoreEntry
