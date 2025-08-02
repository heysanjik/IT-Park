import React from "react";

export default function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="container">
        <div className="title">
          <p>Aloqa</p>
        </div>
        <div className="contact_content">
          <div className="contact_img">
            <img src="./public/contact_img.jpg" alt="Contact Image" />
          </div>
          <div className="contact_form">
            <p>
              Har qanday savol yoki hamkorlik taklifi uchun biz bilan
              bog‘laning.
            </p>
            <form>
              <div className="form_group">
                <input type="text" placeholder="Ismingiz*" required />
              </div>
              <div className="form_group">
                <input type="email" placeholder="Email manzilingiz*" required />
              </div>
              <div className="form_group">
                <input
                  type="number"
                  placeholder="Telefon raqamingiz*"
                  required
                />
              </div>
              <div className="form_group">
                <input type="text" placeholder="Kurs turi*" required />
              </div>
              <div className="form_group form_text">
                <input placeholder="Xabar*" required></input>
              </div>
            </form>
            <button className="animated-button">
              <svg
                viewBox="0 0 24 24"
                className="arr-2"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
              <span className="text">Xabar yuborish</span>
              <span className="circle"></span>
              <svg
                viewBox="0 0 24 24"
                className="arr-1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
