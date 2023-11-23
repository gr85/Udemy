import Expense from "./Expense"


function ExpensesList({ expenses }) {
  return (
    <div className="listado-gastos contenedor">
      <h2>{expenses.length ? 'Expenses' : 'No Expenses'}</h2>

      {expenses.map(expense => (
        <Expense 
            id={expense.id}
            expense={expense}
        />
      ))}
    </div>
  )
}

export default ExpensesList
