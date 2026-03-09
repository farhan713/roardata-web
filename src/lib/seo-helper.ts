// src/lib/seo-helper.ts
export function extractSeoFields(data: FormData) {
    return {
      metaTitle: (data.get('metaTitle') as string) || null,
      metaDescription: (data.get('metaDescription') as string) || null,
      canonicalUrl: (data.get('canonicalUrl') as string) || null,
      robotsMeta: (data.get('robotsMeta') as string) || 'index, follow',
      structuredData: (data.get('structuredData') as string) || null,
      
      ogTitle: (data.get('ogTitle') as string) || null,
      ogDescription: (data.get('ogDescription') as string) || null,
      ogImage: (data.get('ogImage') as string) || null,
      
      twitterTitle: (data.get('twitterTitle') as string) || null,
      twitterDescription: (data.get('twitterDescription') as string) || null,
      twitterImage: (data.get('twitterImage') as string) || null,
      
      mainImageAlt: (data.get('mainImageAlt') as string) || null,
      socialImageAlt: (data.get('socialImageAlt') as string) || null,
    };
  }
  
  export function extractLocalBusinessFields(data: FormData) {
    return {
      localBusinessName: (data.get('localBusinessName') as string) || null,
      localAddress: (data.get('localAddress') as string) || null,
      localPhone: (data.get('localPhone') as string) || null,
      localEmail: (data.get('localEmail') as string) || null,
      latitude: data.get('latitude') ? parseFloat(data.get('latitude') as string) : null,
      longitude: data.get('longitude') ? parseFloat(data.get('longitude') as string) : null,
    };
  }
