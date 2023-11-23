import Expense from "./Expense"


function ExpensesList({ expenses, setExpenseEdit, deleteExpense }) {
  return (
    <div className="listado-gastos contenedor">
      <h2>{expenses.length ? 'Expenses' : 'No Expenses'}</h2>

      {expenses.map(expense => (
        <Expense 
            id={expense.id}
            expense={expense}
            setExpenseEdit={setExpenseEdit}
            deleteExpense={deleteExpense}
        />
      ))}
    </div>
  )
}

export default ExpensesList
