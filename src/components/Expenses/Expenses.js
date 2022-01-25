import { useState } from "react/cjs/react.development";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {

    const [changedYear, setChangedYear]= useState('2021');

    const filterChangeHandler= (NewYear) =>{
        setChangedYear(NewYear);
    };

    return(
            <Card className="expenses">
            <ExpensesFilter selected={changedYear} onFilterChange={filterChangeHandler}/>
            {props.items.map(expense=> (
                <ExpenseItem 
                    title={expense.title} 
                    amount={expense.amount} 
                    date={expense.date}
                />
                ))}
            </Card>
    );
}

export default Expenses;