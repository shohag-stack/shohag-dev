'use client';

import { animate, motion, useMotionValue } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

const GooeyButton = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const containerRef = useRef(null);
    const displacementScale = useMotionValue(0);

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect();
                setMousePosition({
                    x: e.clientX - rect.left,
                    y: e.clientY - rect.top,
                });
            }
        };

        const unsubscribe = displacementScale.on('change', (latest) => {
            const el = document.querySelector('#jello-displacement');
            if (el) el.scale.baseVal = latest;
        });

        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            unsubscribe();
        };
    }, [displacementScale]);

    const handleButtonClick = () => {
        animate(displacementScale, [0, 20, -30, 20, -10, 0], {
            duration: 0.6,
            ease: 'easeInOut',
        });
    };

    return (
        <>
            <svg className="hidden absolute">
                <defs>
                    <filter id="gooey-effect">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                        <feColorMatrix
                            in="blur"
                            mode="matrix"
                            values="1 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      0 0 0 18 -7"
                            result="gooey"
                        />
                        <feBlend in="SourceGraphic" in2="gooey" />
                    </filter>
                    <filter id="jello-filter" x="-20%" y="-20%" width="140%" height="140%">
                        <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="10" result="noise" />
                        <feDisplacementMap
                            id="jello-displacement"
                            in="SourceGraphic"
                            in2="noise"
                            scale="0"
                            xChannelSelector="R"
                            yChannelSelector="G"
                        />
                    </filter>
                </defs>
            </svg>

            <div
                ref={containerRef}
                style={{ filter: 'url(#gooey-effect)' }}
                className="absolute inset-0 flex items-center justify-center overflow-hidden"
            >
                <motion.div
                    className="absolute top-0 left-0 bg-black w-6 h-6 rounded-full pointer-events-none"
                    animate={{ x: mousePosition.x - 12, y: mousePosition.y - 12 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 28 }}
                />
                <button
                    onClick={handleButtonClick}
                    style={{ filter: 'url(#jello-filter)' }}
                    className="py-2 px-6 rounded-full relative font-mono bg-black text-white font-medium text-base outline-none select-none"
                >
                    Buy Now
                </button>
            </div>
        </>
    );
};

export default GooeyButton;