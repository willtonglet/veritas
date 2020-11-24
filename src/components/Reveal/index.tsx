import React, { useRef } from 'react';
import useOnScreen from 'hooks/useOnScreen';
import useWindowSize from 'hooks/useWindowSize';

interface Props {
    animation?: 'fadeIn' | 'top' | 'bottom' | 'left' | 'right' | 'blur';
    delay?: number;
    duration?: number;
    threshold?: number;
    className?: string;
    hasNoAnimationOnMobile?: boolean;
}

const Reveal: React.FC<Props> = ({
    children,
    animation = 'fadeIn',
    delay,
    duration = 250,
    threshold,
    hasNoAnimationOnMobile = true
}) => {
    const revealRef = useRef(null);
    const onScreen = useOnScreen(revealRef, true, '0px', threshold);
    const size = useWindowSize();
    const renderTimingAnimation: React.CSSProperties = {};
    const renderAnimation = hasNoAnimationOnMobile && size > 600;

    if (onScreen && renderAnimation) {
        if (animation) renderTimingAnimation.animationName = animation;
        if (delay) renderTimingAnimation.animationDelay = `${(delay / 1000).toString()}s`;
        if (duration) renderTimingAnimation.animationDuration = `${(duration / 1000).toString()}s`;

        renderTimingAnimation.animationFillMode = 'forwards';
        renderTimingAnimation.animationTimingFunction = 'ease-in-out';
    }
    renderTimingAnimation.opacity = renderAnimation ? 0 : 1;

    const childrenWithProps = React.Children.map(children, (child) =>
        React.cloneElement(child as React.ReactElement, {
            ref: revealRef,
            style: renderTimingAnimation
        })
    );

    return <>{childrenWithProps}</>;
};

export default Reveal;
