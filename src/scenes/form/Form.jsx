import { Box, Button, TextField,Grid, useTheme } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import { tokens } from "../../Theme/theme";
import Footer from "../../Components/Footer";



const initialValues = {
  firstName:"",
  lastName:"",
  email:"",
  contact:"",
  address1:"", 
  address2:"", 
}

const phoneRegExp = /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;


const userSchema = yup.object().shape({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  contact: yup.string().matches(phoneRegExp, "Phone number is not valid").required("Contact is required"),
  address1: yup.string().required("Address 1 is required"),
  address2: yup.string().required("Address 2 is required"),
})

function Form() {
  const theme = useTheme();
const colors = tokens(theme.palette.mode);

  // const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values) => {
    console.log(values);
  }

  return (
    <>
      <Box m="20px">
      <Header title="CREATE USER" subtitle="Create a New User Profile" />
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={userSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3} columns={{ xs: 4, sm: 8, md: 12 }}>
              {/* First Name */}
              <Grid item size={{ xs: 12, sm: 4 }}>
                <TextField
                  fullWidth
                  variant="filled"
                  label="First Name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.firstName}
                  name="firstName"
                  error={!!touched.firstName && !!errors.firstName}
                  helperText={touched.firstName && errors.firstName}
                />
              </Grid>

              {/* Last Name */}
              <Grid item size={{ xs: 12, sm: 4 }}>
                <TextField
                  fullWidth
                  variant="filled"
                  label="Last Name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.lastName}
                  name="lastName"
                  error={!!touched.lastName && !!errors.lastName}
                  helperText={touched.lastName && errors.lastName}
                />
              </Grid>

              {/* Email */}
              <Grid item size={{ xs: 12, sm: 8 }}>
                <TextField
                  fullWidth
                  variant="filled"
                  label="Email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.email}
                  name="email"
                  error={!!touched.email && !!errors.email}
                  helperText={touched.email && errors.email}
                />
              </Grid>

              {/* Contact */}
              <Grid item size={{ xs: 12, sm: 8 }}>
                <TextField
                  fullWidth
                  variant="filled"
                  label="Contact"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.contact}
                  name="contact"
                  error={!!touched.contact && !!errors.contact}
                  helperText={touched.contact && errors.contact}
                />
              </Grid>

              {/* Address 1 */}
              <Grid item size={{ xs: 10 }}>
                <TextField
                  fullWidth
                  variant="filled"
                  label="Address 1"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.address1}
                  name="address1"
                  error={!!touched.address1 && !!errors.address1}
                  helperText={touched.address1 && errors.address1}
                />
              </Grid>

              {/* Address 2 */}
              <Grid item size={{ xs: 10 }}>
                <TextField
                  fullWidth
                  variant="filled"
                  label="Address 2"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.address2}
                  name="address2"
                  error={!!touched.address2 && !!errors.address2}
                  helperText={touched.address2 && errors.address2}
                />
              </Grid>

              {/* Submit button */}
              <Grid item size={{ xs: 12 }} >
                <Button type="submit" sx={{color:colors.primary[500],backgroundColor:colors.greenAccent[500],fontWeight:600,"&:hover":{backgroundColor:colors.greenAccent[600]}}}  variant="contained">
                  Create New User
                </Button>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
      <Footer />
    </Box>
    </>
  );
}

export default Form;
