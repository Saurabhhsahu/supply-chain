import React, { useState } from 'react';
import RecordCard from './RecordCard';
import record from './record.json';
import SelectOpt from './SelectOpt';
import TextField from '@mui/material/TextField';

function Record() {
  const [status, setStatus] = useState("All");
  const [search,setSearch] = useState('');

  // Filter records based on selected status
  const filteredRecords = record.filter((rec) => {
    // If status is "All", show all records
    if (status === "All"){

      return rec.orderId.toLowerCase().includes(search.toLowerCase()) || search === '';
    }
    // Filter records based on the selected status
    return (rec.status.toLowerCase() === status.toLowerCase()) && (rec.orderId.toLowerCase().includes(search.toLowerCase()) || search == "");
  });

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between p-3">
        <SelectOpt status={status} setStatus={setStatus} />
        <TextField 
          id="outlined-basic" 
          label="Search" 
          variant="outlined" 
          value={search}
          onChange={(e) => setSearch(e.target.value)
          }
        />
      </div>
      <div className='flex flex-wrap'>
        {/* Map through filtered records and pass each record to RecordCard */}
        {filteredRecords.map((rec, index) => (
          <RecordCard key={index} record={rec}/>
        ))}
      </div>
    </div>
  );
}

export default Record;

