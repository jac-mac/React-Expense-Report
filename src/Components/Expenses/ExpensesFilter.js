import './ExpensesFilter.css'
import { useState } from 'react'

export default function ExpensesFilter(props) {
    const [filter, setFilter] = useState('')

    const selectChangeHandler = (event) => {
        setFilter(event.target.value)
        props.onFilterChange(event.target.value)
    }

    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select onChange={selectChangeHandler} id='yearSelector'>
                    <option value='2019'>2019</option>
                    <option value='2020'>2020</option>
                    <option value='2021'>2021</option>
                    <option value='2022'>2022</option>
                </select>
            </div>
        </div>
    )
}