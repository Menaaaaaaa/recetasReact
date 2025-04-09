import React from "react";
import "./../assets/footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="horizontal-border">
        <div className="list">
          <div className="item-link-facebook">
            <img className="icon" alt="Facebook" src="https://www.svgrepo.com/show/475647/facebook-color.svg" />
            <div className="facebook">FACEBOOK</div>
          </div>

          <div className="item-link-twitter">
            <img className="img" alt="Twitter" src="https://www.svgrepo.com/show/475689/twitter-color.svg" />
            <div className="twitter">TWITTER</div>
          </div>

          <div className="item-link-instagram">
            <img className="icon-2" alt="Instagram" src="https://www.svgrepo.com/show/475702/instagram-color.svg" />
            <div className="instagram">INSTAGRAM</div>
          </div>

          <div className="item-link-pinterest">
            <img className="icon-2" alt="Pinterest" src="https://www.svgrepo.com/show/475696/pinterest-color.svg" />
            <div className="pinterest">PINTEREST</div>
          </div>

          <div className="item-link-youtube">
            <img className="img" alt="YouTube" src="https://www.svgrepo.com/show/475703/youtube-color.svg" />
            <div className="youtube">YOUTUBE</div>
          </div>

          <div className="item-link-tiktok">
            <img className="img" alt="TikTok" src="https://www.svgrepo.com/show/475690/tiktok-color.svg" />
            <div className="tiktok">TIKTOK</div>
          </div>
        </div>
      </div>

      <div className="overlap-group">
        <div className="text-wrapper">© Divina Cocina 2024</div>
        <div className="link">
          <p className="div">– La Ventana Comunicación –</p>
        </div>
      </div>

      <div className="div-wrapper">
        <div className="text-wrapper-2">Aviso Legal</div>
      </div>

      <div className="link-2">
        <div className="text-wrapper-3">- Quienes Somos</div>
      </div>

      <div className="link-3">
        <div className="text-wrapper-4">- Contacto</div>
      </div>

      <div className="link-4">
        <div className="text-wrapper-5">- Sitemap</div>
      </div>

      <div className="link-go-to-top">
        <div className="volver-arriba">VOLVER ARRIBA</div>
        <img className="icon-3" alt="Subir" src="https://www.svgrepo.com/show/521678/arrow-up-bold.svg" />
      </div>
    </div>
  );
}
