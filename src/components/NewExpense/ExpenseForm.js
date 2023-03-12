import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  //method -> 1
  const [enteredTitle, setEnterTitle] = useState("");
  const [enteredAmount, setEnterAmount] = useState("");
  const [enteredDate, setEnterDate] = useState("");
  const titleChangeHandler = (event) => {
    console.log(event.target.value);
    setEnterTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnterAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnterDate(event.target.value);
  };

  //method ->2
  // const[ userInput, setUserInput] = useState({
  //     enteredTitle:'',
  //     enteredAmout:'',
  //     enteredDate:'',
  // })

  // const titleChangeHandler = (event) => {
  //     // setUserInput({
  //     //     ...userInput,
  //     //     enteredTitle: event.target.value,
  //     // })

  //     //for updating state that depends on previous state
  //     setUserInput( (prevState)=>{
  //         return {...prevState, enteredTitle: event.target.value}
  //     } )
  // }
  // const amountChangeHandler = (event) => {
  //     setUserInput({
  //         ...userInput,
  //         enteredAmout: event.target.value,
  //     })
  // }
  // const dateChangeHandler = (event) => {
  //     setUserInput({
  //         ...userInput,
  //         enteredDate: event.target.value,
  //     })
  // }

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    //console.log(expenseData);
    props.onSaveExpenseData(expenseData);

    //for clearing the input field after submiting
    setEnterTitle("");
    setEnterAmount("");
    setEnterDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>

      <div className="new-expense__actions">
        <button typt="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
