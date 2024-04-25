import React, { useState } from 'react'
import Input from '@components/atoms/Input'
import Button from '@components/atoms/Button'
import { IoSearchSharp } from "react-icons/io5";
import classNames from 'classnames';
import '@components/scssGlobal/utils.scss'
import './SearchBar.scss'


const SearchBar = ({onSearch, className = null}) => {

    const [query, setQuery] = useState('')
    
    return (
        <div className={classNames('search-bar-container', className)}> 
            <Input
                    id="search"
                    placeholder="Search here"
                    required                
                    value={query} 
                    onChange={setQuery}
                />
            <Button className='little' icon={<IoSearchSharp />} onClick={() => onSearch(query)}>Search</Button>
        </div>
    )
}

export default SearchBar