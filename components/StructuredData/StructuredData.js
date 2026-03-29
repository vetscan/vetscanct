'use client';

export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "VetScan CT",
    "description": "Центр сучасної діагностики: КТ, нейрохірургія, лікування травм",
    "url": "https://vetscanct.com.ua",
    "logo": "https://vetscanct.com.ua/Logo.png",
    "image": "https://vetscanct.com.ua/Logo.png",
    "telephone": "+380968005445",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "вул.Шосейна 164В",
      "addressLocality": "Підгороднє",
      "addressCountry": "UA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "48.579330535449834",
      "longitude": "35.120966278613736"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "08:00",
      "closes": "20:00"
    },
    "priceRange": "$$",
    "medicalSpecialty": [
      "Neurosurgery",
      "Radiology",
      "Diagnostic Imaging"
    ],
    "availableService": [
      {
        "@type": "MedicalProcedure",
        "name": "Комп'ютерна томографія (КТ)"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Нейрохірургія"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Лікування травм хребта"
      }
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "VetScan CT",
    "url": "https://vetscanct.com.ua"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
