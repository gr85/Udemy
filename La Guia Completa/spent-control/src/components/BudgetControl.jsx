import { useState, useEffect } from "react";


function BudgetControl({ budget, expenses }) {
    const [isFirstTime, setIsFirstTime] = useState(true);
    const [available, setAvailable] = useState(0);
    const [spent, setSpent] = useState(0);

    useEffect(() => {
        if(isFirstTime) {
            setIsFirstTime(false);
            setAvailable(budget);
            return;
        }

        const totalSpent = expenses.reduce( (total, expense) => {
            return total + expense.quantity;
        }, 0);

        const totalAvailable = budget - totalSpent;

        setSpent(totalSpent);
        setAvailable(totalAvailable);
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
                <p>Plot Here!</p>
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
