import { ADD_TO_CART, CALCULATE_TOTAL, REMOVE_TO_CART } from "./actions";

const initialState = { cart: [], total: 0 };

function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      const product = action.payload;
      const existingProductIndex = state.cart.findIndex(
        (item) => item.id === product.id
      );

      if (existingProductIndex !== -1) {
        // if product already in cart, increase its quantity
        const updateCart = state.cart.map((item, index) =>
          index === existingProductIndex
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );

        return {
          ...state,
          cart: updateCart,
        };
      } else {
        // product not in cart, add it
        return {
          ...state,
          cart: [...state.cart, product],
        };
      }

    case REMOVE_TO_CART:
      const removeProduct = state.cart.find(
        (item) => item.id === action.payload
      );
      return {
        ...state,
        total: state.total - removeProduct.price * removeProduct.quantity,
        cart: state.cart.filter((product) => product.id != action.payload),
      };
    case CALCULATE_TOTAL:
      return {
        ...state,
        total: state.cart.reduce(
          (total, product) => total + product.price * product.quantity,
          0
        ),
      };
  }
}

export default cartReducer;
