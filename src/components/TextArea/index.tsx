import clsx from 'clsx';

import styles from './styles.module.scss';

interface Props extends React.HTMLAttributes<HTMLTextAreaElement> {
    className?: string;
    value: string;
    isRequired?: boolean;
    isDisabled?: boolean;
    placeholder: string;
    id: string;
}

const TextArea: React.FC<Props> = ({
    className,
    value,
    isRequired = false,
    isDisabled = false,
    placeholder,
    id,
    ...rest
}) => {
    return (
        <div className={clsx(styles.textarea, className)}>
            <label htmlFor={id}>{placeholder}</label>
            <textarea
                id={id}
                placeholder={placeholder}
                disabled={isDisabled}
                value={value}
                required={isRequired}
                {...rest}
            />
        </div>
    );
};

export default TextArea;
