import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses=[{title: 'Laptop', amount: 105000.00, date: new Date(2021, 6, 25)},
                  {title: 'Internet Bill', amount: 12300.99, date: new Date(2022, 0, 1)},
                  {title: 'Wooden Table', amount: 1200.34, date: new Date(2022, 0, 16)},
                  {title: 'New Mobile', amount: 50000.00, date: new Date(2021, 9, 10)}]; 

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
