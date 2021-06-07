import React, { useState, useEffect } from "react";
import { useGlobalContext } from "./context";

const Cart = () => {
  const { cart, setCart } = useGlobalContext();

  // total price
  let [total, setTotal] = useState(0);

  // total status
  const [showTotal, setShowTotal] = useState(false);

  // removes specific item and returns other ones
  const remover = (picked) => {
    setCart(
      cart.filter((items) => {
        if (items.id !== picked.id) {
          return items;
        }
      })
    );
    // hides total and resets it
    setShowTotal(false);
    setTotal(0);
  };

  // total shower function => sums price of items existing in the cart
  const totalShow = () => {
    setShowTotal(true);
    for (let i = 0; i < cart.length; i++) {
      setTotal((total += cart[i].price));
    }
  };

  // clears the cart and resets total price
  const clear = () => {
    setCart([]);
    setTotal(0);
  };
  console.log(cart);

  return (
    <>
      <div className='total'>
        {/* if total is hidden and if cart is not empty, shows the btn */}
        {!showTotal && cart.length !== 0 && (
          <button className='showBtn' onClick={totalShow}>
            Show Total
          </button>
        )}
        {/* if btn is clicked, shows total */}
        {showTotal && <h3 className='totalText'>Total: ${total}</h3>}
      </div>
      <section className='container'>
        {/* shows items of the cart */}
        {cart.map((item) => {
          const { id, image, brand, model, price } = item;
          return (
            <article className='cartProducts' key={id}>
              <img width='80px' src={image} alt='' />

              <p className='modelCart'>{model}</p>
              <p className='brandCart'>{brand}</p>
              <p className='priceCart'>${price}</p>
              <button
                className='removeBtn'
                onClick={() => {
                  remover(item);
                }}
              >
                remove
              </button>
            </article>
          );
        })}
        {/* if cart is not empty, shows remove all btn */}
        {cart.length !== 0 && (
          <button className='clear' onClick={clear}>
            Remove All
          </button>
        )}
        {/* if cart is empty, shows empty message */}
        {cart.length == 0 && <h2 className='emptyMessage'>Cart is Empty!</h2>}
      </section>
    </>
  );
};

export default Cart;
