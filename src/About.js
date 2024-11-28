import React from 'react'
import profile from '../src/profile.png';

const About = () => {
    return (
        <div className='grid grid-cols-2 w-full h-full align-middle'>
            <div className='flex'>
                <img src={profile} alt='profile-image' className='w-auto h-auto   rounded-full'/>
            </div>
            <p>
                I am an experienced Front-End / UI Developer with over 6 years of expertise in crafting interactive web and mobile applications. Collaborating closely with designers, I translate complex wireframes into responsive, user-friendly interfaces. Proficient in React.js and various web technologies, I am committed to enhancing customer satisfaction through effective solutions. My passion for continuous learning drives my ability to deliver high-quality results in challenging environments.
            </p>
        </div>
    )
}

export default About
