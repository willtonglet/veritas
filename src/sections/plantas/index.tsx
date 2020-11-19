import Container from '@components/Container';
import ImageSlider from '@components/ImageSlider';

import styles from './styles.module.scss';

const Plantas: React.FC<SectionProps> = ({ id }) => {
    return (
        <section id={id} className={styles.plantas}>
            <div className={styles.plantas__grid}>
                {/* <div className={styles.plantas__grid__background}>
                    <div className={styles['plantas__grid__background--black']} />
                    <div className={styles['plantas__grid__background--grey']} />
                </div> */}
                <div className={styles.plantas__grid__container}>
                    <Container className={styles.plantas__container}>
                        <ImageSlider slides={[]} />
                    </Container>
                </div>
            </div>
        </section>
    );
};

export default Plantas;
