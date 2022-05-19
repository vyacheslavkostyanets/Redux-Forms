import React from "react";

const BankData = ({ formName, handleChangeInput }) => {
  return (
    <div>
      <h2>BankData</h2>
      <label>
        <span>IBAN *</span>
        <input
          type="text"
          value={formName.Iban}
          name="Iban"
          onChange={(event) => handleChangeInput(event)}
        />
      </label>
      <label>
        <span>BIC *</span>

        <input
          type="text"
          value={formName.Bic}
          name="Bic"
          onChange={(event) => handleChangeInput(event)}
        />
      </label>
      <label>
        <span>Bank name *</span>
        <input
          type="text"
          value={formName.BlankName}
          name="BlankName"
          onChange={(event) => handleChangeInput(event)}
        />
      </label>
      <br />
    </div>
  );
};

export default BankData;
