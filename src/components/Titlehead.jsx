import React from "react";
import "../titlehead.css";
export function Titlehead() {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="app-title">TaskApp</h1>
        <p className="app-tagline">Organize your work, achieve more</p>
      </div>
      <div className="header-decoration">
        <div className="decoration-circle"></div>
        <div className="decoration-circle"></div>
        <div className="decoration-circle"></div>
      </div>
    </header>
  );
}
