import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectOpt({ status, setStatus }) {
  const handleChange = (event) => {
    setStatus(event.target.value);
  };

  return (
    <Box className="p-4 max-w-sm mx-auto bg-white rounded-lg shadow-md">
      <FormControl fullWidth>
        <InputLabel id="status-select-label">Status</InputLabel>
        <Select
          labelId="status-select-label"
          id="status-select"
          value={status}
          label="Status"
          onChange={handleChange}
        >
          <MenuItem value="All">All</MenuItem>
          <MenuItem value="In Transit">In Transit</MenuItem>
          <MenuItem value="Dispatched">Dispatched</MenuItem>
          <MenuItem value="Pending">Pending</MenuItem>
          <MenuItem value="Completed">Completed</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

