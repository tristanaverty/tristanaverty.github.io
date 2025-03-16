// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-news",
          title: "news",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-doctoral-thesis",
          title: "doctoral thesis",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/phd_thesis/";
          },
        },{id: "news-cordées-de-la-réussite-best-project-award",
          title: 'Cordées de la réussite: Best Project Award',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/20220604_Cordees.html";
            },},{id: "news-presentation-of-two-posters-at-gretsi-2022",
          title: 'Presentation of two posters at GRETSI 2022',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/20220901_GRETSI.html";
            },},{id: "news-article-about-my-thesis-work-in-pen-ar-vir",
          title: 'Article about my thesis work in Pen Ar Vir',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/20221015_PenArVir.html";
            },},{id: "news-edsml-doctoral-students-days",
          title: 'EDSML Doctoral Students Days',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/20221109_JourneeDoctorants.html";
            },},{id: "news-french-naval-academy-doctoral-students-day",
          title: 'French Naval Academy Doctoral Students Day',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/20230111_JourneeDoctorants.html";
            },},{id: "news-naval-academy-39-s-journées-portes-ouvertes",
          title: 'Naval Academy&amp;#39;s Journées Portes Ouvertes',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/20230518_JPO.html";
            },},{id: "news-gretsi-summer-school-2023-in-peyresq",
          title: 'GRETSI Summer School 2023 in Peyresq',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/20230626_Peyresq.html";
            },},{id: "news-oral-presentation-at-gretsi-2023",
          title: 'Oral presentation at GRETSI 2023',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/20230831_GRETSI.html";
            },},{id: "news-french-naval-academy-doctoral-students-day-2nd-edition",
          title: 'French Naval Academy Doctoral Students Day (2nd edition)',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/20240117_JourneeDoctorantsEN.html";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%74%72%69%73%74%61%6E.%61%76%65%72%74%79@%65%63%6F%6C%65-%6E%61%76%61%6C%65.%66%72", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/tristanaverty", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/1010907", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/tristan-averty-944b2b156", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0009-0009-4297-865X", "_blank");
        },
      },{
        id: 'social-researchgate',
        title: 'ResearchGate',
        section: 'Socials',
        handler: () => {
          window.open("https://www.researchgate.net/profile/Tristan-Averty/", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=vAeR-mwAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
