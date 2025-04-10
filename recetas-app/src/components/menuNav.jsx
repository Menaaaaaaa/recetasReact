import React from 'react';
import '../assets/menuNav.css';

export default function MenuNav() {
  return (
    <nav className="menu-nav">
      <div className="social-icons">
        <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/124/124010.png" alt="Facebook" /></a>
        <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/124/124021.png" alt="Twitter" /></a>
        <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/1409/1409946.png" alt="Instagram" /></a>
        <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/174/174863.png" alt="Pinterest" /></a>
        <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" alt="YouTube" /></a>
        <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/3046/3046124.png" alt="TikTok" /></a>
      </div>
    </nav>
  );
};

