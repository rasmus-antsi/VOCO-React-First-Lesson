import { useState } from 'react'
import './Expenses.css'
import ExpenseItem from './ExpenseItem.jsx'
import ExpensesFilter from './ExpensesFilter.jsx'

// The wrapping component. Its only job is to hold the individual
// ExpenseItem rows. Outermost element is a plain div, as the task requires.
// Props: expenses -- an array of expense objects
function Expenses({ expenses }) {
  // This component OWNS the selected year. ExpensesFilter only displays it.
  const [filteredYear, setFilteredYear] = useState('2024')

  const filterChangeHandler = (selectedYear) => {
    console.log('In Expenses.js')
    console.log(selectedYear)

    setFilteredYear(selectedYear)
  }

  // filter() keeps only the elements whose callback returns true.
  // getFullYear() gives a number, filteredYear is a string from the <select>,
  // so one side has to be converted before comparing.
  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear
  })

  console.log('Filtered expenses:', filteredExpenses)

  return (
    <div className="expenses">
      <ExpensesFilter
        selectedYear={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {filteredExpenses.map((expense) => (
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
