import React ,{useState, useEffect}from 'react'
import { plantList } from '../plantsList'
import axios from 'axios';
import PlantItem from './PlantItem'
import Category from './Category'

function ShoppingList({ cart, updateCart }) {
  const [activeCategory, setActiveCategory] = useState('');
  const [plants, setPlants] = useState([]);
 

    useEffect(() => {
      // Utiliser Axios pour obtenir les données depuis l'API
      axios.get('http://localhost:8080/api/tutorials')
        .then(response => {
          setPlants(response.data); // Définir les données récupérées dans l'état
        })
        .catch(error => {
          console.error('Erreur lors de la récupération des données:', error);
        });
    }, []);

    const categories = plants.reduce(
      (acc, plant) =>
        acc.includes(plant.category) ? acc : acc.concat(plant.category),
      []
    );

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
          {plants.map((plant)=>
          !activeCategory || activeCategory === plant.category ? (
            <>
                  <PlantItem 
                  category={plant.category}
                  name={plant.name}
                  cover={require(`../assets/${plant.cover}.jpg`)}
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