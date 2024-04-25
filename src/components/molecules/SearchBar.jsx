import React, { useState } from 'react'
import Input from '@components/atoms/Input'
import Button from '@components/atoms/Button'
import { IoSearchSharp } from "react-icons/io5";


const SearchBar = ({onSearch}) => {

    const [query, setQuery] = useState('')
    
    return (
        <div>
            <label>Search</label>
            <div className='flex'> 
                <Input
                        id="search" placeholder="Search here" required                
                        value={query} 
                        onChange={setQuery}
                    />
                <Button icon={<IoSearchSharp />} onClick={() => onSearch(query)}>Search</Button>
            </div>
        </div>
    )
}

export default SearchBar