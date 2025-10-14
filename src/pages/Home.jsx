import React from 'react'
import Navbar from '../component/Navbar'
import RestaurantCard from '../component/RestaurantCard'

const Home = () => {
    return (
        <div>
            <div className='px-10 py-8'>
                <h1 className='text-3xl mb-4'>Restaurants</h1>
                <p className='w-1/2 text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque delectus, reiciendis nam ipsum vel inventore eveniet quasi dolorum facere aliquid, </p>
            </div>
            <Navbar />
            <h1 className='px-10 text-2xl mt-5 text-gray-500'>All Restaurants</h1>
            <div className='px-10 grid grid-cols-4 justify-end gap-10 py-10'>
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
            </div>
            <button className='shadow-2xl cursor-pointer w-64 border border-blue-900 py-1 text-blue-900 mx-auto block mb-10 hover:bg-blue-900 hover:border-white hover:text-white'>Load More</button>
        </div>
    )
}

export default Home