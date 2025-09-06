import { Box, Grid, Typography, useTheme } from "@mui/material";
import { tokens } from "../../Theme/theme";
import Header from "../../Components/Header";
import { DataGrid } from "@mui/x-data-grid";
import { mockDataTeam } from "../../Data/mockData.js";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Footer from "../../Components/Footer.jsx";

function Team() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      callClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone",
      headerName: "Phone",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "access",
      headerName: "Access Level",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            width="70%"
            p="5px"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              m: "0 auto",
            }}
            backgroundColor={
              access === "admin"
                ? colors.greenAccent[600]
                : colors.greenAccent[700]
            }
            borderRadius="4px"
          >
            {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
            {access === "manager" && <SecurityOutlinedIcon />}
            {access === "user" && <LockOpenOutlinedIcon />}
            <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
              {access}
            </Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <>
      <Box m="20px">
        <Header title="TEAM" subtitle="Managing the Team Members" />

        <Box
          mt="40px"
          height="75vh"
          sx={{
            width: "100%",
            overflowX: "auto", // 👈 فعال‌سازی اسکرول افقی
          }}
        >
          <DataGrid
            rows={mockDataTeam}
            columns={columns}
            scrollbarSize={0}
            sx={{
              border: "none",
              minWidth: "800px",

              // حذف خطوط
              "--DataGrid-rowBorderColor": "transparent",
              "--DataGrid-cellBorder": "0px",

              // سلول‌ها
              "& .MuiDataGrid-cell": {
                borderBottom: "none",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              },

              // ردیف‌ها
              "& .MuiDataGrid-row": {
                borderBottom: "none",
              },

              // ستون خاص
              "& .name-column--cell": {
                color: colors.greenAccent[300],
              },

              // هدر جدول
              "& .MuiDataGrid-columnHeader": {
                backgroundColor: colors.blueAccent[700],
                borderBottom: "none",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              },

              // بک‌گراند بدنه
              "& .MuiDataGrid-virtualScroller": {
                backgroundColor: colors.primary[400],
              },

              // فوتر
              "& .MuiDataGrid-footerContainer": {
                backgroundColor: colors.blueAccent[700],
                borderTop: "none",
              
              },
            }}
          />
        </Box>

        <Footer />
      </Box>
    </>
  );
}

export default Team;
