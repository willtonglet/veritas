import { useState } from 'react';
import Image from 'next/image';
import { VscChevronLeft, VscChevronRight } from 'react-icons/vsc';
import { IoIosExpand } from 'react-icons/io';

import ModalSlider from '@components/ModalSlider';
import Content from '@components/Content';
import Reveal from '@components/Reveal';

import styles from './styles.module.scss';

interface Props {
    slides: Array<SpacesInterface>;
}

const ImageSlider: React.FC<Props> = ({ slides }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isModalOpen, setModalOpen] = useState(false);

    return (
        <>
            <div className={styles['image-slider']}>
                <Reveal animation="left" duration={500} threshold={0.7}>
                    <div className={styles['image-slider__navigation']}>
                        <div className={styles['image-slider__slide__title']}>
                            <Content tag="h2">{'163<span>m2</span>'}</Content>
                            <Content tag="h3">40 Unidades</Content>
                            <ul>
                                <li>4 dorms.</li>
                                <li>4 dorms.</li>
                                <li>4 dorms.</li>
                            </ul>
                        </div>
                        <div className={styles['image-slider__controls']}>
                            <button>
                                <VscChevronLeft />
                            </button>
                            <button>
                                <VscChevronRight />
                            </button>
                        </div>
                    </div>
                </Reveal>
                <Reveal animation="fadeIn" duration={500} threshold={0.7}>
                    <div className={styles['image-slider__images']}>
                        <button className={styles['image-slider__images__maximize']}>
                            <IoIosExpand />
                        </button>
                        <Image
                            src="/spaces/1.png"
                            width={890}
                            height={571}
                            layout="responsive"
                            loading="eager"
                        />
                    </div>
                </Reveal>
            </div>

            <ModalSlider
                isOpen={isModalOpen}
                currentSlide={currentSlide}
                setCurrentSlide={setCurrentSlide}
                slides={slides}
                onClose={() => setModalOpen(false)}
            />
        </>
    );
};

export default ImageSlider;
