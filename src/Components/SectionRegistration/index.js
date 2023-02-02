import styles from './SectionRegistration.module.scss';
import imgRegistration from '../../assets/img/imgRegistration.png';

import greenLine from '../../assets/img/linhaVerde.png';

export default function SectionRegistration() {
    return (
        <div className={styles.containerRegistration}>
            <div className={styles.imgRegistration}>
                <img src={imgRegistration} alt="imgRegistration" />
            </div>
            <div className={styles.formRegistration}>
                <h3>Faça seu cadastro</h3>
                <h2>Preencha nosso formulário e garanta seu ebook grátis!</h2>
                <img src={greenLine} alt="greenLine" />
                <p>
                    Confira as dicas mais bacanas de saúde do homem.
                    Insira seu e-mail abaixo e receba um e-book escrito com cuidado e conhecimento.
                </p>
                <form>
                    <input 
                        type="text"
                        placeholder='NOME'
                    />
                    <input 
                        type="email"
                        placeholder='E-mail'
                    />
                    <input 
                        type="text"
                        placeholder='Telefone'
                    />
                    <button>RECEBER EBOOK GRÁTIS</button>
                </form>
            </div>
        </div>
    );
}