import React, { useState } from 'react'
import style from './Register.module.css'
import { useFormik } from 'formik'
import *  as Yup from 'yup';
import axios from 'axios';
import { ClipLoader } from 'react-spinners';
import { useNavigate } from 'react-router-dom';
export default function Register() {
  let [isCallingApi, setIsCallingApi] = useState(false);
  let [apiError, setApiError] = useState(null);
  let navigate = useNavigate();

  const initialValues = {
    name: 'NONO',
    email: '',
    phone: '',
    password: '',
    rePassword: ''
  }
  const validationSchema = Yup.object().shape({
    name: Yup.string().min(3, "min length is 3").max(15, "Max length is 15").required("Required"),
    email: Yup.string().email("Invalid Email").required("Required"),
    phone: Yup.string().matches(new RegExp('^01[0125][0-9]{8}$'), "Invalid Phone").required("Required"),
    password: Yup.string().matches(new RegExp('^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$'), "Invalid Password").required("Required"),
    rePassword: Yup.string().oneOf([Yup.ref('password')], "Repassword Should match password").required("Required")
  })

  const formik = useFormik({
    initialValues,
    // validate: (values) => {
    //   const error = {};
    //   console.log(values, "valllllllllllllllllllllllllllue");
    //   if (!values.name) {
    //     error.name = "Required"
    //   } else if (values.name.length < 3) {
    //     error.name = "Min len is 3"
    //   } else if (values.name.length > 15) {
    //     error.name = "Max len is 15"
    //   }
    //   if (!values.email) {
    //     error.email = "Required"
    //   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    //     error.email = "Invalid email address";
    //   }
    //   if (!values.password) {
    //     error.password = "Required";
    //   }
    //   else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(values.password)) {
    //     error.password = "Invalid Password "
    //   }
    //   if (!values.rePassword) {
    //     error.rePassword = "Required Repassword";
    //   }
    //   else if (values.password != values.rePassword) {
    //     error.rePassword = "Repassword should match password"
    //   }
    //   if (!values.phone) {
    //     error.phone = "Required"
    //   } else if (!/^01[0125][0-9]{8}$/i.test(values.phone)) {
    //     error.phone = "Invalid email address";
    //   }
    //   console.log(error);

    //   return error;
    // },
    validationSchema,
    // onSubmit: function (ayhaga) {
    //   console.log(ayhaga, "Hello");
    // }
    onSubmit: callRegester
  })

  async function callRegester(values) {
    try{
    setIsCallingApi(true);
    setApiError(false);
    let { data } = await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`, values);
    console.log(data);
    setIsCallingApi(false);
    navigate("/login");
    }
    catch (error){
      console.log(error,"Error");
      setApiError(error.response.data.message);
      console.log(error.response.data.message);
      setIsCallingApi(false);
      
    }
  }

  return (
    <>

      <form onSubmit={formik.handleSubmit} className="w-1/2 mx-auto my-6">
        <h1 className='text-4xl text-gray-600  mb-7'>Register Now: </h1>

        {apiError? <div className="flex items-center p-2 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
            <div>
              {apiError}
            </div>
          </div> : ""}

        <div className="relative z-0 w-full mb-5 group">
          <input type="text" name="name" onBlur={formik.handleBlur} value={formik.values.name} onChange={formik.handleChange} id="floating_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#0AAD0A] peer" placeholder=" " required />
          <label htmlFor="floating_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#0AAD0A] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">User Name</label>
          {formik.errors.name && formik.touched.name ? <div className="flex items-center p-2 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
            <div>
              {formik.errors.name}
            </div>
          </div> : ""}
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input type="email" name="email" onBlur={formik.handleBlur} value={formik.values.email} onChange={formik.handleChange} id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#0AAD0A] peer" placeholder=" " required />
          <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#0AAD0A] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
          {formik.errors.email && formik.touched.email ? <div className="flex items-center p-2 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
            <div>
              {formik.errors.email}
            </div>
          </div> : ""}
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input type="password" name="password" onBlur={formik.handleBlur} value={formik.values.password} onChange={formik.handleChange} id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#0AAD0A] peer" placeholder=" " required />
          <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#0AAD0A] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
          {formik.errors.password && formik.touched.password ? <div className="flex items-center p-2 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
            <div>
              {formik.errors.password}
            </div>
          </div> : ""}
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input type="password" name="rePassword" onBlur={formik.handleBlur} value={formik.values.rePassword} onChange={formik.handleChange} id="floating_repeat_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#0AAD0A] peer" placeholder=" " required />
          <label htmlFor="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#0AAD0A] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm password</label>
          {formik.errors.rePassword && formik.touched.rePassword ? <div className="flex items-center p-2 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
            <div>
              {formik.errors.rePassword}
            </div>
          </div> : ""}
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input type="tel" name="phone" onBlur={formik.handleBlur} value={formik.values.phone} onChange={formik.handleChange} id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#0AAD0A] peer" placeholder=" " required />
          <label htmlFor="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#0AAD0A] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number (123-456-7890)</label>
          {formik.errors.phone && formik.touched.phone ? <div className="flex items-center p-2 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
            <div>
              {formik.errors.phone}
            </div>
          </div> : ""}
        </div>
        {isCallingApi == true ? <div className='flex justify-end'>
          <ClipLoader color='#0AAD0A' />
        </div> : <button type="submit" className="text-white bg-[#0AAD0A] hover:bg-[#0aad0ade]  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ml-auto block dark:bg-[#0AAD0A] dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        }

      </form>

    </>)
}
