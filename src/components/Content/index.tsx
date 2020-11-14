import { content } from '@core/helpers/content';

interface Props {
    id: string;
    tag?: keyof JSX.IntrinsicElements;
}

const Content: React.FC<Props> = ({ id, tag: Component = 'span' }) => {
    return <Component dangerouslySetInnerHTML={{ __html: content(id) }} />;
};

export default Content;
