import React, {useRef, useState} from 'react'

import IMG from '../../assets/images/snoopy.jpg'
// import Swiper core and required modules
import {Navigation, Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import 'swiper/css/pagination';
import './testimonials.scss'


const tests = [

  {
    key: 1,
    name: 'Client Name',
    quote: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi quam, non deserunt dolores dicta dolore beatae ea eveniet enim pariatur!',
    avatar: IMG
  },
  {
    key: 2,
    name: 'Client Name 2',
    quote: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi quam, non deserunt dolores dicta dolore beatae ea eveniet enim pariatur!',
    avatar: IMG
  },
  {
    key: 3,
    name: 'Client Name 3',
    quote: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi quam, non deserunt dolores dicta dolore beatae ea eveniet enim pariatur!',
    avatar: IMG
  },
  {
    key: 4,
    name: 'Client Name 4',
    quote: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi quam, non deserunt dolores dicta dolore beatae ea eveniet enim pariatur!',
    avatar: IMG
  }
]

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h3>REVIEWS</h3>
      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Pagination, Navigation]}
      navigation={{ clickable: true }}
      // navigation
      spaceBetween={30}
      slidesPerView={"auto"}
      pagination={{ clickable: true }}
      >
      {
        tests.map(({key, name, quote, avatar})=>{
          return (

          <SwiperSlide key={key} className="testimonial">
            <div className="client__avatar">
                <img src={avatar} alt={name} />
            </div>
            <div className="testimonial__content">
                <h5 className="client__name">{name}</h5>
                <h6>Job title | Company</h6>
                <small className="client__review">{quote}
                </small>
            </div>
          </SwiperSlide>
          )
        })
      }
        
      </Swiper>
    </section>
  )
}

export default Testimonials