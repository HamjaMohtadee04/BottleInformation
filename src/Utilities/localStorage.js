const getStoredCart =() =>{
    const storedCardString = localStorage.getItem('cart')
    if(storedCardString){
        return JSON.parse(storedCardString)
    }
    return []
}

const saveCartToLocalStorage = cart =>{
    const cartStringified = JSON.stringify(cart)
    localStorage.setItem('cart',cartStringified)
}

const addToLocalStorage =id =>{
    const cart = getStoredCart();
   cart.push(id)
   //save to local storage
   saveCartToLocalStorage(cart)
}

const removeFromStorage = id =>{
    const cart = getStoredCart()
    //removing every id
    
    const remaining = cart.filter(idx => idx !==id);
    saveCartToLocalStorage(remaining)
}

export {addToLocalStorage,getStoredCart,removeFromStorage}