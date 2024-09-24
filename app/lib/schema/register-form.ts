import * as yup from 'yup';

const registerFormSchema = yup.object().shape({
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup.string().required('Password is required').min(6, "Password must be atlease 6 characters long"),
    rePassword: yup.string()
        .required('Re-enter password to confirm')
        .oneOf([yup.ref('password'), ''], 'Passwords must match'),
});

export default registerFormSchema;