import React from 'react'
import {useFormik} from 'formik';
import validationSchema from './validations';
import './styles.css';

function Contact() {
    const {handleSubmit,handleChange,handleBlur, values,isSubmitting,errors,touched} =useFormik({
      initialValues:{
        name:'',
        email:'',
        message:'',
      },
      onSubmit: async(values,bag)=>{
        // await new Promise((r)=>setTimeout(r,2000))
        console.log(values)
        bag.resetForm()
      },
      validationSchema,
    });


  return (
    <div className='contact-form'>Contact Form Test Area

    <form onSubmit={handleSubmit}>
    <div>
    <label htmlFor='name'>Adınız</label>
    <input
    id="name"
    name="name"
    placeholder='Doğancan'
    value={values.name}
    disabled={isSubmitting}
    onChange={handleChange("name")}
    onBlur={handleBlur("name")}
 />
    {errors.name && touched.name && <div className='error'>{errors.name}</div>}
    </div>
    
    <div>
    <label htmlFor='name'>E-mail adresiniz</label>
    <input
    id="email"
    name="email"
    placeholder='test@test.com'
    value={values.email}
    disabled={isSubmitting}
    onChange={handleChange("email")}
    onBlur={handleBlur("email")}
    />
    {errors.email && touched.email && <div className='error'>{errors.email}</div>}
    </div>
  
    <div>
    <label htmlFor='name'>Mesajınız</label>
    <input
    id="message"
    name="message"
    placeholder='Mesaj'
    value={values.message}
    disabled={isSubmitting}
    onChange={handleChange("message")}
    onBlur={handleBlur("message")}
    />
    {errors.message && touched.message && <div className='error'>{errors.message}</div>}
    </div>

    <button type='submit' disabled={isSubmitting}>Gönder</button>

    </form>

    </div>
  )
}

export default Contact