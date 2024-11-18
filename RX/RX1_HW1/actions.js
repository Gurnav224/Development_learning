
export const ADD_TO_CART = 'cart/add';
export const REMOVE_TO_CART = 'cart/remove';
export const CALCULATE_TOTAL = 'cart/calculateTotal';

export const addToCart = (product) => ({type:ADD_TO_CART,payload:product});


export const removeFromCart = (productId) => ({
    type:REMOVE_TO_CART,
    payload:productId
})

export const calculateTotal = () => ({
    type:CALCULATE_TOTAL
})