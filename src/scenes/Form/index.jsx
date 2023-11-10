import { Box, Button, TextField } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Formik } from 'formik';
import * as yup from 'yup';
import Header from '../../components/Shared/Header/Header';

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  contact: '',
  address1: '',
  address2: '',
};

const phoneRegExp = /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const userSchema = yup.object().shape({
  firstName: yup.string().required('Required'),
  lastName: yup.string().required('Required'),
  email: yup.string().email('Invalid Email').required('Required'),
  contact: yup.string().matches(phoneRegExp, 'Phone Number is Not Valid').required('Required'),
  address1: yup.string().required('Required'),
  address2: yup.string().required('Required'),
});

const Form = () => {
  const isNonMobile = useMediaQuery('(min-width: 600px)');

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  return (
    <Box m="20px">
      <Header title="CREATE USER" subTitle="Create a new user Profile" />

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={userSchema}
      >
        {({
          values, errors, touched, handleBlur, handleChange, handleSubmit, handleReset,
        }) => (
          <form onSubmit={handleSubmit} onReset={handleReset}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeate(4, minmax(0, 1fr))"
              sx={{
                '& div': { gridColumn: isNonMobile ? undefined : 'span 4' },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="First Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.firstName}
                name="firstName"
                error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
                autoComplete="disabled"
                sx={{
                  gridColumn: 'span 2',
                }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Last Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.lastName}
                name="lastName"
                error={!!touched.lastName && !!errors.lastName}
                helperText={touched.lastName && errors.lastName}
                autoComplete="disabled"
                sx={{
                  gridColumn: 'span 2',
                }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                autoComplete="disabled"
                sx={{
                  gridColumn: 'span 4',
                }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Contact"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.contact}
                name="contact"
                error={!!touched.contact && !!errors.contact}
                helperText={touched.contact && errors.contact}
                autoComplete="disabled"
                sx={{
                  gridColumn: 'span 4',
                }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Address 1"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address1}
                name="address1"
                error={!!touched.address1 && !!errors.address1}
                helperText={touched.coaddress1ntact && errors.address1}
                autoComplete="disabled"
                sx={{
                  gridColumn: 'span 4',
                }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Address 2"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address2}
                name="address2"
                error={!!touched.address2 && !!errors.address2}
                helperText={touched.address2 && errors.address2}
                autoComplete="disabled"
                sx={{
                  gridColumn: 'span 4',
                }}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Create New User
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default Form;
