import Image from 'next/image';

import Container from '@components/Container';
import Content from '@components/Content';

import ContactForm from './ContactForm';

import styles from './styles.module.scss';

const Contato: React.FC<SectionProps> = ({ id }) => {
    return (
        <section id={id} className={styles.contato}>
            <Container className={styles.contato__grid}>
                <div className={styles.contato__image}>
                    <Image
                        src="/empreendimento.jpg"
                        width={826}
                        height={1064}
                        layout="responsive"
                    />
                </div>
                <div className={styles.contato__form}>
                    <Content id="contato.title" tag="h2" />
                    <ContactForm />
                </div>
            </Container>
        </section>
    );
};

export default Contato;
