import React from 'react';
import { icon } from '../utils/utils';
import { FaTimes } from 'react-icons/fa';
import useSearch from '../libs/Zustand/useSearch';

const Search = () => {
    const searchQuery = useSearch((state) => state.searchQuery); 
    const setSearchQuery = useSearch((state) => state.setSearchQuery);
    const placeholderText = useSearch((state) => state.placeholderText);
    const handleInputChange = (e) => {
        const newQuery = e.target.value;
        setSearchQuery(newQuery); 
    };

    const clearInput = () => {
        setSearchQuery('');
    };

    return (
        <div className="flex items-center border border-gray-300 rounded-lg px-4 py-1 dark:text-white  dark:bg-gray-800">
            <img src={icon.search} alt="Search Icon" className="mr-2 w-8" />
            <input
                type="text"
                placeholder={placeholderText}
                value={searchQuery} 
                onChange={handleInputChange}
                className="w-full outline-none dark:placeholder:text-white py-2 placeholder:text-gray-400 rounded-md pl-4  bg-white dark:bg-grays border-white border-b dark:text-white "
            />
          
            {searchQuery && (
                <FaTimes
                    className="ml-2 cursor-pointer w-6 h-6"
                    onClick={clearInput}
                />
            )}
        </div>
    );
};

export default Search;
