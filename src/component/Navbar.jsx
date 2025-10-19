import React from 'react'
import { useState } from 'react';
import useFilterStore from '../store/filterStore';

const Navbar = () => {

    const [active, setActive] = useState(false);
    const { filters, setFilters, clearFilters } = useFilterStore();

    const toggleOpen = () => {
        setFilters({is_Open: !filters.is_open});
        setActive(!active)
    };

    const handlePriceChange = (e) => {
        setFilters({price_range: e.target.value})
    }

    const handleCategoriesChange = (e) => {
        setFilters({categories: e.target.value})
    }

    return (
        <div className='border-y border-gray-400 py-3 px-10 flex justify-between'>
            <div className='flex gap-4'>
                <p>Filter By:</p>
                <div className='space-x-1 flex items-center border-b pb-1' onClick={toggleOpen}>
                    <button
                        onClick={() => setActive(!active)}
                        className={`w-3 h-3 p-2 rounded-full font-medium border border-black transition duration-300
        ${active
                                ? "bg-blue-500"
                                : "bg-transparent"
                            }`}
                    >
                    </button>
                    <label htmlFor="" className='cursor-pointer'>Open Now</label>
                </div>
                <div className='flex border-b pb-1'>
                    <select name="" id="" className='w-32 outline-none cursor-pointer' onChange={handlePriceChange} value={filters.price_range}>
                        <option value="default">All Price</option>
                        <option value="$">$</option>
                        <option value="$$">$$</option>
                        <option value="$$$">$$$</option>
                        <option value="$$$$">$$$$</option>
                        <option value="$$$$$">$$$$$</option>
                    </select>
                </div>
                <div className='flex border-b pb-1'>
                    <label htmlFor="categories"></label>
                    <select name="" id="categories" className='w-32 outline-none cursor-pointer' onChange={handleCategoriesChange} value={filters.categories}>
                        <option value="default">All Categories</option>
                        <option value="BBQ">BBQ</option>
                        <option value="Korean">Korean</option>
                        <option value="Noodles">Noodles</option>
                        <option value="Seafood">Seafood</option>
                        <option value="Japanese">Japanese</option>
                        <option value="Fast Food">Fast Food</option>
                        <option value="Chinese">Chinese</option>
                    </select>
                </div>
            </div>
            <button onClick={clearFilters} className='border border-gray-400 hover:bg-gray-200 px-4 rounded text-gray-500 cursor-pointer'>Clear All</button>
        </div>
    )
}

export default Navbar;