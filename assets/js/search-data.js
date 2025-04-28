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
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-articles",
          title: "articles",
          description: "Some articles.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of your cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-important-formulas-in-quantum-mechanics",
      
        title: "Important Formulas in Quantum Mechanics",
      
      description: "Quantum Mechanics Notes",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/qm/";
        
      },
    },{id: "post-solid-state-physics-notes",
      
        title: "Solid State Physics Notes",
      
      description: "Important notes in solid state physics",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/ssp/";
        
      },
    },{id: "post-scattering",
      
        title: "Scattering",
      
      description: "Quantum Mechanics Notes",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/scattering/";
        
      },
    },{id: "post-adiabatic-approximation",
      
        title: "Adiabatic Approximation",
      
      description: "Quantum Mechanics Notes",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/adiabatic/";
        
      },
    },{id: "post-time-perturbation-theory",
      
        title: "Time Perturbation Theory",
      
      description: "Quantum Mechanics Notes",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/timeperturbation/";
        
      },
    },{id: "post-important-formulas-for-statistical-mechanics",
      
        title: "Important Formulas for Statistical Mechanics",
      
      description: "Statistical Mechanics Notes",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/formulas/";
        
      },
    },{id: "post-the-fermi-gas",
      
        title: "The Fermi Gas",
      
      description: "Statistical Mechanics Notes",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/fermigas/";
        
      },
    },{id: "post-black-body-radiation",
      
        title: "Black-Body Radiation",
      
      description: "Statistical Mechanics Notes",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/photon/";
        
      },
    },{id: "post-bose-einstein-condensation",
      
        title: "Bose-Einstein Condensation",
      
      description: "Statistical Mechanics Notes",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/becondensation/";
        
      },
    },{id: "post-from-grand-canonical-ensemble-to-ideal-gas",
      
        title: "From Grand Canonical Ensemble to Ideal Gas",
      
      description: "Statistical Mechanics Notes",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/idealgas/";
        
      },
    },{id: "post-fermi-and-bose-statistics",
      
        title: "Fermi and Bose Statistics",
      
      description: "Statistical Mechanics Notes",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/fermibosestatistics/";
        
      },
    },{id: "post-quantum-ensembles",
      
        title: "Quantum Ensembles",
      
      description: "Statistical Mechanics Notes",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/quantumensembles/";
        
      },
    },{id: "news-physics-experiments-course-presentation-has-been-succesfully-completed-there-is-no-experiment-course-anymore",
          title: 'Physics Experiments Course presentation has been succesfully completed. There is no experiment course...',
          description: "",
          section: "News",},{id: "news-happy-new-year-2025-would-be-tough-and-important-i-think",
          title: 'Happy new year! 2025 would be tough and important I think.',
          description: "",
          section: "News",},{id: "projects-cerium-phase-transition",
          title: 'Cerium Phase Transition',
          description: "Research on modifying the transition pressure point of Cerium by dopping rare earth metals.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-online-personal-page",
          title: 'Online Personal Page',
          description: "Exactly this website.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{id: "projects-study-on-impurities-in-thermally-evaporated-aluminum-films",
          title: 'Study on Impurities in Thermally Evaporated Aluminum Films',
          description: "Research on Al thin film.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/AlFilm/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%31%32%32%31%30%35%31%31@%6D%61%69%6C.%73%75%73%74%65%63%68.%65%64%75.%63%6E", "_blank");
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
