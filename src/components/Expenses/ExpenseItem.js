import React from "react";

//a component in react is just a javascript function
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  // const [titles, setTitles]= useState(props.title);

  // const clickHandler = () =>{
  //   setTitles("updated!");
  //   console.log('Clicked!')
  // }
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate dates={props.date} />
        <div className="expense-item__description">
          <h2> {props.title} </h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
        {/* <button onClick={ clickHandler} >Change title</button> */}
      </Card>
    </li>
  );
};
export default ExpenseItem;
