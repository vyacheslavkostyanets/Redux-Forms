import React from "react";

const BankData = ({
  formName,
  handleChangeInput,
  handleFormClick,
  isClicked,
}) => {
  return (
    <div>
      <h2>BankData</h2>
      {isClicked.Iban && !formName.Iban ? (
        <span className="form-full">Add data to field "Name"</span>
      ) : null}
      <label>
        <span>IBAN *</span>
        <input
          type="text"
          value={formName.Iban}
          name="Iban"
          onChange={(event) => handleChangeInput(event)}
          onBlur={(event) => handleFormClick(event)}
        />
      </label>
      {isClicked.Bic && !formName.Bic ? (
        <span className="form-full">Add data to field "Name"</span>
      ) : null}
      <label>
        <span>BIC *</span>

        <input
          type="text"
          value={formName.Bic}
          name="Bic"
          onChange={(event) => handleChangeInput(event)}
          onBlur={(event) => handleFormClick(event)}
        />
      </label>
      {isClicked.BlankName && !formName.BlankName ? (
        <span className="form-full">Add data to field "Name"</span>
      ) : null}
      <label>
        <span>Bank name *</span>
        <input
          type="text"
          value={formName.BlankName}
          name="BlankName"
          onChange={(event) => handleChangeInput(event)}
          onBlur={(event) => handleFormClick(event)}
        />
      </label>
      <br />
    </div>
  );
};

export default BankData;
