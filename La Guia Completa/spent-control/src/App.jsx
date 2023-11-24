import { useState, useEffect } from 'react'

import Header from './components/Header'
import Modal from './components/Modal';
import ExpensesList from './components/ExpensesList';
import Filter from './components/Filter';

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
  const [filter, setFilter] = useState('');
  const [expensesFiltered, setExpensesFiltered] = useState([]);

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
    localStorage.setItem('expenses', JSON.stringify(expenses) ?? []);
  }, [expenses])

  useEffect(() => {
    if(filter) {
      // Filter expenses by category
      const filteredExpenses = expenses.filter( expense => expense.category === filter);

      setExpensesFiltered(filteredExpenses);
    }
  }, [filter])

  useEffect(() => {
    const budgetLS = Number(localStorage.getItem('budget')) ?? 0;

    if(budgetLS > 0) {
      setIsValidBudget(true);
    }
  }, [])

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
  }

  return (
    <div className={modal ? 'fijar' : ''}>
      <Header 
        budget={budget}
        setBudget={setBudget}
        isValidBudget={isValidBudget}
        setIsValidBudget={setIsValidBudget}
        expenses={expenses}
        setExpenses={setExpenses}
      />

      {isValidBudget && (
        <>
          <main>
            <Filter 
              filter={filter}
              setFilter={setFilter}
            />
            <ExpensesList 
              expenses={expenses}
              setExpenseEdit={setExpenseEdit}
              deleteExpense={deleteExpense}
              filter={filter}
              expensesFiltered={expensesFiltered}
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
