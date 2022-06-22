import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function CustomButton(props) {
  return (
    <Stack direction="row" spacing={2}>
      <Button {...props}>
        {props.children}
      </Button>
    </Stack>
  );
}
