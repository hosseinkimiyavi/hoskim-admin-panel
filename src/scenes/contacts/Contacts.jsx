import { Box } from "@mui/material";
import { tokens } from "../../Theme/theme";
import Header from "../../Components/Header";
import { DataGrid,GridToolbar } from "@mui/x-data-grid";
import { mockDataContacts } from "../../Data/mockData.js";
import { useTheme } from "@mui/material";

function Contacts() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "registrarId", headerName: "Registrar ID", flex: 0.5 },
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
    { field: "address", headerName: "Address", flex: 1 },
    { field: "city", headerName: "City", flex: 1 },
    { field: "zipCode", headerName: "ZipCode", flex: 1 },
  ];

  return (
    <>
      <Box m="20px">
        <Header
          title="CONTACTS"
          subtitle="List of Contacts for Future Reference"
        />
        <Box m="40px 0 0 0" height="80vh">
          <DataGrid
            rows={mockDataContacts}
            columns={columns}
            scrollbarSize={0}
            slots={{ toolbar: GridToolbar }}
            slotProps={{
              toolbar: {
                showQuickFilter: true, // سرچ سریع بالای جدول
                quickFilterProps: { debounceMs: 500 }, // با تاخیر برای سرچ
              },
            }}
            sx={{
              border: "none",

              // حذف خطوط
              "--DataGrid-rowBorderColor": "transparent",
              "--DataGrid-cellBorder": "0px",

              // سلول‌ها
              "& .MuiDataGrid-cell": {
                borderBottom: "none",
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
              "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                color: `${colors.grey[100]} !important`,
              },

            }}
          />
        </Box>
      </Box>
    </>
  );
}

export default Contacts;
