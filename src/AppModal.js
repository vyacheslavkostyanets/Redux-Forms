import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import InvoiceAdress from './modals/InvoiceAdress';
import Contact from './modals/Contact';
import BankData from './modals/BankData';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

export function AppModal() {
  const form = [InvoiceAdress, Contact, BankData];

  const [numberOfForm, setNumberOfForm] = useState(0);


  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }
  function changeModal() {
    setNumberOfForm(prev => prev + 1)
  }


  const GetModal = form[numberOfForm];

  return (
    <div>
      <button onClick={openModal}>Add</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
        <button onClick={closeModal}>close</button>
        <div>

          <GetModal />
          <button onClick={() => changeModal()}>Next</button>
        </div>

      </Modal>
    </div>
  );
}