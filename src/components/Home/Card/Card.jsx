import React from 'react';
import styles from './Card.module.css';

const Card = ({ title, imageUrl }) => {
  return (
    <div className={styles.card}>
      <img src={imageUrl} alt={title} className={styles.cardImage} />
      <div className={styles.cardContent}>
        <h6 className={styles.cardTitle}>{title}</h6>
      </div>
    </div>
  );
};

export default Card;
