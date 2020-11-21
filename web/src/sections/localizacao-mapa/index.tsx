import Image from 'next/image';

import Container from '@components/Container';
import Content from '@components/Content';
import Reveal from '@components/Reveal';
import { content } from '@core/helpers/content';

import styles from './styles.module.scss';

const LocalizacaoMapa: React.FC = () => {
    const streetList = (content('mapa.streets') as unknown) as Array<string>;

    return (
        <section className={styles.mapa}>
            <Container className={styles.mapa__grid}>
                <Reveal animation="left" duration={500}>
                    <div className={styles.mapa__text}>
                        <div className={styles.mapa__box}>
                            <Content id="mapa.title" tag="h2" />
                            <Content id="mapa.legend" tag="h3" />
                            <ul>
                                {streetList.map((street, index) => (
                                    <li key={`street-${index}`}>
                                        <Content>{street}</Content>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </Reveal>
                <div className={styles.mapa__image}>
                    <Image
                        src={content('mapa.image.url')}
                        width={content('mapa.image.size.width')}
                        height={content('mapa.image.size.height')}
                        layout="responsive"
                    />
                </div>
            </Container>
        </section>
    );
};

export default LocalizacaoMapa;
