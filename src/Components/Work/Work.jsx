import React from 'react'
import './Work.css'

const Work = () => {
  return (
    <div className='work-section'>
      <div><p className='portfolio-heading'>PORTFOLIO</p></div>
      <div className='selected'><h2 className='selected-work'>Selected work</h2>
          <button className='project-btn'>All projects &rarr;</button>
      </div>
      <div className='main-card-div'>
        <div className='card1'>
            <div className='image1'>
            <img src='/images/work1.svg' alt="work 1" />
          </div>
          <div className='card1-text'>
            <h2>Novu — SaaS Dashboard</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi quis, odit nam aperiam fugiat optio libero. Nisi, minus officiis eius odio tempora velit fugit at, id labore ut libero reiciendis!</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa ducimus repudiandae eligendi veritatis dicta quo fuga fugiat autem tempore perspiciatis illo doloremque est labore, molestiae eius, voluptatum ex aut quibusdam.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur neque ipsum eveniet eligendi dolores, dicta beatae? Velit iusto nemo praesentium architecto, ipsa excepturi facere quisquam, reprehenderit a cumque sapiente? Laudantium!</p>
            <button className='work-btn'>View case study &rarr;</button>
          </div>
        </div>
      <div>
      <div className='other-cards'>
        <div>
          <div>
            <img src='/images/work2.svg' alt="work 2" />
          </div>
          <div className='card2-text'>
            <h2>Finlo — Fintech App</h2>
            <p>Marketing site and onboarding flow for a personal finance app targeting young professionals. Tailwind CSS + Alpine.js.</p>
            <button className='work-btn'>View case study &rarr;</button>
          </div>
        </div>
        <div>
          <div>
            <img src='/images/work3.svg' alt="work 3" />
          </div>
          <div className='card2-text'>
            <h2>Orea — Creative Agency</h2>
            <p>Bold editorial site for a Paris-based branding studio. Scroll-driven animations and custom cursor to match their premium positioning.</p>
            <button className='work-btn'>View case study &rarr;</button>
          </div>
        </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Work
