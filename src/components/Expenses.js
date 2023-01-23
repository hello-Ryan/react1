import ExpenseItem from './ExpenseItem.js';
import Card from './Card.js'
import './Expenses.css'

function Expenses(props) {

    return <Card className = "expenses">
        <ExpenseItem
            name={props.expenses[0].title}
            cost={props.expenses[0].amount}
            date={props.expenses[0].date}
        ></ExpenseItem>

        <ExpenseItem
            name={props.expenses[1].title}
            cost={props.expenses[1].amount}
            date={props.expenses[1].date}
        ></ExpenseItem>

        <ExpenseItem
            name={props.expenses[2].title}
            cost={props.expenses[2].amount}
            date={props.expenses[2].date}
        ></ExpenseItem>

        <ExpenseItem
            name={props.expenses[3].title}
            cost={props.expenses[3].amount}
            date={props.expenses[3].date}
        ></ExpenseItem>
    </Card>
}

export default Expenses;