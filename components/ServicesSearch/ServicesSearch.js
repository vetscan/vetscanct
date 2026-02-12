import Link from 'next/link';
import styles from './ServicesSearch.module.css';
import content from '@/data/siteContent.json';

export default function ServicesSearch() {
  const { servicesSearch } = content;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>{servicesSearch.title}</h2>
        
        <div className={styles.grid}>
          {servicesSearch.services.map(service => (
            <Link href={service.link} key={service.id} className={styles.card}>
              <div className={styles.arrow}>
                <img src="/paw.png" alt="paw" className={styles.pawIcon} />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{service.title}</h3>
              </div>
            </Link>
          ))}

          {/* Спеціальна карточка "Не знайшли" */}
          <button className={styles.specialCard}>
            <div className={styles.arrow}>
              <img src="/paw.png" alt="paw" className={styles.pawIconWhite} />
            </div>
            <div className={styles.specialCardContent}>
              <h3 className={styles.specialCardTitle}>{servicesSearch.specialCard.title}</h3>
              <h3 className={styles.specialCardTitleBold}>{servicesSearch.specialCard.titleBold}</h3>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
