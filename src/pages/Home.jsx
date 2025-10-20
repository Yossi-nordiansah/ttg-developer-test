import React, { useEffect, useMemo, useState } from 'react'
import Navbar from '../component/Navbar'
import RestaurantCard from '../component/RestaurantCard'
import axios from 'axios'
import Skeleton from '../component/Skeleton'
import useFilterStore from '../store/filterStore'

const Home = () => {

    const [dataRestaurant, setDataRestaurant] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { filters } = useFilterStore();
    const fetchDataRestauran = async () => {
        setIsLoading(true);
        try {
            const res = await axios.get('http://localhost:5000/restaurants');
            setDataRestaurant(res.data);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchDataRestauran();
    }, []);

    const filteredDataRestaurant = useMemo(() => {
        let result = [...dataRestaurant];

        if (filters.is_open) {
            result = result.filter((r) => r.is_open === true)
        };

        if (filters.price_range !== 'default') {
            result = result.filter((r) => r.price_range === filters.price_range)
        }

        if (filters.categories !== 'default') {
            result = result.filter((r) => r.categories[0] === filters.categories)
        }
        return result;
    }, [dataRestaurant, filters])

    if (isLoading) return (
        <div className='px-10 py-8 grid grid-cols-4 gap-10'>
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
        </div>
    )

    return (
        <div>
            <h1 className='px-10 text-2xl mt-5 text-gray-500'>All Restaurants</h1>
            <div className='px-10 grid grid-cols-4 justify-end gap-10 py-10'>
                {
                    dataRestaurant.length === 0 ? (
                        <div>
                            Data Kosong
                        </div>
                    ) : filteredDataRestaurant.length === 0 ? (

                        <div className='col-span-4 text-center min-h-[30vh] text-gray-500'>
                            Data tidak ditemukan
                        </div>

                    ) : filteredDataRestaurant.map((item) => (
                        <RestaurantCard key={item.id} restaurant={item} />
                    ))
                }
            </div>
            <button className='shadow-2xl cursor-pointer w-64 border border-blue-900 py-1 text-blue-900 mx-auto block mb-10 hover:bg-blue-900 hover:border-white hover:text-white'>Load More</button>
        </div>
    )
}


export default Home