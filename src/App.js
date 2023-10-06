import './App.css';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Cart from './components/Cart';
import CareScale from './components/CareScale';
import { plantList } from './plantsList';
import PlantItem from './components/PlantItem';
import ShoppingList from './components/ShoppingList';
import { useState , useEffect } from 'react';

function App() {
  const savedCart = localStorage.getItem('cart')
	const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])

	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart))
	}, [cart])

  return (
    
    <div className="App">
      <Banner />
      <div style={{
        display:'flex', justifyContent:'center', flexDirection:'row'
      }}>
        <Cart cart={cart} updateCart={updateCart}/>
        <ShoppingList cart={cart} updateCart={updateCart}/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
