import { useContext } from 'react';
import clsx from 'clsx';
import { VscChevronDown } from 'react-icons/vsc';

import Context from 'context';
import useIsFooter from 'hooks/useIsFooter';

import styles from './styles.module.scss';

interface Props {
    href: string;
}

const ContactLink: React.FC<Props> = ({ href }) => {
    const { setMenuActive } = useContext(Context);
    const [isFooter] = useIsFooter();

    return (
        <a
            href={href}
            className={clsx(styles['contact-link'], isFooter && styles['contact-link--hidden'])}
            onClick={() => {
                setMenuActive(4);
                fbq('trackCustom', 'FaleCorretor');
            }}>
            <div className={styles['contact-link__text']}>
                <span className={styles['contact-link__text__title']}>Fale com um consultor</span>
                <span>direto da construtora</span>
            </div>
            <VscChevronDown className={styles['contact-link__icon']} />
        </a>
    );
};

export default ContactLink;
