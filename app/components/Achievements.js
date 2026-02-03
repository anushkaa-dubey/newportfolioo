'use client';

import styles from './Achievements.module.css';

const achievements = [
    {
        title: "2nd Runner-Up",
        event: "Android Explore Hackathon",
        organization: "Imarticus Learning",
        description: "Developed an innovative Android solution within 48 hours."
    },
    {
        title: "Top 50",
        event: "CodeVerse Hackathon",
        organization: "Coding Community",
        description: "Ranked among top performers in a nationwide coding competition."
    },
    {
        title: "MUN Participation",
        event: "Ryan Model United Nations",
        organization: "School",
        description: "Represented a country in diplomatic simulations and debates."
    }
];

export default function Achievements() {
    return (
        <section className={styles.achievements} id="achievements">
            <h2 className={styles.sectionTitle}>Achievements</h2>
            <div className={styles.container}>
                {achievements.map((ach, index) => (
                    <div key={index} className={styles.achCard}>
                        <div className={styles.achIcon}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="12" cy="8" r="7" />
                                <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
                            </svg>
                        </div>
                        <div className={styles.achInfo}>
                            <h3 className={styles.achTitle}>{ach.title}</h3>
                            <p className={styles.achEvent}>{ach.event} – {ach.organization}</p>
                            <p className={styles.achDesc}>{ach.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
