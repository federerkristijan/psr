import { useRef, useState } from "react";

import classes from "./Checkout.module.css";

const Checkout = (props) => {
  const [checkoutClicked, setCheckoutClicked] = useState(false);
  const [inputFields, setInputFields] = useState([
    {
      name: "name",
      label: "Your Name",
      minLength: 1,
      required: true,
      ifNotValid: "Please enter a valid name",
      filledValue: "",
    },
    {
      name: "street",
      label: "Your Street",
      minLength: 1,
      required: true,
      ifNotValid: "Please enter a valid street",
      filledValue: "",
    },
    // Warning, this needs to be modified when international shipping is added
    {
      name: "postalCode",
      label: "Postal Code",
      minLength: 5,
      required: true,
      ifNotValid: "Please enter a valid postal code",
      filledValue: "",
    },
    {
      name: "city",
      label: "Your City",
      minLength: 1,
      required: true,
      ifNotValid: "Please enter a valid city",
      filledValue: "",
    },
  ]);

  const inputChangeHandler = (event) => {
    const index = inputFields.findIndex(
      (field) => field.name === event.target.id
    );
    const updatedInputFields = [...inputFields];
    updatedInputFields[index].filledValue = event.target.value;
    setInputFields(updatedInputFields);
  };

  const clickCheckoutHandler = (e) => {
    e.preventDefault();
    console.log("ba");

    setCheckoutClicked(true);
  };

  return (
    <div className="checkout_form">
      <form className="checkout_form">
        {inputFields.map((inputField) => {
          return (
            <div>
              <label className="checkout_label" htmlFor={inputField.name}><h4>{inputField.label}</h4></label>
              <input
                className="checkout_input"
                type="text"
                id={inputField.name}
                onChange={inputChangeHandler}
              />
              {checkoutClicked &&
                inputField.filledValue.length < inputField.minLength && (
                  <p>{inputField.ifNotValid}</p>
                )}
            </div>
          );
        })}
        <button onClick={clickCheckoutHandler} className={classes.submit}>
          Confirm
        </button>
      </form>
    </div>
  );
};

export default Checkout;
