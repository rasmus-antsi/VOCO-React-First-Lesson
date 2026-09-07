import './ExpensesList.css'
import ExpenseItem from './ExpenseItem.jsx'

// Renders the list itself -- nothing else. It knows nothing about filtering;
// it is simply handed whatever should be shown.
// Props: expenses -- the already-filtered array
function ExpensesList({ expenses }) {
  // Early return: the component gives back entirely different JSX
  // depending on whether there is anything to show.
  if (expenses.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>
  }

  return (
    <ul className="expenses-list">
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          date={expense.date}
          title={expense.title}
          amount={expense.amount}
        />
      ))}
    </ul>
  )
}

export default ExpensesList
