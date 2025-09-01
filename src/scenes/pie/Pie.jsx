import { Box, Grid } from "@mui/material"
import PieChart from "../../Components/PieChart"
import Header from "../../Components/Header"

function Pie() {
  return (
    <>
    <Box m="20px">
      <Header title="PIE CHART" subtitle="Simple Pie Chart" />
      <Grid container height="75vh" >
        <PieChart />
      </Grid>

    </Box>
    </>
  )
}

export default Pie