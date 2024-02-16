
import styles from '../../src/styles/Header.module.css';

export function Header() {
    return (

      <nav className={styles.navbar} >
         <div className={styles.logo}>
          <h1>Kura</h1>
        </div>
       
        <ul className={styles.links_items} >
          <li className={styles.li} ><a href="#home">Início</a></li>
          <li className={styles.li} ><a href="#about">Sobre</a></li>
          <li className={styles.li}><a href="#services">Serviços</a></li>
        </ul>

        <div className={styles.autentication} >
          <a className={styles.signIn} href="#">LOGIN</a>
          <a className={styles.signUp} href="#">REGISTAR</a> 
        </div>
    
    </nav>
 )
}