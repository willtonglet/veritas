import { RiWhatsappFill } from 'react-icons/ri';
import { VscChevronUp } from 'react-icons/vsc';

import Container from '@components/Container';
import Content from '@components/Content';
import { content } from '@core/helpers/content';

import styles from './styles.module.scss';

const Footer: React.FC = () => {
    const handleButtonTop = () =>
        typeof window !== 'undefined' &&
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });

    return (
        <>
            <footer className={styles.footer}>
                <Container className={styles.footer__container}>
                    <img
                        src="logo.svg"
                        alt="Veritás - Vila Madalena"
                        width={233}
                        height={63}
                        className={styles.footer__logo}
                    />
                    <div className={styles.footer__phone}>
                        <RiWhatsappFill
                            color="#4CAF50"
                            size={32}
                            className={styles.footer__phone__icon}
                        />
                        <div className={styles.footer__phone__text}>
                            <span>Entre em contato</span>
                            <Content tag="h3">{content('info.phone')}</Content>
                        </div>
                    </div>
                </Container>
            </footer>
            <div className={styles['footer-rights']}>
                <Container className={styles['footer-rights__container']}>
                    <span>Todos os direitos reservados.</span>
                    <button
                        aria-label="Voltar ao Topo"
                        onClick={handleButtonTop}
                        className={styles['footer-rights__button']}>
                        <VscChevronUp />
                    </button>
                </Container>
            </div>
        </>
    );
};

export default Footer;
