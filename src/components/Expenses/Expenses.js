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
                <ExpenseItem 
                    title={props.items[0].title} 
                    amount={props.items[0].amount} 
                    date={props.items[0].date}
                />
                <ExpenseItem 
                    title={props.items[1].title} 
                    amount={props.items[1].amount} 
                    date={props.items[1].date}
                />
                <ExpenseItem 
                    title={props.items[2].title} 
                    amount={props.items[2].amount} 
                    date={props.items[2].date}
                />
                <ExpenseItem 
                    title={props.items[3].title} 
                    amount={props.items[3].amount} 
                    date={props.items[3].date}
                />
            </Card>
    );
}

export default Expenses;