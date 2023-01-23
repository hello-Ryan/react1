import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate.js'
import Card from './Card.js'

function ExpenseItem(props) {
    return (
        < Card className = "expense-item">
            <ExpenseDate date = {props.date}></ExpenseDate>
            <div className = "expense-item__description">
                <h2>{props.name}</h2>
                <div className = "expense-item__price">${props.cost}</div>
            </div>
        </Card>
    );
}

export default ExpenseItem;