import './ExpenseItem.css'
import DateBox from './DateBox.jsx'
import Price from './Price.jsx'

// The dark row that holds everything together.
// Props: date, title, amount
function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <DateBox date={props.date} />

      <h2 className="expense-item__title">{props.title}</h2>

      <Price amount={props.amount} />
    </div>
  )
}

export default ExpenseItem
