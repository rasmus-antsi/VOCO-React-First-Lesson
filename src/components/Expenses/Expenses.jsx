import { useState } from 'react'
import './Expenses.css'
import ExpensesFilter from './ExpensesFilter.jsx'
import ExpensesList from './ExpensesList.jsx'

// The wrapping component. Outermost element is a plain div, as Ülesanne 2 requires.
// It owns the selected year and decides WHAT to show; ExpensesList decides HOW.
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
  // new Date(...) because expenses read back from localStorage carry the
  // date as a string -- JSON has no date type.
  // getFullYear() gives a number, filteredYear is a string from the <select>,
  // so one side has to be converted before comparing.
  const filteredExpenses = expenses.filter((expense) => {
    return new Date(expense.date).getFullYear().toString() === filteredYear
  })

  console.log('Filtered expenses:', filteredExpenses)

  return (
    <div className="expenses">
      <ExpensesFilter
        selectedYear={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesList expenses={filteredExpenses} />
    </div>
  )
}

export default Expenses
