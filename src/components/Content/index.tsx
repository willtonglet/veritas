import { content } from '@core/helpers/content';

interface Props {
    id?: string;
    tag?: keyof JSX.IntrinsicElements;
    className?: string;
}

const Content: React.FC<Props> = ({ id, tag: Component = 'span', className, children }) => {
    return (
        <Component
            className={className}
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //@ts-ignore
            dangerouslySetInnerHTML={{ __html: children || content(id) }}
        />
    );
};

export default Content;
