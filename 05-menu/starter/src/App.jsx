import { useState } from 'react'
import Title from './Title'
import data from './data'
import Menu from './Menu'
import Categories from './Categories'

// const tempCategories = data.map((item) => {
//   return item.category
// })
// // quickly create an object of unique properties
// const tempSet = new Set(tempCategories)
// const tempItems = ['all', ...tempSet]

// one liner
const allCategories = ['all', ...new Set(data.map((item) => item.category))]

const App = () => {
  const [menuItems, setMenuItems] = useState(data)
  const [categories, setCategories] = useState(allCategories)

  const filterCategories = (category) => {
    if (category === 'all') {
      setMenuItems(data)
      return
    }
    const newItems = data.filter((item) => item.category === category)
    setMenuItems(newItems)
  }

  return (
    <main>
      <section className='menu'>
        <Title text={'our menu'} />
        <Categories categories={categories} filter={filterCategories} />
        <Menu items={menuItems} />
      </section>
    </main>
  )
}
export default App
