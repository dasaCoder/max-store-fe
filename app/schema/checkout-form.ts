import * as yup from 'yup';

const checkoutFormSchema = yup.object().shape({
    firstName: yup.string().required('First name is required'),
    // lastName: yup.string().required('Last name is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    companyName: yup.string(),
    address: yup.string().required('Address is required'),
    city: yup.string().required('City is required'),
    postalCode: yup.number().required('Postal code is required'),
});

export default checkoutFormSchema;