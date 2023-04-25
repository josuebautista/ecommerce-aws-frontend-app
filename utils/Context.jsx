import axios from "axios";
import React, { useContext, useEffect, useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState(null);
  const [products, setProduts] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);

  //Form Cart
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [country, setCountry] = useState('');

  const getProducts = async () => {
    await axios.post('/api/cart', {ids: cartProducts}).then(response => {
      setProduts(response.data);
    })
  }

  useEffect(() => {
    const storedCartObject = localStorage.getItem('cart');
    if( storedCartObject ) {
      const parsedObject = JSON.parse(storedCartObject);
      setCartProducts(parsedObject);
    }
  }, []);
  
  useEffect(() => {
    if (cartProducts?.length > 0 ){
      localStorage?.setItem('cart', JSON.stringify(cartProducts));
      getProducts();
    }
    getTotalPrice();
    
  }, [cartProducts]);

  const addProductToCart = (id) => {
    if ( cartProducts ){
      setCartProducts(prev => [...prev, id])
    } else {
      setCartProducts([id])
    }
  }

  const addItemProduct = (id) => {
    setCartProducts(prev => [...prev, id])
  }

  const removeItemProduct = (id) => {
    const newProductsList = [];
    let noDeleteDetected = true;
    cartProducts.forEach(productId => {
      if(productId === id && noDeleteDetected){
        noDeleteDetected = false
      } else {
        newProductsList.push(productId);
      }
    });
    setCartProducts(newProductsList);
    getTotalPrice()
  }

  const getTotalPrice = () => {
    let total = 0
    cartProducts !== null && cartProducts.forEach(productId => {
      products !== null && products.map(product => {
        if(product._id === productId){
          total += product.price
        }
      })
    })
    setTotalPrice(total);
  }

  return <AppContext.Provider value={{
    cartProducts,
    setCartProducts,
    addProductToCart,
    products,
    addItemProduct,
    removeItemProduct,
    getTotalPrice,
    totalPrice,
    name, setName,
    email, setEmail,
    city, setCity,
    postalCode, setPostalCode,
    streetAddress, setStreetAddress,
    country, setCountry,
  }} >
    {children}
  </AppContext.Provider>
};

export const useGlobalContext = () => {
  return useContext(AppContext)
};

export { AppContext, AppProvider };