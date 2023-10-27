import React from 'react';
import styles from './Home.module.css'
import Stories from './Stories/Stories.jsx/Stories';

const Home = () => {

  return (
    <div className={styles.bodyContainer}>
      <div className={styles.centeredFlex}>
        <h1>Top Stories</h1>
      </div>
      <Stories />
    </div>
  );
};

export default Home;
