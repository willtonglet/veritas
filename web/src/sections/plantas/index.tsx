import Container from '@components/Container';
import ImageSlider from '@components/ImageSlider';
import { content } from '@core/helpers/content';

import styles from './styles.module.scss';

const Plantas: React.FC = () => {
    const slides = (content('plantas.slides') as unknown) as SpacesInterface[];

    return (
        <section className={styles.plantas}>
            <Container className={styles.plantas__container}>
                <ImageSlider slides={slides} />
            </Container>
        </section>
    );
};

export default Plantas;
