import Header from '../../Components/Header';
import styles from './Home.module.scss';
import 'normalize.css';
import SectionInitial from '../../Components/SectionInitial';
import SectionNumbers from '../../Components/SectionNumbers';
import SectionAbout from '../../Components/SectionAbout';
import SectionServices from '../../Components/SectionServices';
import SectionRegistration from '../../Components/SectionRegistration';
import SectionClients from '../../Components/SectionClients';
import Footer from '../../Components/Footer';

export default function Home(){
    return(
        <div className={styles.containerHome}>
            <Header />
            <SectionInitial />
            <SectionNumbers />
            <SectionAbout />
            <SectionServices />
            <SectionRegistration />
            <SectionClients />
            <Footer />
        </div>
    );
}