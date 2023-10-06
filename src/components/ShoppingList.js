import React ,{useState}from 'react'
import { plantList } from '../plantsList'
import PlantItem from './PlantItem'
import Category from './Category'

function ShoppingList({ cart, updateCart }) {
  const [activeCategory, setActiveCategory] = useState('');
  const categories=plantList.reduce(
    (acc,plant)=>
      acc.includes(plant.category) ? acc : acc.concat(plant.category),
      []
    )

    

  return (
    <div style={{
      width: '100%',
    }}>
      <Category 
      setActiveCategory={setActiveCategory}
      activeCategory={activeCategory}/>
      <ul style={{}}>
        <div style={{
          display:'flex',
          flexWrap: 'wrap',
          }}>
          {plantList.map((plant)=>
          !activeCategory || activeCategory === plant.category ? (
            <>
                  <PlantItem 
                  category={plant.category}
                  name={plant.name}
                  cover={plant.cover}
                  water={plant.water}
                  light={plant.light}
                  price={plant.price} 
                  cart={cart} updateCart={updateCart}
                  />
            </>
              ) : null
          )}
        </div>
      </ul>
    </div>
  )
}

export default ShoppingList