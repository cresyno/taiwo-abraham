const dev = (extra) => extra;

export const projects = [
  {
    slug: 'ob-designs-interiors',
    number: '01',
    name: 'OB Designs & Interiors',
    kind: 'Client project',
    status: 'Delivered and live',
    started: 'September 2026',
    launched: 'September 2026',
    url: 'https://www.obdesigns.com.ng/',
    summary: 'A responsive portfolio website that gives an interior design business a credible online presence and a clear path for enquiries.',
    stack: ['React', 'Vite', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    images: { desktop: 'obdesigns-home-desktop-1600x1000.webp', mobile: 'obdesigns-home-mobile-750x1500.webp' },
    alt: 'OB Designs & Interiors website',
    sections: [
      { heading: 'The business', paragraphs: [
        'OB Designs & Interiors Ltd is an interior design business based in Mowe, Ogun State. It offers painting, screeding, POP installations, and interior and exterior work, and it also manufactures and sells New Wave paint.',
        'The website gives the business a professional online presence where potential clients can understand what it does, see its work, and contact it directly.' ] },
      { heading: 'The goal', paragraphs: [
        'To make the business look more credible online and to create a clear path for potential clients to enquire about its services.' ] },
      { heading: 'What I built', paragraphs: ['I designed and developed a clean, responsive portfolio website for the business. It includes:'],
        items: [
          'Professional presentation of the business',
          'Interior design and project portfolio',
          'Project showcase sections',
          'Responsive design',
          'Clear calls to action',
          'WhatsApp integration for enquiries',
          'Contact functionality',
          'Before and after project presentation where applicable' ],
        after: ['The current version has no shop or e-commerce functionality.'] },
      { heading: 'What I learned', paragraphs: [
        'This was my first real client project, so the biggest lesson was client communication: understanding what a client actually wants, communicating progress, receiving feedback, and turning that feedback into a finished product.',
        "I also learned that building for a real business is different from building something for yourself. The website has to serve the client's actual business goals." ] },
      { heading: 'Client feedback', paragraphs: [
        'The client told me that he started receiving more quote requests, and that a significant portion of those enquiries were coming through the website.',
        'This is feedback from the client, not independently verified analytics.' ] },
      { heading: 'Who built it', paragraphs: [
        'I built this project myself. I used AI tools as development assistants during the process, but I was responsible for the implementation, testing, debugging, design decisions and final delivery.' ] },
    ],
  },
  {
    slug: 'idyllic-smarthomes',
    number: '02',
    name: 'Idyllic Smarthomes',
    kind: 'Client project',
    status: 'Live',
    started: 'October 2026',
    launched: 'October 2026',
    url: 'https://idyllicsmarthomes.ng/',
    summary: 'An online store with an admin area, a database and Paystack payments, built so a smart-home business can sell and manage orders itself.',
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Cloudinary', 'Paystack', 'Vercel'],
    images: { desktop: 'idyllic-home-desktop-1600x1000.webp', mobile: 'idyllic-home-mobile-750x1500.webp' },
    alt: 'Idyllic Smarthomes website',
    sections: [
      { heading: 'The business', paragraphs: [
        'Idyllic Smarthomes sells smart-home products, including smart door locks, CCTV cameras, video doorbells and home automation.' ] },
      { heading: 'The goal', paragraphs: [
        'To give the business a proper online storefront where customers can discover products, read product information, place orders and pay online. The aim was to move beyond showing products on social media and offer a more structured, professional buying experience.' ] },
      { heading: 'What I built', paragraphs: ['I built the full e-commerce experience:'],
        items: [
          'Customer-facing storefront with product listings, categories and product detail pages',
          'Shopping and order flow, with guest checkout',
          'Paystack payment integration',
          'Admin area with product, category, order and delivery fee management',
          'Product image uploads through Cloudinary',
          'Database-backed functionality on Supabase',
          'Responsive, mobile-first layouts, with dark and light mode',
          'Search engine optimisation, including page metadata and social sharing previews' ],
        after: ["The admin area lets the business manage important parts of the store itself, so I don't have to update everything manually."] },
      { heading: 'What I learned', paragraphs: [
        'This project taught me e-commerce development more deeply: payment integration, database-backed applications, and building functionality around a real business workflow.',
        "It also taught me more about client communication, and how to translate a business owner's requirements into technical features." ] },
      { heading: 'Who built it', paragraphs: [
        'I handled the development myself, using AI tools as development assistants where appropriate. I remained responsible for the implementation, debugging, testing, integration and final result.' ] },
    ],
  },
  {
    slug: 'cresoa',
    number: '03',
    name: 'Cresoa',
    kind: 'Personal product',
    status: 'In development',
    started: 'July 2026',
    launched: '',
    url: 'https://www.cresoa.com.ng/',
    summary: "A business software product I'm building for Nigerian small and growing businesses: a professional online storefront and ordering flow in one place.",
    stack: ['React-based frontend', 'Supabase', 'Vercel'],
    images: { desktop: 'cresoa-storefront-desktop-1600x1000.webp', mobile: 'cresoa-storefront-mobile-750x1500.webp' },
    alt: 'Cresoa storefront',
    sections: [
      { heading: 'The problem', paragraphs: [
        'Many Nigerian businesses rely heavily on social media, WhatsApp, manual order handling and scattered tools to run their business online.' ] },
      { heading: 'The idea', paragraphs: [
        'Cresoa is being built as a simpler, more accessible business platform that helps a business set up a professional online storefront and handle important parts of its online business.',
        'Each business gets its own page, for example cresoa.com.ng/businessname. Customers can view the business and its products, then place an order or contact the business through the ordering flow.' ] },
      { heading: 'Who it is for', paragraphs: [
        'Nigerian small and growing businesses that want a stronger online presence and a simpler way to manage their business digitally.' ] },
      { heading: 'What exists today', paragraphs: ['Cresoa is still in active development. This is what has been built so far:'],
        items: [
          'Business storefronts',
          'Product and catalogue functionality',
          'Business-specific URLs',
          'Order functionality',
          'WhatsApp-based ordering and contact flow',
          'Owner and admin functionality',
          'Database-backed business data',
          'Multiple storefront templates',
          'Responsive mobile experience' ],
        after: ["I'm not presenting unfinished features as finished. The list above is what exists today."] },
      { heading: 'Technical decisions', paragraphs: [
        'I chose a modern web stack that lets me build and iterate quickly while leaving room for the product to become more sophisticated as it grows. It uses a React-based frontend, Supabase for the backend and database, and Vercel for hosting.',
        "I'm also designing Cresoa around the realities of Nigerian small businesses, rather than copying an existing international e-commerce product." ] },
      { heading: 'What has been difficult', paragraphs: [
        'The hardest part has been thinking beyond individual pages and understanding how the parts of a real software product connect: businesses, users, products, orders, authentication, databases, permissions and the customer experience.',
        'Building Cresoa has taught me a lot about debugging database relationships and access policies, designing reusable systems, and thinking about scalability rather than only making something look good.' ] },
      { heading: 'Who is building it', paragraphs: [
        "I'm building Cresoa myself, with AI tools as development assistants where applicable." ] },
    ],
  },
];
