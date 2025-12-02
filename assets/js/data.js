// Shared Data Store for Toyota Dealership Website
// Single source of truth for all structured data

const SiteData = {
  // Dealership Info
  dealership: {
    name_en: 'Al Masar Muttahida',
    name_ar: 'المسار المتحدة',
    tagline_en: 'Your Trusted Toyota Partner',
    tagline_ar: 'شريكك الموثوق لتويوتا',
    logo: '/assets/images/logo.png',
    logoWhite: '/assets/images/logo-white.png',
  },

  // Navigation Links
  navigation: [
    {
      id: 'home',
      href_en: '/en/',
      href_ar: '/ar/',
      label_en: 'Home',
      label_ar: 'الرئيسية',
    },
    {
      id: 'services',
      href_en: '/en/services.html',
      href_ar: '/ar/services.html',
      label_en: 'Services',
      label_ar: 'الخدمات',
    },
    {
      id: 'about',
      href_en: '/en/about.html',
      href_ar: '/ar/about.html',
      label_en: 'About Us',
      label_ar: 'من نحن',
    },
    {
      id: 'contact',
      href_en: '/en/contact.html',
      href_ar: '/ar/contact.html',
      label_en: 'Contact',
      label_ar: 'اتصل بنا',
    },
  ],

  // Hero Carousel Slides
  heroSlides: [
    {
      id: 1,
      image: '/assets/images/hero/hero-1.jpg',
      title_en: 'Welcome to Al Masar Muttahida',
      title_ar: 'مرحباً بكم في المسار المتحدة',
      subtitle_en: 'Experience Excellence in Every Drive',
      subtitle_ar: 'اختبر التميز في كل رحلة',
    },
    {
      id: 2,
      image: '/assets/images/hero/hero-2.jpg',
      title_en: 'New Models Available',
      title_ar: 'طرازات جديدة متوفرة',
      subtitle_en: 'Discover Our Latest Toyota Collection',
      subtitle_ar: 'اكتشف أحدث مجموعة تويوتا',
    },
    {
      id: 3,
      image: '/assets/images/hero/hero-3.jpg',
      title_en: 'Expert Service Center',
      title_ar: 'مركز خدمة متخصص',
      subtitle_en: 'Professional Care for Your Toyota',
      subtitle_ar: 'رعاية احترافية لسيارتك تويوتا',
    },
  ],

  // Services
  services: [
    {
      id: 'sales',
      image: '/assets/images/services/sales.jpg',
      icon: '🚗',
      title_en: 'Sales',
      title_ar: 'المبيعات',
      desc_en:
        'Explore our wide range of new Toyota vehicles. From sedans to SUVs, find the perfect car that matches your lifestyle. Our expert sales team is here to guide you through every step of your purchase journey.',
      desc_ar:
        'استكشف مجموعتنا الواسعة من سيارات تويوتا الجديدة. من السيدان إلى سيارات الدفع الرباعي، ابحث عن السيارة المثالية التي تناسب أسلوب حياتك. فريق المبيعات المتخصص لدينا هنا لإرشادك في كل خطوة من رحلة الشراء.',
    },
    {
      id: 'after_sales',
      image: '/assets/images/services/after-sales.jpg',
      icon: '🔧',
      title_en: 'After-Sales Service',
      title_ar: 'خدمات ما بعد البيع',
      desc_en:
        'Keep your Toyota running at its best with our comprehensive after-sales service. Our certified technicians use genuine Toyota parts and the latest diagnostic equipment to ensure your vehicle receives top-quality care.',
      desc_ar:
        'حافظ على سيارتك تويوتا في أفضل حالاتها مع خدماتنا الشاملة لما بعد البيع. يستخدم فنيونا المعتمدون قطع غيار تويوتا الأصلية وأحدث معدات التشخيص لضمان حصول سيارتك على أفضل رعاية.',
    },
    {
      id: 'parts',
      image: '/assets/images/services/parts.jpg',
      icon: '⚙️',
      title_en: 'Genuine Parts',
      title_ar: 'قطع الغيار الأصلية',
      desc_en:
        'Only genuine Toyota parts ensure the safety, reliability, and performance of your vehicle. Our parts department stocks a comprehensive inventory of original Toyota parts and accessories for all models.',
      desc_ar:
        'قطع غيار تويوتا الأصلية فقط تضمن سلامة وموثوقية وأداء سيارتك. يحتفظ قسم قطع الغيار لدينا بمخزون شامل من قطع الغيار والإكسسوارات الأصلية لجميع الطرازات.',
    },
  ],

  // About Content
  about: {
    image: '/assets/images/about-dealership.jpg',
    title_en: 'About Al Masar Muttahida',
    title_ar: 'عن المسار المتحدة',
    content_en: `Al Masar Muttahida has been serving the community since 2010, providing exceptional automotive services with a commitment to excellence. As an authorized Toyota dealership, we pride ourselves on delivering the highest standards of customer service and vehicle care.

Our state-of-the-art facility features a modern showroom showcasing the latest Toyota models, a fully-equipped service center with certified technicians, and a comprehensive parts department stocked with genuine Toyota parts.

We believe in building lasting relationships with our customers based on trust, transparency, and exceptional service. Whether you're purchasing your first Toyota or bringing in your vehicle for maintenance, our dedicated team is here to ensure your complete satisfaction.`,
    content_ar: `تخدم المسار المتحدة المجتمع منذ عام 2010، وتقدم خدمات سيارات استثنائية مع التزام بالتميز. كوكيل معتمد لتويوتا، نفخر بتقديم أعلى معايير خدمة العملاء ورعاية المركبات.

تضم منشأتنا الحديثة صالة عرض عصرية تعرض أحدث طرازات تويوتا، ومركز خدمة مجهز بالكامل مع فنيين معتمدين، وقسم قطع غيار شامل مزود بقطع غيار تويوتا الأصلية.

نؤمن ببناء علاقات دائمة مع عملائنا مبنية على الثقة والشفافية والخدمة الاستثنائية. سواء كنت تشتري سيارتك تويوتا الأولى أو تحضر سيارتك للصيانة، فريقنا المتفاني هنا لضمان رضاك التام.`,
    mission_en:
      'To provide our customers with an outstanding automotive experience through quality products, expert service, and genuine care.',
    mission_ar:
      'تقديم تجربة سيارات متميزة لعملائنا من خلال منتجات عالية الجودة وخدمة متخصصة ورعاية حقيقية.',
  },

  // Contact Locations
  locations: [
    {
      id: 'main-branch',
      name_en: 'Main Branch',
      name_ar: 'الفرع الرئيسي',
      address_en:
        'King Fahd Road, Al Olaya District, Riyadh 12211, Saudi Arabia',
      address_ar:
        'طريق الملك فهد، حي العليا، الرياض 12211، المملكة العربية السعودية',
      map_link: 'https://maps.google.com/?q=24.7136,46.6753',
      phone: ['+218 51 2661907', '+966 11 234 5679'],
      email: 'info@masar.net.ly',
      hours_en: 'Saturday - Thursday: 8:00 AM - 9:00 PM',
      hours_ar: 'السبت - الخميس: 8:00 صباحاً - 9:00 مساءً',
    },
    {
      id: 'service-center',
      name_en: 'Service Center',
      name_ar: 'مركز الخدمة',
      address_en:
        'Industrial Area, Eastern Ring Road, Riyadh 14321, Saudi Arabia',
      address_ar:
        'المنطقة الصناعية، طريق الدائري الشرقي، الرياض 14321، المملكة العربية السعودية',
      map_link: 'https://maps.google.com/?q=24.7000,46.7200',
      phone: ['+966 11 345 6789'],
      email: 'service@toyotamasar.com',
      hours_en: 'Saturday - Thursday: 7:00 AM - 10:00 PM',
      hours_ar: 'السبت - الخميس: 7:00 صباحاً - 10:00 مساءً',
    },
  ],

  // UI Translations
  ui: {
    en: {
      visitServices: 'Visit Our Services',
      contactUs: 'Contact Us',
      learnMore: 'Learn More',
      viewOnMap: 'View on Map',
      callUs: 'Call Us',
      emailUs: 'Email Us',
      workingHours: 'Working Hours',
      ourMission: 'Our Mission',
      copyright: '© 2025 Al Masar Muttahida. All rights reserved.',
      menuOpen: 'Open Menu',
      menuClose: 'Close Menu',
      prevSlide: 'Previous Slide',
      nextSlide: 'Next Slide',
      highlightSales: 'Sales',
      highlightService: 'Service',
      highlightParts: 'Parts',
    },
    ar: {
      visitServices: 'زيارة خدماتنا',
      contactUs: 'اتصل بنا',
      learnMore: 'اعرف المزيد',
      viewOnMap: 'عرض على الخريطة',
      callUs: 'اتصل بنا',
      emailUs: 'راسلنا',
      workingHours: 'ساعات العمل',
      ourMission: 'مهمتنا',
      copyright: '© 2025 المسار المتحدة. جميع الحقوق محفوظة.',
      menuOpen: 'فتح القائمة',
      menuClose: 'إغلاق القائمة',
      prevSlide: 'الشريحة السابقة',
      nextSlide: 'الشريحة التالية',
      highlightSales: 'المبيعات',
      highlightService: 'الخدمة',
      highlightParts: 'قطع الغيار',
    },
  },
};

// SEO Configuration
const SEOConfig = {
  baseUrl: 'https://toyotamasar.com',
  en: {
    home: {
      title: 'Al Masar Muttahida — Official Toyota Dealer in Riyadh',
      description:
        'Official Toyota sales, genuine parts, and expert service in Riyadh. Visit Al Masar Muttahida for the best automotive experience.',
      keywords: [
        'Toyota',
        'dealership',
        'Riyadh',
        'Saudi Arabia',
        'car sales',
        'Toyota service',
        'genuine parts',
      ],
      ogImage: '/assets/images/og/home-en.jpg',
    },
    services: {
      title:
        'Toyota Services — Sales, After-Sales & Genuine Parts | Al Masar Muttahida',
      description:
        'Explore our comprehensive Toyota services: new car sales, professional after-sales service, and genuine Toyota parts.',
      keywords: [
        'Toyota services',
        'car maintenance',
        'genuine parts',
        'Toyota repair',
        'Riyadh',
      ],
      ogImage: '/assets/images/og/services-en.jpg',
    },
    about: {
      title: 'About Al Masar Muttahida — Your Trusted Toyota Partner',
      description:
        'Learn about Al Masar Muttahida, an authorized Toyota dealership serving Riyadh since 2010 with excellence and dedication.',
      keywords: [
        'about Al Masar Muttahida',
        'Toyota dealer',
        'Riyadh dealership',
        'Toyota history',
      ],
      ogImage: '/assets/images/og/about-en.jpg',
    },
    contact: {
      title: 'Contact Al Masar Muttahida — Locations & Phone Numbers',
      description:
        'Get in touch with Al Masar Muttahida. Find our locations, phone numbers, email addresses, and working hours.',
      keywords: [
        'Toyota contact',
        'Toyota Riyadh address',
        'Toyota phone number',
        'dealership location',
      ],
      ogImage: '/assets/images/og/contact-en.jpg',
    },
  },
  ar: {
    home: {
      title: 'المسار المتحدة — وكيل تويوتا الرسمي في الرياض',
      description:
        'مبيعات تويوتا الرسمية وقطع الغيار الأصلية والخدمة المتخصصة في الرياض. زوروا المسار المتحدة لأفضل تجربة سيارات.',
      keywords: [
        'تويوتا',
        'وكالة',
        'الرياض',
        'السعودية',
        'بيع سيارات',
        'خدمة تويوتا',
        'قطع غيار أصلية',
      ],
      ogImage: '/assets/images/og/home-ar.jpg',
    },
    services: {
      title:
        'خدمات تويوتا — المبيعات وما بعد البيع وقطع الغيار | المسار المتحدة',
      description:
        'اكتشف خدماتنا الشاملة لتويوتا: مبيعات السيارات الجديدة، خدمة ما بعد البيع المحترفة، وقطع غيار تويوتا الأصلية.',
      keywords: [
        'خدمات تويوتا',
        'صيانة سيارات',
        'قطع غيار أصلية',
        'إصلاح تويوتا',
        'الرياض',
      ],
      ogImage: '/assets/images/og/services-ar.jpg',
    },
    about: {
      title: 'عن المسار المتحدة — شريكك الموثوق لتويوتا',
      description:
        'تعرف على المسار المتحدة، وكيل تويوتا المعتمد الذي يخدم الرياض منذ 2010 بتميز وإخلاص.',
      keywords: [
        'عن المسار المتحدة',
        'وكيل تويوتا',
        'وكالة الرياض',
        'تاريخ تويوتا',
      ],
      ogImage: '/assets/images/og/about-ar.jpg',
    },
    contact: {
      title: 'اتصل بالمسار المتحدة — المواقع وأرقام الهاتف',
      description:
        'تواصل مع المسار المتحدة. اعثر على مواقعنا وأرقام هواتفنا وعناوين بريدنا الإلكتروني وساعات العمل.',
      keywords: [
        'اتصال تويوتا',
        'عنوان تويوتا الرياض',
        'رقم هاتف تويوتا',
        'موقع الوكالة',
      ],
      ogImage: '/assets/images/og/contact-ar.jpg',
    },
  },
};

// Structured Data (JSON-LD) Templates
const StructuredData = {
  organization: {
    '@context': 'https://schema.org',
    '@type': 'AutoDealer',
    name: 'Al Masar Muttahida',
    alternateName: 'المسار المتحدة',
    url: 'https://toyotamasar.com',
    logo: 'https://toyotamasar.com/assets/images/logo.png',
    image: 'https://toyotamasar.com/assets/images/og/home-en.jpg',
    description:
      'Official Toyota dealership in Riyadh offering sales, service, and genuine parts.',
    telephone: '+218 51 2661907',
    email: 'info@masar.net.ly',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'King Fahd Road, Al Olaya District',
      addressLocality: 'Riyadh',
      postalCode: '12211',
      addressCountry: 'SA',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 24.7136,
      longitude: 46.6753,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Saturday',
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
      ],
      opens: '08:00',
      closes: '21:00',
    },
    sameAs: [],
  },
};

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { SiteData, SEOConfig, StructuredData };
}
