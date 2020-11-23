import Image from 'next/image';
import Container from '@components/Container';
import Content from '@components/Content';
import { content } from '@core/helpers/content';

import styles from './styles.module.scss';

const Cover: React.FC<SectionProps> = ({ id }) => {
    return (
        <section id={id} className={styles.cover}>
            <Container className={styles.cover__container}>
                <Image
                    src={content('cover.image.url')}
                    width={660}
                    height={750}
                    alt={content('cover.image.alt')}
                    className={styles.cover__image}
                    loading="eager"
                />
                <div className={styles.cover__box}>
                    <Content id="cover.title" tag="h1" />
                </div>
            </Container>
        </section>
    );
};

export default Cover;
