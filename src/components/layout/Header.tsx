import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <Link href="/">
                        <div className={styles.logoCircle}>
                            <span>S</span>
                        </div>
                        <span className={styles.brandName}>SEMA</span>
                    </Link>
                </div>

                <nav className={styles.nav}>
                    <button className={styles.menuButton}>
                        MENU
                    </button>
                </nav>
            </div>
        </header>
    );
}
