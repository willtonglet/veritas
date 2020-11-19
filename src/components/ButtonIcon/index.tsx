import styles from './styles.module.scss';
import clsx from 'clsx';

interface Props {
    className?: string;
    isDisabled?: boolean;
    hasNoPadding?: boolean;
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const ButtonIcon: React.FC<Props> = ({
    children,
    className,
    isDisabled = false,
    hasNoPadding,
    onClick
}) => {
    return (
        <button
            disabled={isDisabled}
            onClick={onClick}
            className={clsx(
                styles['button-icon'],
                hasNoPadding && styles['button-icon--hasNoPadding'],
                isDisabled && styles['button-icon--isDisabled'],
                className
            )}>
            {children}
        </button>
    );
};

export default ButtonIcon;
