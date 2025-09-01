import { Box, Grid } from '@mui/material'
import React from 'react'
import LineChart from '../../Components/LineChart'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'

function Line() {
  return (
    <Box m="20px">
      <Header title="Line Chart" subtitle="Simple Line Chart" />
      <Grid container height="75vh" >
       <LineChart />
      </Grid>
      <Footer />

    </Box>
  )
}

export default Line