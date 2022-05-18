import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
// import { increment } from "./features/FormSlice";
import "./scss/index.scss";
import basket from "./images/Vector.svg";
import VectorCover from "./images/VectorCover.svg";
import { AppModal } from "./AppModal";

function App() {
  const count = useSelector((state) => state.Forms.value);
  // const [isOpen, setIsOpen] = useState(false);

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
            <tr>
              <td>
                <span className="basket">
                  <img src={VectorCover} alt="" />
                  <img src={basket} alt="" />
                </span>
              </td>
              <td>Company</td>
              <td>Name</td>
              <td>Edditional</td>
              <td>Street</td>
              <td>Postal Code</td>

              <td>Country</td>
              <td>IBAN</td>
              <td>BIC</td>
              <td>Bank-name</td>
              <td>Fax</td>
              <td>E-mail</td>
              <td>Birthday</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* <button onClick={() => dispatch(increment(10))}>Увеличить</button>
      {count} */}
    </div>
  );
}

export default App;
