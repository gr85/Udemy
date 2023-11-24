import { useState, useEffect } from 'react'

function Filter({ filter, setFilter }) {
  return (
    <div className='filtros sombra contenedor'>
      <form >
        <div className='campo'>
            <label>Filter Expense</label>
            <select
                value={filter}
                onChange={(event) => setFilter(event.target.value)}
            >
                <option value="">-- All Expenses --</option>
                <option value="savings">Savings</option>
                <option value="food">Food</option>
                <option value="home">Home</option>
                <option value="expense">Other Expenses</option>
                <option value="leisure">Leisure</option>
                <option value="health">Health</option>
                <option value="subscription">Subscriptions</option>
            </select>
        </div>
      </form>
    </div>
  )
}

export default Filter
