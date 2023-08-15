import React from 'react'
import './Cntloc.css'

const Cntloc = () => {
  return (
    <>
     <section id="contact" className="contact">
      <div className='con container'></div>
      <br/>
      <br/>
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Contact Us</h2>
        </div>

        <div className="row">

          <div className="col-lg-6 d-flex" data-aos="fade-up">
            <div className="info-box">
              <i className="fa fa-map"></i>
              <h3>Our Address</h3>
              <p>HI9522, Lakshmi Mills, Gandhipuram, Coimbatore</p>
            </div>
          </div>

          <div className="col-lg-3 d-flex" data-aos="fade-up" data-aos-delay="100">
            <div className="info-box">
              <i className="fa fa-envelope"></i>
              <h3>Email Us</h3>
              <p>kitkat@example.com<br />kitkattwo@example.com</p>
            </div>
          </div>

          <div className="col-lg-3 d-flex" data-aos="fade-up" data-aos-delay="200">
            <div className="info-box ">
              <i className="fa fa-phone"></i>
              <h3>Call Us</h3>
              <p>+91 9080 9109 71<br />+91 9047 6453 59</p>
            </div>
          </div>

          <div className="col-lg-12" data-aos="fade-up" data-aos-delay="300">
            <form action="/Result" method="post" className="php-email-form">
              <div className="row">
                <div className="col-lg-6 form-group">
                  <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                </div>
                <div className="col-lg-6 form-group">
                  <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                </div>
              </div>
              <div className="form-group">
                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
              </div>
              <div className="form-group">
                <textarea className="form-control" name="message" rows="5" placeholder="Message" required />
              </div>
              {/* <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your message has been sent. Thank you!</div>
              </div> */}
              <div className="text-center"><button type="submit">Send Message</button></div>
            </form>
          </div>

        </div>

      </div>
    </section>
    </>
  )
}

export default Cntloc