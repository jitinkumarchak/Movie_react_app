import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
    document.title = 'About'
    const navigate = useNavigate();
    const [page, setpage] = useState(1);



    
  return (
    <div to={'/About'} >About</div>
  )
}

export default About