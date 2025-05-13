import { useState } from "react";
import yuji from "../assets/yuji2-removebg-preview.png";
import Toaster from "./Toaster";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [toast, setToast] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isValidEmail(formData.email)) {
      setToast({ message: "Please enter a valid email.", type: "danger" });
      return;
    }

    try {
      const formBody = new URLSearchParams(formData).toString();

      await fetch(
        "https://script.google.com/macros/s/AKfycbySZ6zXtQ3pfBHqoJf41bs-BPu7RaQsZKBGKdFleo9umbHDKpPdbBpqc31dowTf401D/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: formBody,
        }
      );

      setToast({ message: "Message sent successfully!", type: "success" });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setToast({
        message: "Error sending message: " + error.message,
        type: "danger",
      });
    }
  };

  // Reusable style to prevent capitalization
  const inputStyle = { textTransform: "none" };

  return (
    <section className="py-5" id="contact">
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
                  autoCapitalize="off"
                  autoCorrect="off"
                  spellCheck={false}
                  style={inputStyle}
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
                  autoCapitalize="off"
                  autoCorrect="off"
                  spellCheck={false}
                  style={inputStyle}
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
                  autoCapitalize="off"
                  autoCorrect="off"
                  spellCheck={false}
                  style={inputStyle}
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
              loading="lazy"
              style={{ maxHeight: "500px", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>

      {toast && (
        <Toaster
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </section>
  );
}

export default Contact;
