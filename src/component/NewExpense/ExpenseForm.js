import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const [isEnteredTitle, setIsEnteredTitle] = useState(true);
  const [isEnteredAmount, setIsEnteredAmount] = useState(true);
  const [isEnteredDate, setIsEnteredDate] = useState(true);

  const titleChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) setIsEnteredTitle(true);
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) setIsEnteredAmount(true);
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) setIsEnteredDate(true);
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    if (enteredTitle.trim().length === 0) {
      setIsEnteredTitle(false);
    }
    if (enteredAmount.trim().length === 0) {
      setIsEnteredAmount(false);
    }
    if (enteredDate.trim().length === 0) {
      setIsEnteredDate(false);
    }

    if (isEnteredAmount && isEnteredTitle && isEnteredDate) {
      props.onSaveExpenseData(expenseData);
      setEnteredTitle("");
      setEnteredAmount("");
      setEnteredDate("");
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div
          className={`new-expense__control ${!isEnteredTitle ? "invalid" : ""}`}
        >
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div
          className={`new-expense__control ${
            !isEnteredAmount ? "invalid" : ""
          }`}
        >
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div
          className={`new-expense__control ${!isEnteredDate ? "invalid" : ""}`}
        >
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2041-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
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
