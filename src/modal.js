import React, { useEffect } from "react";

// shows modal message for 2 seconds
const Modal = ({ close }) => {
  useEffect(() => {
    setTimeout(() => {
      close();
    }, 2000);
  });
  // modal content
  return <h3 className='modal'>added to cart</h3>;
};

export default Modal;
