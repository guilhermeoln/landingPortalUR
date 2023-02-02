import styles from './SectionClients.module.scss';
import greenLine from '../../assets/img/linhaVerde.png';

import iconOne from '../../assets/img/Ellipse 1.png';
import iconTwo from '../../assets/img/Ellipse 2.png';
import iconThree from '../../assets/img/Ellipse 3.png';


export default function SectionClients(){
    return(
        <div className={styles.containerClients}>
            <h3>Nossos clientes</h3>
            <h2>Veja nossos depoimentos!</h2>
            <img src={ greenLine } alt="greenLine" />
            <div className={styles.containerCards}>
                <div className={styles.cardClients}>
                    <img src={ iconOne } alt="iconCard" />
                    <h3>André Passos</h3>
                    <h4>Palmas-TO</h4>
                    <p>Meu casamento está muito mais feliz agora</p>
                </div>
                <div className={styles.cardClients}>
                    <img src={ iconTwo } alt="iconCard" />
                    <h3>Ricardo Azevedo</h3>
                    <h4>São Paulo - SP</h4>
                    <p>Me sinto mais disposto.</p>
                </div>
                <div className={styles.cardClients}>
                    <img src={ iconThree } alt="iconCard" />
                    <h3>José Soares</h3>
                    <h4>Itajaí - SC</h4>
                    <p>Eles são muito educados e dedicados.</p>
                </div>
            </div>
        </div>
    );
}