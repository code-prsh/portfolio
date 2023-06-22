import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className='container servicescontainer'>
        <article className='service'>
          <div className='servicehead'>
            <h3>UI/UX Design</h3>
          </div>

          <ul className='servicelist'>
            <li>
              <BiCheck className='servicelist-icon' />
              <p>turpis in eu mi bibendum neque egestas congue quisque egestas</p>
            </li>
            <li>
              <BiCheck className='servicelist-icon' />
              <p>turpis in eu mi bibendum neque egestas congue quisque egestas</p>
            </li>
            <li>
              <BiCheck className='servicelist-icon' />
              <p>turpis in eu mi bibendum neque egestas congue quisque egestas</p>
            </li>
            <li>
              <BiCheck className='servicelist-icon' />
              <p>turpis in eu mi bibendum neque egestas congue quisque egestas</p>
            </li>
            <li>
              <BiCheck className='servicelist-icon' />
              <p>turpis in eu mi bibendum neque egestas congue quisque egestas</p>
            </li>
            <li>
              <BiCheck className='servicelist-icon' />
              <p>turpis in eu mi bibendum neque egestas congue quisque egestas</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className='servicehead'>
            <h3>Web Development</h3>
          </div>

          <ul className='servicelist'>
            <li>
              <BiCheck className='servicelist-icon' />
              <p>turpis in eu mi bibendum neque egestas congue quisque egestas</p>
            </li>
            <li>
              <BiCheck className='servicelist-icon' />
              <p>turpis in eu mi bibendum neque egestas congue quisque egestas</p>
            </li>
            <li>
              <BiCheck className='servicelist-icon' />
              <p>turpis in eu mi bibendum neque egestas congue quisque egestas</p>
            </li>
            <li>
              <BiCheck className='servicelist-icon' />
              <p>turpis in eu mi bibendum neque egestas congue quisque egestas</p>
            </li>
            <li>
              <BiCheck className='servicelist-icon' />
              <p>turpis in eu mi bibendum neque egestas congue quisque egestas</p>
            </li>
            <li>
              <BiCheck className='servicelist-icon' />
              <p>turpis in eu mi bibendum neque egestas congue quisque egestas</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className='servicehead'>
            <h3>Competitive Coding</h3>
          </div>

          <ul className='servicelist'>
            <li>
              <BiCheck className='servicelist-icon' />
              <p>turpis in eu mi bibendum neque egestas congue quisque egestas</p>
            </li>
            <li>
              <BiCheck className='servicelist-icon' />
              <p>turpis in eu mi bibendum neque egestas congue quisque egestas</p>
            </li>
            <li>
              <BiCheck className='servicelist-icon' />
              <p>turpis in eu mi bibendum neque egestas congue quisque egestas</p>
            </li>
            <li>
              <BiCheck className='servicelist-icon' />
              <p>turpis in eu mi bibendum neque egestas congue quisque egestas</p>
            </li>
            <li>
              <BiCheck className='servicelist-icon' />
              <p>turpis in eu mi bibendum neque egestas congue quisque egestas</p>
            </li>
            <li>
              <BiCheck className='servicelist-icon' />
              <p>turpis in eu mi bibendum neque egestas congue quisque egestas</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services