/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */


import { useContext, useState } from "react";
import { createContext } from "react";
import useFetch from './useFetch'

const ProductContext = createContext();


export const useProduct = () => useContext(ProductContext);





export function ProductProvider({children}){
    const {data:{products} , error, loading } = useFetch('https://fakestoreapi.in/api/products',{});
  
  
    const [cart , setCart] = useState([])
  
    function addToCart(product) {
      setCart((prev) => [...prev,product])
    }
  
  
    return (
      <ProductContext.Provider value={{products, error, loading , addToCart , cart}}>
        {children}
      </ProductContext.Provider>
  
    )
  }

  