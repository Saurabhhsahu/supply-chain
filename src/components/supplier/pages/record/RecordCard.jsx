import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function RecordCard({ record }) {
  const orderedItems = record.orderItem;
  let size = 0;
  const fixed = 40;

  // Filter and truncate the ordered items based on the condition
  const filteredItems = [];
  for (let i = 0; i < orderedItems.length; i++) {
    size += orderedItems[i].length;
    if (size > fixed) {
      filteredItems.push("...");
      break;
    }
    filteredItems.push(orderedItems[i]);
  }

  return (
    <Box className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
      <Card className="bg-gray-500 shadow-lg border border-gray-300 cursor-pointer">
        <CardContent >
          <Typography variant="h5" component="div" className='text-center'>
            {record.orderId}
          </Typography>
          <Typography variant='h6' className="mb-1.5 text-gray-600">
            {record.source} - {record.destination}
          </Typography>
          <Typography variant="body2">
            Order Date: {record.orderDate}
          </Typography>
          <div>
            <Typography variant="body2" component="div" className='flex' >
              Ordered Items : 
              {filteredItems.map((item, index) => (
                <Typography key={index} variant="body2">
                  {item},
                </Typography>
              ))}
            </Typography>
          </div>
  <div className="mt-8"> 
    <Typography variant="body2" className='justify-center bg-red-300 py-1 px-2 rounded-md border text-center mx-auto cursor-pointer'>
    {record.status}
          </Typography>
  </div>            
        </CardContent>
      </Card>
    </Box>
  );
}




