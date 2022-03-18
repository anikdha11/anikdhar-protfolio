import React, { useRef } from 'react';
import { useForm } from "react-hook-form";
import emailjs from '@emailjs/browser';
import { init } from '@emailjs/browser';
import './Contact.css'

const Contact = () => {
    const { register } = useForm();
    init("user_ZutsXdXhX7ob6qLBSw31K");
    // const onSubmit = data => console.log(data);
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_gxcajuz', 'template_afkzvmh', form.current, 'user_ZutsXdXhX7ob6qLBSw31K')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    };
    return (
        <div id="contact">
    <span className="p-2 text-center fw-bold btn-effect shadow text-success border border-secondary">Contact</span>
            <form className="d-flex flex-column w-75 mx-auto page shadow img-effect" ref={form} onSubmit={sendEmail}>
                <label className='field field_v1' htmlFor="">
                    <input className="mt-3 field__input" {...register("name", { maxLength: 20 })} name='firstName' placeholder="name" required />
                    <span className="field__label-wrap">
                        <span className="field__label">Name</span>
                    </span>
                </label>
                <label className='field field_v1' htmlFor="">
                    <input className="mt-3 field__input" {...register("email", {})} required placeholder="E-mail" name='email' />
                    <span className="field__label-wrap">
                        <span className="field__label">E-mail</span>
                    </span>
                </label>
                <label className='field field_v1' htmlFor="">
                    <input className="mt-3 field__input" {...register("subject", { maxLength: 20 })} placeholder="Subject" name='subject' required />
                    <span className="field__label-wrap">
                        <span className="field__label">Subject</span>
                    </span>
                </label>
                {/* <input className="mt-3" {...register("email", {})} required placeholder="Your Email" /> */}
                <textarea className="mt-3 text-area" {...register("message", {})} placeholder="Message" name='message' />
                <input className="mt-3 w-50 mx-auto border-0 btn-effect" type="submit" value="Send Message" />
            </form>
        </div>
    );
};

export default Contact;