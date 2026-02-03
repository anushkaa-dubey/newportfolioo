'use client';

import { useEffect, useState } from 'react';
import styles from './Hero.module.css';

export default function Hero() {
    const fullText = "Hello, I am Anushka Dubey, a Software Developer";
    const [displayText, setDisplayText] = useState("");
    const [isDone, setIsDone] = useState(false);

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setDisplayText(fullText.slice(0, i));
            i++;
            if (i > fullText.length) {
                clearInterval(interval);
                setIsDone(true);
            }
        }, 70);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className={styles.hero}>
            <div className={styles.gridOverlay}></div>
            <div className={styles.coordinates}>
                <span>23° 15' N / 77° 24' E</span>
                <span>VITB_STK_2027</span>
                <div className={styles.statusTag}>
                    <span className={styles.statusDot}></span>
                    Available for projects
                </div>
            </div>

            <div className={`${styles.content} ${isDone ? styles.done : ''}`}>
                <h1 className={styles.title}>
                    {displayText}
                    <span className={styles.caret}>|</span>
                </h1>
                <p className={styles.subtitle}>Crafting digital experiences with precision and purpose.</p>
            </div>

            <div className={styles.aestheticLine}></div>

            <div className={styles.scrollIndicator}>
                <span>Scroll</span>
                <div className={styles.line}></div>
            </div>
        </section>
    );
}
