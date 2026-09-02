import { useState } from 'react'
import './ExpenseItem.css'
import DateBox from './DateBox.jsx'
import Price from './Price.jsx'
import Card from '../UI/Card.jsx'

// The dark row that holds everything together.
// Props: date, title, amount
function ExpenseItem({ date, title, amount }) {
  // useState returns a pair: the current value, and the function that changes it.
  // `title` (the prop) is only the STARTING value -- from here on the state owns it.
  const [expenseTitle, setExpenseTitle] = useState(title)

  // The handler. Defined outside return(), passed to onClick BY NAME (no parentheses).
  const clickHandler = () => {
    console.log(expenseTitle)
    setExpenseTitle('Updated!')
  }

  return (
    <Card className="expense-item">
      <DateBox date={date} />

      <h2 className="expense-item__title">{expenseTitle}</h2>

      <Price amount={amount} />

      <button className="expense-item__button" onClick={clickHandler}>
        Change Title
      </button>
    </Card>
  )
}

export default ExpenseItem
