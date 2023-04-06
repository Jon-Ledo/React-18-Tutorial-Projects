import Title from './Title'
import { tours } from '../data'

const Tours = () => {
  return (
    <section className='section' id='tours'>
      <Title title='featured' span='tours' />

      <div className='section-center featured-center'>
        {tours.map((tour) => {
          return (
            <article key={tour.id} className='tour-card'>
              <div className='tour-img-container'>
                <img src={tour.image} className='tour-img' alt={tour.title} />
                <p className='tour-date'>{tour.date}</p>
              </div>
              <div className='tour-info'>
                <div className='tour-title'>
                  <h4>{tour.title}</h4>
                </div>
                <p>{tour.text}</p>
                <div className='tour-footer'>
                  <p>
                    <span>
                      <i className='fas fa-map'></i>
                    </span>{' '}
                    {tour.location}
                  </p>
                  <p>{tour.duration} days</p>
                  <p>from ${tour.cost}</p>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Tours
