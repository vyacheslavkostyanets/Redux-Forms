import React from "react";

const Contact = ({ formName, handleChangeInput }) => {
  return (
    <div>
      <h2>Contact</h2>
      <label>
        <span>Fax</span>
        <input
          type="text"
          value={formName.Fax}
          name="Fax"
          onChange={(event) => handleChangeInput(event)}
        />
      </label>
      <label>
        <span>E-mail</span>

        <input
          type="text"
          value={formName.Email}
          name="Email"
          onChange={(event) => handleChangeInput(event)}
        />
      </label>
      <label>
        <span>Birthday</span>
        <input
          type="date"
          value={formName.Birthday}
          name="Birthday"
          onChange={(event) => handleChangeInput(event)}
        />
      </label>
      <label>
        <span>Homepage</span>
        <input
          type="text"
          value={formName.Homepage}
          name="Homepage"
          onChange={(event) => handleChangeInput(event)}
        />
      </label>
      <br />
    </div>
  );
};

export default Contact;
