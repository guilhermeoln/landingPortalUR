import styles from './Footer.module.scss';
import whiteLine from '../../assets/img/whiteLine.png';
import logoFooter from '../../assets/img/logoFooter.png'


export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.containerForm}>
                <div className={styles.textForm}>
                    <h2>Entre em contato conosco através do formulario</h2>
                    <p>Nosso horário de atendimento é de:</p>
                    <p>Segunda a sexta-feira das 08:00 as 18:00 sem fechar o meio dia.</p>
                    <p>Aqui nós nos preocupamos com você!</p>
                    <button>Acessar Ebook</button>
                </div>
                <div className={styles.form}>
                    <form>
                        <input 
                            type="text"
                            placeholder='Nome'
                        />
                        <input 
                            type="email"
                            placeholder='E-mail'
                        />
                        <input 
                            type="text"
                            placeholder='Telefone'
                        />
                        <textarea placeholder='Mensagem'></textarea>
                        <button>ENVIAR MENSAGEM</button>
                    </form>
                </div>
            </div>
            <div className={styles.contentEmpty}>

            </div>
            <img src={ whiteLine } alt="whiteLine" />
            <img src={ logoFooter } alt="logoFooter" className={styles.logoFooter} />
        </footer>
    );
}