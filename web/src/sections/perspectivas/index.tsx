import Container from '@components/Container';
import Content from '@components/Content';
import ImageGallery from '@components/ImageGallery';
import { content } from '@core/helpers/content';

import styles from './styles.module.scss';

const Perspectivas: React.FC<SectionProps> = ({ id }) => {
    const slides = (content('perspectivas.slides') as unknown) as SlidesInterface[];

    return (
        <section id={id} className={styles.perspectivas}>
            <Container className={styles.perspectivas__container}>
                <Content id="perspectivas.title" tag="h2" className={styles.perspectivas__title} />
                <ImageGallery slides={slides} />
            </Container>
        </section>
    );
};

export default Perspectivas;
