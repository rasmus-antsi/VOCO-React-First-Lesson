import ExpenseItem from './ExpenseItem.jsx'

// The wrapping component. Its only job is to hold the individual
// ExpenseItem rows. Outermost element is a plain div, as the task requires.
// Props: expenses -- an array of expense objects
function Expenses({ expenses }) {
  return (
    <div className="expenses">
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          date={expense.date}
          title={expense.title}
          amount={expense.amount}
        />
      ))}
    </div>
  )
}

export default Expenses
