// Contact.jsx
import React from "react";

export const Contact = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container">
    
        <div className="text-center mb-5">
          <h1 className="fw-bold">Contact Us</h1>
          <p className="text-muted fs-5">
            We love to hear from you! Reach out with any questions, feedback, or support needs.
          </p>
        </div>

        <div className="row">
  
          <div className="col-md-7 mb-4">
            <div className="p-4 bg-white rounded shadow">
              <h4 className="fw-semibold mb-3">Send us a message</h4>
              <form>
                <div className="mb-3">
                  <label className="form-label">Full Name</label>
                  <input type="text" className="form-control" placeholder="Enter your name" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email Address</label>
                  <input type="email" className="form-control" placeholder="Enter your email" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Message</label>
                  <textarea className="form-control" rows="4" placeholder="Write your message"></textarea>
                </div>
                <button type="submit" className="btn btn-primary px-4">Submit</button>
              </form>
            </div>
          </div>

          
          <div className="col-md-5 h-50">
            <div className="p-4 bg-white rounded shadow h-100">
              <h4 className="fw-semibold mb-3">Get in Touch</h4>
              <p className="mb-2"><i className="bi bi-geo-alt-fill text-danger"></i> 123 Movie Street, Film City, India</p>
              <p className="mb-2"><i className="bi bi-envelope-fill text-primary"></i> support@moviezone.com</p>
              <p className="mb-4"><i className="bi bi-telephone-fill text-success"></i> +91 98765 43210</p>

              <h5 className="fw-semibold mb-2">Follow Us</h5>
              <div className="d-flex gap-3">
                <a href="#" className="text-dark fs-4"><i className="bi bi-facebook"></i></a>
                <a href="#" className="text-dark fs-4"><i className="bi bi-instagram"></i></a>
                <a href="#" className="text-dark fs-4"><i className="bi bi-twitter"></i></a>
                <a href="#" className="text-dark fs-4"><i className="bi bi-youtube"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
