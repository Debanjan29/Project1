import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#6032a8' : '#becacf',
  ...theme.typography.body2,
  color:'#990808',
  padding: theme.spacing(1),
  textAlign: 'center',
  //color: theme.palette.text.primary,
}));

export default function BasicStack() {
  return (
    <div className="side w-48 ">
    <Box sx={{ width: '100%' }}>
      <Stack spacing={2}>
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
        <div className="side1 bg-stone-800"><Item>Item 1</Item></div>
        <div className="side1 bg-stone-800"><Item>Item 2</Item></div>
        <div className="side1 bg-stone-800"><Item>Item 3</Item></div>
        <div className="side1 bg-stone-800"><Item>Item 1</Item></div>
        <div className="side1 bg-stone-800"><Item>Item 2</Item></div>
        <div className="side1 bg-stone-800"><Item>Item 3</Item></div>
      </Stack>
    </Box>
    </div>
  );
}