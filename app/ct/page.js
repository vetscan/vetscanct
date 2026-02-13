import PageShell from '@/components/PageShell/PageShell';
import content from '@/data/siteContent.json';
import styles from './page.module.css';

export default function CtPage() {
  const { pages } = content;
  const { ct } = pages;

  return (
    <PageShell title={ct.title} subtitle={ct.subtitle}>
      <div className={styles.content}>
        <h2 className={styles.sectionTitle}>{ct.sectionTitle}</h2>

        <div className={styles.ctTypes}>
          {ct.types.map((item, index) => (
            <div className={styles.ctType} key={`${item.title}-${index}`}>
              <h3 className={styles.ctTypeTitle}>{item.title}</h3>
              <p className={styles.ctTypeDescription}>{item.description}</p>
            </div>
          ))}
        </div>

        <section className={styles.indications}>
          <h3 className={styles.indicationsTitle}>{ct.indications.title}</h3>
          <div className={styles.indicationsLayout}>
            <ul className={styles.indicationsList}>
              {ct.indications.leftItems.map((item, index) => (
                <li className={styles.indicationItem} key={`left-${index}`}>
                  {item}
                </li>
              ))}
            </ul>

            <div className={styles.indicationsImage}>
              <video
                className={styles.indicationsVideo}
                src="/cat_video2.webm"
                aria-label={ct.indications.imageAlt}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                disablePictureInPicture
                disableRemotePlayback
              />
            </div>

            <ul className={styles.indicationsList}>
              {ct.indications.rightItems.map((item, index) => (
                <li className={styles.indicationItem} key={`right-${index}`}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <p className={styles.conclusion}>{ct.conclusion}</p>
      </div>
    </PageShell>
  );
}
