import styles from './SectionInitial.module.scss';
import greenLine from '../../assets/img/linhaVerde.png';
import imgSectionInitial from '../../assets/img/bannerSectionInitial.png';



export default function SectionInitial() {
    return (
        <div className={styles.containerSectionInitial}>
            <div className={styles.textSectionInitial}>
                <h1>Vida saudável para o homem</h1>
                <img src={greenLine} alt="greenLine" />
                <p>
                    Aqui você acha todas as informações necessárias para sua vida íntima e bem-estar
                </p>
                <p>
                    Nós desenvolvemos um ebook sobre o canal masculino com dicas para melhoria e prevenção.
                </p>
                <p>
                    Disponibilizamos no final da pagina para download gratuitamente.
                </p>
                <button>Baixar Ebook</button>
            </div>
            <div className={styles.imgSectionInitial}>
                <img src={ imgSectionInitial } alt="imgSectionInitial" />
            </div>
        </div>
    );
}