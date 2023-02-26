import React, { useRef, FormEvent } from "react";
import emailjs from "@emailjs/browser";

const serviceId = import.meta.env.VITE_SERVICE_ID ?? "";
const templateId = import.meta.env.VITE_TEMPLATE_ID ?? "";
const publicKey = import.meta.env.VITE_PUBLIC_KEY ?? "";

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.sendForm(serviceId, templateId, form.current!, publicKey).then(
      (result) => {
        console.log(result.text);
        if (form.current) {
          form.current.reset();
        }
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Contact Me</h2>
      <span className="section__subtitle">Get in touch</span>

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
              <span className="contact__card-data">+59161787036</span>

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

          <form ref={form} onSubmit={sendEmail} className="contact__form">
            <div className="contact__form-div">
              <label htmlFor="" className="contact__form-tag">
                Name
              </label>
              <input
                type="text"
                name="user_name"
                placeholder="Your Full Name"
                className="contact__form-input"
                required
              />
            </div>

            <div className="contact__form-div">
              <label htmlFor="" className="contact__form-tag">
                Mail
              </label>
              <input
                type="email"
                name="user_email"
                placeholder="Your email"
                className="contact__form-input"
                required
              />
            </div>

            <div className="contact__form-div contact__form-area">
              <label htmlFor="" className="contact__form-tag">
                Message
              </label>
              <textarea
                name="message"
                cols={30}
                rows={10}
                placeholder="Your Message"
                className="contact__form-input"
                required
              />
            </div>

            <button type="submit" className="button">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
