import Expense from "./Expense"


function ExpensesList({ 
  expenses, 
  setExpenseEdit, 
  deleteExpense,
  filter,
  expensesFiltered 
}) {
  return (
    <div className="listado-gastos contenedor">
      {
        filter ? (
          <>
            <h2>{expensesFiltered.length ? 'Expenses' : 'No Expenses for this category'}</h2>
            {expensesFiltered.map(expense => (
              <Expense 
                  id={expense.id}
                  expense={expense}
                  setExpenseEdit={setExpenseEdit}
                  deleteExpense={deleteExpense}
              />
            ))}
          </>
        ) : (
          <>
            <h2>{expenses.length ? 'Expenses' : 'No Expenses'}</h2>
            {expenses.map(expense => (
              <Expense 
                  id={expense.id}
                  expense={expense}
                  setExpenseEdit={setExpenseEdit}
                  deleteExpense={deleteExpense}
              />
            ))}
          </>
        )
      }
    </div>
  )
}

export default ExpensesList
