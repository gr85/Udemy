import { useState } from "react";
import Message from "./Message";


function Budget({ budget, setBudget, setIsValidBudget }) {
    const [message, setMessage] = useState('');

    const handleBudget = (event) => {
        event.preventDefault();

        if(!budget || budget < 0) {
            setMessage('Invalid budget');

            return;
        }

        setMessage('');
        setIsValidBudget(true);
    }

    return (
        <div className="contenedor-presupuesto contenedor sombra">
        <form className="formulario" onSubmit={handleBudget}>
            <div className="campo">
                <label>Define Budget</label>

                <input 
                    className="nuevo-presupuesto"
                    type="number"
                    placeholder="Add your budget"
                    value={budget}
                    onChange={ (event) => setBudget(Number(event.target.value)) }
                />

                <input 
                    type="submit"
                    value="Add"                    
                />

                {message && <Message type="error">{message}</Message>}
            </div>
        </form>
        </div>
    )
}

export default Budget
