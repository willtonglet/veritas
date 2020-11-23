import Image from 'next/image';

import Container from '@components/Container';
import Content from '@components/Content';
import Reveal from '@components/Reveal';
import { content } from '@core/helpers/content';

import ContactForm from './ContactForm';

import styles from './styles.module.scss';

const Contato: React.FC<SectionProps> = ({ id }) => {
    return (
        <section id={id} className={styles.contato}>
            <Container className={styles.contato__grid}>
                <Reveal animation="left" duration={700}>
                    <div className={styles.contato__image}>
                        <Image
                            src={content('contato.image.url')}
                            width={content('contato.image.size.width')}
                            height={content('contato.image.size.height')}
                            alt={content('contato.image.alt')}
                            layout="responsive"
                            className={styles.cover__image}
                        />
                    </div>
                </Reveal>
                <div className={styles.contato__form}>
                    <Reveal animation="right" duration={500}>
                        <Content id="contato.title" tag="h2" />
                    </Reveal>
                    <ContactForm />
                </div>
            </Container>
        </section>
    );
};

export default Contato;
