import React from 'react'
import { shortList, list, longList } from './data'
import { useState } from 'react'
import { FaQuoteRight } from 'react-icons/fa'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const SlickCarousel = () => {
  // from the react slick docs
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  }

  return (
    <section className='slick-container'>
      <Slider {...settings}>
        {list.map((person) => {
          const { id, image, name, title, quote } = person
          return (
            <article key={id}>
              <img src={image} alt={name} className='person-img' />
              <h5 className='name'>{name}</h5>
              <p className='title'>{title}</p>
              <p className='text'>{quote}</p>
              <FaQuoteRight className='icon' />
            </article>
          )
        })}
      </Slider>
    </section>
  )
}

export default SlickCarousel
