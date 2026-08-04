import React from 'react'
import './Client.css'

const CardSocial = (props) => {
    return (
        <>
        <div className='social-card'>
            <div>
                <span>⭐⭐⭐⭐⭐</span>
            </div>
            <div className='social-text'>
                <p>{props.text}</p>
            </div>
            <div className='clients'>
              <div>
                <img className='client-profile' src={props.imgSrc}/>
              </div>
              <div>
                <p className='client-name'>{props.name}</p>
                <p className='client-role'>{props.role}</p>
              </div>
            </div>
        </div>
        </>
    );
}

const Client = () => {
  return (
    <div className='client-main-card'>
      <div className='client-card'>
        <p className='client-text'>SOCIAL PROOF</p>
        <h2 className='client-heading'>What clients say</h2>
        <div className='client-cards'>
          <CardSocial text={"Eliott delivered our redesign in record time and the quality blew us away. Our conversion rate jumped 28% in the first month. Absolutely recommend."} name="Sarah Müller" role="CPO, Novu" imgSrc="https://media.gettyimages.com/id/1739169508/photo/portrait-of-a-beautiful-red-hair-mid-adult-woman-studio-photo.jpg?s=612x612&w=0&k=20&c=tvkRVHzBO9gN3I-Bfv3p8IrCaaNuX6-67yJ7lz8v1uI="/>
          <CardSocial text={"Working with Eliott is a dream. He asks the right questions, moves fast, and the final result always exceeds what we imagined. Our best hire of 2024."} name="Thomas Renault" role="Founder, Finlo" imgSrc="https://media.gettyimages.com/id/2206642276/photo/studio-portrait-of-handsome-young-caucasian-male.jpg?s=612x612&w=0&k=20&c=EeKuvduFxGMuMcRIassAvp1LzXxFPL4gjsxGw2TB9dI="/>
          <CardSocial text={"We had a tight deadline and a vague brief. Eliott turned both into a polished site in under two weeks. Clean code, zero hand-holding needed."} name="Camille Dufresne" role="Creative Director, Orea" imgSrc="https://media.gettyimages.com/id/1191193169/photo/portrait-of-a-confident-young-woman-at-the-park.jpg?s=612x612&w=0&k=20&c=JicGg4DI9jZoGlau12IYumgc1HAkr7hwpAOmNFfGnCY="/>
        </div>
      </div> 
    </div>
  )
}

export {Client}
