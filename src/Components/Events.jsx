import React, { useState } from 'react';
import '../assets/css/Events.css';


const App = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    craftCategory: '',
    email: '',
    phone: '',
    eventDate: '',
    eventTime: '',
    ticketPrice: '',
  });

  const [errors, setErrors] = useState({
    firstName: '',
    email: '',
    phone: '',
    ticketPrice: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

   
    if (!formData.firstName || !/^[A-Za-z\s]+$/.test(formData.firstName)) {
      newErrors.firstName = 'Please enter a valid name (letters and spaces only).';
      isValid = false;
    }


    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!formData.email || !emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
      isValid = false;
    }

    
    const phoneRegex = /^[+]*[0-9]{1,4}[0-9]{7,10}$/;
    if (!formData.phone || !phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number.';
      isValid = false;
    }

    if (!formData.ticketPrice || formData.ticketPrice <= 0) {
      newErrors.ticketPrice = 'Please enter a valid ticket price greater than 0.';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
   
      alert('Form submitted successfully!');
    } else {
      alert('Please fix the errors in the form.');
    }
  };

  return (
    <div className="containere" style={{ background: "linear-gradient(to bottom,rgb(255, 150, 90),rgba(251, 220, 207, 0.74),rgb(255, 255, 255), transparent)" }}>
      <main className="main-contente">
        <h1 className="titlee">Register Now</h1>

        <div className="form-containere">
          <form className="registration-forme" onSubmit={handleSubmit}>
            <div className="form-rowe">
              <div>
                <label htmlFor="firstName">Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="Name"
                  value={formData.firstName}
                  onChange={handleChange}
                />
                {errors.firstName && <span className="error">{errors.firstName}</span>}
              </div>

              <div>
                <label htmlFor="craftCategory">Craft Category</label>
                <select
                  id="craftCategory"
                  name="craftCategory"
                  value={formData.craftCategory}
                  onChange={handleChange}
                >
                  <option value="" disabled selected>Select a Craft Category</option>
                  <option value="pottery">Pottery</option>
                  <option value="weaving">Weaving</option>
                  <option value="embroidery">Embroidery</option>
                  <option value="painting">Painting</option>
                  <option value="carving">Carving</option>
                  <option value="metalwork">Metalwork</option>
                  <option value="jewelry">Jewelry</option>
                </select>
              </div>
            </div>

            <div className="form-rowe">
              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="abc@example.com"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <span className="error">{errors.email}</span>}
              </div>

              <div>
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="+123456789"
                  value={formData.phone}
                  onChange={handleChange}
                />
                {errors.phone && <span className="error">{errors.phone}</span>}
              </div>
            </div>

            <div className="form-rowe">
              <div>
                <label htmlFor="eventDate">Event Date</label>
                <input
                  type="date"
                  id="eventDate"
                  name="eventDate"
                  value={formData.eventDate}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="eventTime">Event Time</label>
                <input
                  type="time"
                  id="eventTime"
                  name="eventTime"
                  value={formData.eventTime}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-rowe">
              <div>
                <label htmlFor="ticketPrice">Ticket Price ($)</label>
                <input
                  type="number"
                  id="ticketPrice"
                  name="ticketPrice"
                  placeholder="50"
                  value={formData.ticketPrice}
                  onChange={handleChange}
                  min="1"
                />
                {errors.ticketPrice && <span className="error">{errors.ticketPrice}</span>}
              </div>
            </div>

            <button className="btnevente" type="submit">Submit</button>
          </form>

          <div className="form-descriptione">
            <p>
              Join Us for an Unforgettable Event! <br />
              Discover new opportunities, connect with like-minded individuals, and be a part of something extraordinary. Secure your spot today!
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
