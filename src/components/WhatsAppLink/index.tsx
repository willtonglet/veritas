import styles from './styles.module.scss';

interface Props {
    href: string;
}

const WhatsAppLink: React.FC<Props> = ({ href }) => {
    return (
        <a href={href} className={styles.whatsapp}>
            <img src="/icons/whatsapp.svg" alt="WhatsApp" className={styles.whatsapp__icon} />
        </a>
    );
};

export default WhatsAppLink;
