import React from 'react'

import './search-box.style.css'


export const SearchBox = (props) => (
    <input 
    className = 'search-box'
    type='search'
    placeholder='Search Monster' 
   onChange = {props.onSearchChange}
    
    />
)