export const SITE = {
  name: 'الخروس',
  tagline: 'منصة أهالي ضاحية الخروس',
  place: 'مدينة الذيد · إمارة الشارقة',
  hero:
    'مكان واحد يجمع أهل الخروس: مواعيد الأفراح والفعاليات، ألبومات صور المناسبات، ملتقى للأخبار والتهاني، وقناة منظمة لمقترحاتكم وبلاغات الحي.',
  about:
    'ضاحية الخروس منطقة سكنية في مدينة الذيد بالمنطقة الوسطى من إمارة الشارقة. أُنشئت هذه المنصة لتجمع أخبار الأهالي ومناسباتهم في مكان واحد، وتوثّق صور أفراحهم ومهرجاناتهم، وتسهّل إيصال المقترحات والملاحظات بطريقة منظمة يمكن متابعتها حتى تُحل.',
  liveUrl: 'https://khuros.ae/',
}

export const EVENT_CATS: Record<string, string> = {
  wedding: 'أعراس وأفراح',
  national: 'مناسبات وطنية',
  festival: 'مهرجانات وأسواق',
  religious: 'دينية',
  sport: 'رياضية',
  culture: 'ثقافية وتعليمية',
  social: 'اجتماعية وعائلية',
  other: 'أخرى',
}

export const ALBUM_CATS: Record<string, string> = {
  weddings: 'الأعراس',
  national: 'المناسبات الوطنية',
  festivals: 'المهرجانات والأسواق',
  events: 'الفعاليات',
  sport: 'الرياضة',
  life: 'الحياة في الخروس',
}

export const NEWS_CATS: Record<string, string> = {
  local: 'أخبار الضاحية',
  announce: 'تعاميم وإعلانات',
  services: 'خدمات ومشاريع',
  education: 'تعليم',
  health: 'صحة',
  sport: 'رياضة',
  other: 'أخرى',
}

export const SHOP_CATS: Record<string, string> = {
  food: 'أكلات شعبية',
  sweets: 'حلويات ومعجنات',
  perfume: 'عطور وبخور',
  fashion: 'أزياء وخياطة',
  beauty: 'حناء وتجميل',
  crafts: 'مشغولات يدوية',
  gifts: 'هدايا وتنسيق مناسبات',
  services: 'خدمات',
  other: 'منوّعات',
}

export const SUG_CATS: Record<string, string> = {
  roads: 'الطرق والمواقف',
  parks: 'الحدائق والمرافق',
  services: 'الخدمات العامة',
  youth: 'الشباب والرياضة',
  education: 'التعليم والثقافة',
  environment: 'البيئة والنظافة',
  other: 'أخرى',
}

export const CMP_CATS: Record<string, string> = {
  roads: 'الطرق والحفر',
  lighting: 'الإنارة',
  cleanliness: 'النظافة والنفايات',
  water_power: 'الماء والكهرباء',
  safety: 'الأمن والسلامة',
  animals: 'الحيوانات السائبة',
  noise: 'الإزعاج',
  other: 'أخرى',
}

export const NEARBY = {
  services: [
    {
      name: 'تعاونية الشارقة – فرع الخروس',
      cat: 'بقالات وجمعيات',
      where: 'ضاحية الخروس',
      note: 'فرع الخروس افتُتح في مارس 2024',
    },
    {
      name: 'الذيد مول',
      cat: 'محلات ومراكز تسوق',
      where: 'طريق الذيد – فلج المعلا',
      note: 'محلات ومطاعم وخدمات',
    },
    {
      name: 'سوق شريعة الذيد',
      cat: 'محلات ومراكز تسوق',
      where: 'مدينة الذيد',
      note: 'منتجات تراثية ومحلية',
    },
  ],
  fun: [
    {
      name: 'شارقة سفاري',
      cat: 'ترفيه وسياحة',
      where: 'محمية البريدي، الذيد',
      note: 'رحلات بين حيوانات أفريقيا',
    },
    {
      name: 'حصن الذيد',
      cat: 'ترفيه وسياحة',
      where: 'واحة الذيد',
      note: 'حصن تاريخي مرمّم ومركز ثقافي',
    },
    {
      name: 'فلج الذيد',
      cat: 'ترفيه وسياحة',
      where: 'واحة الذيد',
      note: 'نظام ري تاريخي',
    },
  ],
}

export type EventItem = {
  id: string
  title: string
  cat: keyof typeof EVENT_CATS
  date: string
  place: string
  blurb: string
}

export type NewsItem = {
  id: string
  title: string
  cat: keyof typeof NEWS_CATS
  date: string
  blurb: string
}

export type AlbumItem = {
  id: string
  title: string
  cat: keyof typeof ALBUM_CATS
  count: number
  blurb: string
}

export type ShopItem = {
  id: string
  name: string
  cat: keyof typeof SHOP_CATS
  owner: string
  blurb: string
}

export type Suggestion = {
  id: string
  title: string
  cat: keyof typeof SUG_CATS
  status: string
}

export type Complaint = {
  id: string
  title: string
  cat: keyof typeof CMP_CATS
  status: string
}

export type Contest = {
  id: string
  title: string
  status: string
  prize: string
}

export const sampleEvents: EventItem[] = [
  {
    id: 'e1',
    title: 'حفل زفاف آل الحمادي',
    cat: 'wedding',
    date: '2026-12-05',
    place: 'قاعة المناسبات – الخروس',
    blurb: 'دعوة عامة لأهالي الضاحية بعد صلاة العشاء.',
  },
  {
    id: 'e2',
    title: 'سوق الخروس الشعبي',
    cat: 'festival',
    date: '2026-12-12',
    place: 'الساحة المركزية',
    blurb: 'مشاريع منزلية ومنتجات محلية طوال المساء.',
  },
  {
    id: 'e3',
    title: 'بطولة كرة القدم الرمضانية',
    cat: 'sport',
    date: '2027-03-01',
    place: 'ملعب الحي',
    blurb: 'تسجيل الفرق عبر المنصة قبل أسبوع من الانطلاق.',
  },
]

export const sampleNews: NewsItem[] = [
  {
    id: 'n1',
    title: 'افتتاح مسار مشاه جديد بطول الحي',
    cat: 'services',
    date: '2026-11-18',
    blurb: 'مسار مضاء يربط الساحة بالمجمع التجاري.',
  },
  {
    id: 'n2',
    title: 'تعميم مواعيد جمع النفايات خلال العطل',
    cat: 'announce',
    date: '2026-11-15',
    blurb: 'يرجى الالتزام بالجداول المحدّثة في لوحة الحي.',
  },
  {
    id: 'n3',
    title: 'ورشة خط عربي للصغار',
    cat: 'education',
    date: '2026-11-10',
    blurb: 'بالشراكة مع مركز الثقافة في الذيد.',
  },
]

export const sampleAlbums: AlbumItem[] = [
  {
    id: 'a1',
    title: 'أعراس نوفمبر',
    cat: 'weddings',
    count: 48,
    blurb: 'صور من ثلاث مناسبات في الضاحية.',
  },
  {
    id: 'a2',
    title: 'يوم العلم في الخروس',
    cat: 'national',
    count: 36,
    blurb: 'احتفال الأهالي والأطفال بالأعلام.',
  },
  {
    id: 'a3',
    title: 'الحياة اليومية',
    cat: 'life',
    count: 22,
    blurb: 'لقطات من الساحات والممرات.',
  },
]

export const sampleShops: ShopItem[] = [
  {
    id: 's1',
    name: 'مطبخ أم سالم',
    cat: 'food',
    owner: 'سالمة الكتبي',
    blurb: 'أكلات شعبية وتوصيل داخل الخروس.',
  },
  {
    id: 's2',
    name: 'بخور الريان',
    cat: 'perfume',
    owner: 'راشد الحمادي',
    blurb: 'بخور وعطور شرقية حسب الطلب.',
  },
  {
    id: 's3',
    name: 'حناء الياسمين',
    cat: 'beauty',
    owner: 'موزة الشامسي',
    blurb: 'حناء أعراس وجلسات تجميل منزلية.',
  },
]

export const sampleSuggestions: Suggestion[] = [
  { id: 'g1', title: 'زيادة مقاعد في حديقة الحي', cat: 'parks', status: 'قيد الدراسة' },
  { id: 'g2', title: 'مظلات عند موقف الحافلات', cat: 'services', status: 'مُعتمد' },
]

export const sampleComplaints: Complaint[] = [
  { id: 'c1', title: 'إنارة ضعيفة في الشارع الرابع', cat: 'lighting', status: 'قيد المعالجة' },
  { id: 'c2', title: 'حاوية ممتلئة قرب المسجد', cat: 'cleanliness', status: 'تم الاستلام' },
]

export const sampleContests: Contest[] = [
  { id: 't1', title: 'مسابقة أجمل صورة من الخروس', status: 'مفتوحة', prize: 'جهاز لوحي' },
  { id: 't2', title: 'تحدي حفظ قصائد محلية', status: 'قريباً', prize: 'قسائم سوق' },
]

export const modules = [
  { to: '/', label: 'الرئيسية', end: true },
  { to: '/events', label: 'الفعاليات' },
  { to: '/news', label: 'الأخبار' },
  { to: '/albums', label: 'الألبومات' },
  { to: '/market', label: 'السوق' },
  { to: '/community', label: 'الملتقى' },
  { to: '/competitions', label: 'المسابقات' },
  { to: '/heritage', label: 'التراث' },
  { to: '/education', label: 'التعليم' },
  { to: '/directory', label: 'الدليل' },
  { to: '/assistant', label: 'المساعد' },
  { to: '/account', label: 'الحساب' },
] as const
