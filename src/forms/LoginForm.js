import React, {useContext, useState, useEffect} from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import Button from '../components/Button';
import { TextField } from '@mui/material';
import useLogin from '../hooks/useLogin'
import Error from '../components/Error'
import {AppContext} from '../context/AppContext'

const FormSchema = Yup.object(
    {
        email: Yup.string().email('Must be a valid email format.').required(),
        password: Yup.string().required()
    }
)

const initialValues={
    email: '',
    password: ''
}

export default function LoginForm(){
    const {setUser} = useContext(AppContext)
    const [loginCreds, setLoginCreds] = useState({})
    const [error, setError] = useState('')

    useLogin(loginCreds, setLoginCreds, setError, setUser)

    const handleSubmit = (values) => {
        console.log(values)
        setLoginCreds(values)
    }

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: FormSchema,
        onSubmit: (values) => {handleSubmit(values)}
    })

    return(
        <form onSubmit={formik.handleSubmit}>
            <TextField
                id = 'email'
                name = 'email'
                fullWidth
                sx={{mb:2, mt:2}}
                label = 'Email'
                placeholder = 'Email'
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
                placeholder = 'Password'
                value = {formik.values.password}
                onChange = {formik.handleChange}
                error = {formik.touched.password && Boolean(formik.errors.password)}
                helperText = {formik.touched.password && formik.errors.password}
            />
            <Button type='submit' sx={{width:'100%'}}>Login</Button>
            <Error>{error}</Error>
        </form>
    )
}