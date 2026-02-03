'use client';

import { useState } from 'react';
import styles from './Experience.module.css';

const professionalExp = [
    {
        role: "Frontend Web Intern",
        company: "LioMonk",
        period: "Internship",
        description: "Built frontend of a SaaS application using Next.js. Integrated APIs and ensured responsive design.",
        tech: ["Next.js", "API Integration", "CSS Modules"]
    },
    {
        role: "Project Developer",
        company: "Axoraa",
        period: "Part-time",
        description: "Developed Python interaction-based projects. Focused on performance and automation.",
        tech: ["Python", "Automation", "Scripts"]
    }
];

const academicExp = [

    {
        role: "Vice President",
        company: "Notion Community",
        period: "Community",
        description: "Leading community initiatives and organizing workshops on productivity and digital organization.",
        tech: ["Productivity", "Leadership", "Workshops"]
    },
    {
        role: "Open Source Contributor",
        company: "Hacktoberfest & GSSoC 24",
        period: "Oct 2024 & Summer 2024",
        description: "Contributed to various open-source projects during global initiatives.",
        tech: ["Open Source", "Git", "Collaboration"]
    },
    {
        role: "Social Media Core Member",
        company: "AI Club",
        period: "Club",
        description: "Managing social media presence and content strategy for the AI club. Promoting technical literacy.",
        tech: ["Strategy", "Content"]
    },
    {
        role: "Member",
        company: "Women Techmakers",
        period: "Community",
        description: "Active member contributing to diversity and inclusion in technology.",
        tech: ["Community", "WTM"]
    },

    {
        role: "Volunteering Intern",
        company: "She Can Foundation",
        period: "Jun 2024 - Jul 2024",
        description: "Contributed to foundation initiatives and social impact projects.",
        tech: ["Volunteering", "Social Impact"]
    }
];

export default function Experience() {
    const [view, setView] = useState('professional');

    const currentExp = view === 'professional' ? professionalExp : academicExp;

    return (
        <section className={styles.experience} id="experience">
            <div className={styles.header}>
                <h2 className={styles.sectionTitle}>Experience</h2>
            </div>

            <div className={styles.mainToggle}>
                <button
                    className={`${styles.mainToggleBtn} ${view === 'professional' ? styles.activeView : ''}`}
                    onClick={() => setView('professional')}
                >
                    Professional
                </button>
                <button
                    className={`${styles.mainToggleBtn} ${view === 'academic' ? styles.activeView : ''}`}
                    onClick={() => setView('academic')}
                >
                    Community
                </button>
            </div>

            <div className={styles.grid}>
                {currentExp.map((exp, index) => (
                    <div key={index} className={styles.card}>
                        <div className={styles.cardHeader}>
                            <span className={styles.role}>{exp.role}</span>
                            <span className={styles.company}>{exp.company}</span>
                        </div>
                        <p className={styles.period}>{exp.period}</p>
                        <p className={styles.description}>{exp.description}</p>
                        <div className={styles.techTags}>
                            {exp.tech.map(t => <span key={t} className={styles.tag}>{t}</span>)}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
