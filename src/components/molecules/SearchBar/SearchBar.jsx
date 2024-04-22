import React, { useState } from 'react'
import Input from '../../atoms/Input'
import { IoSearchSharp } from "react-icons/io5";


const SearchBar = ({onSearch}) => {

    const [query, setQuery] = useState('')
    const handleClick = () => {
        onSearch(query);
    }

    return (
        <div>
            <label>Search</label>
            <div className='flex'> 
                <Input
                        id="search" placeholder="Search here" required                
                        value={query} 
                        onChange={setQuery}
                    />
                <Button icon={<IoSearchSharp />} onClick={handleClick()}>Search</Button>
            </div>
        </div>
    )
}

export default SearchBar