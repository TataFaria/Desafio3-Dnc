import styles from './TimeLine.module.css';
import React from 'react';


const phases = [
    {
        title: 'Fase 1',
        description: 'Comecei minha jornada na programação com projetos introdutórios, aprendendo os fundamentos através da construção de uma página web funcional com HTML, CSS e JavaScript.'
    },
    {
        title: 'Fase 2',
        description: 'Avancei para desafios envolvendo integrações de APIs, onde explorei solicitações HTTP, manipulação de dados JSON e integração de respostas de APIs em minhas aplicações.'
    },
    {
        title: 'Fase 3',
        description: 'Ao mergulhar no desenvolvimento fullstack, meu portfólio construído com React e Vite tornou-se um marco significativo, demonstrando minhas habilidades em front-end.'
    },
    {
        title: 'Fase 4',
        description: 'Cada projeto e desafio ao longo do curso marcou uma etapa importante em minha evolução como programador, proporcionando aprendizado contínuo e crescimento em habilidades técnicas.'
    },
    {
        title: 'Fase 5',
        description: 'No back-end, enfrentei desafios como a construção de uma API para integrar o front-end com o back-end, onde trabalhei com frameworks como Node.js e express, criando rotas e manipulando dados.'
    }
];

function Timeline() {
    return (
        <section>
            <div className={styles.title} id="timeline">
                <h1>Sobre mim:</h1>
            </div>
            <div className={styles.verticalConfig}>
                <div className={styles.time}>
                    <div className={styles.pointTitle}>
                        {phases.map((phase, index) => (
                            <p key={`phase-title-${index}`}>{phase.title}</p>
                        ))}
                    </div>
                </div>
                <div className={styles.lineConfig}>
                    <div className={styles.line}>
                        {phases.map((_, index) => (
                            <div key={`phase-point-${index}`} className={styles.point}></div>
                        ))}
                    </div>
                </div>
                <div className={styles.general}>
                    <div className={styles.info}>
                        {phases.map((phase, index) => (
                            <div key={`phase-info-${index}`} className={styles.infoText}>
                                <p>{phase.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Timeline;