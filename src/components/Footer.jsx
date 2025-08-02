import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <marquee behavior="" direction="" scrollamount="15">
        Qo'ng'iroq uchun:
        <a
          href="tel:+998990381199"
          onMouseOver={(e) => e.target.closest("marquee").stop()}
          onMouseOut={(e) => e.target.closest("marquee").start()}
        >
          (+998) 99 038 11 99
        </a>
      </marquee>
      <div className="container">
        <div className="footer_content">
          <div className="left_bar">
            <img src="./public/logo_white.png" alt="Image" />
            <p>
              <span className="yellow">IT</span> mutaxassislarini zamonaviy ko‘p
              funksiyali vositalar bilan quvvatlab, samarali yechimlar ishlab
              chiqish va foydalanuvchi natijalarini oshirishga yordam beramiz.
            </p>
            <ul className="example-2">
              <li className="icon-content">
                <a
                  href="https://t.me/@itcenternavoiysupport"
                  aria-label="Telegram"
                  data-social="telegram"
                >
                  <div className="filled"></div>
                  <svg version="1.1" viewBox="0 0 100 100">
                    <path
                      d="M95,9.9c-1.3-1.1-3.4-1.2-7-0.1c0,0,0,0,0,0c-2.5,0.8-24.7,9.2-44.3,17.3c-17.6,7.3-31.9,13.7-33.6,14.5  c-1.9,0.6-6,2.4-6.2,5.2c-0.1,1.8,1.4,3.4,4.3,4.7c3.1,1.6,16.8,6.2,19.7,7.1c1,3.4,6.9,23.3,7.2,24.5c0.4,1.8,1.6,2.8,2.2,3.2  c0.1,0.1,0.3,0.3,0.5,0.4c0.3,0.2,0.7,0.3,1.2,0.3c0.7,0,1.5-0.3,2.2-0.8c3.7-3,10.1-9.7,11.9-11.6c7.9,6.2,16.5,13.1,17.3,13.9  c0,0,0.1,0.1,0.1,0.1c1.9,1.6,3.9,2.5,5.7,2.5c0.6,0,1.2-0.1,1.8-0.3c2.1-0.7,3.6-2.7,4.1-5.4c0-0.1,0.1-0.5,0.3-1.2  c3.4-14.8,6.1-27.8,8.3-38.7c2.1-10.7,3.8-21.2,4.8-26.8c0.2-1.4,0.4-2.5,0.5-3.2C96.3,13.5,96.5,11.2,95,9.9z M30,58.3l47.7-31.6  c0.1-0.1,0.3-0.2,0.4-0.3c0,0,0,0,0,0c0.1,0,0.1-0.1,0.2-0.1c0.1,0,0.1,0,0.2-0.1c-0.1,0.1-0.2,0.4-0.4,0.6L66,38.1  c-8.4,7.7-19.4,17.8-26.7,24.4c0,0,0,0,0,0.1c0,0-0.1,0.1-0.1,0.1c0,0,0,0.1-0.1,0.1c0,0.1,0,0.1-0.1,0.2c0,0,0,0.1,0,0.1  c0,0,0,0,0,0.1c-0.5,5.6-1.4,15.2-1.8,19.5c0,0,0,0,0-0.1C36.8,81.4,31.2,62.3,30,58.3z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </a>
                <div className="tooltip">Telegram</div>
              </li>
              <li className="icon-content">
                <a
                  href="https://www.instagram.com/itpark_navoiy"
                  aria-label="Instagram"
                  data-social="instagram"
                >
                  <div className="filled"></div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-instagram"
                    viewBox="0 0 16 16"
                    xml:space="preserve"
                  >
                    <path
                      d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"
                      fill="currentColor"
                    ></path>
                  </svg>
                </a>
                <div className="tooltip">Instagram</div>
              </li>
              <li className="icon-content">
                <a
                  href="https://youtube.com/"
                  aria-label="Youtube"
                  data-social="youtube"
                >
                  <div className="filled"></div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-youtube"
                    viewBox="0 0 16 16"
                    xml:space="preserve"
                  >
                    <path
                      d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </a>
                <div className="tooltip">Youtube</div>
              </li>
              <li className="icon-content">
                <a
                  href="https://facebook.com/"
                  aria-label="Dribbble"
                  data-social="facebook"
                >
                  <div className="filled"></div>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                    <path
                      fill="currentColor"
                      d="M279.14 288l14.22-92.66h-88.91V127.5c0-25.35 12.42-50.06 52.24-50.06H293V6.26S259.5 0 225.36 0c-73.22 0-121 44.38-121 124.72v70.62H22.89V288h81.47v224h100.2V288z"
                    />
                  </svg>
                </a>
                <div className="tooltip">Facebook</div>
              </li>
            </ul>
          </div>
          <div className="right_bar">
            <div className="list">
              <h2>Sayt xaritasi</h2>
              <ul>
                <li>
                  <a href="#">Bosh sahifa</a>
                </li>
                <li>
                  <a href="#course">Biz haqimizda</a>
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
            </div>
            <div className="list">
              <h2>Huquqiy ma'lumotlar</h2>
              <ul>
                <li>
                  <a href="#">Foydalanuvchi shartlari</a>
                </li>
                <li>
                  <a href="#">Cookie siyosati</a>
                </li>
                <li>
                  <a href="#">Maxfiylik siyosati</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>
          &copy; 2025 <span className="yellow">IT Center Navoi</span> . Barcha
          huquqlar himoyalangan.
        </p>
      </div>
    </div>
  );
}
