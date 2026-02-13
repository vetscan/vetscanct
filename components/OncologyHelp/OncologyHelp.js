import styles from './OncologyHelp.module.css';
import content from '@/data/siteContent.json';

export default function OncologyHelp() {
  const { oncologyHelp } = content;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>{oncologyHelp.title}</h2>
        
        <div className={styles.description}>
          <p>
            {oncologyHelp.description}
          </p>
        </div>
      </div>
    </section>
  );
}
