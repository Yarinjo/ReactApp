import { useState } from 'react'
import './Button.css'

export function Button( { children, onClick }) {
    const [content, setContent] = useState('Click me')
    function handleClick() {
        console.log('WORKED')
    }

    return <button className='button' onClick={handleClick}>{ children }</button>
}