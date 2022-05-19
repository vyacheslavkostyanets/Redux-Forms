import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import InvoiceAdress from './modals/InvoiceAdress';
import Contact from './modals/Contact';
import BankData from './modals/BankData';
import { useDispatch } from "react-redux";
import { addFormData } from './features/FormSlice';




export function AppModal() {
  const dispatch = useDispatch();
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

  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [numberOfForm, setNumberOfForm] = useState(0);
  function handleChangeInput(event) {
    setFormName({ ...formName, [event.target.name]: event.target.value });
  }
  function handleChangeSelect(event) {
    setFormName({ ...formName, City: event.target.value });
  }

  function openModal() {
    setIsOpen(true);
  }
  let subtitle;
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal(event) {

    event.preventDefault()
    setIsOpen(false);
    setFormName(defaultFormValue)
    numberOfForm(0);
  }
  function nextModal(event) {
    event.preventDefault()
    setNumberOfForm(prev => prev + 1)
  }
  function prevModal(event) {
    event.preventDefault()
    setNumberOfForm(prev => prev - 1)
  }
  function saveForm(event) {
    event.preventDefault()
    setIsOpen(false);
    setNumberOfForm(0)
    return dispatch(addFormData(formName));
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
              <button className="form__control__cancel" onClick={closeModal}>Cancel</button>
              {numberOfForm ? <button className="form__control__prev" onClick={prevModal}>Prev</button> : null}

              {numberOfForm < (form.length - 1) ? <button onClick={nextModal}>Next</button> : <button onClick={saveForm}>Save</button>}
            </span>
          </form>
        </div>

      </Modal>
    </div>
  );
}