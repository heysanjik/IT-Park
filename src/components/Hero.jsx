import React from "react";
export default function Hero() {
  return (
    <div className="hero">
      <div className="container">
        <div className="hero_content">
          <div className="textspace">
            <h1>
              <span className="yellow">IT Park</span> — Sizning IT’dagi birinchi
              qadamingiz!
            </h1>
            <p>
              Zamonaviy texnologiyalar, amaliy ta’lim, tajribali mentorlar va
              kelajak kasblarini o‘rganish — barchasi bir joyda. Startaplar,
              sun’iy intellekt, dizayn va boshqa zamonaviy yo‘nalishlar sizni
              kutmoqda.
            </p>
          </div>
          <div className="btn">
            <a href="#">Qo'shilish</a>
            <a href="#">Kurslarni ko‘rish</a>
          </div>
        </div>
      </div>
    </div>
  );
}
