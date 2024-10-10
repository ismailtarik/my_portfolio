import React, { useContext } from "react";
import "./SplashScreen.css";
import StyleContext from "../../contexts/StyleContext";
import { greeting } from "../../portfolio";

export default function SplashScreen() {
  const { isDark } = useContext(StyleContext);

  return (
    <div className={isDark ? "dark-mode splash-container" : "splash-container"}>
      <div className="splash-content">
        <h1 className="splash-title">I'm {greeting.username}</h1>
        <p className="splash-subtitle">Welcome to My Portfolio</p>
      </div>
    </div>
  );
}
