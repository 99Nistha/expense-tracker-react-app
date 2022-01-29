import Expenses from "./components/Expenses/Expenses";
import React from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react/cjs/react.development";

const dummy_Expenses = [
  { id: "e1", title: "Laptop", amount: 105000.0, date: new Date(2021, 6, 25) },
  {
    id: "e2",
    title: "Internet Bill",
    amount: 12300.99,
    date: new Date(2022, 0, 1),
  },
  {
    id: "e3",
    title: "Wooden Table",
    amount: 1200.34,
    date: new Date(2022, 0, 16),
  },
  {
    id: "e4",
    title: "New Mobile",
    amount: 50000.0,
    date: new Date(2021, 9, 10),
  },
];

function App() {
  const [expenses, setExpenses] = useState(dummy_Expenses);
  const addExpenseHandler = (expenseData) => {
    setExpenses((prevExpense) => {
      return [expenseData, ...prevExpense];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );

  //underline JSX code tranformation with react
  // return(
  //   React.createElement(
  //     'div',
  //     {},
  //     React.createElement('h2',{}, 'Let\'s get started!'),
  //     React.createElement(Expenses,{items: expenses})
  //   )
  // );
}

export default App;
