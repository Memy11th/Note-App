import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import formikValues from '../../interfaces/formikInterfaces'
import { Link } from 'react-router-dom'


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
      console.log(formikValues)
   }

   return <>
   <div className='container p-8 mx-auto'>
      <form onSubmit={formik.handleSubmit} className="w-full text-center max-w-sm mx-auto bg-white p-8 rounded-md shadow-2xl">
         <div className="mb-3">
            <label className="d-block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
            <input onChange={formik.handleChange} onBlur={formik.handleBlur} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
               type="text" id="name" name="name" placeholder="Ahmed Muhammed" />
               <p className="mt-2 text-sm text-red-600 dark:text-red-500">{formik.errors.name && formik.touched.name ? formik.errors.name : null }</p>
         </div>
         <div className="mb-3">
            <label className="d-block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Phone number</label>
            <input onChange={formik.handleChange} onBlur={formik.handleBlur} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
               type="text" id="phone" name="phone" placeholder="01*********" />
                           <p className="mt-2 text-sm text-red-600 dark:text-red-500">{formik.errors.phone && formik.touched.phone ? formik.errors.phone : null }</p>

         </div>
         <div className="mb-3">
            <label className="d-block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
            <input onChange={formik.handleChange} onBlur={formik.handleBlur} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
               type="email" id="email" name="email" placeholder="Ahmed@example.com" />  
            <p className="mt-2 text-sm text-red-600 dark:text-red-500">{formik.errors.email && formik.touched.email ? formik.errors.email : null }</p>

               
         </div>
         <div className="mb-3">
            <label className="d-block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
            <input onChange={formik.handleChange} onBlur={formik.handleBlur} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
               type="password" id="password" name="password" placeholder="********" />
            <p className="mt-2 text-sm text-red-600 dark:text-red-500">{formik.errors.password && formik.touched.password ? formik.errors.password : null }</p>

         </div>
         <div className="mb-3">
            <label className="d-block text-gray-700 text-sm font-bold mb-2" htmlFor="rePassword">Confirm Password</label>
            <input onChange={formik.handleChange} onBlur={formik.handleBlur} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
               type="password" id="rePassword" name="rePassword" placeholder="********" />
   <p className="mt-2 text-sm text-red-600 dark:text-red-500">{formik.errors.rePassword && formik.touched.rePassword ? formik.errors.rePassword : null }</p>

         </div>
         <button
            className="w-full bg-indigo-500 text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300"
            type="submit">
               Submit
               </button>
               <Link className=' underline decoration-sky-500 ' to={'/login'}> <span className='text-sky-600'>Already have an account ? login</span></Link>
         </form>
   </div>


   </>
}
