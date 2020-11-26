import { useState } from 'react';
import Image from 'next/image';
import clsx from 'clsx';

import { IoIosExpand } from 'react-icons/io';
import { VscChevronUp, VscChevronDown } from 'react-icons/vsc';

import Content from '@components/Content';
import Reveal from '@components/Reveal';
import Spinner from '@components/Spinner';
import ModalSlider from '@components/ModalSlider';
import ButtonIcon from '@components/ButtonIcon';

import styles from './styles.module.scss';

interface Props {
    slides: Array<SlidesInterface>;
}

const ImageGallery: React.FC<Props> = ({ slides }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [currentVisible, setCurrentVisible] = useState(0);
    const [isModalOpen, setModalOpen] = useState(false);

    const slicedSlides = slides.slice(0 + currentVisible, 3 + currentVisible);

    const spinner = <Spinner className={styles['image-gallery__spinner']} />;

    return (
        <div className={styles['image-gallery']}>
            <div className={styles['image-gallery__image']}>
                {slides.map((slide, index) => (
                    <div
                        className={clsx(
                            styles['image-gallery__image__container'],
                            index === currentSlide &&
                                styles['image-gallery__image__container--active']
                        )}
                        key={index}>
                        {spinner}
                        <Image
                            src={slide.image.cover.url}
                            width={slide.image.cover.size.width}
                            height={slide.image.cover.size.height}
                            alt={slide.title}
                            layout="responsive"
                            loading={index === 0 ? 'eager' : 'lazy'}
                        />
                        <Reveal animation="left" duration={500}>
                            <div className={styles['image-gallery__legend-box']}>
                                <ButtonIcon
                                    aria-label={`Maximizar ${slide.title}`}
                                    onClick={() => setModalOpen(true)}
                                    className={styles['image-gallery__legend-box__maximize']}>
                                    <IoIosExpand aria-hidden="true" />
                                </ButtonIcon>
                                <Content
                                    tag="h3"
                                    className={styles['image-gallery__legend-box__label']}>
                                    {slide.title}
                                </Content>
                            </div>
                        </Reveal>
                    </div>
                ))}
            </div>
            <div className={styles['image-gallery__navigation']}>
                <div className={styles['image-gallery__navigation__images']}>
                    {slicedSlides.map((slide, index) => (
                        <div
                            key={index}
                            role="button"
                            onClick={() => setCurrentSlide(index + currentVisible)}
                            onKeyPress={() => setCurrentSlide(index + currentVisible)}
                            className={clsx(
                                styles['image-gallery__navigation__thumb'],
                                currentSlide === index + currentVisible &&
                                    styles['image-gallery__navigation__thumb--active']
                            )}
                            tabIndex={0}>
                            <div className={styles['image-gallery__navigation__thumb__image']}>
                                <Image
                                    src={slide.image.thumb.url}
                                    width={slide.image.thumb.size.width}
                                    height={slide.image.thumb.size.height}
                                    alt={slide.title}
                                    layout="responsive"
                                    loading="eager"
                                />
                            </div>
                            <Content
                                className={clsx(
                                    styles['image-gallery__navigation__thumb__text'],
                                    currentSlide === index + currentVisible &&
                                        styles['image-gallery__navigation__thumb__text--active']
                                )}>
                                {slide.title}
                            </Content>
                        </div>
                    ))}
                </div>

                <div className={styles['image-gallery__navigation__control']}>
                    <button
                        aria-label="Ir para as imagens anteriores"
                        disabled={currentVisible < 3}
                        onClick={() => setCurrentVisible(currentVisible - 3)}
                        className={styles['image-gallery__navigation__control__button']}>
                        <VscChevronUp aria-hidden="true" />
                    </button>
                    <button
                        aria-label="Ir para próximas imagens"
                        disabled={currentVisible === slides.length - slicedSlides.length}
                        onClick={() => setCurrentVisible(currentVisible + 3)}
                        className={styles['image-gallery__navigation__control__button']}>
                        <VscChevronDown aria-hidden="true" />
                    </button>
                </div>
            </div>
            <ModalSlider
                isOpen={isModalOpen}
                currentSlide={currentSlide}
                setCurrentSlide={setCurrentSlide}
                slides={slides}
                onClose={() => setModalOpen(false)}
            />
        </div>
    );
};

export default ImageGallery;
