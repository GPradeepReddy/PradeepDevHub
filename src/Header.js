import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='flex justify-between'>
            <div>PRADEEP</div>
            <ul className='flex gap-10 text-xl'>
                <li className=''>
                    <Link to='/'>About</Link>
                </li>
                <li>
                    <Link to='/experience'>Experience</Link>
                </li>
                <li>
                    <Link to='/projects'>Projects</Link>
                </li>
                <li>
                    <Link to='/resume'>Resume</Link>
                </li>
            </ul>
        </div>
    )
}

export default Header
