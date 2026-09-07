import { useState } from 'react'
import './Expenses.css'
import ExpenseItem from './ExpenseItem.jsx'
import ExpensesFilter from './ExpensesFilter.jsx'

// The wrapping component. Its only job is to hold the individual
// ExpenseItem rows. Outermost element is a plain div, as the task requires.
// Props: expenses -- an array of expense objects
function Expenses({ expenses }) {
  // This component OWNS the selected year. ExpensesFilter only displays it.
  const [filteredYear, setFilteredYear] = useState('2023')

  const filterChangeHandler = (selectedYear) => {
    console.log('In Expenses.js')
    console.log(selectedYear)

    setFilteredYear(selectedYear)
  }

  return (
    <div className="expenses">
      <ExpensesFilter
        selectedYear={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
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
