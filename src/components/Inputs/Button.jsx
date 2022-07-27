import * as React from 'react';
import Button from '@mui/material/Button';

export default function CustomButton(props) {
  return (
      <Button {...props}>
        {props.children}
      </Button>
  );
}
