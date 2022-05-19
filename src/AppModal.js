import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import InvoiceAdress from './modals/InvoiceAdress';
import Contact from './modals/Contact';
import BankData from './modals/BankData';



export function AppModal() {

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '36.5em',
      height: '32.1em',
      padding: '10px'
    },
  };

  // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
  Modal.setAppElement('#root');

  const defaultFormValue = {
    Company: "",
    Name: "",
    Additional: "",
    Street: "",
    PostalCode: "",
    City: "Ukraine",
    Iban: "",
    Bic: "",
    BlankName: "",
    Fax: "",
    Email: "",
    Birthday: "",
    Homepage: ""
  };
  const [formName, setFormName] = useState(defaultFormValue);
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function handleChangeInput(event) {
    setFormName({ ...formName, [event.target.name]: event.target.value });
  }
  function handleChangeSelect(event) {
    setFormName({ ...formName, City: event.target.value });
  }

  const [numberOfForm, setNumberOfForm] = useState(0);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setFormName(defaultFormValue)
    setIsOpen(false);
  }
  function nextModal(Event) {
    Event.preventDefault()
    setNumberOfForm(prev => prev + 1)
  }
  function prevModal(Event) {
    Event.preventDefault()
    setNumberOfForm(prev => prev - 1)
  }

  const form = [InvoiceAdress, BankData, Contact];
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
        <div className="close-form"><button onClick={closeModal} className="close-form__btn">X</button></div>
        <div className="wrapper-form">
          <form className="form">
            <GetModal formName={formName} handleChangeInput={handleChangeInput} handleChangeSelect={handleChangeSelect} />
            <span className='form__control'>
              <button class="form__control__cancel" onClick={closeModal}>Cancel</button>
              <button class="form__control__prev" onClick={prevModal}>Prev</button>

              {numberOfForm < (form.length - 1) ? <button onClick={nextModal}>Next</button> : <button onClick={nextModal}>Save</button>}
            </span>
          </form>
        </div>

      </Modal>
    </div>
  );
}