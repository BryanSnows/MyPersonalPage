import{FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaWhatsapp} from 'react-icons/fa'
import styles from './Footer.module.css'

function Footer() {
    return (
        <footer className={styles.footer}>
            <ul className={styles.social_list}>
               <li><a href="https://www.facebook.com/bryan.nevesp"><FaFacebook /></a></li>
               <li><a href="https://www.instagram.com/bryan.snows/"><FaInstagram /></a></li>
               <li><a href="https://www.linkedin.com/in/bryannevespinto/"><FaLinkedin /></a></li>
               <li><a href="https://web.whatsapp.com"><FaWhatsapp /></a></li>
               <li><a href="https://github.com/BryanSnows"><FaGithub /></a></li>
            </ul>
            <p className={styles.copy_right}>
               <span>Bryan Neves - FrontEnd Developer</span>&copy;2022
            </p>
        </footer>
    )    
    
   
}
export default Footer