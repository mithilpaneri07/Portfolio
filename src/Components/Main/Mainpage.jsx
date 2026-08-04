import React from 'react'
import './Mainpage.css'

const Mainpage = () => {
  return (
    <div className='main-page'>
        <div className='container1'>
            <p style={{ color: "#006400", fontWeight: "600" }}>AVAILABLE FOR WORK</p> 
            <h1 style={{ fontSize: "60px", margin: "10px 0" }}>Hi, I'm <span style={{ color: "#2b72ff" }}>MP</span></h1>
            <p className='para'>Freelance UI/UX Designer & Frontend Developer. I design and build digital products that people love to use — fast, clean, and accessible.</p>
            <div className='hello'>
                <button className='view'>View my work &darr;</button>
                <button className='btn-touch'>Get in touch</button>
            </div>
            
            <div className='stats'>
                <div className='stat-box'><h3>34+</h3><p>Projects done</p></div>
                <div className='stat-box'><h3>21+</h3><p>Happy clients</p></div>
                <div className='stat-box'><h3>5y</h3><p>Experience</p></div>
            </div>
        </div>
        <div className='container2'>
            <img src='https://imgs.search.brave.com/MlsK47skeogIzTCvDCxWzl6VdswDNJ--GZyLyPXPpjo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQ1/NTk0NjYxMi9waG90/by9jb21wdXRlci1o/YWNrZXIuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPWtndG5T/blZDcWMtYzVXRzNq/UFh5a0g0UkxUa0lx/bUZKS1NDX0RqWE51/TGc9' className='image'/>
        </div>
    </div>
  )
}

export default Mainpage;