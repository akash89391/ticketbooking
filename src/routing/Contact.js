import React, { useState } from "react";
import "./style.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>
        Have questions, need assistance, or want to provide feedback? Get in touch with us!
      </p>

      <div className="contact-details">
        <h2>Our Contact Information</h2>
        <p>📧 Email: support@moviebooking.com</p>
        <p>📞 Phone: +1 234 567 890</p>
        <p>📍 Address: 123 Movie Street, Cinema City, USA</p>
      </div>

      <h2>Send Us a Message</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}
// import React, { Component } from 'react'

// export default class Unmount extends Component {
//     constructor(props) {
//         super();
//         this.state = { date: new Date() }
//     }
//     tick() {
//         this.setState({ date: new Date() })
//     } componentDidMount() {
//         this.timerID = setInterval(
//             () => this.tick(), 1000)
//     }
//     componentWillUnmount() {
//         clearInterval(this.timerID);
//     }
//     render() {
//         console.log("child clock component rendered")
//         return (
//             <div>
//                 <h1>Life Cycle</h1>
//                 <h2>it is {this.state.date.toLocaleTimeString()}</h2>
//                 <button onClick={this.componentDidMount.bind(this)}>start</button>
//                 <button onClick={this.componentWillUnmount.bind(this)}>clear</button>

//             </div>

//         )
//     }
// }
