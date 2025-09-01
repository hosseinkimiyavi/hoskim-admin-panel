import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Header from "../../components/Header";
import BarChart from "./BarChart";

function Bar() {
  return (
    <>
      <Box m="20px">
        <Header title="BAR CHART" subtitle="Simple Bar Chart" />


        {/**Bar Chart */}
        <Grid container height="75vh">
          <BarChart />
        </Grid>
      </Box>
    </>
  );
}

export default Bar;
