import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'
import { addToLocalStorage, getStoredCart, removeFromStorage } from "../../Utilities/localStorage";
import Cart from "../Cart/Cart";

const Bottles = () => {
    const [bottles,setBottles] = useState([])
    const [cart,setCart] =useState([])
    useEffect(()=>{
            fetch('bottle.json')
            .then(res => res.json())
            .then(data => setBottles(data))
    },[])
    
useEffect(()=>{
    console.log('called the use effect',bottles.length)
  if(bottles.length>0){
    const storedCart =getStoredCart();
    console.log(storedCart,bottles)

    const savedCart = []
    for(const id of storedCart){
        console.log(id)
        const bottle = bottles.find(bottle => bottle.id ===id)
        if(bottle){
            savedCart.push(bottle)
        }
    }
    console.log('saved cart:',savedCart)
    setCart(savedCart)
  }
},[bottles])

  const handleAddToCart = bottle => {
    const newCart =[...cart,bottle]
    setCart(newCart) 
    addToLocalStorage(bottle.id)
  }

  const handleRemoveFromCart = id =>{
      //visual cart remove
      const remainingCart = cart.filter(bottle => bottle.id !==id)
      setCart(remainingCart)
      //remove from local storage
      removeFromStorage(id)
  }




    return (
        <div>
            <h2>Bottles are here:{bottles.length}</h2>
           <Cart cart ={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>
           <div className="BottlesContainer">
           {
                bottles.map(bottle => 
                <Bottle 
                key={bottle.id} 
                bottle={bottle}
                handleAddToCart ={handleAddToCart}
                ></Bottle>)
            }
           </div>
        </div>
    );
};

export default Bottles;