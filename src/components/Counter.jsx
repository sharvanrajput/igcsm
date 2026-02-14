import { useEffect, useRef, useState } from "react";

export default function Counter({ end = 100, duration = 2000, suffix = "" }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const startTime = useRef(null);
    const frame = useRef(null);

    // 👇 detect viewport
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) startAnimation();
                else setCount(0); // reset when leaving view
            },
            { threshold: 0.3 }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    const startAnimation = () => {
        cancelAnimationFrame(frame.current);
        startTime.current = null;

        const animate = (timestamp) => {
            if (!startTime.current) startTime.current = timestamp;
            const progress = timestamp - startTime.current;
            const percentage = Math.min(progress / duration, 1);

            setCount(Math.floor(percentage * end));

            if (progress < duration) {
                frame.current = requestAnimationFrame(animate);
            }
        };

        frame.current = requestAnimationFrame(animate);
    };

    return (
        <span ref={ref}>
            {count}
            {suffix}
        </span>
    );
}
