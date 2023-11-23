import { useState } from 'react'
import Header from './components/Header'
import IconNewSpent from './img/nuevo-gasto.svg'
import Modal from './components/Modal';

function App() {
  const [budget, setBudget] = useState(0);
  const [isValidBudget, setIsValidBudget] = useState(false);
  const [modal, setModal] = useState(false);

  const handleNewExpense = () => {
    setModal(true);
  }

  return (
    <div>
      <Header 
        budget={budget}
        setBudget={setBudget}
        isValidBudget={isValidBudget}
        setIsValidBudget={setIsValidBudget}
      />

      {isValidBudget && (
        <div className='nuevo-gasto'>
          <img src={IconNewSpent} alt='Icon new expense' 
            onClick={handleNewExpense}
          />
        </div>
      )}

      {modal && 
        <Modal 
          setModal={setModal}
        />
      }
    </div>
  )
}

export default App
