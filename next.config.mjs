/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Форматы: AVIF (лучшее сжатие) с fallback на WebP
    formats: ['image/avif', 'image/webp'],
    // Допустимые размеры устройств для srcset
    deviceSizes: [375, 640, 768, 1024, 1280, 1920],
    imageSizes: [32, 40, 64, 120, 200],
  },
};

export default nextConfig;
