import React from 'react'
import { tokens } from '../Theme/theme';
import { Box, Typography, useTheme } from '@mui/material'; 

function Footer() {
    const theme = useTheme();  
    const colors = tokens(theme.palette.mode); 
  return (
    <Box textAlign="center" width="50%" p="10px" m="auto" backgroundColor={colors.greenAccent[500]} borderRadius="5px" sx={{ position: "relative", marginTop: "20px" }}>
        <Typography variant="h5" color={colors.grey[100]} fontWeight="bold">
            Developed By Hossein Kimiyavi
        </Typography>
    </Box>
  )
}

export default Footer