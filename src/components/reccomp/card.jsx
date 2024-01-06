import React from "react";
import styles from "./card.module.css";
const Card = ({ imageSrc, breed, price, ownerName }) => {
  return (
    <a className={styles.card} href="/user/login">
      <img src={imageSrc} alt="Dog" />
      <div className="card-details">
        <h2>{breed}</h2>
        <p>Price: {price}</p>
        <p>Owner: {ownerName}</p>
      </div>
    </a>
  );
};

export default Card;
