import React, { useState, useEffect } from 'react';
import './App.scss';
import Welcome from './components/welcome/Welcome.jsx'

const App = () => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <section className="Parallax">
        <div
          className="Parallax__triangle"
          style={{ transform: `translateY(-${offsetY * 0.2}px)` }}
        />
        <div
          className="Parallax__square"
          style={{ transform: `translateY(${offsetY * 0.6}px)` }}
        />
        <div
          className="Parallax__circle"
          style={{ transform: `translateY(${offsetY * 0.9}px)` }}
        />
        <div
        className="Parallax__background-triangles"
        style={{ transform: `translateY(${offsetY * 1}px)` }}
      />
      </section>
      <Welcome/>
    </>
  );
}

export default App;