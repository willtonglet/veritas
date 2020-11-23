import { useState } from 'react';
import Image from 'next/image';
import { VscChevronLeft, VscChevronRight } from 'react-icons/vsc';
import { IoIosExpand } from 'react-icons/io';

import ModalSlider from '@components/ModalSlider';
import Content from '@components/Content';
import Reveal from '@components/Reveal';
import ButtonIcon from '@components/ButtonIcon';
import Spinner from '@components/Spinner';

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
                <div className={styles['image-slider__navigation']}>
                    {slides.map(
                        (slide, index) =>
                            index === currentSlide && (
                                <div
                                    key={`slide-${index}`}
                                    className={styles['image-slider__slide__text']}>
                                    <Reveal animation="fadeIn" duration={400}>
                                        <Content tag="h4">{slide.title}</Content>
                                    </Reveal>
                                    <Reveal animation="fadeIn" duration={400}>
                                        <Content tag="h2">{slide.size}</Content>
                                    </Reveal>
                                    <Reveal animation="right" duration={400}>
                                        <Content tag="h3">{slide.amount}</Content>
                                    </Reveal>
                                    <Reveal animation="fadeIn" duration={400}>
                                        <ul>
                                            {slide.items.map((item, index) => (
                                                <li key={`item-${index}`}>{item}</li>
                                            ))}
                                        </ul>
                                    </Reveal>
                                </div>
                            )
                    )}
                    <div className={styles['image-slider__controls']}>
                        <ButtonIcon
                            aria-label="Ir para imagem anterior"
                            isDisabled={currentSlide === 0}
                            onClick={() => setCurrentSlide(currentSlide - 1)}
                            hasNoPadding>
                            <VscChevronLeft aria-hidden="true" />
                        </ButtonIcon>
                        <ButtonIcon
                            aria-label="Ir para próxima imagem"
                            isDisabled={currentSlide === slides.length - 1}
                            onClick={() => setCurrentSlide(currentSlide + 1)}
                            hasNoPadding>
                            <VscChevronRight aria-hidden="true" />
                        </ButtonIcon>
                    </div>
                </div>
                <div className={styles['image-slider__images']}>
                    <ButtonIcon
                        aria-label="Maximizar Imagem"
                        onClick={() => setModalOpen(true)}
                        className={styles['image-slider__images__maximize']}>
                        <IoIosExpand aria-hidden="true" />
                    </ButtonIcon>
                    {slides.map(
                        (slide, index) =>
                            index === currentSlide && (
                                <Reveal key={`image-${index}`} animation="fadeIn" duration={600}>
                                    <div className={styles['image-slider__images__image']}>
                                        <Spinner
                                            color="secondary"
                                            className={styles['image-slider__images__spinner']}
                                        />
                                        <Image
                                            src={slide.image.main.url}
                                            width={slide.image.main.size.width}
                                            height={slide.image.main.size.height}
                                            alt={slide.title}
                                            layout="responsive"
                                            loading={index === 0 ? 'eager' : 'lazy'}
                                        />
                                    </div>
                                </Reveal>
                            )
                    )}
                </div>
            </div>

            <ModalSlider
                isLightMode
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
