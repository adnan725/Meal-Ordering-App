import React, { useState } from 'react';
import Header from "./components/Layout/Header/Header";
import Meals from './components/Meals/Meals';
import Cart from "./components/Cart/Cart";
import CartProvider from './store/CartProvider'

function App() {
  const [isCartShown, setIsCartShown] = useState(false)

    const cartShownHandler = () => {
      setIsCartShown(true);
    }

    const cartClosedHandler = () => {
      setIsCartShown(false)
    }

  return (
    <CartProvider>
        {isCartShown && <Cart onClose={cartClosedHandler}/>}
      <Header onCartShown={cartShownHandler}/>
        <main>
            <Meals />
        </main>
    </CartProvider>
  );
}

export default App;
