import styles from './Card.module.css'
import ButtonA from '../elements/ButtonA'
import { useState } from 'react'

function Card({img,title,tech,description,repor,site}){

const [info, setInfo] = useState(false)

function InfoOn(){
    setInfo(true)
}

function InfoOff(){
    setInfo(false)
}

     return (
       <div onMouseLeave={InfoOff} className={styles.Card}>
            <a onMouseEnter={InfoOn} href={site}>
                <img src={img} alt='ERRO'/>
            </a>
            {info === true && (
                <section>
                <h3>{title}</h3> <br/>
                <p><strong>Tecnologia:</strong>{tech}</p> <br/>
                <p>{description }</p>
                <ButtonA text='Clique aqui' link={repor}/>
            </section>
            )}
            
       </div>
    )
}

export default Card