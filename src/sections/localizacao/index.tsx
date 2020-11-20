import { useState } from 'react';
import Image from 'next/image';
import { IoIosExpand } from 'react-icons/io';

import Container from '@components/Container';
import Content from '@components/Content';
import Reveal from '@components/Reveal';
import Modal from '@components/Modal';
import { content } from '@core/helpers/content';

import styles from './styles.module.scss';

const Localizacao: React.FC<SectionProps> = ({ id }) => {
    const [isModalOpen, setModalOpen] = useState(false);
    const modalItems = (content('localizacao.modal') as unknown) as Array<LocationProps>;

    return (
        <>
            <section id={id} className={styles.localizacao}>
                <Container className={styles.localizacao__container}>
                    <div className={styles.localizacao__grid}>
                        <div className={styles.localizacao__image}>
                            <Image
                                src={content('localizacao.background')}
                                width={1316}
                                height={658}
                                layout="responsive"
                            />
                        </div>
                        <div className={styles.localizacao__text}>
                            <Reveal animation="right" duration={500}>
                                <div className={styles.localizacao__box}>
                                    <Content id="localizacao.title" tag="h2" />
                                </div>
                            </Reveal>
                            <Reveal animation="right" duration={500} delay={200}>
                                <button
                                    onClick={() => setModalOpen(true)}
                                    className={styles.localizacao__button}>
                                    <Content id="localizacao.button" />
                                    <IoIosExpand className={styles.localizacao__button__icon} />
                                </button>
                            </Reveal>
                        </div>
                    </div>
                </Container>
            </section>
            <Modal isOpen={isModalOpen} isFullScreen onClose={() => setModalOpen(false)}>
                <div className={styles.localizacao__modal}>
                    <Container className={styles.localizacao__modal__grid}>
                        {modalItems.map((option, index) => (
                            <div key={`modal-${index}`} className={styles.localizacao__modal__box}>
                                <Content tag="h4">{option.title}</Content>
                                <ul>
                                    {option.options.map((opt, index) => (
                                        <li key={`option-${index}`}>
                                            <Content>{opt}</Content>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </Container>
                </div>
            </Modal>
        </>
    );
};

export default Localizacao;
