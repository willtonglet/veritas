import Image from 'next/image';
import Container from '@components/Container';
import Content from '@components/Content';
import styles from './styles.module.scss';

const Cover: React.FC = () => {
    return (
        <div className={styles.cover}>
            <Container className={styles.cover__container}>
                <Image src="/cover.jpg" width={660} height={750} className={styles.cover__image} />
                <div className={styles.cover__box}>
                    <Content id="cover.title" tag="h1" />
                </div>
            </Container>
        </div>
    );
};

export default Cover;
