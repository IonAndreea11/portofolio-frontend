import React, {useState} from "react";
import "../styles/HomeContact.css";

function HomeContact(){
    const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send. Try again.");
      }
    } catch (error) {
      setStatus("Server error. Try again later.");
    }
  };


  return(
    <section className="home-contact-section" id="contact">
        <h2 className="home-contact-title">Contact Me</h2>
        <p className="home-contact-subtitle">
            Feel free to reach out if you’d like to collaborate or just say hello!
        </p>

        <form className="home-contact-form" onSubmit={handleSubmit}>
            <input 
            type="text"
            name="name"
            placeholder="Your Name"
            value ={formData.name}
            onChange={handleChange}
            required
            />
            <input 
            type="email"
            name="email"
            placeholder="Your Email"
            value ={formData.email}
            onChange={handleChange}
            required
            />
            <textarea
            name="message"
            placeholder="Your Message"
            rows="7"
            value={formData.message}
            onChange={handleChange}
            required
            ></textarea>
            <button type="submit" className="home-contact-btn">
                Send Message
            </button>
        </form>
        {status && 
        <p className="home-contact-status">
            {status}
        </p>
        }
    </section>
  )
}

export default HomeContact;