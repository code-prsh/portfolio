import React from 'react'
import './about.css'
import ME from '../../assets/p2.jpeg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container aboutcontainer'>
        <div className='aboutme'>
          <div className='aboutmeimage'>
            <img src={ME} alt="About Image" />
          </div>


        </div>

        <div className='aboutcontent'>
          <div className='aboutcards'>
            <article className='aboutcard'>
              <FaAward className='abouticon' />
              <h5>Experience</h5>
              <small> 1+ year working</small>
            </article>

            <article className='aboutcard'>
              <FiUsers className='abouticon' />
              <h5>Clients</h5>
              <small>200+ clients worldwide</small>
            </article>

            <article className='aboutcard'>
              <VscFolderLibrary className='abouticon' />
              <h5>Projects</h5>
              <small> 5+ projects completed</small>
            </article>

          </div>
          <p>
            lacus vestibulum sed arcu non odio euismod lacinia at quis risus 
            sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in
             dictum non consectetur

          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About