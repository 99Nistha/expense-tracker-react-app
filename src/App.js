import Expenses from "./components/Expenses/Expenses";
import React from "react";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses=[{title: 'Laptop', amount: 105000.00, date: new Date(2021, 6, 25)},
                  {title: 'Internet Bill', amount: 12300.99, date: new Date(2022, 0, 1)},
                  {title: 'Wooden Table', amount: 1200.34, date: new Date(2022, 0, 16)},
                  {title: 'New Mobile', amount: 50000.00, date: new Date(2021, 9, 10)}]; 

  return ( 
    <div>
      <NewExpense/>
      <Expenses items={expenses}/>
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
