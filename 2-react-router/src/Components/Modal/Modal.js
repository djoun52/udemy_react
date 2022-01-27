import React, { useState } from "react";
import "./Modal.css";

export default function Modal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };
  
  return (
    <div>
      <button onClick={toggleModal} className="btn btn-primary btn-modal">
        Open
      </button>
      {modal && (
        <div className="overlay">
          <div className="modal">
            <div className="content-modal">
              <h2>hello modale</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                aspernatur aperiam consequatur. Ea aliquid veritatis maiores
                praesentium ab, dolore accusamus? Corporis sit corrupti
                doloremque! Debitis quasi tempore eum accusamus fugit!
              </p>
              <button
                type="button"
                onClick={toggleModal}
                className=" btn btn-danger close-modal"
              >
                close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
