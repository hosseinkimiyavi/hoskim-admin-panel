import { Box } from "@mui/material";
import { tokens } from "../../Theme/theme";
import Header from "../../Components/Header";
import { mockDataInvoices } from "../../Data/mockData.js";
import { useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import Typography from "@mui/material/Typography";

function Invoices() {
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
      field: "cost",
      headerName: "Cost",
      // type: "number",
      renderCell: (params) => (
        <Typography color={colors.greenAccent[500]}>${params.value}</Typography>
      ),
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
    { field: "date", headerName: "Date", flex: 1 },
  ];

  return (
    <>
      <Box m="20px">
        <Header
          title="INVOICES"
          subtitle="List of Invoices for Future Reference"
        />
        <Box m="40px 0 0 0" height="80vh">
          <DataGrid
            rows={mockDataInvoices}
            columns={columns}
            checkboxSelection
            scrollbarSize={0}
            sx={{
              border: "none",

              // حذف خطوط
              "--DataGrid-rowBorderColor": "transparent",
              "--DataGrid-cellBorder": "0px",

              // سلول‌ها
              "& .MuiDataGrid-cell": {
                borderBottom: "none",
              },
              "& .MuiDataGrid-cell--textLeft": {
                display: "flex",
                justifyContent: "flex-start",
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
              "& .MuiCheckbox-root": {
                color: `${colors.greenAccent[200]} !important`,
              },
            }}
          />
        </Box>
      </Box>
    </>
  );
}

export default Invoices;
