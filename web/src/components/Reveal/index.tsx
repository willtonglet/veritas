import React, { useRef } from 'react';
import useOnScreen from 'hooks/useOnScreen';

interface Props {
    animation?: 'fadeIn' | 'top' | 'bottom' | 'left' | 'right' | 'blur';
    delay?: number;
    duration?: number;
    threshold?: number;
    className?: string;
}

const Reveal: React.FC<Props> = ({
    children,
    animation = 'fadeIn',
    delay,
    duration = 250,
    threshold
}) => {
    const revealRef = useRef(null);
    const onScreen = useOnScreen(revealRef, true, '0px', threshold);
    const renderTimingAnimation: React.CSSProperties = {};

    if (animation && onScreen) renderTimingAnimation.animationName = animation;
    if (delay && onScreen) renderTimingAnimation.animationDelay = `${(delay / 1000).toString()}s`;
    if (duration && onScreen)
        renderTimingAnimation.animationDuration = `${(duration / 1000).toString()}s`;
    if (onScreen) {
        renderTimingAnimation.animationFillMode = 'forwards';
        renderTimingAnimation.animationTimingFunction = 'ease-in-out';
    }

    renderTimingAnimation.opacity = 0;

    const childrenWithProps = React.Children.map(children, (child) =>
        React.cloneElement(child as React.ReactElement, {
            ref: revealRef,
            style: renderTimingAnimation
        })
    );

    return <>{childrenWithProps}</>;
};

export default Reveal;
