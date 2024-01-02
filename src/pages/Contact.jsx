import React, { Suspense, useRef, useState } from "react";
import emailjs from "@emailjs/browser"
import Fox from "../models/Fox"
import Loader from "../components/Loader"
import { Canvas } from "@react-three/fiber";
import useAlert from "../hooks/useAlert";

function Contact() {

  const formRef = useRef(null)
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isLoading, setisLoading] = useState(false)
  const [currentAnimation, setcurrentAnimation] = useState("idle")
  const {alert, showAlert, hideAlert} = useAlert()

  const handleSubmit = (e) => {
   e.preventDefault()
   setisLoading(true)
   setcurrentAnimation("walk")
   emailjs.send(
    import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
    {
      from_name: form.name,
      to_name: "Ignacio",
      from_email: form.email,
      to_email: "nosoyignacio@gmail.com",
      message: form.message
    },
    import.meta.env.VITE_APP_EMAILJS_KEY
   ).then(() => {
    setisLoading(false)
    showAlert({show: true, text: "Message sent successfuly!", type: "succes"})
    setTimeout(() => {
      setcurrentAnimation("idle")
      setForm({name: "", email: "", message: ""})
    }, [3000]);
   }).catch((er) => {
    setisLoading(false)
    setcurrentAnimation("idle")
    console.log(er)
    showAlert({show: true, text: "Something went wrong, try again later", type: "danger"})
   })
  }
  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  }
  const handleFocus = () => setcurrentAnimation("walk")
  const handleBlur = () => setcurrentAnimation("idle")

  return (
    <section className='relative flex lg:flex-row flex-col max-container'>
      {alert.show && <Alert {...alert} />}

      <div className='flex-1 min-w-[50%] flex flex-col'>
        <h1 className='head-text'>Get in Touch</h1>

        <form
          onSubmit={handleSubmit}
          className='w-full flex flex-col gap-7 mt-14'
        >
          <label className='text-black-500 font-semibold'>
            Name
            <input
              type='text'
              name='name'
              className='input'
              placeholder='John'
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className='text-black-500 font-semibold'>
            Email
            <input
              type='email'
              name='email'
              className='input'
              placeholder='Your@mail.com'
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className='text-black-500 font-semibold'>
            Your Message
            <textarea
              name='message'
              rows='4'
              className='textarea'
              placeholder='Let me know how can I help you'
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          <button
            type='submit'
            className='btn'
            onFocus={handleFocus}
            onBlur={handleBlur}
            disabled={isLoading}
          >
            {isLoading? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
      <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h:[350px]">
          <Canvas
          camera={{
            position: [0,0,5],
            fov: 75,
            near: 0.1,
            far: 1000,
          }}
          >
            <directionalLight intensity={2.5} position={[0,0,1]}/>
            <Suspense fallback={<Loader/>}>
              <Fox
              currentAnimation={currentAnimation}
              position={[0.5,0.35,0]}
              rotation={[12.6,-0.6,0]}
              scale={[0.5,0.5,0.5]}
              />
            </Suspense>
          </Canvas>
      </div>
      </section>
  );
}

export default Contact;
