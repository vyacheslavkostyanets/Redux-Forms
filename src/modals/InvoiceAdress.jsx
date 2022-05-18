import React, { useState } from "react";

const InvoiceAdress = () => {
  const defaultFormValue = {
    Company: "",
    Name: "",
    Additional: "",
    Street: "",
    PostalCode: "",
  };
  const [formName, setFormName] = useState(defaultFormValue);
  function handleChangeInput(event) {
    setFormName({ ...formName, [event.target.name]: event.target.value });
  }

  return (
    <form>
      <label>
        Company*
        <input
          type="text"
          value={formName.Company}
          name="Company"
          onChange={(event) => handleChangeInput(event)}
        />
      </label>
      <label>
        Name*
        <input
          type="text"
          value={formName.Name}
          name="Name"
          onChange={(event) => handleChangeInput(event)}
        />
      </label>
      <label>
        Additional
        <input
          type="text"
          value={formName.Additional}
          name="Additional"
          onChange={(event) => handleChangeInput(event)}
        />
      </label>
      <label>
        Street
        <input
          type="text"
          value={formName.Street}
          name="Street"
          onChange={(event) => handleChangeInput(event)}
        />
      </label>
      <label>
        Postal Code
        <input
          type="text"
          value={formName.PostalCode}
          name="PostalCode"
          onChange={(event) => handleChangeInput(event)}
        />
      </label>
      <label>
        Country
        <select onChange={(event) => handleChangeInput(event)}>
          <option disabled defaultValue>
            Ehne mehne Muh
          </option>
          <option value="China">China</option>
          <option value="China">China</option>
          <option value="Israel">Israel</option>
          <option value="USA">USA</option>
          <option value="Turkey">Turkey</option>
        </select>
      </label>
      <br />
      <input type="submit" value="Отправить" />
    </form>
  );
};

export default InvoiceAdress;
