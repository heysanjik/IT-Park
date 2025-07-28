import React from "react";
import {
  CodeXml,
  Rocket,
  UserRound,
  Globe,
  GraduationCap,
  Building2,
} from "lucide-react";

export default function Services() {
  return (
    <div className="services" id="services">
      <div className="container">
        <div className="title">
          <p>Xizmatlar</p>
        </div>
        <h1>
          Biz IT sohasida rivojlanish uchun zarur <br /> barcha xizmatlarni
          birlashtirdik.
        </h1>
        <div className="services_content">
          <div className="item">
            <div className="icon">
              <CodeXml size={42} />
            </div>
            <div className="name">IT kurslar</div>
            <div className="services_link" id="services_link">
              <a href="#courses">Kurslar</a>
            </div>
          </div>
          <div className="item">
            <div className="icon">
              <Rocket size={42} />
            </div>
            <div className="name">Startap inkubatsiyasi</div>
            <div className="services_link" id="services_link">
              <a href="#courses">Kurslar</a>
            </div>
          </div>
          <div className="item">
            <div className="icon">
              <UserRound size={42} />
            </div>
            <div className="name">Mentorlik</div>
            <div className="services_link" id="services_link">
              <a href="#courses">Kurslar</a>
            </div>
          </div>
          <div className="item">
            <div className="icon">
              <Globe size={42} />
            </div>
            <div className="name">Global imkoniyatlar</div>
            <div className="services_link" id="services_link">
              <a href="#courses">Kurslar</a>
            </div>
          </div>
          <div className="item">
            <div className="icon">
              <GraduationCap size={42} />
            </div>
            <div className="name">Freelance platformasi</div>
            <div className="services_link" id="services_link">
              <a href="#courses">Kurslar</a>
            </div>
          </div>
          <div className="item">
            <div className="icon">
              <Building2 size={42} />
            </div>
            <div className="name">Ofis va coworking</div>
            <div className="services_link" id="services_link">
              <a href="#courses">Kurslar</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
