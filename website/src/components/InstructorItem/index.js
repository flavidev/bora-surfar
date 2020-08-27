import React from "react";

import whatsAppIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";

function InstructorItem() {
  return (
    <article className="instructor-item">
      <header>
        <img
          src="https://lh3.googleusercontent.com/pw/ACtC-3c8-MCOxO4WIkYF3oBePhj4J6aCEluFCdIbDaefd6ikQBwyczvXcelZxDgry1WcZCK_oaCFjvcduDXg27Imuz1DfNTD_J0Y0y06Q2WtHyhZt_F8jhzGac5iVziG7sRfBWEfyBPf05jRuX4M1vqYyYuHsw=s477-no"
          alt="Alexandre Oliva"
        />
        <div>
          <strong>Alexandre Oliva</strong>

          <span>Zona Sul</span>
        </div>
      </header>
      <p>
        Instrutor e juiz do circuito internacional.
        <br />
        Larga experiência ensinando surfistas e bodyboarders de todas as idades.
        <br />
        Nascido e criado na praia. Conhecido e querido por todos do bairro.
      </p>
      <footer>
        <p>
          Preço/hora
          <strong>R$100,00</strong>
        </p>
        <button type="button">
          <img src={whatsAppIcon} alt="WhatsApp" />
          WhatsApp
        </button>
      </footer>
    </article>
  );
}

export default InstructorItem;
