import React from "react";

export default function About() {
  return (
    <div className="about" id="about">
      <div className="container">
        <div className="title">
          <p>Biz haqimizda</p>
        </div>
        <div className="about_content">
          <div className="textspace">
            <h1>
              <span className="yellow">IT Park</span> — Sizning IT’dagi birinchi
              qadamingiz!
            </h1>
            <p>
              “<span className="yellow">IT Park</span> – bu O‘zbekistondagi
              zamonaviy texnologiyalarni ilgari suruvchi va IT sohasi rivoji
              uchun barqaror muhit yaratishga intiluvchi markaz. Biz yoshlar,
              startaplar va IT kompaniyalar uchun yangi imkoniyatlar eshigini
              ochamiz. Ilm, innovatsiya va hamkorlik bizning asosiy
              qadriyatlarimiz bo‘lib, har bir tashabbusga real yechim va kuchli
              ekotizim bilan yondashamiz.”
            </p>
          </div>
          <div className="about_image">
            <img src="./public/about-image.webp" alt="Hero-image" />
          </div>
        </div>
        <div className="about_numbers">
          <div className="stat">
            <strong>30,000+</strong>
            <span>Talabalar</span>
          </div>
          <div className="stat">
            <strong>500+</strong>
            <span>Startaplar</span>
          </div>
          <div className="stat">
            <strong>12</strong>
            <span>Filial</span>
          </div>
          <div className="stat">
            <strong>10,000+</strong>
            <span>Muvaffaqiyatli bitiruvchilar</span>
          </div>
        </div>
      </div>
    </div>
  );
}
