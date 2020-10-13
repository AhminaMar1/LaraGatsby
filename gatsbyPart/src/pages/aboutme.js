import React from "react";
import "../style/main.css";
import HelmetComponent from "../components/HelmetComponent";
import Header from "../templates/Header";
import MainAboutMe from "../mainComponents/MainAboutMe";
import Footer from "../templates/Footer";


export default function AboutMe() {
  let colorTitlesStyle={
    color: '#FFF'
  }
  return (
    <div>
      <HelmetComponent title="About me"/>
      <Header arrowActive="3" colorTitlesStyle={colorTitlesStyle} title1="أنا مروان احمينة" title2="مليئ بشغفِ تعلمِ وممارسةِ البرمجة حتى الأذنين! تعرف علي أكثر!"/>
      <MainAboutMe />
      <Footer />
    </div>)
}