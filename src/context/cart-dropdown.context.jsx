import React, { createContext, useContext, useState, useMemo } from 'react';

const cartDropDownContext = createContext();

export function useCartDropDown() {
  const context = useContext(cartDropDownContext);

  if (!context) {
    throw new Error(
      `useCartDropDown must be wrapped within a CartDropDownProvider`
    );
  }

  return context;
}

export function CartDropDownProvider(props) {
  const [cartDropDown, toggleCartDropDown] = useState(false);

  const value = useMemo(() => [cartDropDown, toggleCartDropDown], [
    cartDropDown,
  ]);

  return <cartDropDownContext.Provider value={value} {...props} />;
}

export default { useCartDropDown, CartDropDownProvider };
