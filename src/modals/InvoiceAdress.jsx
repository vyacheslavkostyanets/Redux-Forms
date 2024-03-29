import React from "react";

const InvoiceAdress = ({
  formName,
  handleChangeInput,
  handleChangeSelect,
  handleFormClick,
  isClicked,
}) => {
  return (
    <div>
      <h2>Invoice Address </h2>
      {isClicked.Company && !formName.Company ? (
        <span className="form-full">Add data to field "Company"</span>
      ) : null}
      <label>
        <span>Company *</span>
        <input
          required
          type="text"
          value={formName.Company}
          name="Company"
          onChange={(event) => handleChangeInput(event)}
          onBlur={(event) => handleFormClick(event)}
        />
      </label>
      {isClicked.Name && !formName.Name ? (
        <span className="form-full">Add data to field "Name"</span>
      ) : null}
      <label>
        <span>Name *</span>
        <input
          type="text"
          value={formName.Name}
          name="Name"
          onChange={(event) => handleChangeInput(event)}
          onBlur={(event) => handleFormClick(event)}
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
          <option value="Ukraine">Ukraine</option>
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
