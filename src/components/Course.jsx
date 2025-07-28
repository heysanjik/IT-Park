import React from "react";
import { Book, UsersRound, Bookmark, ArrowRight } from "lucide-react";
export default function Course() {
  return (
    <div className="course" id="course">
      <div className="container">
        <div className="title">
          <p>Biz haqimizda</p>
        </div>
        <div className="course_content">
          <div className="item">
            <img src="./public/savodxonlik.png" alt="Image" />
            <div className="subtitle">
              <div className="star">
                <div className="rating">
                  <img src="./public/star (1).png" alt="Icon" />
                  <img src="./public/star (1).png" alt="Icon" />
                  <img src="./public/star (1).png" alt="Icon" />
                  <img src="./public/star (1).png" alt="Icon" />
                  <img src="./public/star (1).png" alt="Icon" />
                </div>
                <div className="rating_count">5.0</div>
              </div>
              <div className="bookmark">
                <Bookmark size={20} strokeWidth={1.5} />
              </div>
            </div>
            <div className="name">Kompyuter savodxonligi</div>
            <div className="lesson">
              <div className="book">
                <Book size={20} strokeWidth={1.5} color="#56bb00" /> 12 Darslar
              </div>
              <div className="userRound">
                <UsersRound size={20} strokeWidth={1.5} color="#56bb00" /> 700
                Talabalar
              </div>
            </div>
            <div className="desc">
              “Noldan kompyuter bilan ishlashni o‘rganing”
            </div>
            <div className="item_footer">
              <div className="price">
                <span className="new_price">$39</span>
                <span className="old_price">$63</span>
              </div>
              <div className="btn">
                <a href="#">
                  Batafsil <ArrowRight size={20} strokeWidth={1.5} />
                </a>
              </div>
            </div>
          </div>
          <div className="item">
            <img src="./public/veb2.jpg" alt="Image" />
            <div className="subtitle">
              <div className="star">
                <div className="rating">
                  <img src="./public/star (1).png" alt="Icon" />
                  <img src="./public/star (1).png" alt="Icon" />
                  <img src="./public/star (1).png" alt="Icon" />
                  <img src="./public/star (1).png" alt="Icon" />
                  <img src="./public/star (1).png" alt="Icon" />
                </div>
                <div className="rating_count">5.0</div>
              </div>
              <div className="bookmark">
                <Bookmark size={20} strokeWidth={1.5} />
              </div>
            </div>
            <div className="name">Veb Dasturlash</div>
            <div className="lesson">
              <div className="book">
                <Book size={20} strokeWidth={1.5} color="#56bb00" /> 32 Darslar
              </div>
              <div className="userRound">
                <UsersRound size={20} strokeWidth={1.5} color="#56bb00" /> 1,000
                Talabalar
              </div>
            </div>
            <div className="desc">
              Yaxshi sayt — bu toza kod va aniq maqsad asosida yaratiladi.
            </div>
            <div className="item_footer">
              <div className="price">
                <span className="new_price">$100</span>
                <span className="old_price">$200</span>
              </div>
              <div className="btn">
                <a href="#">
                  Batafsil <ArrowRight size={20} strokeWidth={1.5} />
                </a>
              </div>
            </div>
          </div>
          <div className="item">
            <img src="./public/python.jpg" alt="Image" />
            <div className="subtitle">
              <div className="star">
                <div className="rating">
                  <img src="./public/star (1).png" alt="Icon" />
                  <img src="./public/star (1).png" alt="Icon" />
                  <img src="./public/star (1).png" alt="Icon" />
                  <img src="./public/star (1).png" alt="Icon" />
                  <img src="./public/star (1).png" alt="Icon" />
                </div>
                <div className="rating_count">5.0</div>
              </div>
              <div className="bookmark">
                <Bookmark size={20} strokeWidth={1.5} />
              </div>
            </div>
            <div className="name">Python Dasturlash</div>
            <div className="lesson">
              <div className="book">
                <Book size={20} strokeWidth={1.5} color="#56bb00" /> 20 Darslar
              </div>
              <div className="userRound">
                <UsersRound size={20} strokeWidth={1.5} color="#56bb00" /> 900
                Talabalar
              </div>
            </div>
            <div className="desc">
              Vebdan tortib sun’iy intellektgacha — Python sizga ko‘prik.
            </div>
            <div className="item_footer">
              <div className="price">
                <span className="new_price">$100</span>
                <span className="old_price">$150</span>
              </div>
              <div className="btn">
                <a href="#">
                  Batafsil <ArrowRight size={20} strokeWidth={1.5} />
                </a>
              </div>
            </div>
          </div>
          <div className="item">
            <img src="./public/grafik.jpg" alt="Image" />
            <div className="subtitle">
              <div className="star">
                <div className="rating">
                  <img src="./public/star (1).png" alt="Icon" />
                  <img src="./public/star (1).png" alt="Icon" />
                  <img src="./public/star (1).png" alt="Icon" />
                  <img src="./public/star (1).png" alt="Icon" />
                  <img src="./public/star (1).png" alt="Icon" />
                </div>
                <div className="rating_count">5.0</div>
              </div>
              <div className="bookmark">
                <Bookmark size={20} strokeWidth={1.5} />
              </div>
            </div>
            <div className="name">Grafik Dizayn</div>
            <div className="lesson">
              <div className="book">
                <Book size={20} strokeWidth={1.5} color="#56bb00" /> 10 Darslar
              </div>
              <div className="userRound">
                <UsersRound size={20} strokeWidth={1.5} color="#56bb00" /> 1,100
                Talabalar
              </div>
            </div>
            <div className="desc">
              Dizayn — bu nafaqat ko‘rinish, balki tushunish va his qilish.
            </div>
            <div className="item_footer">
              <div className="price">
                <span className="new_price">$80</span>
                <span className="old_price">$120</span>
              </div>
              <div className="btn">
                <a href="#">
                  Batafsil <ArrowRight size={20} strokeWidth={1.5} />
                </a>
              </div>
            </div>
          </div>
          <div className="item">
            <img src="./public/3D.jpg" alt="Image" />
            <div className="subtitle">
              <div className="star">
                <div className="rating">
                  <img src="./public/star (1).png" alt="Icon" />
                  <img src="./public/star (1).png" alt="Icon" />
                  <img src="./public/star (1).png" alt="Icon" />
                  <img src="./public/star (1).png" alt="Icon" />
                  <img src="./public/star (1).png" alt="Icon" />
                </div>
                <div className="rating_count">5.0</div>
              </div>
              <div className="bookmark">
                <Bookmark size={20} strokeWidth={1.5} />
              </div>
            </div>
            <div className="name">3D Modellashtirish</div>
            <div className="lesson">
              <div className="book">
                <Book size={20} strokeWidth={1.5} color="#56bb00" /> 13 Darslar
              </div>
              <div className="userRound">
                <UsersRound size={20} strokeWidth={1.5} color="#56bb00" /> 500
                Talabalar
              </div>
            </div>
            <div className="desc">
              3D modellashtirish — bu hayotga yangi o‘lchov qo‘shish san’ati.
            </div>
            <div className="item_footer">
              <div className="price">
                <span className="new_price">$80</span>
                <span className="old_price">$200</span>
              </div>
              <div className="btn">
                <a href="#">
                  Batafsil <ArrowRight size={20} strokeWidth={1.5} />
                </a>
              </div>
            </div>
          </div>
          <div className="item">
            <img src="./public/r.jpg" alt="Image" />
            <div className="subtitle">
              <div className="star">
                <div className="rating">
                  <img src="./public/star (1).png" alt="Icon" />
                  <img src="./public/star (1).png" alt="Icon" />
                  <img src="./public/star (1).png" alt="Icon" />
                  <img src="./public/star (1).png" alt="Icon" />
                  <img src="./public/star (1).png" alt="Icon" />
                </div>
                <div className="rating_count">5.0</div>
              </div>
              <div className="bookmark">
                <Bookmark size={20} strokeWidth={1.5} />
              </div>
            </div>
            <div className="name">Robototexnika</div>
            <div className="lesson">
              <div className="book">
                <Book size={20} strokeWidth={1.5} color="#56bb00" /> 30 Darslar
              </div>
              <div className="userRound">
                <UsersRound size={20} strokeWidth={1.5} color="#56bb00" /> 300
                Talabalar
              </div>
            </div>
            <div className="desc">
              Robototexnika — bu texnologiya, muhandislik va san’atning
              uyg‘unligi.
            </div>
            <div className="item_footer">
              <div className="price">
                <span className="new_price">$197</span>
                <span className="old_price">$350</span>
              </div>
              <div className="btn">
                <a href="#">
                  Batafsil <ArrowRight size={20} strokeWidth={1.5} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}