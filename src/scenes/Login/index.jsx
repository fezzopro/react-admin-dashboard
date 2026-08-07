import { Box, Button, TextField } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Formik } from 'formik';
import * as yup from 'yup';
import Header from '../../components/Shared/Header/Header';

const initialValues = {
  email: '',
  password: '',
};

const userSchema = yup.object().shape({
  email: yup.string().email('Invalid Email').required('Required'),
  password: yup.string().required('Required'),
});

const Login = () => {
  const isNonMobile = useMediaQuery('(min-width: 600px)');

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  return (
    <Box m="20px">
      <Header title="LOGIN USER" subTitle="Login To Dashboard" />

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
                type="password"
                label="Password"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.password}
                name="password"
                error={!!touched.password && !!errors.password}
                helperText={touched.password && errors.password}
                autoComplete="disabled"
                sx={{
                  gridColumn: 'span 4',
                }}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Login
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default Login;
