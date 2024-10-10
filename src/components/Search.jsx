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
        <div className="flex items-center border border-gray-300 rounded-lg p-2 dark:text-white  dark:bg-gray-800">
            <img src={icon.search} alt="Search Icon" className="mr-2 w-8" />
            <input
                type="text"
                placeholder={placeholderText}
                value={searchQuery} 
                onChange={handleInputChange}
                className="flex-grow outline-none rounded-md pl-4 py-1 dark:bg-gray-800"
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
