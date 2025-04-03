import React, { useState, useEffect } from 'react';

function Stopwatch() {
    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let interval;
        if (isRunning) {
            interval = setInterval(() => {
                setSeconds(prev => prev + 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [isRunning]);

    return (
        <div>
            <h2>Stopwatch</h2>
            <div>Seconds: {seconds}</div>
            <button onClick={() => setIsRunning(!isRunning)}>
                {isRunning ? 'Stop' : 'Start'}
            </button>
            <button style={{margin:"10px"}} onClick={() => {
                setSeconds(0);
                setIsRunning(false);
            }}>
                Reset
            </button>
        </div>
    );
}

export default Stopwatch;