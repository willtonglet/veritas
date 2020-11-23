import { FaWhatsapp } from 'react-icons/fa';
import Container from '@components/Container';
import Content from '@components/Content';
import { content } from '@core/helpers/content';

import styles from './styles.module.scss';

const Info: React.FC = () => {
    return (
        <section className={styles.info}>
            <Container className={styles.info__container}>
                <div className={styles.info__text}>
                    <Content id="info.text" />
                    <Content id="info.phone" tag="div" className={styles.info__text__phone} />
                </div>
                <a
                    href={content('info.link')}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.info__whatsapp}>
                    <FaWhatsapp className={styles.info__whatsapp__icon} />
                    <Content id="info.button" />
                </a>
            </Container>
        </section>
    );
};

export default Info;
