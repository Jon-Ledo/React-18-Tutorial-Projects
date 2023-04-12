const Person = ({ person }) => {
  const { name, image, age } = person
  return (
    <article className='person'>
      <img src={image} alt={name} className='img' />
      <div className=''>
        <h4>{name}</h4>
        <p>{age}</p>
      </div>
    </article>
  )
}

export default Person
