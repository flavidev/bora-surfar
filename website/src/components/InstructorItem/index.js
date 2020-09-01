import React from "react";

import whatsAppIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";

const InstructorItem = ({ instructor }) => {
  return (
    <article className="instructor-item">
      <header>
        <img
          src="https://lh3.googleusercontent.com/pw/ACtC-3ePRr_Mw51avuCqv_o6MohLGv5CVoeD9WSQA57mop-g96-Q0KmzIrolO0XGP3fNPvlR_s_CzaojBxEDg_LbX-yIuHw5u96byFe3_o-9Sn2p5TrwPoCgfl-61WlcaxKAanL5HhbWsYSJVnd2WHWvUDPkDw=s477-no?authuser=0"
          alt={`${instructor.username}_picture`}
        />
        <div>
          <strong>{instructor.username}</strong>

          <span>{instructor.region}</span>
        </div>
      </header>
      <p>{instructor.bio}</p>

      <div className="available-days">
        <p>Disponibilildade:</p>

        {instructor.days.map((element) => (
          <div>
            <p> - {element}</p>
          </div>
        ))}
      </div>

      <footer>
        <p>
          Preço/hora
          <strong>{`R$${instructor.price}`}</strong>
        </p>

        <a href={`https://wa.me/55${instructor.whatsapp}`}>
          <button type="button">
            <img src={whatsAppIcon} alt="WhatsApp" />
            WhatsApp
          </button>
        </a>
      </footer>
    </article>
  );
};

export default InstructorItem;
