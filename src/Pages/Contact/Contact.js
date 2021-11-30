import React from 'react';
import { useForm } from "react-hook-form";

const Contact = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div id="contact">
            <h1 style={{width:'140px'}} className="border-bottom border-warning border-4 mx-auto pb-2">Contact</h1>
            <form className="d-flex flex-column w-50 mx-auto" onSubmit={handleSubmit(onSubmit)}>
      <input className="mt-3" {...register("yourName", { maxLength: 20 })} placeholder="Your name" required />
      <input className="mt-3" {...register("email", { })} required  placeholder="Your Email" />
      <textarea className="mt-3" {...register("description", { })}   placeholder="Description" />
      <input className="mt-3 w-50 mx-auto" type="submit" />
    </form>
        </div>
    );
};

export default Contact;