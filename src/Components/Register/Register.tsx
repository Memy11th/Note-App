import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import formikValues from '../../interfaces/formikInterfaces'
import { Link } from 'react-router-dom'
import axios from 'axios'


export default function Register() {
   
   // form validation and values section

   const validationSchema = yup.object().shape({
      name:yup.string().min(2,'The entered name is too short ').max(20,'The entered name is too long').required('You must enter a name').matches(/^[A-Z][a-z]*(\s[A-Z][a-z]*)*$/, 'The entered name must start with an upperCase letter'),
      email: yup.string().email('Please enter a valid email form').required('Please the email is required'),
      password:yup.string().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,'Password must at least contain 8 characters with at least on lowercase and uppercase letters and a number').required('password is required'),
      age:yup.string().min(1,'You\'re too young '),
      phone:yup.string().min(11,'the entered phone num is too short').required('You must enter a phone number')
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
   function handleSubmit(formikValues:formikValues){
      return axios.post('https://note-sigma-black.vercel.app/api/v1/users/signUp',formikValues)
      .then((Response)=>Response)
      .catch((Error)=>Error)
   }

   return <>
   <div className=' mx-auto w-75'>
      <form onSubmit={formik.handleSubmit} className="w-100 mx-auto">
         <div className=" mx-auto text-center  ">
            <label className="d-block text-start w-100 " htmlFor="name">Name</label>
            <input autoFocus onChange={formik.handleChange} onBlur={formik.handleBlur} className="w-100 border-2 border-primary p-2 rounded "
               type="text" id="name" name="name" placeholder="Ahmed Muhammed" />
               <p className="text-danger">{formik.errors.name && formik.touched.name ? formik.errors.name : null }</p>
         </div>
         
         <div className="mx-auto text-center">
            <label className="d-block text-start" htmlFor="email">Email</label>
            <input onChange={formik.handleChange} onBlur={formik.handleBlur} className="w-100"
               type="email" id="email" name="email" placeholder="Ahmed@example.com" />  
            <p className="text-danger">{formik.errors.email && formik.touched.email ? formik.errors.email : null }</p>

               
         </div>
         <div className="mx-auto text-center">
            <label className="d-block text-start" htmlFor="password">Password</label>
            <input onChange={formik.handleChange} onBlur={formik.handleBlur} className="w-100"
               type="password" id="password" name="password" placeholder="********" />
            <p className="text-danger">{formik.errors.password && formik.touched.password ? formik.errors.password : null }</p>

         </div>

         <div className="mx-auto text-center">
            <label className="d-block text-start" htmlFor="name">Phone number</label>
            <input onChange={formik.handleChange} onBlur={formik.handleBlur} className="w-100"
               type="text" id="phone" name="phone" placeholder="01*********" />
               <p className="text-danger">{formik.errors.phone && formik.touched.phone ? formik.errors.phone : null }</p>

         </div>
         <div className="mx-auto text-center">
            <label className="d-block text-start fw-semibold " htmlFor="age">Age</label>
            <input onChange={formik.handleChange} onBlur={formik.handleBlur} className="w-100"
               type="age" id="age" name="age" placeholder="18" />
   <p className="text-danger">{formik.errors.age && formik.touched.age ? formik.errors.age : null }</p>

         </div>
         <div className='mx-auto text-center'>
         <button
            className="d-block mx-auto btn btn-primary w-100 "
            type="submit">
               Submit
               </button>
               <Link className='' > <span className=''>Already have an account ? login</span></Link>
         </div>
        
         </form>
   </div>


   </>
}
