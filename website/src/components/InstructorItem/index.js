import React from "react";

import whatsAppIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";

const InstructorItem = ({ instructor }) => {
  return (
    <article className="instructor-item">
      <header>
        <img
          src={instructor.profile_picture}
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
