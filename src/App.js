import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import { useState } from "react";
import Services from "./components/Skills";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
// import { useTranslation } from "react-i18next";

function App() {
  // const { t, i18n } = useTranslation();

  // const languageSwitch = (lang) => {
  //   i18n.changeLanguage(lang);
  // };

  const [theme, setTheme] = useState();

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.removeItem("Theme");
    localStorage.setItem("Theme", theme);
  };
  return (
    <>
      {document.documentElement.classList.add(localStorage.getItem("Theme"))}
      <button
        type="button"
        onClick={handleThemeSwitch}
        className="fixed  right-3 top-3 bg-indigo-500  p-1 rounded-md "
      >
        {theme === "dark" ? "☀️" : "🌙"}
      </button>
      {/* <button
        type="button"
        onClick={languageSwitch}
        className="fixed  right-12 top-3 w-8 h-8 bg-indigo-500  p-1 rounded-md "
      >
        {theme === "dark" ? "🇹🇷" : "🇬🇧"}
      </button> */}

      <div className="font-inter bg:white dark:bg-slate-900">
        <div className="max-w-5xl mx-auto w-11/12">
          <Header></Header>
          <HeroSection></HeroSection>
          <Services></Services>
          <Profile></Profile>
          <Projects></Projects>
          <Contact></Contact>
        </div>
      </div>
    </>
  );
}

export default App;
