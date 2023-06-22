import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id:1,
    image: IMG1,
    title: 'Muzixx-A basic website using css and html',
    github: 'hhttps://github.com/code-prsh/muzixx',
    demo: 'https://code-prsh.github.io/muzixx/'
  },
  {
    id:2,
    image: IMG2,
    title: 'Codeshows-A basic responsive front end-website',
    github: 'https://github.com/code-prsh/codeshows',
    demo: 'https://code-prsh.github.io/codeshows/'
  },
  {
    id:3,
    image: IMG3,
    title: 'Muzixx-A basic website using css and html',
    github: 'https://github.com/code-prsh/muzixx',
    demo: 'https://code-prsh.github.io/muzixx/'
  },
  {
    id:4,
    image: IMG4,
    title: 'Drum Game-A basic website using Javascript',
    github: 'https://github.com/code-prsh/Drumgame',
    demo: 'https://code-prsh.github.io/Drumgame/'
  },
  {
    id:5,
    image: IMG5,
    title: 'Muzixx-A basic website using css and html',
    github: 'https://github.com/code-prsh/muzixx',
    demo: 'https://code-prsh.github.io/muzixx/'
  },
  {
    id:6,
    image: IMG6,
    title: 'Muzixx-A basic website using css and html',
    github: 'https://github.com/code-prsh/muzixx',
    demo: 'https://code-prsh.github.io/muzixx/'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent  Work</h5>
      <h2>Portfolio</h2>
          
      <div className='container portfolio-container'>
      {
      data.map(({id,image,title,github,demo}) => {
          return (
            <article key={id} className='portfolio-item'>
           <div className='portfolio-item-image'>
             <img src={image} alt={title} />
           </div>
           <h3>{title}</h3>
           <div className='portfolio-item-cta'>
             <a href={github} className='btn'>Github</a>
             <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
           </div>
           
        </article>
          )
        })
        
      }
      </div>
    </section>
  )
}

export default Portfolio