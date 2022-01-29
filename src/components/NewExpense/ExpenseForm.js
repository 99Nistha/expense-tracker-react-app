import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnternedTitle] = useState(""); // we can have multiple state, and are independent of each other
  const [enteredAmount, setEnternedAmount] = useState("");
  const [enteredDate, setEnternedDate] = useState("");

  // const [userInput, setUserInput]= useState({
  //     enteredTitle: '',
  //     enteredAmount: '',
  //     enteredDate: ''
  // })

  const titleChangeHandle = (event) => {
    setEnternedTitle(event.target.value); // we are using the setSate so that the value could be stored even if the entire conponents re evaluate for some reason
    // setUserInput({
    //     ...userInput,  //we are using ...userInput, to set the previous value and then in the next line we are just overwritting the value of title
    //     enteredTitle: event.target.value
    // });

    // setUserInput((prevState)=>{
    //     return{...prevState, enteredTitle: event.target.value};
    // });
    //this one is better bcz we are making sure that we are picking the latest previous values and not something impacted by scheduled time
  };

  const amountChangeHandle = (event) => {
    setEnternedAmount(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     enteredAmount: event.target.value
    // });
  };

  const dateChangeHandle = (event) => {
    setEnternedDate(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     enteredDate: event.target.value
    // });
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnternedTitle("");
    setEnternedAmount("");
    setEnternedDate("");
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandle}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandle}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandle}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
