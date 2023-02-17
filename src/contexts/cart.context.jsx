import { createContext, useState } from "react";

export const CartContext = createContext({
  toggleCart: false,
  setToggleCart: () => null,
});

export const CartProvider = ({ children }) => {
  const [toggleCart, setToggleCart] = useState(false);
  const value = { toggleCart, setToggleCart };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
