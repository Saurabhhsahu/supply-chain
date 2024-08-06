import React, { useState } from 'react';
import data from './storeData.json'; // Assuming data is imported from a JSON file

function Store() {
  const [searchStore, setSearchTerm] = useState('');

  // Filter items based on search term
  const filteredItems = data.filter((item) =>
    item.store_name.toLowerCase().includes(searchStore.toLowerCase()) ||
  item.store_id.toLowerCase().includes(searchStore.toLowerCase())
  );

  return (
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
        {filteredItems.map((store, index) => (
          <div
            key={index}
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
  );
}

export default Store;