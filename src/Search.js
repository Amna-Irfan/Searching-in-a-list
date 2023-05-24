import React, {useEffect, useRef} from 'react';
import './Search.css';

const Search = ({handleSearch}) => {

    const searchInputRef = useRef("");

    useEffect(() => {
        searchInputRef.current.focus();
    }, []);

    return (
        <div className='form'>
        <input 
        type='text'
        placeholder='Search..'
        id='searchQuery'
        name='searchQuery'
        ref={searchInputRef}
        onChange={(e)=>handleSearch(e.target.value)}/>
        </div>
)};

export default Search;