const siteMetadata = {
  title: 'Anirudh Mitra',
  author: 'Anirudh Mitra',
  headerTitle: 'Anirudh Mitra',
  description: 'Full-Stack Developer | Open-Source Contributor | Aspiring Artist.',
  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: 'https://www.4ni.in/',
  siteRepo: 'https://github.com/Anirudh4583/anirudhmitra.tech',
  siteLogo: '/static/images/logo.png',
  image: '/static/images/avatar.png',
  socialBanner: '/static/images/banner.png',
  email: 'anirudhmitra210@gmail.com',
  github: 'https://github.com/anirudh4583',
  twitter: 'https://twitter.com/BrownVitriol',
  facebook: 'https://facebook.com/anirudh4583',
  youtube: 'https://www.youtube.com/channel/UCgDh5nqxD_1rc1Z42nJRo4w',
  linkedin: 'https://www.linkedin.com/in/Anirudh4583',
  locale: 'en-US',
  analytics: {
    googleAnalyticsId: 'G-QE10C02KHS',
  },
  comment: {
    provider: 'giscus',
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname',
      reactions: '1',
      metadata: '0',
      theme: 'light',
      inputPosition: 'bottom',
      lang: 'en',
      darkTheme: 'dark_protanopia',
      themeURL: '',
    },
  },
}

module.exports = siteMetadata
