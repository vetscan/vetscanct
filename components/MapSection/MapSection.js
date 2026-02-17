import { useLanguage } from '@/contexts/LanguageContext';
import styles from './MapSection.module.css';

export default function MapSection() {
  const { t } = useLanguage();
  const mapData = t('map');
  
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2639.7968799662486!2d35.120966278613736!3d48.579330535449834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDM0JzQ1LjYiTiAzNcKwMDcnMTUuNSJF!5e0!3m2!1sru!2sua!4v1770902316008!5m2!1sru!2sua";
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(mapData.address)}`;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.mapWrapper}>
          <iframe
            src={mapUrl}
            className={styles.map}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={mapData.title}
          ></iframe>
        </div>
        
        <div className={styles.buttonWrapper}>
          <a 
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.directionsBtn}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>
            </svg>
            {mapData.buttonText}
          </a>
        </div>
      </div>
    </section>
  );
}
