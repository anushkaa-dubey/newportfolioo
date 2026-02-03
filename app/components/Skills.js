'use client';

import styles from './Skills.module.css';

const skillsData = [
    {
        category: "Frontend Dev",
        skills: ["React.js", "Next.js", "Javascript (ES6+)", "HTML5 / CSS3", "Responsive Architecture"]
    },
    {
        category: "Design System",
        skills: ["Figma", "Canva", "UI/UX Strategy", "Visual Identity", "Interaction Design"]
    },
    {
        category: "Core Backend",
        skills: ["Node.js", "Python", "RESTful Systems", "Data Architecture", "Cloud Integration"]
    },
    {
        category: "Infrastructure",
        skills: ["Vercel / Netlify", "Git / Workflow", "Firebase", "Postman", "CI/CD Basics"]
    },
    {
        category: "Professional",
        skills: ["Agile Management", "Technical Writing", "Strategic Thinking", "Deep Collaboration"]
    }
];

export default function Skills() {
    return (
        <section className={styles.skills} id="skills">
            <div className={styles.container}>
                <h2 className={styles.sectionTitle}>Skillset Matrix</h2>
                <div className={styles.grid}>
                    {skillsData.map((cat, index) => (
                        <div key={index} className={styles.categoryCard}>
                            <h3 className={styles.categoryTitle}>{cat.category}</h3>
                            <ul className={styles.skillList}>
                                {cat.skills.map(skill => (
                                    <li key={skill} className={styles.skillItem}>
                                        <div className={styles.indicator}></div>
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
