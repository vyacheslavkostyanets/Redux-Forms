import React, { useState } from "react";

const InvoiceAdress = () => {
  const defaultFormValue = {
    Company: "",
    Name: "",
    Additional: "",
    Street: "",
    PostalCode: "",
    City: "Ukraine",
  };
  const [formName, setFormName] = useState(defaultFormValue);
  function handleChangeInput(event) {
    setFormName({ ...formName, [event.target.name]: event.target.value });
  }
  function handleChangeSelect(event) {
    setFormName({ ...formName, City: event.target.value });
  }

  return (
    <div>
      <h2>Invoice Address </h2>
      <label>
        <span>Company*</span>
        <input
          type="text"
          value={formName.Company}
          name="Company"
          onChange={(event) => handleChangeInput(event)}
        />
      </label>
      <label>
        <span>Name*</span>

        <input
          type="text"
          value={formName.Name}
          name="Name"
          onChange={(event) => handleChangeInput(event)}
        />
      </label>
      <label>
        <span>Additional</span>
        <input
          type="text"
          value={formName.Additional}
          name="Additional"
          onChange={(event) => handleChangeInput(event)}
        />
      </label>
      <label>
        <span>Street</span>
        <input
          type="text"
          value={formName.Street}
          name="Street"
          onChange={(event) => handleChangeInput(event)}
        />
      </label>
      <label>
        <span>Postal Code</span>
        <input
          type="text"
          value={formName.PostalCode}
          name="PostalCode"
          onChange={(event) => handleChangeInput(event)}
        />
      </label>
      <label>
        <span>Country</span>
        <select
          className="form__select"
          value={formName.City}
          onChange={handleChangeSelect}
        >
          <option selected value="Ukraine">
            Ukraine
          </option>
          <option value="China">China</option>
          <option value="Israel">Israel</option>
          <option value="USA">USA</option>
          <option value="Turkey">Turkey</option>
        </select>
      </label>
      <br />
    </div>
  );
};

export default InvoiceAdress;
