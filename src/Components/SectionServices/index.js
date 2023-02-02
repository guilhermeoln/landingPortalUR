import styles from './SectionServices.module.scss';
import greenLine from '../../assets/img/linhaVerde.png';

import iconOne from '../../assets/img/iconOneServices.png';
import iconTwo from '../../assets/img/iconTwoServices.png';
import iconThree from '../../assets/img/iconThreeServices.png';



export default function SectionServices(){
    return(
        <div className={styles.containerServices}>
            <h3>Serviços</h3>
            <h2>O que nós oferecemos para você!</h2>
            <img src={ greenLine } alt="greenLine" />
            <div className={styles.containerCards}>
                <div className={styles.cardServices}>
                    <img src={ iconOne } alt="iconCard" />
                    <h4>Conteúdo para o homem</h4>
                </div>
                <div className={styles.cardServices}>
                    <img src={ iconTwo } alt="iconCard" />
                    <h4>Cuidado em Todas as idades</h4>
                </div>
                <div className={styles.cardServices}>
                    <img src={ iconThree } alt="iconCard" />
                    <h4>Dicas de saúde e bem estar</h4>
                </div>
            </div>
        </div>
    );
}