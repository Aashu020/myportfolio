import { useState } from "react";
import yuji from "../assets/yuji2-removebg-preview.png";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate email before submitting
    if (!isValidEmail(formData.email)) {
      alert("Please enter a correct email.");
      return;
    }

    try {
      const formBody = new URLSearchParams(formData).toString();

      await fetch(
        "https://script.google.com/macros/s/AKfycbySZ6zXtQ3pfBHqoJf41bs-BPu7RaQsZKBGKdFleo9umbHDKpPdbBpqc31dowTf401D/exec",
        {
          method: "POST",
          mode: "no-cors", // Needed for Google Apps Script
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: formBody,
        }
      );

      // We assume success because response can't be read in no-cors
      alert("Message sent and stored successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      alert("Error sending message: " + error.message);
    }
  };

  return (
    <section className="py-5">
  <div className="container px-4 px-md-5">
    <div className="row align-items-center justify-content-center g-0">
        <h2 className="text-center fw-bold mb-4">Contact</h2>
      <div className="col-md-6 order-2 order-md-1 text-center text-md-start">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label text-start d-block">Your Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label text-start d-block">Your Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label text-start d-block">Message</label>
            <textarea
              name="message"
              className="form-control"
              rows="4"
              placeholder="Your message..."
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-secondary w-100">
            Send
          </button>
        </form>
      </div>

      <div className="col-md-6 order-1 order-md-2 text-center">
        <img
          src={yuji}
          alt="Contact Illustration"
          className="img-fluid rounded"
          style={{ maxHeight: "500px", objectFit: "cover" }}
        />
      </div>
    </div>
  </div>
</section>

  );
}

export default Contact;
