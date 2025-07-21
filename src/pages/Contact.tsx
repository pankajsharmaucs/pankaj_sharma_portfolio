import React from 'react';

const Contact = () => {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h2 className="fw-bold">Contact Me</h2>
        <p className="text-muted">Feel free to reach out for collaborations or just a friendly hello 👋</p>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-8">
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label fw-semibold">Full Name</label>
              <input type="text" className="form-control" id="name" placeholder="Your Name" required />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label fw-semibold">Email Address</label>
              <input type="email" className="form-control" id="email" placeholder="name@example.com" required />
            </div>

            <div className="mb-3">
              <label htmlFor="subject" className="form-label fw-semibold">Subject</label>
              <input type="text" className="form-control" id="subject" placeholder="Message Subject" />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="form-label fw-semibold">Your Message</label>
              <textarea className="form-control" id="message" rows={5} placeholder="Type your message here..." required />
            </div>

            <div className="text-center">
              <button type="submit" className="btn btn-primary px-4 py-2 fw-semibold">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
