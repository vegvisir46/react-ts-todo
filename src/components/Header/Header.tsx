import React from 'react';
import {Box, Typography} from "@mui/material";

export const Header = () => {
  return (
    <Box textAlign='left'>
      <Typography sx={{ fontSize: 35 }} variant="h1" component="h1" gutterBottom>
        Todo list
      </Typography>
    </Box>
  )
};