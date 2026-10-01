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
        },{id: "news-graduated-with-a-b-sc-in-computer-science-and-engineering-from-the-university-of-dhaka",
          title: 'Graduated with a B.Sc. in Computer Science and Engineering from the University of...',
          description: "",
          section: "News",},{id: "news-joined-samsung-r-amp-amp-d-institute-bangladesh-as-an-engineer-and-researcher",
          title: 'Joined Samsung R&amp;amp;amp;D Institute Bangladesh as an Engineer and Researcher.',
          description: "",
          section: "News",},{id: "news-received-the-excellence-in-development-award-from-samsung-r-amp-amp-d-institute-bangladesh",
          title: 'Received the Excellence in Development award from Samsung R&amp;amp;amp;D Institute Bangladesh.',
          description: "",
          section: "News",},{id: "news-received-the-icon-award-from-samsung-r-amp-amp-d-institute-bangladesh",
          title: 'Received the Icon Award from Samsung R&amp;amp;amp;D Institute Bangladesh.',
          description: "",
          section: "News",},{id: "news-received-the-excellence-in-innovation-award-from-samsung-r-amp-amp-d-institute-bangladesh",
          title: 'Received the Excellence in Innovation award from Samsung R&amp;amp;amp;D Institute Bangladesh.',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%66%61%77%77%61%7A%61%6D%69%6E%32%39@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/oldpilluwu", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/fawwaz-m-amin", "_blank");
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
