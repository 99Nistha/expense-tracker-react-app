import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import React, { useState } from "react";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title); // should we called just directly into our componennt, and should start with use => useState is a HOOK

  const clickHandler = () => {
    setTitle("Update"); //revaluate the entire component again, ontly this one
    console.log(title); // will be uodate after a schedule time, will take few millisec not imid.
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">₹{props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
