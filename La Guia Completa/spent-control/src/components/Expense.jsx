import { formatDate } from "../helpers"

import IconSavings from '../img/icono_ahorro.svg'
import IconHome from '../img/icono_casa.svg'
import IconFood from '../img/icono_comida.svg'
import IconExpenses from '../img/icono_gastos.svg'
import IconLeisure from '../img/icono_ocio.svg'
import IconHealth from '../img/icono_salud.svg'
import IconSubscription from '../img/icono_suscripciones.svg'

const dictIcons = {
    savings : IconSavings,
    food : IconHome,
    home : IconFood,
    expense : IconExpenses,
    leisure : IconLeisure,
    health : IconHealth,
    subscription : IconSubscription
}

function Expense({ expense }) {
    const { category, name, quantity, id, date } = expense;

    return (
        <div className="gasto sombra">
            <div className="contenido-gasto">
                <img 
                    src={dictIcons[category]}
                    alt="icon expense"
                />
                <div className="descripcion-gasto">                    
                    <p className="categoria">{category}</p>
                    <p className="nombre-gasto">{name}</p>
                    <p className="fecha-gasto">
                        Added at: {''}
                        <span>{formatDate(date)}</span>
                    </p>
                </div>
            </div>
            <p className="cantidad-gasto">€{quantity}</p>
        </div>
    )
}

export default Expense
