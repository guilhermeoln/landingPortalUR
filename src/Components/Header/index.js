import styles from './Header.module.scss';

import logoHeader from '../../assets/img/logoHeader.png';


export default function Header(){
    return(
        <header className={styles.containerHeader}>
            <img src={logoHeader} alt="logo-header" />
        </header>
    );
}