import React, { useState } from 'react';
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

  const clickForm = {
    Company: false,
    Name: false,
    Iban: false,
    Bic: false,
    BlankName: false,
  };
  const [formName, setFormName] = useState(defaultFormValue);
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [numberOfForm, setNumberOfForm] = useState(0);
  const [isClicked, setIsClicked] = useState(clickForm);


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

    setNumberOfForm(prev => {
      if (prev === 0) {
        if (formName.Company && formName.Name) {
          return prev + 1
        }
        else {
          return prev
        }
      }
      else if (prev === 1) {
        if (formName.BlankName && formName.Iban && formName.Bic) {
          return prev + 1
        }
        else {
          return prev
        }
      }
    }
    )
  }
  function prevModal(event) {
    event.preventDefault()
    setNumberOfForm(prev => prev - 1)
  }
  function handleFormClick(event) {
    switch (event.target.name) {
      case "Company": setIsClicked({
        ...isClicked,
        Company: true
      });
        break;
      case "Name": setIsClicked({
        ...isClicked,
        Name: true
      });
        break;
      case "Iban": setIsClicked({
        ...isClicked,
        Iban: true
      });
        break;
      case "Bic": setIsClicked({
        ...isClicked,
        Bic: true
      });
        break;
      case "BlankName": setIsClicked({
        ...isClicked,
        BlankName: true
      });
        break;
    }
  }
  function saveForm(event) {
    event.preventDefault();
    const data = formName;
    setFormName(defaultFormValue)
    setIsOpen(false);
    setNumberOfForm(0);
    setIsClicked(clickForm);

    return dispatch(addFormData(data));
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
            <GetModal handleFormClick={handleFormClick} formName={formName} handleChangeInput={handleChangeInput} handleChangeSelect={handleChangeSelect} isClicked={isClicked} />
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