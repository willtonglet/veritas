import Container from '@components/Container';
import Content from '@components/Content';
import styles from './styles.module.scss';

const Perspectivas: React.FC<SectionProps> = ({ id }) => {
    return (
        <section id={id} className={styles.perspectivas}>
            <Container className={styles.perspectivas__container}>
                <div className={styles.perspectivas__title}>
                    <Content id="perspectivas.title" tag="h2" />
                </div>
            </Container>
        </section>
    );
};

export default Perspectivas;
