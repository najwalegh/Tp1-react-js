import React from 'react';
import CareScale from './CareScale';

function PlantItem(props) {
  function addToCart(name, price) {
    const currentPlantAdded = props.cart.find((plant) => plant.name === name)
    if (currentPlantAdded) {
      const cartFilteredCurrentPlant = props.cart.filter(
        (plant) => plant.name !== name
      )
      props.updateCart([
        ...cartFilteredCurrentPlant,
        { name, price, amount: currentPlantAdded.amount + 1 }
      ])
    } else {
      props.updateCart([...props.cart, { name, price, amount: 1 }])
    }
  }
  return (
    <div style={{
        border:'10px',
        borderBlockColor:'black',
        width: '20%',
        backgroundColor: 'white',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        margin: '25px',
    }}>

        <div style={{
            margin:'3px',
            position:'relative',
        }}>
            <div style={{
            position: 'absolute',
            top: '0',
            right: '0',
            padding: '15px',
            backgroundColor: '#31b472',
            borderRadius: '25px 20px 25px 0px',
            color: 'white',
            fontWeight: '500',
          }}>
            {props.price}£
            </div>
             <img src={props.cover} alt={props.id} key={props.id} style={{ height: '250px',width: '100%',borderRadius: '20px',objectFit: 'cover' }}/>
        </div>
        <div style={{
            textAlign: 'left',
            padding: '10px'
        }}>
            <p>{props.name}</p>
            <CareScale type="water" num={props.water} />
            <CareScale type="light" num={props.light} />
            <button onClick={() => addToCart(props.name, props.price)}>Ajouter</button>
        </div>
    </div>
  )
}

export default PlantItem;