import { createContext, useContext, useReducer } from "react";
import CartReducer from "./CartReducer";

const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, {
    cart: [],
  });
  
  return (
  <CartContext.Provider value={{ state, dispatch, }}>
    {children}
  </CartContext.Provider>
  );
};

export const CartState = () => {
  return useContext(CartContext);
};

export default CartContextProvider;