import { useState } from "react/cjs/react.development";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [changedYear, setChangedYear] = useState("2021");

  const filterChangeHandler = (NewYear) => {
    setChangedYear(NewYear);
  };

  const filteredExpense = props.items.filter((arr) => {
    return arr.date.getFullYear().toString() === changedYear;
  });

  let expenseContent = <p>No Expenses Found.</p>;
  if (filteredExpense.length > 0) {
    expenseContent = filteredExpense.map((expense) => (
      <ExpenseItem
        key={expense.id} // to let react uniquely identify data and add accordingly
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={changedYear}
        onFilterChange={filterChangeHandler}
      />
      {expenseContent}
    </Card>
  );
};

export default Expenses;
