import React from 'react'
import './Services.css'

const Card = (props) => {
    return (
        <div className='card'>
            <div className='icon-wrapper'>
               <img src={props.url} className='i' alt="service icon"/>
            </div>
            <h2 className='heading'>{props.heading}</h2>
            <p>{props.paragraph}</p>
        </div>
    )
}

const Services = () => {
  return (
    <div className='services-section'>
        <p className='subtitle'>WHAT I DO</p>
        <h1 className='title'>Services</h1>
        <div className='grid'>
            <Card 
                url="https://cdn-icons-png.flaticon.com/128/17109/17109357.png"
                heading="UI/UX Design" 
                paragraph="From wireframes to polished Figma prototypes. Intuitive, visually compelling interfaces that convert visitors into users and put usability first."
            />
            <Card 
                url="https://cdn-icons-png.flaticon.com/128/11743/11743979.png" 
                heading="Frontend Dev" 
                paragraph="Production-grade code with Tailwind CSS and Alpine.js. Pixel-perfect, fully responsive, SEO-friendly and blazing fast — no bloat, no heavy frameworks."
            />
            <Card 
                url="https://cdn-icons-png.flaticon.com/128/4298/4298077.png" 
                heading="Landing Pages" 
                paragraph="High-converting pages for SaaS, apps and personal brands. Designed to communicate value instantly and drive action from the first scroll."
            />
        </div>
    </div>
  )
}

export { Services }