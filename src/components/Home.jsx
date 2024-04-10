import { useState } from 'react'
import logo from '/src/assets/coffee-clear1.png'

export function Home() {
    const [now, setNow] = useState(new Date())

    setInterval(() => setNow(new Date()), 1000);


    return (
        <>
        <img src={logo} alt="result" />
        <h1>HOME</h1>
        <span>Time now: {now.toLocaleTimeString()}</span>
        </>
    )
}