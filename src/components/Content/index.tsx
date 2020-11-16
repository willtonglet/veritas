import React from 'react';
import { content } from '@core/helpers/content';

interface Props {
    id?: string;
    tag?: 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'label' | 'strong' | 'div';
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
}

const Content = React.forwardRef<HTMLHeadingElement, Props>(
    ({ id, tag: Component = 'span', className, children, style }, ref) => {
        return (
            <Component
                ref={ref as React.LegacyRef<any>}
                className={className}
                style={style}
                dangerouslySetInnerHTML={{
                    __html: (children as string) || content(id as string)
                }}
            />
        );
    }
);

Content.displayName = 'Content';
export default Content;
