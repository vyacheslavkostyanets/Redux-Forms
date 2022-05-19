import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
// import { increment } from "./features/FormSlice";
import "./scss/index.scss";
import basket from "./images/Vector.svg";
import VectorCover from "./images/VectorCover.svg";
import { AppModal } from "./AppModal";
import { deleteData } from "./features/FormSlice";

function App() {
  const count = useSelector((state) => state.Forms.value);
  // const [isOpen, setIsOpen] = useState(false);
  const deleteRow = (event, id) => {
    return dispatch(deleteData(id));
  };

  const dispatch = useDispatch();
  return (
    <div className="App">
      <AppModal />

      <div className="table">
        <table id="customers">
          <tbody>
            <tr>
              <th colSpan="2">Company</th>
              <th>Name</th>
              <th>Edditional</th>
              <th>Street</th>
              <th>Postal Code</th>
              <th>Country</th>
              <th>IBAN</th>
              <th>BIC</th>
              <th>Bank-name</th>
              <th>Fax</th>
              <th>E-mail</th>
              <th>Birthday</th>
            </tr>

            {count.map((elem, i) => (
              <tr key={elem + i}>
                <td>
                  <span
                    className="basket"
                    onClick={(event) => deleteRow(event, i)}
                  >
                    <img src={VectorCover} alt="" />
                    <img src={basket} alt="" />
                  </span>
                </td>
                <td>{elem.Company}</td>
                <td>{elem.Name}</td>
                <td>{elem.Additional}</td>
                <td>{elem.Street}</td>
                <td>{elem.PostalCode}</td>
                <td>{elem.City}</td>
                <td>{elem.Iban}</td>
                <td>{elem.Bic}</td>
                <td>{elem.BlankName}</td>
                <td>{elem.Fax}</td>
                <td>{elem.Email}</td>
                <td>{elem.Birthday}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* <button onClick={() => dispatch(increment(10))}>Увеличить</button>
      {count} */}
    </div>
  );
}

export default App;
