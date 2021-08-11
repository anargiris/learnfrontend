import React from "react";
import styles from "../styles/Quote.module.css";
import Image from "next/image";

const EinsteinQuote = () => {
  return (
    <article className={`${styles.wrapper} shadow-sm`}>
      <figure
        className={`${styles.figura} rounded-full overflow-hidden relative`}
      >
        <Image src="/einstein.jpg" layout="fill" objectFit="cover" />
      </figure>

      <div className={styles.maindiv}>
        <p className={styles.parag}>
          A person who never made a mistake never tried anything new.
        </p>
        <h1 className={styles.heading}>Albert Einstein</h1>
      </div>
    </article>
  );
};

export default EinsteinQuote;
