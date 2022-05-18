import React from "react";

const BankData = () => {
  return (
    <form>
      <label>
        33
        <input type="text" name="Company" />
      </label>
      <label>
        Name*
        <input type="text" name="Name" />
      </label>
      <label>
        Additional
        <input type="text" name="Additional" />
      </label>
      <label>
        Street
        <input type="text" name="Street" />
      </label>
      <label>
        Postal Code
        <input type="text" name="PostalCode" />
      </label>
      <label>
        Country
        <select>
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

export default BankData;
