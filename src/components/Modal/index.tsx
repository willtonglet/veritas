import { useEffect, useRef, useContext } from 'react';
import clsx from 'clsx';
import { VscClose } from 'react-icons/vsc';

import Reveal from '@components/Reveal';
import Content from '@components/Content';
import AppContext from 'context';

import styles from './styles.module.scss';

interface Props {
    isOpen: boolean;
    onClose: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    title?: string;
    isFullScreen?: boolean;
}

const Modal: React.FC<Props> = ({
    children,
    isOpen = false,
    onClose,
    title,
    isFullScreen = false
}) => {
    const modalRef = useRef<HTMLDivElement>(null);
    const { setScrollBlocked } = useContext(AppContext);

    const handleClickOutside = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
        isOpen && !modalRef.current?.contains(e.target as Node) && onClose(e);

    useEffect(() => setScrollBlocked(isOpen), [isOpen]);

    useEffect(() => {
        document.addEventListener('click', handleClickOutside as () => void);
        return () => document.removeEventListener('click', handleClickOutside as () => void);
    }, [isOpen]);

    return (
        <>
            {isOpen && (
                <div className={styles.modal}>
                    <Reveal animation="top" duration={700}>
                        <div
                            className={clsx(
                                styles.modal__wrapper,
                                isFullScreen && styles['modal__wrapper--isFullScreen']
                            )}
                            ref={modalRef}>
                            <div
                                className={clsx(
                                    styles.modal__container,
                                    isFullScreen && styles['modal__container--isFullScreen']
                                )}
                                ref={modalRef}>
                                <button onClick={onClose} className={styles.modal__close}>
                                    <VscClose />
                                </button>
                                {title && (
                                    <Content tag="h3" className={styles.modal__title}>
                                        {title}
                                    </Content>
                                )}

                                {children}
                            </div>
                        </div>
                    </Reveal>
                </div>
            )}
        </>
    );
};

export default Modal;
