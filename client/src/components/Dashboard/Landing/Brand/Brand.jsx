import React from 'react';
import { google, slack, atlassian, dropbox, shopify } from './imports';
import styles from './Brand.module.css';

const Brand = () => (
  // Asumiendo que "gpt3__brand" es la clase del módulo y "section__padding" es global
  <div className={`${styles.gpt3__brand} section__padding`}> 
    <div>
      <img src={google} alt="Google" />
    </div>
    <div>
      <img src={slack} alt="Slack" />
    </div>
    <div>
      <img src={atlassian} alt="Atlassian" />
    </div>
    <div>
      <img src={dropbox} alt="Dropbox" />
    </div>
    <div>
      <img src={shopify} alt="Shopify" />
    </div>
  </div>
);

export default Brand;
