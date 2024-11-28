import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './About'
import Projects from './Projects'
import Experience from './Experience'
import Resume from './Resume'

const Main = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<About />} />
                <Route path='/projects' element={<Projects />} />
                <Route path='/experience' element={<Experience />} />
                <Route path='/resume' element={<Resume />} />
            </Routes>
        </>
    )
}

export default Main
