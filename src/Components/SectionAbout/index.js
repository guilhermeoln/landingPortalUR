import styles from './SectionAbout.module.scss';
import imgAbout from '../../assets/img/imgAbout.png';
import greenLine from '../../assets/img/linhaVerde.png';
import iconCheckGreen from '../../assets/img/iconCheckGreen.png';

export default function SectionAbout() {
    return (
        <div className={styles.containerAbout}>
            <div className={styles.imgAbout}>
                <img src={imgAbout} alt="imgAbout" />
            </div>
            <div className={styles.textAbout}>
                <h3>Sobre nós</h3>
                <h2>Portal UR focado no seu bem estar</h2>
                <img src={greenLine} alt="greenLine" className={styles.greenLine}/>
                <p>
                    Urologia é a especialidade médica clínico-cirúrgica responsável
                    pela assistência do sistema trato urinário masculino e feminino e
                    sistema reprodutor masculino.
                </p>
                <div className={styles.checkBox}>
                    <img src={iconCheckGreen} alt="iconCheckGreen" />
                    <h4>Ebook Dicas masculinas</h4>
                </div>
                <div className={styles.checkBox}>
                    <img src={iconCheckGreen} alt="iconCheckGreen" />
                    <h4>Ebook Prevenção Masculina</h4>
                </div>
                <div className={styles.checkBox}>
                    <img src={iconCheckGreen} alt="iconCheckGreen" />
                    <h4>Videos aulas gravadas sobre o tema</h4>
                </div>
                <button>Acessar Ebook</button>
            </div>
        </div>
    );
}