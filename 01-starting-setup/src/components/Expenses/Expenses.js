import "./Expenses.css"
import ExpenseItem from "./ExpenseItem";
import Card from "../../UI/Card";

const Expenses = (props) => {
    return (
        <Card className="expenses">
            <h2>Let's get started!</h2>
            <ExpenseItem
                {...props.items[0]} />
            <ExpenseItem
                {...props.items[1]} />
            <ExpenseItem
                {...props.items[2]} />
            <ExpenseItem
                {...props.items[3]} />
        </Card>)
}

export default Expenses;