import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const NewExpenseDataHandler = (expenseData) => {
    expenseData = {
      ...expenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={NewExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
