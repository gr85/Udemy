import Budget from "./Budget"
import BudgetControl from "./BudgetControl"


function Header({ 
  budget, 
  setBudget, 
  isValidBudget, 
  setIsValidBudget, 
  expenses 
}) {
  return (
    <header>
      <h1>Spenses Planner</h1>

      {isValidBudget ? (
        <BudgetControl 
            budget={budget}
            expenses={expenses}
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
