import React from 'react'
import { plantList } from '../plantsList'

function Category({ setActiveCategory, activeCategory }) {
    const categories=plantList.reduce(
        (acc,plant)=>
          acc.includes(plant.category) ? acc : acc.concat(plant.category),
          []
        )
  return (
    <div>
        <select
        value={activeCategory}
				onChange={(e) => setActiveCategory(e.target.value)}
        >
            {categories.map((cat)=>(
            <option key={cat} value={cat}>{cat}</option>
        ))}
        </select>
        <button onClick={() => setActiveCategory('')} style={{margin:'23px'}}>Renisialiser</button>
    </div>
  )
}

export default Category