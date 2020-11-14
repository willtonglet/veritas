import { useContext } from 'react';
import Context from 'context';

import styles from './styles.module.scss';

interface Props {
    href: string;
}

const ContactLink: React.FC<Props> = ({ href }) => {
    const { setMenuActive } = useContext(Context);
    return (
        <a href={href} className={styles['contact-link']} onClick={() => setMenuActive(4)}>
            <div className={styles['contact-link__text']}>
                <span className={styles['contact-link__text__title']}>Fale com um consultor</span>
                <span>direto da construtora</span>
            </div>
            <img src="/icons/down.svg" alt="Icon" className={styles['contact-link__icon']} />
        </a>
    );
};

export default ContactLink;
