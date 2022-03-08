import "./Expenses.css"
import ExpenseItem from "./ExpenseItem";
import Card from "../../UI/Card";

const Expenses = (props) => {
    return (
        <Card className="expenses">
            <h2>Let's get started!</h2>
            <ExpenseItem
                {...props.expenses[0]} />
            <ExpenseItem
                {...props.expenses[1]} />
            <ExpenseItem
                {...props.expenses[2]} />
            <ExpenseItem
                {...props.expenses[3]} />
        </Card>)
}

export default Expenses;