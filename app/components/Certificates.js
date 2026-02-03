'use client';

import { useState } from 'react';
import styles from './Certificates.module.css';

const certificates = [
    { name: "acwoc25.jpeg", label: "ACWOC '25" },
    { name: "androiddev.png", label: "Android Development" },
    { name: "aws (1).png", label: "AWS Cloud Practitioner" },
    { name: "gssoc24.png", label: "GSSoC '24" },
    { name: "hackathon.jpg", label: "Hackathon Participant" },
    { name: "hacktoberfest24 (1).png", label: "Hacktoberfest '24" },
    { name: "loa_notion.jpeg", label: "Notion Community LOA" },
    { name: "matlab.png", label: "MATLAB Basics" },
    { name: "ml.jpg", label: "Machine Learning" },
    { name: "postmanapi.png", label: "Postman API Fundamentals" },
    { name: "problemsolvingbasic.png", label: "Problem Solving Basic" },
    { name: "scwoc.png", label: "SCWOC Contributor" },
    { name: "sqlbasics.png", label: "SQL Basics" },
    { name: "tcs.png", label: "TCS iON Certification" },
    { name: "unstop1.png", label: "Unstop 1" },
    { name: "unstop2.png", label: "Unstop 2" },
    { name: "coursera.png", label: "Bits and Bytes (Coursera)" } // Placeholder for coursera
];

export default function Certificates() {
    const [selectedCert, setSelectedCert] = useState(null);

    return (
        <section className={styles.certificates} id="certificates">
            <h2 className={styles.sectionTitle}>Certifications</h2>

            <div className={styles.container}>
                <div className={styles.grid}>
                    {certificates.map((cert, index) => (
                        <div
                            key={index}
                            className={styles.certCard}
                            onClick={() => setSelectedCert(cert)}
                        >
                            <div className={styles.imageBox}>
                                <div className={styles.placeholderIcon}>
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <path d="M12 14.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
                                        <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z" />
                                        <path d="M12 8v4" />
                                    </svg>
                                </div>
                            </div>
                            <div className={styles.certInfo}>
                                <p className={styles.certLabel}>{cert.label}</p>
                                <span className={styles.viewLink}>View Certificate</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {selectedCert && (
                <div className={styles.modal} onClick={() => setSelectedCert(null)}>
                    <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
                        <button className={styles.closeBtn} onClick={() => setSelectedCert(null)}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </button>
                        <div className={styles.modalImageContainer}>
                            <img
                                src={`/certificates/${selectedCert.name}`}
                                alt={selectedCert.label}
                                className={styles.modalImage}
                                onError={(e) => {
                                    e.target.src = "https://via.placeholder.com/800x600?text=Certificate+Image";
                                }}
                            />
                        </div>
                        <p className={styles.modalTitle}>{selectedCert.label}</p>
                    </div>
                </div>
            )}
        </section>
    );
}
