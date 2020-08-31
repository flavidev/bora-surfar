import React from "react";
import { Link } from "react-router-dom";

import whatsAppIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";

const InstructorItem = (props) => {
  return (
    <article className="instructor-item">
      <header>
        <img src={props.profile_picture} alt={`${props.username}_picture`} />
        <div>
          <strong>{props.username}</strong>

          <span>{props.region}</span>
        </div>
      </header>
      <p>{props.bio}</p>
      <footer>
        <p>
          Preço/hora
          <strong>{`R$${props.price}`}</strong>
        </p>
        <button type="button">
          <Link to="/">
            <img src={whatsAppIcon} alt="WhatsApp" />
          </Link>
          WhatsApp
        </button>
      </footer>
    </article>
  );
};

export default InstructorItem;
