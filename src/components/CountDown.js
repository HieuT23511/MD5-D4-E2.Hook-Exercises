import {useEffect, useState} from "react";

export default function CountDown({props}) {
    let [timer, setTimer] = useState(10);
    useEffect(() => {
        let countDown = setInterval(() => {
            if (timer > 0) {
                setTimer(timer - 1)
            } else {
                alert("Time is up!!")
            }
            clearInterval(countDown)
        }, 1000)
    }, [timer])
    return (
        <>
            <h2> {props}</h2>
            <div style={{textAlign: "center"}}>
                <h4>Count down from {timer}</h4>
            </div>
        </>
    )
}