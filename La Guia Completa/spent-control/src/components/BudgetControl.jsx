import { useState, useEffect } from "react";

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";


function BudgetControl({ budget, expenses }) {
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

    return (
        <div className="contenedor-presupuesto contenedor sombra dos-columnas">
            <div>
                <CircularProgressbar 
                    styles={buildStyles({
                        pathColor: '#3B82F6',
                        trailColor: '#F5F5F5',
                        textColor: '#3B82F6'
                    })}
                    value={percent}
                    text={`${percent}% Spent`}
                />
            </div>

            <div className="contenido-presupuesto">
                <p>
                    <span>Budget:</span> {formatBudget(budget)}
                </p>
                <p>
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
