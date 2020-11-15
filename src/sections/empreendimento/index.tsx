import Image from 'next/image';
import clsx from 'clsx';
import { VscAdd } from 'react-icons/vsc';

import Container from '@components/Container';
import Content from '@components/Content';
import { content } from '@core/helpers/content';

import styles from './styles.module.scss';

const Empreendimento: React.FC = () => {
    const mosaic = (content('empreendimento.mosaic') as unknown) as MosaicInterface[];

    return (
        <section className={styles.empreendimento}>
            <Container className={styles.empreendimento__container}>
                <div className={styles.empreendimento__grid}>
                    <div className={styles.empreendimento__grid__text}>
                        <Content id="empreendimento.title" tag="h1" />
                        <div className={styles.empreendimento__grid__mosaic}>
                            {mosaic.map((box, index) => (
                                <div
                                    key={index}
                                    className={styles.empreendimento__grid__mosaic__item}>
                                    <div className={styles['grid-box']}>
                                        <img
                                            src={box.icon}
                                            alt={box.title}
                                            className={styles['grid-box__icon']}
                                        />
                                        <Content tag="h3">{box.title}</Content>
                                        <Content tag="p">{box.description}</Content>
                                    </div>
                                </div>
                            ))}
                            <div className={styles.empreendimento__grid__mosaic__item}>
                                <div
                                    className={clsx(
                                        styles['grid-box'],
                                        styles['grid-box--button']
                                    )}>
                                    <VscAdd className={styles['grid-box__icon']} />
                                    <Content id="empreendimento.modalButton" tag="h3" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.empreendimento__grid__image}>
                        <Image
                            src="/empreendimento.jpg"
                            width={826}
                            height={1064}
                            className={styles.cover__image}
                        />
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Empreendimento;
