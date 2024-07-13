import styles from './NavBar.module.css';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Nav from 'react-bootstrap/Nav';

function Navbar() {
    return (
        <div className={styles.navbar}>
           <ul>
                <li><Nav.Link href='#Presentation'>Apresentação</Nav.Link></li>
                <li><Nav.Link href='#TimeLine'>Sobre mim</Nav.Link></li>
                <li><Nav.Link href='#Project'>Projetos</Nav.Link></li>
           </ul>
           <ul>
                <li><a href='https://www.linkedin.com/in/thaylla-teixeira-4903a413b/'><FaLinkedin size={30}/></a></li>
                <li><a href='https://github.com/TataFaria'><FaGithub size={30}/></a></li>
           </ul>
        </div>
    )
}
    
export default Navbar