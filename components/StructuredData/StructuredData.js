'use client';

export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "Neuroscan",
    "description": "Центр сучасної діагностики: КТ, нейрохірургія, лікування травм",
    "url": "https://vetscanct.vercel.app",
    "logo": "https://vetscanct.vercel.app/Logo.png",
    "image": "https://vetscanct.vercel.app/Logo.png",
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
    "name": "Neuroscan",
    "url": "https://vetscanct.vercel.app",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://vetscanct.vercel.app/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
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
