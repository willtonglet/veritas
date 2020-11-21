import clsx from 'clsx';
import { FaWhatsapp } from 'react-icons/fa';

import useIsFooter from 'hooks/useIsFooter';

import styles from './styles.module.scss';

interface Props {
    href: string;
}

const WhatsAppLink: React.FC<Props> = ({ href }) => {
    const [isFooter] = useIsFooter();

    return (
        <a href={href} className={clsx(styles.whatsapp, isFooter && styles['whatsapp--hidden'])}>
            <FaWhatsapp className={styles.whatsapp__icon} />
        </a>
    );
};

export default WhatsAppLink;
