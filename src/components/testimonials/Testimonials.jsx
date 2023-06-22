import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'


// import Swiper core and required modules
import { Navigation,Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: 'Tina Snow',
    review: 'lacus vestibulum sed arcu non odio euismod lacinia at quis risus sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in dictum non consectetur',

  },
  {
    avatar: AVTR2,
    name: 'Shatta Wale',
    review: 'lacus vestibulum sed arcu non odio euismod lacinia at quis risus sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in dictum non consectetur',

  },
  {
    avatar: AVTR3,
    name: 'Kwame Despite',
    review: 'lacus vestibulum sed arcu non odio euismod lacinia at quis risus sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in dictum non consectetur',

  },
  {
    avatar: AVTR4,
    name: 'Mayank Goyal',
    review: 'lacus vestibulum sed arcu non odio euismod lacinia at quis risus sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in dictum non consectetur',

  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className='container testimonials-container'
       // install Swiper modules
       modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
        {
          data.map(({avatar,name,review},index)=> {
            return (
              <SwiperSlide key={index} className='testimonial'>
          <div className='client-avatar'>
           <img src={avatar} alt="Avatar one" />
           </div>
           <h5 className='client-name'>{name}</h5>
           <small className='client-review'>
           {review}
           </small>
          
        </SwiperSlide>
            )
          })
        }

        
      </Swiper>
    </section>
  )
}

export default Testimonials