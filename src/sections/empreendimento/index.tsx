import Image from 'next/image';
import { useState } from 'react';
import clsx from 'clsx';

import { VscAdd } from 'react-icons/vsc';

import Container from '@components/Container';
import Content from '@components/Content';
import Reveal from '@components/Reveal';
import Modal from '@components/Modal';
import { content } from '@core/helpers/content';

import styles from './styles.module.scss';
import MosaicIcon from './MosaicIcon';

const Empreendimento: React.FC<SectionProps> = ({ id }) => {
    const [isModalOpen, setModalOpen] = useState(false);
    const mosaic = (content('empreendimento.mosaic') as unknown) as MosaicInterface[];
    const modalContent = (content('empreendimento.modal.content') as unknown) as {
        title: string;
        description: string;
    }[];

    return (
        <>
            <section id={id} className={styles.empreendimento}>
                <Container className={styles.empreendimento__container}>
                    <div className={styles.empreendimento__grid}>
                        <div className={styles.empreendimento__grid__text}>
                            <Content id="empreendimento.title" tag="h2" />
                            <div className={styles.empreendimento__grid__mosaic}>
                                {mosaic.map((box, index) => (
                                    <div
                                        key={index}
                                        className={styles.empreendimento__grid__mosaic__item}>
                                        <Reveal animation="top" duration={500} delay={index * 100}>
                                            <div className={styles['grid-box']}>
                                                <MosaicIcon icon={box.id} />
                                                <Content tag="h3">{box.title}</Content>
                                                <Content tag="p">{box.description}</Content>
                                            </div>
                                        </Reveal>
                                    </div>
                                ))}
                                <div className={styles.empreendimento__grid__mosaic__item}>
                                    <Reveal animation="top" duration={500} delay={400}>
                                        <button
                                            aria-label={content('empreendimento.modalButton')}
                                            className={clsx(
                                                styles['grid-box'],
                                                styles['grid-box--button']
                                            )}
                                            onClick={() => setModalOpen(!isModalOpen)}>
                                            <VscAdd
                                                aria-hidden="true"
                                                className={styles['grid-box__icon']}
                                            />
                                            <Content id="empreendimento.modalButton" tag="h3" />
                                        </button>
                                    </Reveal>
                                </div>
                            </div>
                        </div>
                        <div className={styles.empreendimento__grid__image}>
                            <Image
                                src={content('empreendimento.image.url')}
                                width={content('empreendimento.image.size.width')}
                                height={content('empreendimento.image.size.height')}
                                alt={content('empreendimento.image.alt')}
                                layout="responsive"
                                className={styles.cover__image}
                            />
                        </div>
                    </div>
                </Container>
            </section>
            <Modal
                isOpen={isModalOpen}
                onClose={() => setModalOpen(!isModalOpen)}
                title={content('empreendimento.modal.title')}>
                <div className={styles.empreendimento__modal__container}>
                    <ul>
                        {modalContent.map((item, index) => (
                            <li key={index}>
                                <Content tag="strong">{item.title}</Content>
                                <Content>{item.description}</Content>
                            </li>
                        ))}
                    </ul>
                </div>
                <Image src="/modal-logos.png" width={429} height={62} loading="eager" />
            </Modal>
        </>
    );
};

export default Empreendimento;
