import {useState} from 'react'
import CloseBtn from '../img/cerrar.svg'
import Message from './Message';


function Modal({ setModal, animateModal, setAnimateModal, saveExpense }) {
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState(0);
    const [category, setCategory] = useState('');
    const [message, setMessage] = useState('');

    const hideModal = () => {
        setAnimateModal(false);
        
        setTimeout(() => {
            setModal(false);
        }, 500);
    }

    const handleNewExpense = (event) => {
        event.preventDefault();

        if([name, quantity, category].includes('')) {
            // At least one is empty
            setMessage('All fields are required!');

            setTimeout( () => {
                setMessage('');
            }, 3000)

            return;
        }

        saveExpense({name, quantity, category});
    }

    return (
        <div className='modal'>
            <div className='cerrar-modal'>
                <img src={CloseBtn} alt="Close Modal" 
                    onClick={hideModal}
                />
            </div>

            <form className={`formulario ${animateModal ? "animar" : "cerrar"}`}
                onSubmit={handleNewExpense}
            >
                <legend>New Expense</legend>

                {message && <Message type="error">{message}</Message>}

                <div className='campo'>
                    <label htmlFor='name'>Expense name</label>
                    <input 
                        type='text'
                        placeholder="Add Expense's name"
                        value={name}
                        onChange={ event => setName(event.target.value) }
                    />
                </div>
                <div className='campo'>
                    <label htmlFor='quantity'>Quantity</label>
                    <input 
                        type='number'
                        placeholder="Add Expense's quantity: ex. 300"
                        value={quantity}
                        onChange={ event => setQuantity(Number(event.target.value)) }
                    />
                </div>
                <div className='campo'>
                    <label htmlFor='category'>Category</label>
                    <select 
                        id="category"
                        value={category}
                        onChange={ event => setCategory(event.target.value) }
                    >
                        <option value="">-- Select --</option>
                        <option value="savings">Savings</option>
                        <option value="food">Food</option>
                        <option value="home">Home</option>
                        <option value="expense">Other Expenses</option>
                        <option value="leisure">Leisure</option>
                        <option value="health">Health</option>
                        <option value="subscription">Subscriptions</option>
                    </select>
                </div>

                <input 
                    type='submit' 
                    value="Add Expense" 
                />
            </form>
        </div>
    )
}

export default Modal
