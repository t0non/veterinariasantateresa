import React from 'react';

interface StructuredDataProps {
  type?: 'general' | 'exotic';
}

export function StructuredData({ type = 'general' }: StructuredDataProps) {
  const isExotic = type === 'exotic';
  
  const baseSchema = {
    "@context": "https://schema.org",
    "@type": "VeterinaryCare",
    "name": "Veterinária Santa Tereza",
    "image": "https://veterinariasantatereza.com.br/images/fachada.webp",
    "@id": "https://veterinariasantatereza.com.br",
    "url": "https://veterinariasantatereza.com.br",
    "telephone": "+55 11 99999-9999",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Rua Gabro, 87",
      "addressLocality": "Belo Horizonte",
      "addressRegion": "MG",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -19.9149,
      "longitude": -43.9161
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
      "opens": "00:00",
      "closes": "23:59"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "127"
    },
    "sameAs": [
      "https://www.instagram.com/veterinariasantatereza",
      "https://www.facebook.com/veterinariasantatereza"
    ],
    "priceRange": "$$",
    "description": isExotic 
      ? "Clínica Veterinária Especializada em Animais Silvestres e Exóticos em Belo Horizonte. Atendimento para aves, répteis e roedores."
      : "Clínica Veterinária em Belo Horizonte - Santa Tereza. Consultas, vacinas, cirurgias e internação para cães e gatos."
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(baseSchema) }}
    />
  );
}

interface FAQItem {
  question: string;
  answer: string;
}

export function FAQStructuredData({ items }: { items: FAQItem[] }) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": items.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
  );
}
