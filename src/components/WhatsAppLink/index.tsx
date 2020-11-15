import { FaWhatsapp } from 'react-icons/fa';
import styles from './styles.module.scss';

interface Props {
    href: string;
}

const WhatsAppLink: React.FC<Props> = ({ href }) => {
    return (
        <a href={href} className={styles.whatsapp}>
            <FaWhatsapp className={styles.whatsapp__icon} />
        </a>
    );
};

export default WhatsAppLink;
