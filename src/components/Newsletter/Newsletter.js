import React from 'react';
import { FaAngleDoubleRight } from "react-icons/fa";
import { useForm, ValidationError } from '@formspree/react';
import "./Newsletter.css"
function ContactForm() {
  const [state, handleSubmit] = useForm("xayknedl");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
      <form onSubmit={handleSubmit}>
        <h3 className='h3'>NEWSLETTER</h3>
        <h2 className='h2'>SUSCRIBETE</h2>
        <p className='p'>Y enterate de todas las novedades</p>
      <input
      id="email"
      type="email" 
      name="email"
      />
      
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
      <FaAngleDoubleRight/>
      </button>
    </form>
  );
}
const Newsletter=()=> {
  return (
    <ContactForm />
  );
}
export default Newsletter;