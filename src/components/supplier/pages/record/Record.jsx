import React, { useState } from 'react';
import RecordCard from './RecordCard';
import record from './record.json';
import SelectOpt from './SelectOpt';

function Record() {
  const [status, setStatus] = useState("All");

  // Filter records based on selected status
  const filteredRecords = record.filter((rec) => {
    // If status is "All", show all records
    if (status === "All") return true;
    // Filter records based on the selected status
    return rec.status === status;
  });

  return (
    <div>
      <SelectOpt status={status} setStatus={setStatus} />
      <div className='flex flex-wrap'>
        {/* Map through filtered records and pass each record to RecordCard */}
        {filteredRecords.map((rec, index) => (
          <RecordCard key={index} record={rec} />
        ))}
      </div>
    </div>
  );
}

export default Record;

