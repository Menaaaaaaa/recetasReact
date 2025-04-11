import React from "react";
import "./../assets/footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="horizontal-border">
        <div className="list">
          <div className="item-link">
            <img className="icon" alt="Facebook" src="https://cdn-icons-png.flaticon.com/512/124/124010.png" />
            <div className="social-text">FACEBOOK</div>
          </div>

          <div className="item-link">
            <img className="icon" alt="Twitter" src="https://cdn-icons-png.flaticon.com/512/124/124021.png" />
            <div className="social-text">TWITTER</div>
          </div>

          <div className="item-link">
            <img className="icon" alt="Instagram" src="https://cdn-icons-png.flaticon.com/512/1409/1409946.png" />
            <div className="social-text">INSTAGRAM</div>
          </div>

          <div className="item-link">
            <img className="icon" alt="Pinterest" src="https://cdn-icons-png.flaticon.com/512/174/174863.png" />
            <div className="social-text">PINTEREST</div>
          </div>

          <div className="item-link">
            <img className="icon" alt="YouTube" src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" />
            <div className="social-text">YOUTUBE</div>
          </div>

          <div className="item-link">
            <img className="icon" alt="TikTok" src="https://cdn-icons-png.flaticon.com/512/3046/3046124.png" />
            <div className="social-text">TIKTOK</div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="nav-links">
            <div>© Divina Cocina 2024</div>
            <div>La Ventana Comunicación</div>
            <div>Aviso Legal</div>
            <div>Quienes Somos</div>
            <div>Contacto</div>
            <div>Sitemap</div>
        </div>
    </div>


      <div className="link-go-to-top">
        <div className="volver-arriba">VOLVER ARRIBA</div>
        <img className="icon-3" alt="Subir" src="https://cdn-icons-png.flaticon.com/512/892/892692.png" />
      </div>
    </div>
  );
}
