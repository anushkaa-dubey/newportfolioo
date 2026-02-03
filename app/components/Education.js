'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './Education.module.css';

const educationData = [
    {
        title: "Bachelor of Technology (B.Tech)",
        institution: "VIT Bhopal University ",
        year: "2023 - 2027",
        description: "Specializing in Computer Science and Engineering. Focused on core software development principles and modern web technologies."
    },
    {
        title: "Higher Secondary Education (12th Grade), ISC",
        institution: "St. Xavier's High School, Gupteshwar",
        year: "2022 - 2023",
        description: "Focus on academic excellence and active member of the MUN council."
    },
    {
        title: "Secondary School Education (10th Grade), ICSE",
        institution: "St. Xavier's High School, Gupteshwar",
        year: "2020 - 2021",
        description: "Foundation building and early participation in MUN council meetings."
    }
];

export default function Education() {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className={`${styles.education} ${isVisible ? styles.visible : ''}`} id="education">
            <h2 className={styles.sectionTitle}>Education</h2>
            <div className={styles.timeline}>
                {educationData.map((item, index) => (
                    <div key={index} className={styles.timelineItem}>
                        <div className={styles.dot}></div>
                        <div className={styles.content}>
                            <span className={styles.year}>{item.year}</span>
                            <h3 className={styles.title}>{item.title}</h3>
                            <p className={styles.institution}>{item.institution}</p>
                            <p className={styles.description}>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
