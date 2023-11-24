import { useState, useEffect } from "react";

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";


function BudgetControl({ 
    budget, 
    setBudget,
    expenses, 
    setExpenses,
    setIsValidBudget
}) {
    const [available, setAvailable] = useState(0);
    const [spent, setSpent] = useState(0);
    const [percent, setPercent] = useState(0);

    useEffect(() => {        
        const totalSpent = expenses.reduce( (total, expense) => {
            return total + expense.quantity;
        }, 0);

        const totalAvailable = budget - totalSpent;

        // Calculate percentatge spent
        const newPercentage = (((budget - totalAvailable) / budget) * 100).toFixed(2);
        
        setSpent(totalSpent);
        setAvailable(totalAvailable);

        setTimeout(() => {
            setPercent(newPercentage);
        }, 1000)
    }, [expenses]);

    const formatBudget = (quantity) => {
        return quantity.toLocaleString('es-ES', {
            style: 'currency',
            currency: 'EUR'
        });
    }

    const handleResetApp = () => {
        const result = confirm('Are you sure to reset budget and expenses?')

        if(result) {
            // Yes. Reset the app
            setExpenses([]);
            setBudget(0);
            setIsValidBudget(false);
        }
    }


    return (
        <div className="contenedor-presupuesto contenedor sombra dos-columnas">
            <div>
                <CircularProgressbar 
                    styles={buildStyles({
                        pathColor: percent > 100 ? '#DC2626' : '#3B82F6',
                        trailColor: '#F5F5F5',
                        textColor: percent > 100 ? '#DC2626' : '#3B82F6'
                    })}
                    value={percent}
                    text={`${percent}% Spent`}
                />
            </div>

            <div className="contenido-presupuesto">
                <button className="reset-app" type="button" onClick={handleResetApp}>
                    Reset App
                </button>
                <p>
                    <span>Budget:</span> {formatBudget(budget)}
                </p>
                <p className={`${available < 0 ? 'negativo' : ''}`}>
                    <span>Available:</span> {formatBudget(available)}
                </p>
                <p>
                    <span>Spent:</span> {formatBudget(spent)}
                </p>
            </div>
        </div>
    )
}

export default BudgetControl
