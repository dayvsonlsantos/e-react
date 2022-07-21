import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import styles from './Footer.module.css'


function Footer() {
  return (
  <footer>
    <ul className={styles.social_list}>
        <li><FaFacebook/></li>
        <li><FaInstagram/></li>
        <li><FaYoutube/></li>
        <li><FaLinkedin/></li>
    </ul>
  </footer>
  )
}

export default Footer;
