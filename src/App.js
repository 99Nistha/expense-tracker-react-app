import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses=[{title: 'Car Insurance', amount: 300.23, date: new Date(2021, 8, 13)},
                  {title: 'Toilet Paper', amount: 49.35, date: new Date(2021, 5, 23)},
                  {title: 'New TV', amount: 550.00, date: new Date(2022, 1, 2)},
                  {title: 'Wooden Table', amount: 79.99, date: new Date(2021, 11, 12)}]; 

  return ( 
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem 
        title={expenses[0].title} 
        amount={expenses[0].amount} 
        date={expenses[0].date}>
      </ExpenseItem>
      <ExpenseItem 
        title={expenses[1].title} 
        amount={expenses[1].amount} 
        date={expenses[1].date}>
      </ExpenseItem>
      <ExpenseItem 
        title={expenses[2].title} 
        amount={expenses[2].amount} 
        date={expenses[2].date}>
      </ExpenseItem>
      <ExpenseItem 
        title={expenses[3].title} 
        amount={expenses[3].amount} 
        date={expenses[3].date}>
      </ExpenseItem>
    </div>
  );
}

export default App;
