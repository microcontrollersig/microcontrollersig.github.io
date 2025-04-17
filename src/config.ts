export const SITE = {
  website: "https://microcontrollersig.github.io/", // replace this with your deployed domain
  author: "Mohan Gupta",
  profile: "https://github.com/microcontrollersig/",
  desc: "MelbPC microcontroller workshop meetings",
  title: "Microcontroller SIG",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: true,
    text: "Suggest Changes",
    url: "https://github.com/microcontrollersig/microcontrollersig.github.io/",
  },
  dynamicOgImage: true,
  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "Australia/Melbourne", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
