import React from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import Button from '../components/Button';
import { TextField } from '@mui/material';

const FormSchema = Yup.object(
    {
        firstName: Yup.string().required(),
        lastName: Yup.string().required(),
        email: Yup.string().email('Must be a valid email format.').required(),
        password: Yup.string().required(),
        confirm_pass: Yup.string().required().oneOf([Yup.ref('password'), null], 'Passwords must match.')
    }
)

export default function ProfileForm({user}){
    const initialValues = {
        firstName: user?.firstName ?? '',
        lastName: user?.lastName ?? '',
        email: user?.email ?? '',
        password: '',
        confirm_pass: ''
    }

    const handleSubmit = (values, resetForm) => {
        if (user){
            console.log('Editing profile.')
        }else{
            console.log('Creating profile.')
        }
        console.log(values)
        resetForm(initialValues)
    }

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: FormSchema,
        onSubmit: (values, {resetForm}) => {handleSubmit(values, resetForm)},
        enableReinitialize: true
    })

    return(
        <form onSubmit={formik.handleSubmit}>
            <TextField
                id = 'firstName'
                name = 'firstName'
                fullWidth
                sx={{mb:2, mt:2}}
                label = 'First Name'
                placeholder= 'First Name'
                value = {formik.values.firstName}
                onChange = {formik.handleChange}
                error = {formik.touched.firstName && Boolean(formik.errors.firstName)}
                helperText = {formik.touched.firstName && formik.errors.firstName}
            />
            <TextField
                id = 'lastName'
                name = 'lastName'
                fullWidth
                sx={{mb:2, mt:2}}
                label = 'Last Name'
                placeholder= 'Last Name'
                value = {formik.values.lastName}
                onChange = {formik.handleChange}
                error = {formik.touched.lastName && Boolean(formik.errors.lastName)}
                helperText = {formik.touched.lastName && formik.errors.lastName}
            />
            <TextField
                id = 'email'
                name = 'email'
                fullWidth
                sx={{mb:2, mt:2}}
                label = 'Email'
                placeholder= 'Email'
                value = {formik.values.email}
                onChange = {formik.handleChange}
                error = {formik.touched.email && Boolean(formik.errors.email)}
                helperText = {formik.touched.email && formik.errors.email}
            />
            <TextField
                id = 'password'
                name = 'password'
                fullWidth
                sx={{mb:2, mt:2}}
                label = 'Password'
                placeholder= 'Password'
                value = {formik.values.password}
                onChange = {formik.handleChange}
                error = {formik.touched.password && Boolean(formik.errors.password)}
                helperText = {formik.touched.password && formik.errors.password}
            />
            <TextField
                id = 'confirm_pass'
                name = 'confirm_pass'
                fullWidth
                sx={{mb:2, mt:2}}
                label = 'Confirm Password'
                placeholder= 'Confirm Password'
                value = {formik.values.confirm_pass}
                onChange = {formik.handleChange}
                error = {formik.touched.confirm_pass && Boolean(formik.errors.confirm_pass)}
                helperText = {formik.touched.confirm_pass && formik.errors.confirm_pass}
            />
            <Button type='submit' sx={{width:'100%'}}>{user ? 'Edit Profile' : 'Register'}</Button>
        </form>
    )
}