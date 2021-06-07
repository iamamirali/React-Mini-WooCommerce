import React, { useState } from "react";
import { useGlobalContext } from "./context";
import { FaCartPlus } from "react-icons/fa";
import Modal from "./modal";

const Products = () => {
  // getting stuff from provider
  const { list, setList, cart, setCart } = useGlobalContext();

  // item adder
  const addBtn = (product) => {
    setModal(true);
    setCart([...cart, product]);
  };

  // add message status
  const [modal, setModal] = useState(false);

  // defining new state to prevent from modifying the main list
  const [newList, setNewList] = useState(list);

  // filtering function => displays items with selected brand
  const filterer = (brand) => {
    setNewList(
      list.filter((item) => {
        if (item.brand == brand) {
          return item;
        } else if (!brand) {
          return item;
        }
      })
    );
  };

  // closes modal message
  const closeModal = () => {
    setModal(false);
  };

  return (
    <section className='container'>
      <div className='filter'>
        <ul>
          <li className='inliner' onClick={() => filterer(false)}>
            All
          </li>
          <li className='inliner' onClick={() => filterer("Apple")}>
            Apple
          </li>
          <li className='inliner' onClick={() => filterer("Samsung")}>
            Samsung
          </li>
          <li className='inliner' onClick={() => filterer("Xiaomi")}>
            Xiaomi
          </li>
        </ul>
      </div>

      {/* shows modal if it is true */}
      {modal && <Modal close={closeModal} />}

      {/* show the list of products */}
      {newList.map((product) => {
        const { brand, model, price, image, id } = product;
        return (
          <article className='product' key={id}>
            <img className='image' width='200px' src={image} alt='' />
            <div>
              <h3 className='model'>{model}</h3>
              <h4 className='brand'>{brand}</h4>
              <p className='price'>${price}</p>
              <button
                className='addBtn'
                onClick={() => {
                  addBtn(product);
                }}
              >
                <FaCartPlus />
              </button>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default Products;
