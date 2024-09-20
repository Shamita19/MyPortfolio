import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // Import EmailJS
import '../app/globals.css'; // Ensure the correct path

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.name && formData.email && formData.message) {
      // Send form data via EmailJS
      emailjs
        .send(
          'service_ka23onc',   // Your EmailJS service ID
          'template_tce9v02',   // Your EmailJS template ID
          {
            from_name: formData.name,
            reply_to: formData.email,
            message: formData.message,
          },
          'iCoTncN6JpEf_y9Tt' // Your EmailJS user ID
        )
        .then(
          (response) => {
            console.log('SUCCESS!', response.status, response.text);
            setFormStatus('Form submitted successfully!');
            setFormData({ name: '', email: '', message: '' }); // Clear the form
          },
          (err) => {
            console.log('FAILED...', err);
            setFormStatus('Failed to send the message. Please try again.');
          }
        );
    } else {
      setFormStatus('Please fill in all fields.');
    }
  };

  return (
    <section className="contact-container" id="contact">
      <h2>Contact</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="contact-input"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="contact-input"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          className="contact-input contact-textarea"
        ></textarea>
        <button type="submit" className="contact-button">Submit</button>
        {formStatus && <p className="form-status">{formStatus}</p>}
      </form>
    </section>
  );
};

export default Contact;
