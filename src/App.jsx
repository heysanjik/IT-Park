import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Course from "./components/Course";
import Chat from "./components/Chat";
export default function App() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Services />
      <Course/>
      <Chat />
    </div>
  );
}
