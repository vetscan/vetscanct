import Header from '@/components/Header/Header';
import Navigation from '@/components/Navigation/Navigation';
import Footer from '@/components/Footer/Footer';
import styles from './PageShell.module.css';

export default function PageShell({ title, subtitle, children }) {
  return (
    <>
      <Header />
      <Navigation />
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.container}>
            <h1 className={styles.title}>{title}</h1>
            {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
          </div>
        </section>
        {children && (
          <section className={styles.section}>
            <div className={styles.container}>
              {children}
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
