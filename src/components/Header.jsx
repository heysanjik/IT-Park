import React, { useEffect, useState } from "react";

export default function Header() {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        // Pastga aylantirayapti → yashirish
        setShowHeader(false);
      } else {
        // Tepaga aylantirayapti → ko‘rsatish
        setShowHeader(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);
  return (
    <div className={`header ${showHeader ? "show" : "hide"}`} id="header">
      <div className="container">
        <div className="header_content">
          <div className="logo">
            <a href="#Header">
              <img src="./logo_white.png" alt="Image" />
            </a>
          </div>
          <ul className="menu">
            <li>
              <a href="#">Bosh sahifa</a>
            </li>
            <li>
              <a href="#about">Biz haqimizda</a>
            </li>
            <li>
              <a href="#services">Xizmatlar</a>
            </li>
            <li>
              <a href="#course">Kurslar</a>
            </li>
            <li>
              <a href="#contact">Aloqa</a>
            </li>
          </ul>
          <div className="link">
            <a href="#">Ro‘yxatdan o‘tish</a>
          </div>
        </div>
      </div>
    </div>
  );
}
