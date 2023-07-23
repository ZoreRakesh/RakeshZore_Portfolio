'use client'

import React, { ChangeEvent, FormEvent, useState } from 'react';
import axios from 'axios';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const[isloading,setIsloading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (formData.name === "" || formData.email === "" && formData.message === "")
    return alert("Enter All fields");
    
     
    
    try {
      setIsloading(true);
      const response = await axios.post('/api/submitForm', formData);

    } catch (error) {
    }
    setIsloading(false);
    setFormData({
      name: "",
      email: "",
      message:""
    });
    
  };

  return (<>
<main className="p-8">
 
    <section id="contact" className=' mx-4 md:mx-14'>
      
    <h2 className=' text-4xl font-bold'>Contacts</h2>
      <hr className="border-t-2 border-red-600" />
      <div className='flex flex-col md:flex-row justify-between mx-10 mt-10'>
      <div></div>
      <div className='flex flex-col justify-center md:h-[380px] '>
        <h1 className='font-bold text-2xl mb-12'>A Fullstack Web and App Developer,<br/> Love to help you.</h1>
        <div className='text-lg text-red-600 mb-16'>
        <p>Name_ <span className='text-slate-900 dark:text-white'>Rakesh Zore</span></p>
        <p>Email_ <span className=' text-slate-900 dark:text-white'>zorerakesh17@gmail.com</span></p>
        <p>Phone no._ <span className='text-slate-900 dark:text-white'>+91 9923317362 </span></p>
        <p>Address_ <span className='text-slate-900 dark:text-white '>Mumbai</span></p>
        </div>

      </div>
      <div className=''>
      <form className=" " onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="name" className="block text-slate-800 dark:text-gray-500 font-bold mb-2" >
          Name
        </label>  
        <input
          type="text"
          id="name"
          className="shadow appearance-none border rounded w-full py-2 px-3 dark:text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Your Name"
          name='name'
          value={formData.name} 
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-slate-800 dark:text-gray-500 font-bold mb-2" >
          Email
        </label>
        <input
          type="email"
          id="email"
          className="shadow appearance-none border rounded w-full py-2 px-3 dark:text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="you@example.com"
          name='email'
          value={formData.email} onChange={handleChange}
        />
      </div>
      <div className="mb-6">
        <label htmlFor="message" className="block text-slate-800 dark:text-gray-500 font-bold mb-2" >
          Message
        </label>
        <textarea
          id="message"
          className="shadow appearance-none border rounded w-full py-2 px-3 dark:text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          rows={4}
          placeholder="Your Message"
          name='message'
          value={formData.message} onChange={handleChange}
        />
      </div>
      <div className="flex items-center justify-center ">
        {
          !isloading?(<button
          type="submit"
          
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>):(<><button
          className="bg-red-600 hover:bg-red-700 text-white text-center font-bold py-2 px-4 w-20 rounded focus:outline-none focus:shadow-outline"
        ><div className='loader'></div></button></>)}
      </div>
    </form>
</div>
      <div></div>
      </div>
    </section>
    </main>
 
    </>
  );
};

export default Contact;
