'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './About.module.css';

export default function About() {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className={`${styles.about} ${isVisible ? styles.visible : ''}`} id="about">
            <div className={styles.container}>
                <div className={styles.left}>
                    <div className={styles.aestheticOrb}>
                        <div className={styles.orbInner}></div>
                    </div>
                </div>
                <div className={styles.right}>
                    <h2 className={styles.sectionTitle}>The Vision</h2>
                    <div className={styles.text}>
                        <p>
I’m a software developer focused on building reliable, accessible web applications and solving real user problems through collaboration.
</p>
                        <p>
My work emphasizes clear interfaces, performance, and simple, scalable engineering solutions.                        </p>
                        
                    </div>
                </div>
            </div>
        </section>
    );
}
