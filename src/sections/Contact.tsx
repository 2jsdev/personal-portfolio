import React from "react";

const Contact: React.FC = () => {
  return (
    <section className="contact section" id="contact">
      <span className="section__subtitle">Get in touch</span>
      <h2 className="section__title">Contact Me</h2>

      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">Talk to me</h3>

          <div className="contact__info">
            <div className="contact__card">
              <i className="bx bx-mail-send contact__card-icon" />
              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">
                dev.morales.jordy@gmail.com
              </span>

              <a
                href="mailto:dev.morales.jordy@gmail.com"
                className="contact__button"
              >
                Write me{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon" />
              </a>
            </div>

            <div className="contact__card">
              <i className="bx bxl-whatsapp contact__card-icon" />
              <h3 className="contact__card-title">WhatsApp</h3>
              <span className="contact__card-data">+591 61787036</span>

              <a
                href="https://api.whatsapp.com/send?phone=59161787036&text=Hello, more information!"
                className="contact__button"
              >
                Write me{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon" />
              </a>
            </div>
          </div>
        </div>

        <div className="contact__content">
          <h3 className="contact__title">Write me your project</h3>

          <form action="" className="contact__form">
            <div className="contact__form-div">
              <label htmlFor="" className="contact__form-tag">
                Name
              </label>
              <input
                type="text"
                placeholder="Your Full Name"
                className="contact__form-input"
              />
            </div>

            <div className="contact__form-div">
              <label htmlFor="" className="contact__form-tag">
                Mail
              </label>
              <input
                type="text"
                placeholder="Your email"
                className="contact__form-input"
              />
            </div>

            <div className="contact__form-div contact__form-area">
              <label htmlFor="" className="contact__form-tag">
                Message
              </label>
              <textarea
                name=""
                id=""
                cols={30}
                rows={10}
                placeholder="Your Message"
                className="contact__form-input"
              ></textarea>
            </div>

            <button className="button">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
