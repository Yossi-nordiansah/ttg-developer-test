import axios from 'axios';
import React, { useEffect, useState } from 'react'

const ModalDetailRestaurant = ({ isOpen, close, id }) => {

  const [isLoading, setIsLoading] = useState(false);

  const detailDataRestaurant = async () => {
    setIsLoading(true)
    try {
      const res = await axios.get(`http://localhost:5000/restaurants/${id}`)
    } catch (error) {

    }
  };

  useEffect(() => {

  }, []);

  const handleOverlayClick = (e) => {
    // pastikan klik berasal dari overlay, bukan dari isi modal
    if (e.target === e.currentTarget) {
      close();
    }
  };

  if (!isOpen) return;

  return (
    <div className='fixed inset-0 bg-black/50 z-50 flex items-center justify-center'>
      <div className='w-[75%]'>
        <img src="" alt="" />
      </div>
    </div>
  )
}

export default ModalDetailRestaurant