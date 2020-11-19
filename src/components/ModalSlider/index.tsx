import { useContext, useEffect, Dispatch, SetStateAction } from 'react';
import Image from 'next/image';
import { VscClose, VscChevronLeft, VscChevronRight } from 'react-icons/vsc';
import clsx from 'clsx';

import Reveal from '@components/Reveal';
import Content from '@components/Content';
import Spinner from '@components/Spinner';
import AppContext from 'context';

import styles from './styles.module.scss';

interface Props {
    isOpen: boolean;
    slides: Array<SlidesInterface>;
    currentSlide: number;
    setCurrentSlide: Dispatch<SetStateAction<number>>;
    onClose: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    isLightMode?: boolean;
}

const ModalSlider: React.FC<Props> = ({
    isOpen = false,
    slides,
    currentSlide,
    setCurrentSlide,
    onClose,
    isLightMode = false
}) => {
    const { setScrollBlocked } = useContext(AppContext);

    useEffect(() => setScrollBlocked(isOpen), [isOpen]);

    return (
        <>
            {isOpen && (
                <Reveal animation="top" duration={1000}>
                    <div
                        className={clsx(
                            styles['modal-slider'],
                            isLightMode && styles['modal-slider--light']
                        )}>
                        <button
                            onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                                setScrollBlocked(false);
                                onClose(e);
                            }}
                            className={styles['modal-slider__close']}>
                            <VscClose />
                        </button>

                        <div className={styles['modal-slider__container']}>
                            {slides.map((slide, index) => (
                                <div
                                    key={index}
                                    className={clsx(
                                        styles['modal-slider__container__image'],
                                        index === currentSlide &&
                                            styles['modal-slider__container__image--active']
                                    )}>
                                    <Spinner className={styles['modal-slider__spinner']} />
                                    <Image
                                        src={slide.image.main.url}
                                        width={slide.image.main.size.width}
                                        height={slide.image.main.size.height}
                                    />
                                </div>
                            ))}
                        </div>

                        <div className={styles['modal-slider__footer']}>
                            <button
                                className={clsx(
                                    styles['modal-slider__footer__button'],
                                    isLightMode && styles['modal-slider__footer__button--light']
                                )}
                                disabled={currentSlide === 0}
                                onClick={() => setCurrentSlide(currentSlide - 1)}>
                                <VscChevronLeft />
                            </button>
                            <button
                                className={clsx(
                                    styles['modal-slider__footer__button'],
                                    isLightMode && styles['modal-slider__footer__button--light']
                                )}
                                disabled={currentSlide === slides.length - 1}
                                onClick={() => setCurrentSlide(currentSlide + 1)}>
                                <VscChevronRight />
                            </button>
                            <Content tag="h6" className={styles['modal-slider__text']}>
                                {slides[currentSlide].title}
                            </Content>
                        </div>
                    </div>
                </Reveal>
            )}
        </>
    );
};

export default ModalSlider;
