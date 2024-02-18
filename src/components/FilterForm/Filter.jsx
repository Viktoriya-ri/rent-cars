import React from 'react';
import { FilterForm } from './Filter.styled';


const Filter = () => {
    return (
        <FilterForm action =''>
            <label htmlFor="" className='label'>
                Car brand
                <input type='text' placeholder='Enter the text'/>
            </label>
            <label htmlFor="" className='label'>
                Price/ 1hour
                <input type='text' placeholder='To'/>
            </label>
            <label htmlFor="" className='label'>
                Car mileage/ km
                <input type="text" placeholder='From' />
                <input type="text" placeholder='To' />
            </label>
            <button type='submit'>Search</button>
        </FilterForm>
    );
};

export default Filter;