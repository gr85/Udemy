import { useEffect, useState } from 'react'
import styled from '@emotion/styled'

import Error from './Error'

import useSelectCoins from '../hooks/useSelectCoins'

import { coins } from '../data/coins'

// Styled component
const InputStyle = styled.input`
    background-color: #9497FF;
    border: none;
    width: 100%;
    padding: 10px;
    color: #FFF;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 5px;
    transition: background-color .3s ease;
    margin-top: 30px;

    &:hover {
        background-color: #7A7DFE;
        cursor: pointer;
    }
`

function Form({setCoins}) {    
    const [cryptos, setCryptos] = useState([]);
    const [error, setError] = useState(false);
    const [coin, SelectCoins] = useSelectCoins('Select a coin', coins);
    const [cryptoCoin, SelectCryptoCoin] = useSelectCoins('Select a cypto', cryptos);

    useEffect(() => {
        const consultAPI = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD'

            const answer = await fetch(url);
            const result = await answer.json()

            const arrayCryptos = result.Data.map((crypto) => {
                return {id: crypto.CoinInfo.Name, name: crypto.CoinInfo.FullName}
            })

            setCryptos(arrayCryptos);
        }
        consultAPI();
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault();

        if([coin, cryptoCoin].includes('')) {
            setError(true);

            return;
        }

        setError(false);
        setCoins({
            coin,
            cryptoCoin
        });
    }


    return (
        <>
            {error && <Error>All fields are needed</Error>}

            <form
                onSubmit={handleSubmit}
            >
                <SelectCoins />

                <SelectCryptoCoin />
                
                <InputStyle 
                    type="submit" 
                    value="Ceck Prize" 
                />
            </form>
        </>
    )
}

export default Form
