'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';
import styles from './Footer.module.css';

export default function Footer() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(null);

    const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ;
    const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
    const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus(null);

        const templateParams = {
            from_name: name,
            from_email: email,
            message: message,
        };

        try {
            await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
            setStatus({ ok: true, msg: 'Message sent, thank you!' });
            setName('');
            setEmail('');
            setMessage('');
        } catch (err) {
            setStatus({ ok: false, msg: 'Failed to send message. Please try again later.' });
            console.error('EmailJS error:', err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <footer className={styles.footer} id="contact">
            <div className={styles.container}>
                <div className={styles.contactSection}>
                    <div className={styles.contactInfo}>
                        <h2 className={styles.title}>Let's Connect</h2>
                        <p className={styles.subtitle}>Currently available for professional opportunities and interesting collaborations.</p>
                        <a href="mailto:anushkadubey@example.com" className={styles.email}>anushkadubey@example.com</a>

                        <div className={styles.socials}>
                            <a href="https://github.com/anushkaa-dubey" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                                </svg>
                            </a>
                            <a href="https://www.linkedin.com/in/anushka-dubey-7b4501215/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                    <rect x="2" y="9" width="4" height="12" />
                                    <circle cx="4" cy="4" r="2" />
                                </svg>
                            </a>
                            <a href="https://twitter.com/anushkadubey26" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <form className={styles.form} onSubmit={handleSubmit}>
                        <div className={styles.formGroup}>
                            <input
                                type="text"
                                placeholder="Name"
                                className={styles.input}
                                value={name}
                                onChange={e => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <input
                                type="email"
                                placeholder="Email"
                                className={styles.input}
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <textarea
                                placeholder="Message"
                                rows="4"
                                className={styles.input}
                                value={message}
                                onChange={e => setMessage(e.target.value)}
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className={styles.submitBtn} disabled={loading}>
                            {loading ? 'Sending...' : 'Send Message'}
                        </button>

                        {status && (
                            <p className={status.ok ? styles.success : styles.error}>{status.msg}</p>
                        )}
                    </form>
                </div>

                <div className={styles.bottom}>
                    <p className={styles.copyright}>© {new Date().getFullYear()} Anushka Dubey</p>
                    <button className={styles.backToTop} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        Back to Top
                    </button>
                </div>
            </div>
        </footer>
    );
}
