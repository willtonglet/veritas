import Container from '@components/Container';
import Content from '@components/Content';
import ImageGallery from '@components/ImageGallery';
import Reveal from '@components/Reveal';

import styles from './styles.module.scss';

const Perspectivas: React.FC<SectionProps> = ({ id }) => {
    return (
        <section id={id} className={styles.perspectivas}>
            <Container className={styles.perspectivas__container}>
                <Reveal animation="left" duration={1000} threshold={0.5}>
                    <Content
                        id="perspectivas.title"
                        tag="h2"
                        className={styles.perspectivas__title}
                    />
                </Reveal>
                <ImageGallery />
            </Container>
        </section>
    );
};

export default Perspectivas;
