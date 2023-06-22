import React from 'react'
import './experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className='container experiencecontainer'>
        <div className='experiencefrontend'>
          <h3>Frontend Development</h3>
          <div className='experiencecontent'>
            <article className='expereiencedetails'>
              <BsFillPatchCheckFill />
              
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
              
              
            </article>
            <article className='expereiencedetails'>
              <BsFillPatchCheckFill />
              
              <h4>CSS</h4>
              <small className='text-light'>Experienced</small>
            </article>
            <article className='expereiencedetails'>
              <BsFillPatchCheckFill />
              <h4>JavaScript</h4>
              <small className='text-light'>Experienced</small>
            </article>
            <article className='expereiencedetails'>
              <BsFillPatchCheckFill />
              <h4>REACTJs</h4>
              <small className='text-light'>Experienced</small>
            </article>
            <article className='expereiencedetails'>
              <BsFillPatchCheckFill />
              <h4>JQuery</h4>
              <small className='text-light'>Experienced</small>
            </article>
            <article className='expereiencedetails'>
              <BsFillPatchCheckFill />
              <h4>Bootstrap</h4>
              <small className='text-light'>Experienced</small>
            </article>
          </div>
        </div>


        <div className='experiencebackend'>
        <h3>Backend Development</h3>
          <div className='experiencecontent'>
            <article className='expereiencedetails'>
              <BsFillPatchCheckFill />
              <h4>NodeJs</h4>
              <small className='text-light'>Experienced</small>
            </article>
            <article className='expereiencedetails'>
              <BsFillPatchCheckFill />
              <h4>ExpressJs</h4>
              <small className='text-light'>Experienced</small>
            </article>
            <article className='expereiencedetails'>
              <BsFillPatchCheckFill />
              <h4>MongoDB</h4>
              <small className='text-light'>Experienced</small>
            </article>
            <article className='expereiencedetails'>
              <BsFillPatchCheckFill />
              <h4>MySQL</h4>
              <small className='text-light'>Experienced</small>
            </article>
            <article className='expereiencedetails'>
              <BsFillPatchCheckFill />
              <h4>Mongoose</h4>
              <small className='text-light'>Experienced</small>
            </article>
            <article className='expereiencedetails'>
              <BsFillPatchCheckFill />
              <h4>NPM</h4>
              <small className='text-light'>Experienced</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience