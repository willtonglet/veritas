import Image from 'next/image';
import { VscSymbolMethod } from 'react-icons/vsc';

import Container from '@components/Container';
import Content from '@components/Content';
import Spinner from '@components/Spinner';
import Reveal from '@components/Reveal';
import { content } from '@core/helpers/content';

import routes from '@core/config/routes';

import styles from './styles.module.scss';

const Cover: React.FC<SectionProps> = ({ id }) => {
    const filterButton = routes.filter((link) => link.website)[0];

    const renderButton = (
        <a
            href={filterButton.website}
            className={styles.cover__box__button}
            target="_blank"
            rel="noreferrer">
            <Content id="cover.button" />
            <VscSymbolMethod size={24} className={styles.cover__box__button__icon} />
        </a>
    );

    return (
        <section id={id} className={styles.cover}>
            <Container className={styles.cover__container}>
                <div className={styles.cover__image}>
                    <Spinner className={styles.cover__image__spinner} />
                    <Image
                        src={content('cover.image.url')}
                        width={content('cover.image.size.width')}
                        height={content('cover.image.size.height')}
                        alt={content('cover.image.alt')}
                        layout="responsive"
                        loading="eager"
                    />
                </div>
                <div className={styles.cover__box}>
                    <Content id="cover.title" tag="h1" />
                    <Reveal animation="right">{renderButton}</Reveal>
                </div>
            </Container>
        </section>
    );
};

export default Cover;
