import React from 'react';
import ReactStars from "react-stars";
import { FaStar } from "react-icons/fa";
import Rating from './RatingStar';

const RestaurantCard = ({restaurant}) => {

  return (
    <div className='w-64 shadow-2xl'>
      <img className="h-56 object-contain" src={restaurant.photos} alt={restaurant.name} />
      <div className='px-2 mb-2'>
        <p className='line-clamp-2 leading-5 my-2'>{restaurant.name}</p>
        <div className="flex items-center gap-1">
          <Rating value={restaurant.rating} />
        </div>
        <div className='flex justify-between'>
          <p>{`${restaurant.categories}, ${restaurant.price_range}`}</p>
          <div className='flex gap-1 items-center'>
            <div className={`w-3 h-3 ${restaurant.is_open? 'bg-green-600' : 'bg-red-500'} rounded-full`}></div>
            <p className='-mt-1'>{restaurant.is_open? 'Open Now' : 'Closed'}</p>
          </div>
        </div>
      </div>
        <button className='cursor-pointer text-center font-semibold bg-blue-900 text-white w-full py-1'>
          Learn More
        </button>
    </div>
  )
}

export default RestaurantCard