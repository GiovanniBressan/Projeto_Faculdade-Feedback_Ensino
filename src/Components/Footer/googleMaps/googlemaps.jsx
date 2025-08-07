import style from "./style.module.css";

export default function Localização() {
  return (
    <div className={style.iframe}>
      <iframe
        className={style.frame}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d450.43858081319974!2d-49.278556271163936!3d-25.421252949679314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce405d1a79261%3A0xfeb3879b043757cd!2sCentro%20De%20Educa%C3%A7%C3%A3o%20Infantil%20Passo%20Livre!5e0!3m2!1spt-BR!2sbr!4v1754491041982!5m2!1spt-BR!2sbr"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        loading="lazy"
      ></iframe>
    </div>
  );
}
