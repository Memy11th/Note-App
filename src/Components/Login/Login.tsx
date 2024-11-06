import React from 'react';
import { useFormik } from 'formik'
import * as yup from 'yup'
import loginInterfaceForFormik from '../../interfaces/formikLogInInterface'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useRecoilState } from 'recoil';
import { userTokenState } from '../../Atoms/userAtom';

export default function Login() {
   
const [userToken,setUserToken] = useRecoilState(userTokenState)

   interface loginResponse{
      msg:string;
      token:string;
   }

 async  function handleSubmit(formikValues:loginInterfaceForFormik){
      const Response:loginResponse = await axios.post('https://note-sigma-black.vercel.app/api/v1/users/signIn',formikValues)
      .then((Response)=>Response)
      .catch((Error)=>Error)
      localStorage.setItem('UserTokenNotes',Response?.data?.token)
      setUserToken(Response?.data?.token)
   }
   // form validation and values section

   const validationSchema = yup.object().shape({
      email: yup.string().email('Please enter a valid email form').required('Please the email is required'),
      password:yup.string().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,'Password must at least contain 8 characters with at least on lowercase and uppercase letters and a number').required('password is required'),
   })
   const formik = useFormik<loginInterfaceForFormik>({
      initialValues:{
         email:'',
         password:''
        
      },
      validationSchema,
      onSubmit:handleSubmit

   })

  

   return <>
   <div className=' mx-auto w-75 mt-5 '>
      <form onSubmit={formik.handleSubmit} className="w-100 mx-auto">
        
         
         <div className="mx-auto text-center">
            <label className="d-block text-start" htmlFor="email">Email</label>
            <input onChange={formik.handleChange} onBlur={formik.handleBlur} className="w-100 border-1 border-secondary p-2 rounded"
               type="email" id="email" name="email" placeholder="Ahmed@example.com" />  
            <p className="text-danger">{formik.errors.email && formik.touched.email ? formik.errors.email : null }</p>

               
         </div>
         <div className="mx-auto text-center">
            <label className="d-block text-start" htmlFor="password">Password</label>
            <input onChange={formik.handleChange} onBlur={formik.handleBlur} className="w-100 border-1 border-secondary p-2 rounded"
               type="password" id="password" name="password" placeholder="********" />
            <p className="text-danger">{formik.errors.password && formik.touched.password ? formik.errors.password : null }</p>

         </div>
         <div className='mx-auto text-center'>
         <button
            className="d-block mx-auto btn bg-black text-white w-100 "
            type="submit">
               Login
               </button>
               <Link className='text-black  ' to={'/register'} > <span className=''>Don't have an account yet ? REGISTER NOW</span></Link>
         </div>
        
         </form>
   </div>


   </>
}
