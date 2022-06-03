import React, { Fragment, useState } from 'react';
import Header from "./components/Layout/Header/Header";
import Meals from './components/Meals/Meals';
import Cart from "./components/Cart/Cart";

function App() {
  const [isCartShown, setIsCartShown] = useState(false)

    const cartShownHandler = () => {
      setIsCartShown(true);
    }

    const cartClosedHandler = () => {
      setIsCartShown(false)
    }

  return (
    <Fragment>
        {isCartShown && <Cart onClose={cartClosedHandler}/>}
      <Header onCartShown={cartShownHandler}/>
        <main>
            <Meals />
        </main>
    </Fragment>
  );
}

export default App;
