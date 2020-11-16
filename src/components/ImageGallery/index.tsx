import styles from './styles.module.scss';

const ImageGallery: React.FC = () => {
    return (
        <div className={styles['image-gallery']}>
            <div className={styles['image-gallery__image']}></div>
            <div className={styles['image-gallery__navigation']}></div>
        </div>
    );
};

export default ImageGallery;
