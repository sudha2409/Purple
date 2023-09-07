import React, { useState } from 'react';
import './contactUs.css'
import Navbar from '../Home/Navbar';
import { Footer } from '../../components/Footer';
import axios from 'axios';

const ContactUs = () => {
    const [responseMessage, setResponseMessage] = useState("")
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Log the form data for testing
    sentMail(formData)

    setFormData({
        name: '',
        email: '',
        description: '',
      })
  };

  const sentMail = async (values) => {
    console.log(values);
    try{
      const response = await axios.post('https://auth.purplemaze.co/api/v1/users/contact-us',values);
      if (response.status === 200) {
        setResponseMessage(response.data.msg)
      }
    }
    catch(error) {
      console.log(error);
        setResponseMessage("Something went wrong")
    };
  };

  return (
    <div>
    <Navbar />

    <div className="contact-us-container">
      <h1>Contact Us</h1>
      <div style={{color: 'blue'}}>{responseMessage} </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
    <Footer/>

    </div>
  );
};

export default ContactUs;
