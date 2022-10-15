import React from 'react'
import styles from '../styles/Navbar.module.css'

function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.Logo}>
      <img src="https://image-cdn.essentiallysports.com/wp-content/uploads/es_horizontal-1.png" alt="logo" />
      </div>
 
                 
      <div className={styles.main}>     
                   
              <ul>
                  <li><a href="./">H O M E</a></li>
                  <li><a href="./">B L O G S</a></li>
                  <li><a href="./">G A L L E R Y</a></li>
                  <li><a href="./" > A B O U T U S  </a></li>
              </ul >
              
            </div>
      </div>
  )
}

export default Navbar