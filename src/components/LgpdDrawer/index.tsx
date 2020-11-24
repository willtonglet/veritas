import { useState, useEffect } from 'react';

import Container from '@components/Container';
import Content from '@components/Content';
import lgpdCookie from '@core/config/cookies';

import styles from './styles.module.scss';

const LgpdDrawer: React.FC = () => {
    const [isOpen, setIsOpen] = useState(true);

    const handleClick = () => {
        setIsOpen(false);
        localStorage.setItem('lgpd', 'true');
    };

    useEffect(() => setIsOpen(!lgpdCookie), [lgpdCookie]);

    return (
        <>
            {isOpen && (
                <div className={styles['lgpd-drawer']}>
                    <Container className={styles['lgpd-drawer__container']}>
                        <Content>
                            Nós usamos cookies e outras tecnologias semelhantes para melhorar a sua
                            experiência em nossos serviços, personalizar publicidade e recomendar
                            conteúdo de seu interesse. Ao utilizar nossos serviços, você concorda
                            com tal monitoramento.
                        </Content>
                        <button onClick={handleClick} className={styles['lgpd-drawer__button']}>
                            Concordar e continuar
                        </button>
                    </Container>
                </div>
            )}
        </>
    );
};

export default LgpdDrawer;
