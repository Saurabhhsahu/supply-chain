import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function RecordCard({ record }) {
  return (
    <Box className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
      <Card className="bg-gray-500 shadow-lg border border-gray-300">
        <CardContent className='text-center'>
            <Typography variant="h5" component="div">
                {record.orderId}
            </Typography>
            <Typography variant='h6' className="mb-1.5 text-gray-600">
                {record.from} - {record.to}
            </Typography>
            <Typography variant="body2">
                {record.deliveryPerson}
            </Typography>
            <Typography variant="body2">
                Expected delivery: {record.expectedDeliveryDate}
            </Typography>
            <Typography variant="body2" className='bg-red-300 inline-block py-1 px-2 rounded-md border text-center text-gray-600 mt-2'>
                {record.status}
            </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}



