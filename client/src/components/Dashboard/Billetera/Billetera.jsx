import React from 'react';
import styles from './Billetera.module.css'; // Make sure this matches the name of your CSS file

function TarjetaCripto({ nombre, abreviatura, imagenSrc, hue }) {
  const cardStyles = {
    '--hue': hue.toString(),
    'backgroundImage': `url(${imagenSrc})`,
    'backgroundSize': 'cover', // Ya no se necesita !important aquí
    'backgroundPosition': 'center'
  };
  
  return (
    <li className={styles.main__card} style={cardStyles}>
      {/* The .main__card_image_container is now just used for the background */}
      <div className={styles.main__card_image_container} />
      <h3 className={styles.main__card_heading}>{nombre}</h3>
      <p className={styles.main__card_heading_sub}>{abreviatura}</p>
      <p className={styles.main__card_heading_type}>Ver</p>
    </li>
  );
}


export default TarjetaCripto;
