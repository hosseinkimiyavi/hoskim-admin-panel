import { Box, Grid, useTheme } from "@mui/material"
import Header from "../../Components/Header"
import GeographyChart from "../../Components/GeographyChart"
import { tokens } from "../../Theme/theme";
import Footer from "../../Components/Footer";

function Geography() {
      const theme = useTheme();
      const colors = tokens(theme.palette.mode);
  return (
    
      <Box m="20px">
      <Header title="Geography Chart" subtitle="Simple Geography Chart" />
        <Grid height="75vh" border={`1px solid ${colors.grey[100]}`}
        borderRadius="4px"
        >
          <GeographyChart isDashboard={false} />  

        </Grid>   
        <Footer />
        </Box> 
    
  )
}

export default Geography