import { tokens } from "../Theme/theme";
import { Box, Grid, Typography, useTheme } from "@mui/material";

import ProgressCircle from "./ProgressCircle";

function StatBox({ title, subtitle, icon, progress, increase }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <>
      <Box width="100%" m="0 30px">
        <Box container justifyContent="space-between" alignItems="center">
          <Box item>
            {icon}
            <Typography
              variant="h4"
              fontWeight="bold"
              sx={{ color: colors.grey[100] }}
            >
              {title}
            </Typography>
          </Box>
          <Box item>
            <ProgressCircle progress={progress} size="60" />
          </Box>
          <Box item display="flex" justifyContent="space-between">
            <Typography
              variant="h5"
              fontWeight="bold"
              sx={{ color: colors.greenAccent[500] }}
            >
              {subtitle}
            </Typography>
            <Typography
              variant="h5"
              fontStyle="italic"
              sx={{ color: colors.greenAccent[600] }}
            >
              {increase}
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default StatBox;
