import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import formikValues from '../../interfaces/formikInterfaces'

export default function Register() {
   
   // form validation and values section

   const validationSchema = yup.object().shape({
      name:yup.string().min(2,'The entered name is too short ').max(20,'The entered name is too long').required('You must enter a name').matches(/^[A-Z][a-z]*(\s[A-Z][a-z]*)*$/, 'The entered name must start with an upperCase letter'),
      email: yup.string().email('Please enter a valid email form').required('Please the email is required'),
      password:yup.string().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,'Password must at least contain 8 characters with at least on lowercase and uppercase letters and a number').required('password is required'),
      age:yup.string().min(1,'You\'re too young '),
      phone:yup.string().min(11,'the entered phone num is too short')
   })
   const formik = useFormik<formikValues>({
      initialValues:{
         name: '' ,
         email:'',
         password:'',
         age: '',
         phone: '',
      },
      validationSchema,
      onSubmit:handleSubmit

   })
   // functions section
   function handleSubmit(){
      console.log('hello')
   }

   return <>


   </>
}
