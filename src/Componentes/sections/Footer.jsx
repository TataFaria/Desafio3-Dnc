import { FaLinkedin, FaGithub } from "react-icons/fa";
import styles from './Footer.module.css'

function Footer() {
    return (
        <>
        <div className={styles.footer}>
            <div className={styles.contact}>
                <h2>Meu contato:</h2>
                <h3>(24) 992879639</h3>
            </div>
            <div>
                <h2>Email:</h2>
                <h3>thayllateixeira@outlook.com</h3>
            </div>
            <div className={styles.icons}>
                <ul>
                    <li>
                        <a target="_blank" href="https://github.com/TataFaria"><FaGithub className={styles.iconSize} /></a>
                    </li>
                    <li>
                        <a target="_blank" href="https://www.linkedin.com/in/thaylla-teixeira-4903a413b/"><FaLinkedin className={styles.iconSize} /></a>
                    </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
 
export default Footer
