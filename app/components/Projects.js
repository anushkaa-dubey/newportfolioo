'use client';

import { useState } from 'react';
import styles from './Projects.module.css';

const mainProjects = [
    {
        title: "NyayaCop",
        description: "A legal tech solution simplifying legal procedures and providing easy access to justice resources.",
        tech: ["React js", "TypeScript", "MongoDB", "Gemini API"],
        links: { github: "https://github.com/anushkaa-dubey/NyayaCop", demo: "https://code-verse-snowy.vercel.app/" }
    },
    {
        title: "Eczema Detection",
        description: "An AI-powered dermatological tool for early detection and analysis of eczema skin patterns.",
        tech: ["ML Models", "Streamlit", "Python"],
        links: { github: "https://github.com/anushkaa-dubey/eczema-project" }
    }
];

const playProjects = [
    {
        title: "Tic Tac Toe",
        description: "Classic game. Can you beat the CPU? No prize for winning, just bragging rights.",
        tech: ["HTML", "CSS", "JavaScript"],
        links: { github: "https://github.com/anushkaa-dubey/Tic-Tac-Toe" }
    },
    {
        title: "Random Password Generator",
        description: "Generates passwords so secure even you will forget them instantly.",
        tech: ["JavaScript", "HTML"],
        links: { github: "https://github.com/anushkaa-dubey/passwordgenerator" }
    }
];

export default function Projects() {
    const [view, setView] = useState('main');

    const currentProjects = view === 'main' ? mainProjects : playProjects;

    return (
        <section className={`${styles.projects} ${view === 'play' ? styles.playView : ''}`} id="projects">
            <div className={styles.header}>
                <div className={styles.titleContainer}>
                    <h2 className={styles.sectionTitle}>{view === 'main' ? 'Selected Work' : 'Fun Projects'}</h2>
                    <button
                        className={`${styles.viewToggle} ${view === 'play' ? styles.playActive : ''}`}
                        onClick={() => setView(view === 'main' ? 'play' : 'main')}
                        title={view === 'main' ? 'Switch to Fun Projects' : 'Switch to Main Projects'}
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            {view === 'main' ? (
                                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6H3a1 1 0 0 0 0 2h13.3l-1.6 1.6a1 1 0 0 0 1.4 1.4l3.3-3.3a1 1 0 0 0 0-1.4l-3.3-3.3a1 1 0 0 0-1.4 0zM12 2A10 10 0 1 0 22 12 10 10 0 0 0 12 2z" />
                            ) : (
                                <path d="M19 12H5M12 19l-7-7 7-7" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            <div className={styles.grid}>
                {currentProjects.map((project, index) => (
                    <div key={index} className={styles.projectCard}>
                        <div className={styles.projectContent}>
                            <h3 className={styles.projectTitle}>{project.title}</h3>
                            <p className={styles.projectDescription}>{project.description}</p>
                            <div className={styles.techStack}>
                                {project.tech?.map((tech, i) => (
                                    <span key={i} className={styles.techItem}>{tech}</span>
                                ))}
                            </div>
                            <div className={styles.projectLinks}>
                                <a href={project.links.github} target="_blank" rel="noopener noreferrer" className={styles.link}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                                    </svg>
                                </a>
                                {project.links.demo && (
                                    <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className={styles.link}>
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                                        </svg>
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
