import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

const Expenses = (props) => {
  const [year, setYear] = useState("");
  const filterChangeHandler = (selectedYear) => {
    setYear(selectedYear);
    console.log(year);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={year} onChangeFilter={filterChangeHandler} />
        <ExpenseItem {...props.items[0]} />
        <ExpenseItem {...props.items[1]} />
        <ExpenseItem {...props.items[2]} />
        <ExpenseItem {...props.items[3]} />
      </Card>
    </div>
  );
};

export default Expenses;
