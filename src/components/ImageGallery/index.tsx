import { useState, useContext, useEffect } from 'react';
import Image from 'next/image';
import clsx from 'clsx';

import { IoIosExpand } from 'react-icons/io';
import {
    VscChevronUp,
    VscChevronDown,
    VscClose,
    VscChevronLeft,
    VscChevronRight
} from 'react-icons/vsc';

import { content } from '@core/helpers/content';
import Content from '@components/Content';
import Reveal from '@components/Reveal';
import AppContext from 'context';

import styles from './styles.module.scss';

const ImageGallery: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [currentVisible, setCurrentVisible] = useState(0);
    const [isModalOpen, setModalOpen] = useState(false);
    const { setScrollBlocked } = useContext(AppContext);

    const slides = (content('perspectivas.slides') as unknown) as SlidesInterface[];
    const slicedSlides = slides.slice(0 + currentVisible, 3 + currentVisible);

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
                        <Image
                            src={slide.image.cover.url}
                            width={slide.image.cover.size.width}
                            height={slide.image.cover.size.height}
                            layout="responsive"
                        />
                        <div className={styles['image-gallery__legend-box']}>
                            <button
                                onClick={() => {
                                    setModalOpen(true);
                                    setScrollBlocked(true);
                                }}
                                className={styles['image-gallery__legend-box__maximize']}>
                                <IoIosExpand />
                            </button>
                            <Content
                                tag="h4"
                                className={styles['image-gallery__legend-box__label']}>
                                {slide.title}
                            </Content>
                        </div>
                    </div>
                ))}
            </div>
            <div className={styles['image-gallery__navigation']}>
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
                        tabIndex={index}>
                        <div className={styles['image-gallery__navigation__thumb__image']}>
                            <Image
                                src={slide.image.thumb.url}
                                width={slide.image.thumb.size.width}
                                height={slide.image.thumb.size.height}
                                layout="responsive"
                                loading="eager"
                            />
                        </div>
                        <Content tag="h6" className={styles['image-gallery__navigation__text']}>
                            {slide.title}
                        </Content>
                    </div>
                ))}

                <div className={styles['image-gallery__navigation__control']}>
                    <button
                        disabled={currentVisible < 3}
                        onClick={() => setCurrentVisible(currentVisible - 3)}
                        className={styles['image-gallery__navigation__control__button']}>
                        <VscChevronUp />
                    </button>
                    <button
                        disabled={currentVisible === slides.length - slicedSlides.length}
                        onClick={() => setCurrentVisible(currentVisible + 3)}
                        className={styles['image-gallery__navigation__control__button']}>
                        <VscChevronDown />
                    </button>
                </div>
            </div>
            {isModalOpen && (
                <Reveal animation="top" duration={1000}>
                    <div className={styles['image-gallery__modal']}>
                        <button
                            onClick={() => {
                                setModalOpen(false);
                                setScrollBlocked(false);
                            }}
                            className={styles['image-gallery__modal__close']}>
                            <VscClose />
                        </button>

                        <div className={styles['image-gallery__modal__container']}>
                            {slides.map((slide, index) => (
                                <div
                                    key={index}
                                    className={clsx(
                                        styles['image-gallery__modal__container__image'],
                                        index === currentSlide &&
                                            styles['image-gallery__modal__container__image--active']
                                    )}>
                                    <Image
                                        src={slide.image.main.url}
                                        width={slide.image.main.size.width}
                                        height={slide.image.main.size.height}
                                    />
                                </div>
                            ))}
                        </div>

                        <div className={styles['image-gallery__modal__footer']}>
                            <button
                                disabled={currentSlide === 0}
                                onClick={() => setCurrentSlide(currentSlide - 1)}>
                                <VscChevronLeft />
                            </button>
                            <button
                                disabled={currentSlide === slides.length - 1}
                                onClick={() => setCurrentSlide(currentSlide + 1)}>
                                <VscChevronRight />
                            </button>
                            <Content tag="h6" className={styles['image-gallery__modal__text']}>
                                {slides[currentSlide].title}
                            </Content>
                        </div>
                    </div>
                </Reveal>
            )}
        </div>
    );
};

export default ImageGallery;
