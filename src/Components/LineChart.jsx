import { ResponsiveLine } from "@nivo/line";
import { mockLineData as data } from "../Data/mockData";
import { useTheme } from "@mui/material";
import { tokens } from "../Theme/theme";

function LineChart({ isDashboard = false }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <>
      <ResponsiveLine /* or Line for fixed dimensions */
        data={data}
        theme={{
          axis: {
            domain: {
              line: {
                stroke: colors.grey[100],
              },
            },
            legend: {
              text: {
                fill: colors.grey[100],
              },
            },
            ticks: {
              line: {
                stroke: colors.grey[100],
                strokeWidth: 1,
              },
              text: {
                fill: colors.grey[100],
              },
            },
          },
          legends: {
            text: { fill: colors.grey[100] },
          },
          tooltip: {
            container: { color: colors.primary[500] },
          },
        }}
        colors={isDashboard ? { datum: "color" } : { scheme: "nivo" }}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        curve="catmullRom"
        axisBottom={{
          legend: isDashboard ? undefined : "transportation",
          legendOffset: 36,
          legendPosition: "middle",

        }}
        axisLeft={{
          legend: isDashboard ? undefined : "count",
          legendOffset: -40,
           tickValues: 5,
        }}
        enableGridX={false}
        enableGridY={false}
        pointSize={10}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "seriesColor" }}
        pointLabelYOffset={-12}
        enableTouchCrosshair={true}
        useMesh={true}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            translateX: 100,
            itemWidth: 80,
            itemHeight: 22,
            symbolShape: "circle",
          },
        ]}
      />
    </>
  );
}

export default LineChart;
