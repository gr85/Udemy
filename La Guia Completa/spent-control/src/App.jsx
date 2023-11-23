import { useState, useEffect } from 'react'

import Header from './components/Header'
import Modal from './components/Modal';
import ExpensesList from './components/ExpensesList';

import { generateId } from './helpers';
import IconNewSpent from './img/nuevo-gasto.svg'

function App() {
  const [budget, setBudget] = useState(Number(localStorage.getItem('budget')) ?? 0);
  const [isValidBudget, setIsValidBudget] = useState(false);
  const [modal, setModal] = useState(false);
  const [animateModal, setAnimateModal] = useState(false);
  const [expenses, setExpenses] = useState(
    localStorage.getItem('expenses') ? JSON.parse(localStorage.getItem('expenses')) : []
  );
  const [expenseEdit, setExpenseEdit] = useState({});

  useEffect(() => {
    if(Object.keys(expenseEdit).length > 0) {
      setModal(true);

      setTimeout(() => {
        setAnimateModal(true);
      }, 500);
    }
  }, [expenseEdit])

  useEffect(() => {
    localStorage.setItem('budget', budget) ?? 0;
  }, [budget])

  useEffect(() => {
    const budgetLS = Number(localStorage.getItem('budget')) ?? 0;

    if(budgetLS > 0) {
      setIsValidBudget(true);
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses) ?? []);
  }, [expenses])

  const handleNewExpense = () => {
    setExpenseEdit({});
    setModal(true);

    setTimeout(() => {
      setAnimateModal(true);
    }, 500);
  }

  const saveExpense = (expense) => {
    if(expense.id) {
      // Update
      const expensesUpdate = expenses.map( expenseState => expenseState.id === expense.id ? expense : expenseState);

      setExpenses(expensesUpdate);
      setExpenseEdit({});
    } else {
      // Add
      expense.id = generateId();
      expense.date = Date.now();
      setExpenses([...expenses, expense])
    }
   
    setAnimateModal(false);
    
    setTimeout(() => {
        setModal(false);
    }, 500);
  }

  const deleteExpense = id => {
    const expensesUpdate = expenses.filter( expense => expense.id !== id);

    setExpenses(expensesUpdate);
    setTimeout(() => {}, 500)
  }

  return (
    <div className={modal ? 'fijar' : ''}>
      <Header 
        budget={budget}
        setBudget={setBudget}
        isValidBudget={isValidBudget}
        setIsValidBudget={setIsValidBudget}
        expenses={expenses}
      />

      {isValidBudget && (
        <>
          <main>
            <ExpensesList 
              expenses={expenses}
              setExpenseEdit={setExpenseEdit}
              deleteExpense={deleteExpense}
            />
          </main>
          <div className='nuevo-gasto'>
            <img src={IconNewSpent} alt='Icon new expense' 
              onClick={handleNewExpense}
            />
          </div>
        </>
      )}

      {modal && 
        <Modal 
          setModal={setModal}
          animateModal={animateModal}
          setAnimateModal={setAnimateModal}
          saveExpense={saveExpense}
          expenseEdit={expenseEdit}
          setExpenseEdit={setExpenseEdit}
        />
      }
    </div>
  )
}

export default App
