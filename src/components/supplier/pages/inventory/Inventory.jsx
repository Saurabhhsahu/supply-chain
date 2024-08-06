import React, { useState } from 'react';
import data from './data.json'; // Assuming data is imported from a JSON file
import { ReactComponent as DummySvg } from '../../../../assets/dummy.svg';

function Inventory() {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter items based on search term
  const filteredItems = data.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='p-4'>
      <div className='flex justify-between items-center mb-4'>
        <h1 className='text-xl font-bold'>Inventory</h1>
        <input
          type='text'
          placeholder='Search by product name'
          className='border p-2 rounded-md w-1/3'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className='flex flex-wrap'>
        {filteredItems.map((product, index) => (
          <div
            key={index}
            className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2'
          >
            <div className='bg-gray-200 p-4 rounded-md shadow-md text-center'>
              <div className='flex justify-center items-center mb-4'>
                <DummySvg className='w-full h-[100px] bg-red-100' />
              </div>
              <h2 className='text-lg font-semibold'>{product.name}</h2>
              <p>Product ID: {product.product_id}</p>
              <p>Price: ${product.price}</p>
              <p>Quantity: {product.quantity}</p>
              <p>Ratings: {product.ratings}</p>
              <p>Manufacturing Date: {product.manufacturing_date}</p>
              <p>Expiry Date: {product.expiry_date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Inventory;
