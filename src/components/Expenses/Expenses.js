import { useState } from "react/cjs/react.development";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [changedYear, setChangedYear] = useState("2021");

  const filterChangeHandler = (NewYear) => {
    setChangedYear(NewYear);
  };

  const filteredExpense = props.items.filter((arr) => {
    return arr.date.getFullYear().toString() === changedYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={changedYear}
        onFilterChange={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpense}/>
      <ExpensesList items={filteredExpense} />
    </Card>
  );
};

export default Expenses;
