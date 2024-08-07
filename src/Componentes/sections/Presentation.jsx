import styles from './Presentation.module.css'
import ButtonA from '../elements/ButtonA'
import { useEffect, useState } from 'react'

function Presentation() {

    const [text, setText] = useState('');
    const toRotate = ['Thaylla Faria', 'Desenvolvedora Full-Stack'];
    const [loop, setLoop] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const period = 100;
    const [delta, setDelta] = useState(100);

    useEffect(()=>{
        let ticker = setInterval(()=>{
            toType()   
        }, delta)
        return()=> {clearInterval(ticker)}

    },[text])

    const toType = () =>{
        let i = loop % toRotate.length;
        let fullText = toRotate[i]
        let updatedText = isDeleting ? fullText.substring(0,text.length-1) : fullText.substring(0,text.length+1)

        setText(updatedText);

        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        }else if(isDeleting && updatedText === ''){
            setIsDeleting(false);
            setDelta(period);
            setLoop(loop+1);
        }

        
    }


    return (
        <div className={styles.Presentation} id="Presentation">
            <h4><strong>Bem vindo ao meu portifolio</strong></h4>
            <h1>Olá, eu sou {text}</h1>
            <p>Estudante de tecnologia. Cursando na DNC, formaçao em tecnologia Desenvolvedor Full-Stack. <br/>
                Interesse em Desenvolvimento Front End e Back End. <br/>
                Buscando uma oportunidade de migração de carreira.
            </p>
                <ButtonA link={'https://github.com/TataFaria'} text='Saiba Mais'/>
        
            </div>

        )    
}
    
export default Presentation