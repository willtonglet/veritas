import { useRef, useState } from 'react';
import clsx from 'clsx';
import { AiFillPlayCircle, AiFillPauseCircle } from 'react-icons/ai';

import Container from '@components/Container';
import Reveal from '@components/Reveal';

import styles from './styles.module.scss';

const Video: React.FC = () => {
    const [isPaused, setIsPaused] = useState(true);
    const videoRef = useRef<HTMLVideoElement>(null);

    const handleVideoPlay = () =>
        videoRef.current?.paused ? videoRef.current?.play() : videoRef.current?.pause();

    return (
        <section className={styles.video}>
            <div className={styles.video__background}>
                <div className={styles['video__background--a']} />
                <div className={styles['video__background--b']} />
            </div>
            <div className={styles.video__container}>
                <Container className={styles.video__grid}>
                    <Reveal animation="left" duration={700}>
                        <div className={styles.video__grid__logo}>
                            <img src="/logo-white.svg" width={347} height={94} alt="Veritas" />
                        </div>
                    </Reveal>
                    <div className={styles.video__grid__video}>
                        <Reveal animation="right" duration={700}>
                            <svg
                                className={styles.video__grid__video__v}
                                viewBox="0 0 920 583"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M813.539 -76L468.125 591.952M468.09 591.952L124.073 -76L468.09 591.952ZM0 -76L366.963 613.017L0 -76ZM566.366 613.017L933.467 -76L566.366 613.017Z"
                                    stroke="#F0BDAA"
                                    strokeWidth="15.672"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </Reveal>
                        <div
                            className={clsx(
                                styles.video__grid__video__frame,
                                !isPaused && styles['video__grid__video__frame--active']
                            )}>
                            <button
                                aria-label={isPaused ? 'Tocar vídeo' : 'Pausar vídeo'}
                                onClick={handleVideoPlay}
                                className={styles.video__grid__video__frame__button}>
                                {isPaused ? (
                                    <AiFillPlayCircle aria-hidden="true" />
                                ) : (
                                    <AiFillPauseCircle aria-hidden="true" />
                                )}
                            </button>

                            <video
                                src="/video.mp4"
                                controls={false}
                                ref={videoRef}
                                preload="none"
                                onPlay={() => setIsPaused(false)}
                                onPause={() => setIsPaused(true)}
                            />
                        </div>
                    </div>
                </Container>
            </div>
        </section>
    );
};

export default Video;
