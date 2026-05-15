'use client';

import Image from 'next/image';
import styles from './Watermarks.module.css';

export default function Watermarks() {
  return (
    <>
      {/* Кот - слева сверху */}
      <div className={styles.watermarkTop}>
        <Image 
          src="/cat.png" 
          alt="Декоративный элемент - кот" 
          width={400} 
          height={400}
          quality={80}
          priority
        />
      </div>
      
      {/* Собака - справа снизу */}
      <div className={styles.watermarkBottom}>
        <Image 
          src="/dog.png" 
          alt="Декоративный элемент - собака" 
          width={400} 
          height={400}
          quality={80}
          priority
        />
      </div>
    </>
  );
}
