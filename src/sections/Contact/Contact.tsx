import React, { useRef, FormEvent } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const serviceId = import.meta.env.VITE_SERVICE_ID ?? "";
const templateId = import.meta.env.VITE_TEMPLATE_ID ?? "";
const publicKey = import.meta.env.VITE_PUBLIC_KEY ?? "";

const Contact: React.FC = () => {
  const { t } = useTranslation();

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
      <h2 className="section__title">{t("contact.title")}</h2>
      <span className="section__subtitle">{t("contact.subtitle")}</span>

      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">{t("contact.content.title")}</h3>

          <div className="contact__info">
            <div className="contact__card">
              <i className="bx bx-mail-send contact__card-icon" />
              <h3 className="contact__card-title">
                {t("contact.content.email")}
              </h3>
              <span className="contact__card-data">
                dev.morales.jordy@gmail.com
              </span>

              <a
                href="mailto:dev.morales.jordy@gmail.com"
                className="contact__button"
              >
                {t("contact.content.write_me")}
                <i className="bx bx-right-arrow-alt contact__button-icon" />
              </a>
            </div>

            <div className="contact__card">
              <i className="bx bxl-whatsapp contact__card-icon" />
              <h3 className="contact__card-title">
                {t("contact.content.whatsapp")}
              </h3>
              <span className="contact__card-data">+59161787036</span>

              <a
                href="https://api.whatsapp.com/send?phone=59161787036&text=Hello, more information!"
                className="contact__button"
              >
                {t("contact.content.write_me")}
                <i className="bx bx-right-arrow-alt contact__button-icon" />
              </a>
            </div>
          </div>
        </div>

        <div className="contact__content">
          <h3 className="contact__title">{t("contact.form.title")}</h3>

          <form ref={form} onSubmit={sendEmail} className="contact__form">
            <div className="contact__form-div">
              <label htmlFor="" className="contact__form-tag">
                {t("contact.form.name.label")}
              </label>
              <input
                type="text"
                name="user_name"
                placeholder={t("contact.form.name.placeholder") || ""}
                className="contact__form-input"
                required
              />
            </div>

            <div className="contact__form-div">
              <label htmlFor="" className="contact__form-tag">
                {t("contact.form.mail.label")}
              </label>
              <input
                type="email"
                name="user_email"
                placeholder={t("contact.form.mail.placeholder") || ""}
                className="contact__form-input"
                required
              />
            </div>

            <div className="contact__form-div contact__form-area">
              <label htmlFor="" className="contact__form-tag">
                {t("contact.form.message.label")}
              </label>
              <textarea
                name="message"
                cols={30}
                rows={10}
                placeholder={t("contact.form.message.placeholder") || ""}
                className="contact__form-input"
                required
              />
            </div>

            <button type="submit" className="button">
            {t("contact.form.button") || ""}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
