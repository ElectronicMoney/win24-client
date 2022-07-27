import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function CustomPagination(props) {

  return (
    <Stack spacing={2}>
      <Pagination
        count={ Math.ceil(props.total/props.size) } 
        page={props.page} 
        onChange={props.onChange}
      />
    </Stack>
  );
}
