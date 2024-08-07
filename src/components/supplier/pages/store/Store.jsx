import React, { useState, useEffect, useRef } from 'react';
import data from './storeData.json'; // Assuming data is imported from a JSON file

function Store() {
  const [searchStore, setSearchTerm] = useState('');
  const [clicked, setClicked] = useState(false);
  const [storeId, setStoreId] = useState('');

  const divRef = useRef(null);
  const overlayRef = useRef(null);

  // Filter items based on search term
  const filteredItems = data.filter((item) =>
    item.store_name.toLowerCase().includes(searchStore.toLowerCase()) ||
    item.store_id.toLowerCase().includes(searchStore.toLowerCase())
  );

  const handleClick = (store_id) => {
    if (storeId === store_id) {
      setClicked(!clicked);
    } else {
      setStoreId(store_id);
      setClicked(true);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (divRef.current && !divRef.current.contains(event.target) &&
          overlayRef.current && !overlayRef.current.contains(event.target)) {
        setClicked(false);
      }
    };

    // Attach the event listener
    document.addEventListener('mousedown', handleClickOutside);

    // Clean up the event listener
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [clicked]);

  const clickedStore = data.find(store => store.store_id === storeId) || {};

  return (
    <div>
      {clicked && (
        <div
          ref={overlayRef}
          className="fixed inset-0 bg-black opacity-50 z-10"
        />
      )}
      <div
        ref={divRef}
        className={`w-[300px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 bg-gray-200 ${!clicked ? 'hidden' : ''}`}
      >
        <button 
          className='absolute top-2 right-2'
          onClick={() => setClicked(false)}
        >
          close
        </button>
        <div className='flex flex-col bg-gray-400 p-4 rounded-xl shadow-md text-center min-h-[200px]'>
          <h2 className='text-lg font-semibold'>{clickedStore.store_name}</h2>
          <p>Store ID: {clickedStore.store_id}</p>
          <p>Location: {clickedStore.location}</p>
          <p>Distance: {clickedStore.distance} km</p>
          <p>Speciality: {clickedStore.important_details}</p>
        </div>
      </div>
      <div className='p-4'>
        <div className='flex justify-between items-center mb-4'>
          <h1 className='text-xl font-bold'>Store</h1>
          <input
            type='text'
            placeholder='Search by store name or store id'
            className='border p-2 rounded-md w-1/3'
            value={searchStore}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className='flex flex-wrap'>
          {filteredItems.map((store) => (
            <div
              key={store.store_id}
              onClick={() => handleClick(store.store_id)}
              className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2'
            >
              <div className='flex flex-col bg-gray-200 p-4 rounded-md shadow-md text-center min-h-[200px] cursor-pointer hover:bg-gray-300'>
                <h2 className='text-lg font-semibold'>{store.store_name}</h2>
                <p>Store ID: {store.store_id}</p>
                <p>Location: {store.location}</p>
                <p>Distance: {store.distance} km</p>
                <p>Speciality: {store.important_details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Store;
