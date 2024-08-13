import React, { useState, useEffect } from 'react';
import { ReactComponent as DummySvg } from '../../../../assets/dummy.svg';
import data from './data.json'

function Inventory() {
  const [searchTerm, setSearchTerm] = useState('');
  // const [data,setData]  = useState([]);

  // useEffect((() => {
  //   const fetchData = async() => {
  //     try {
  //       const response = await fetch('http://192.168.60.90:8080/items');
  //       const currData = await response.json();
  //       console.log(currData);
  //       console.log("successful");
        
  //       setData(currData);
  //     } 
  //     catch (error) {
  //       console.error('Error fetching the data', error);
  //     }
  //   };

  //   fetchData();
  // }),[])

  const filteredItems = data.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='p-4 bg-[#eceff1]'>
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
            <div className='p-4 rounded-md shadow-md text-center cursor-pointer  bg-gradient-to-r from-[#e0e5ec] via-[#a8b4c3] to-[#e0e5ec] p-6 rounded-lg shadow-md transition-all duration-300 hover:from-[#c0c9d1] hover:via-[#8a9ba9] hover:to-[#c0c9d1]'>
              <div className='flex justify-center items-center mb-4'>
                <DummySvg className='w-full h-[100px]' />
              </div>
              <h2 className='text-lg font-semibold'>{product.name}</h2>
              <p>Product ID: {product.productId}</p>
              <p>Price: ${product.price}</p>
              <p>Quantity: {product.quantity}</p>
              <p>Manufacturing Date: {product.mfgDate}</p>
              <p>Expiry Date: {product.expiryDate}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Inventory;
