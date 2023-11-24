import Budget from "./Budget"
import BudgetControl from "./BudgetControl"


function Header({ 
  budget, 
  setBudget, 
  isValidBudget, 
  setIsValidBudget, 
  expenses,
  setExpenses
}) {
  return (
    <header>
      <h1>Spenses Planner</h1>

      {isValidBudget ? (
        <BudgetControl 
            budget={budget}
            setBudget={setBudget}
            expenses={expenses}
            setExpenses={setExpenses}
            setIsValidBudget={setIsValidBudget}
        />
      ) : (
        <Budget 
            budget={budget}
            setBudget={setBudget}
            setIsValidBudget={setIsValidBudget}
        />
      )}
      
    </header>
  )
}

export default Header
