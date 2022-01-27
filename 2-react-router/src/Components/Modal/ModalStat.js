import React, { useState } from "react";
import "./Modal.css";

export default function ModalStat() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div>
      <button onClick={toggleModal} className="btn btn-primary btn-modal">
        Info
      </button>
      {modal && (
        <div className="overlay">
          <div className="modal">
            <div className="content-modal">
              <h3>Projet statistique pour pôle emploi</h3>
              <p>
                Pour ce projet j'ai du sortir des statistiques sur les rendez-vous que l'agence de pôle emploi molsheim préscrivait pour l'aprés midi avec les services civiques.
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
