import './ExpenseItem.css'
import DateBox from './DateBox.jsx'
import Price from './Price.jsx'

// The dark row that holds everything together.
// Props: date, title, amount
function ExpenseItem({ date, title, amount }) {
  return (
    <div className="expense-item">
      <DateBox date={date} />

      <h2 className="expense-item__title">{title}</h2>

      <Price amount={amount} />
    </div>
  )
}

export default ExpenseItem
