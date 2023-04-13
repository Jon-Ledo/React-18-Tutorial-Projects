import React from 'react'
import { shortList, list, longList } from './data'
import { useState } from 'react'
import { FaQuoteRight } from 'react-icons/fa'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { useEffect } from 'react'

const Carousel = () => {
  const [people, setPeople] = useState(list)
  const [currentPerson, setCurrentPerson] = useState(0)

  const prevSlide = () => {
    setCurrentPerson((prevPerson) => {
      const result = (prevPerson - 1 + people.length) % people.length
      return result
    })
  }

  const nextSlide = () => {
    setCurrentPerson((prevPerson) => {
      const result = (prevPerson + 1) % people.length
      return result
    })
  }

  useEffect(() => {
    let sliderId = setInterval(() => {
      nextSlide()
    }, 2000)
    return () => {
      clearInterval(sliderId)
    }
  }, [currentPerson])

  return (
    <section className='slider-container'>
      {people.map((person, personIndex) => {
        const { id, image, name, title, quote } = person
        return (
          <article
            className='slide'
            style={{
              transform: `translateX(${100 * (personIndex - currentPerson)}%)`,
              opacity: personIndex === currentPerson ? 1 : 0,
              visibility: personIndex === currentPerson ? 'visible' : 'hidden',
            }}
            key={id}
          >
            <img src={image} alt={name} className='person-img' />
            <h5 className='name'>{name}</h5>
            <p className='title'>{title}</p>
            <p className='text'>{quote}</p>
            <FaQuoteRight className='icon' />
          </article>
        )
      })}

      <button className='prev' type='button' onClick={prevSlide}>
        <FiChevronLeft />
      </button>
      <button className='next' type='button' onClick={nextSlide}>
        <FiChevronRight />
      </button>
    </section>
  )
}

export default Carousel
