import clsx from 'clsx';

import styles from './styles.module.scss';

interface Props extends React.HTMLAttributes<HTMLTextAreaElement> {
    className?: string;
    value: string;
    isRequired?: boolean;
    isDisabled?: boolean;
}

const TextArea: React.FC<Props> = ({
    className,
    value,
    isRequired = false,
    isDisabled = false,
    ...rest
}) => {
    return (
        <div className={clsx(styles.textarea, className)}>
            <textarea disabled={isDisabled} value={value} required={isRequired} {...rest} />
        </div>
    );
};

export default TextArea;
