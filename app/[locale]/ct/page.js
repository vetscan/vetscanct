'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import PageShell from '@/components/PageShell/PageShell';
import Image from 'next/image';
import styles from './page.module.css';

export default function CtPage() {
  const { t } = useLanguage();
  const [isIOS, setIsIOS] = useState(false);
  
  // Получаем переведенные данные
  const ctData = t('pages.ct');
  const types = t('pages.ct.types');
  const indications = t('pages.ct.indications');

  useEffect(() => {
    // Определяем iOS устройство
    const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    setIsIOS(iOS);
  }, []);

  return (
    <PageShell title={ctData.title} subtitle={ctData.subtitle}>
      <div className={styles.content}>
        <h2 className={styles.sectionTitle}>{ctData.sectionTitle}</h2>

        <div className={styles.ctTypes}>
          {Array.isArray(types) && types.map((item, index) => (
            <div className={styles.ctType} key={`${item.title}-${index}`}>
              <h3 className={styles.ctTypeTitle}>{item.title}</h3>
              <p className={styles.ctTypeDescription}>{item.description}</p>
            </div>
          ))}
        </div>

        <section className={styles.indications}>
          <h3 className={styles.indicationsTitle}>{indications.title}</h3>
          <div className={styles.indicationsLayout}>
            <ul className={styles.indicationsList}>
              {Array.isArray(indications.leftItems) && indications.leftItems.map((item, index) => (
                <li className={styles.indicationItem} key={`left-${index}`}>
                  {item}
                </li>
              ))}
            </ul>

            <div className={styles.indicationsImage}>
              {isIOS ? (
                <Image
                  src="/Cat_2.png"
                  alt={indications.imageAlt}
                  width={352}
                  height={352}
                  className={styles.indicationsVideo}
                  priority
                />
              ) : (
                <video
                  className={styles.indicationsVideo}
                  src="/cat_video2.webm"
                  aria-label={indications.imageAlt}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  disablePictureInPicture
                  disableRemotePlayback
                />
              )}
            </div>

            <ul className={styles.indicationsList}>
              {Array.isArray(indications.rightItems) && indications.rightItems.map((item, index) => (
                <li className={styles.indicationItem} key={`right-${index}`}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <p className={styles.conclusion}>{ctData.conclusion}</p>
      </div>
    </PageShell>
  );
}
