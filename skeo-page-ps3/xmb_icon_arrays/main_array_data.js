const xmbIcons = [
  {
    id: 1,
    text: "Home",
    image: "/xmb_icons/home-icon.png",
    active: false,
    items: [
      {
        id: "home_about",
        title: "about",
        text_content: "originally, this page was intended to be a sort of professional/portfolio page. i always felt that the xmb bar from the playstation 3 era was clean, interactive, and intuitive, without it being plagued by an overtly 'sterile' quality you see in a lot of more modern uis. with a place for photos and videos as well, it'd be a nice way to also showcase who i am -- beyond the resume.",
        active: false,
        type: "text"
      },
      {
        id: "home_resources_used",
        title: "resources used",
        text_content: `sounds / xmb references [[[come back to this]]]`,
        active: false,
        type: "linkstack",
        links: [
          {
            id: "home_resource_ps3_dev_wiki",
            text_content: `ps3 developer wiki`,
            link: "https://www.psdevwiki.com/ps3/Landing_Page"
          },
          {
            id: "home_resource_ps3_user_guide",
            text_content: `playstation 3's user guide -- "about the XMB™ (XrossMediaBar)"`,
            link: "https://manuals.playstation.net/document/en/ps3/current/basicoperations/xmb.html"
          },
          {
            id: "home_resource_ps3_xmb_sounds",
            text_content: `ps3 xmb sound effects provided by sounds.spriters-resource.com`,
            link: "https://sounds.spriters-resource.com/playstation_3/playstationhome/asset/450189/"
          },
          {
            id: "home_resource_fot_rodin_pro_db",
            text_content: `xmb font: fot rodin pro db`,
            link: "https://fontsgeek.com/fonts/fot-rodin-pro-db"
          }
        ]
      },
      {
        id: "home_repository_link",
        title: "repository link",
        text_content: `repository for this project on github`,
        text_description: 'for this project, i used react with next.js to build the frontend. the site is hosted on vercel, and the code repository can be found on my github linked below.',
        link: "https://github.com/skeoswf/skeo-ps3",
        active: false,
        type: "link"
      },
    ],
  },

  {
    id: 2,
    text: "Skeo",
    image: "/xmb_icons/user-icon.png",
    active: true,
    items: [
      {
        id: "user_about",
        title: "about me",
        text_content: `i am a software engineer currently looking for my first role! i graduated nashville software school in 2025, with a focus on development fundamentals and problem solving. the final three months of the program was executed in a simulated company environment with scrum methodology.

        in the past, i was in the food industry -- working both FOH and BOH -- with roles ranging from line cook, barista, FOH manager, and trainer.
        
        in my personal life, i enjoy new things immensely, and am always looking to learn! i especially love my riding my motorcycle (kawasaki ninja!!), making music, cooking, and photography.`,
        active: true,
        type: "about",
        link: "resume/skeo_resume_v2.pdf"
      },

      {
        id: "user_linkedin",
        title: "linkedin",
        text_content: `my linkedin`,
        text_description: `feel free to connect with me on linkedin! im always looking to expand my network and meet new people in the industry. maybe even hit me up for some fun projects!`,
        link: "https://www.linkedin.com/in/sk3o",
        active: false,
        type: "link"
      },
    ],
  },

  {
    id: 3,
    text: "GitHub",
    image: "/xmb_icons/github-icon.png",
    active: false,
    items: [
      {
        id: "github_all_repos",
        title: "github profile",
        text_content: `link to my github repositories`,
        text_description: `check out my github profile to see all of my repositories, including personal works, projects, and collaborations with other developers.`,
        link: "https://github.com/skeoswf",
        active: false,
        type: "link"
      },
      {
        id: "github_notemap_repo",
        title: "notemap",
        text_content: `notemap repository`,
        text_description: `an application tailored for both casual and professional musicians to create and view bands, organize their upcoming gigs, and connect with other musicians

        'notemap' solves the problem of communication between musicians who 1) largely perform freelance, 2) is looking for fulfill a role (or roles) for a group, 3) is already in a group and is looking for members, or 4) is interested in creating a group. for the most part, outside of relatively niche online communities and local networking, it can be hard for the average musician to socially connect for the sole purpose of performance

        notemap was developed during as a frontstone capstone during my time at nashville software school. created with react, react-bootstrap, and firebase.`,
        link: "https://github.com/skeoswf/notemap",
        active: false,
        type: "link"
      },
      {
        id: "github_groovetime_repo",
        title: "groovetime",
        text_content: `groovetime repository`,
        text_description: `'groovetime!' is the backend for a social music-sharing platform built around a rotating weekly prompt called a 'weekly groove!', where users submit and rate video-based interpretations of a theme.

        the backend handles user authentication, profile management, submission workflows, rating logic, weekly archiving, and winner calculation. unlike traditional music platforms that focus on passive consumption, groovetime! supports active participation through a point-based system and community-driven rankings.

        the system is built with django and exposes a rest api consumed by a react frontend. it implements complex many-to-many relationships between users, submissions, and ratings, along with real-time data updates and admin-controlled weekly prompts.`,
        link: "https://github.com/skeoswf/groovetime-backend",
        active: false,
        type: "link"
      },
      {
        id: "github_vocab_you_lary_repo",
        title: "vocab-you-lary",
        text_content: `vocab-you-lary repository`,
        text_description: `a vocabulary building application designed to help users practice study on user submitted vocabularly words. created with firebase`,
        link: "https://github.com/skeoswf/vocab-you-lary",
        active: false,
        type: "link"
      },
      {
        id: "github_superbeatboy_repo",
        title: "supa beat boy",
        text_content: `supabeatboy repository`,
        text_description: `a WIP personal project. more or less planned to be a custom glorified beat pad. users can upload their own sounds, edit sounds and hotkeys, archive and delete. i want to eventually have it be able to pull audio from local and online sources, and allow the user to splice samples from that audio.`,
        link: "https://github.com/skeoswf/super-beat-boy",
        active: false,
        type: "link"
      },
      {
        id: "github_flicker_repo",
        title: "flickerwalk",
        text_content: `flickerwalk repository`,
        text_description: `another WIP personal project. a relatively unsettling atmospheric point and click adventure game with some sort of scattered lore thinly veiled as something else. maybe with a rudimentary inventory system?`,
        link: "https://github.com/skeoswf/flickerwalk",
        active: false,
        type: "link"
      },
      {
        id: "github_calculator_repo",
        title: "calculator",
        text_content: `calculator repository test content`,
        text_description: `a simple calculator application built with basic arithmetic functions. designed for quick calculations and ease of use.`,
        active: false,
        type: "link"
      },
    ],
  },

  {
    id: 4,
    text: "Photos",
    image: "/xmb_icons/photos-icon.png",
    active: false,
    items: [
      {
        id: "photos_set_1",
        title: "photo set 1",
        text_content: `sample photo 1 description`,
        asset: [
          { type: "image", src: "/photosets/set1_motorcycle/photo1_1.png" },
          { type: "image", src: "/photosets/set1_motorcycle/photo1_2.png" },
        ],
        active: false,
        type: "image"
      },
      {
        id: "photos_set_2",
        title: "photo set 2",
        text_content: `sample photo 2 description`,
        asset: [
          { type: "image", src: "/photosets/set2_hands/photo3_2.png" },
          { type: "image", src: "/photosets/set2_hands/photo4_2.png" },
          { type: "image", src: "/photosets/set2_hands/photos5_2.png" },
        ],
        active: false
      },
      {
        id: "photos_set_3",
        title: "photo set 3",
        text_content: `sample photo 3 description`,
        asset: [
          { type: "image", src: "/photosets/set3_smoke/photos6_3.png" },
          { type: "image", src: "/photosets/set3_smoke/photos7_3.png" },
          { type: "image", src: "/photosets/set3_smoke/photos8_3.png" },
        ],
        active: false
      },
      {
        id: "photos_set_4",
        title: "photo set 4",
        text_content: `sample photo 4 description`,
        asset: [
          { type: "image", src: "/photosets/set4_helmet/photos9_4.png" },
          { type: "image", src: "/photosets/set4_helmet/photos10_4.png" },
        ],
        active: false
      },
      {
        id: "photos_set_5",
        title: "photo set 5",
        text_content: `sample photo 5 description`,
        asset: [
          { type: "image", src: "/photosets/set5_cat/photos11_5.png" },
          { type: "image", src: "/photosets/set5_cat/photos12_5.png" },
        ],
        active: false
      },
    ],
  },

  {
    id: 5,
    text: "Videos",
    image: "/xmb_icons/videos-icon.png",
    active: false,
    items: [
      {
        id: "videos_set_1_concerts",
        title: "concerts",
        text_content: "videos from concerts",
        asset: [
          { type: "video", src: "/videosets/videos1_concerts/diles-music.mp4" },
          { type: "video", src: "/videosets/videos1_concerts/wisp.mp4" },
        ],
        active: false,
        type: "video"
      },
      {
        id: "videos_set_2_cat",
        title: "pixel",
        text_content: "pixel videos",
        asset: [
          { type: "video", src: "/videosets/videos2_cat/pixel1.mp4" },
          { type: "video", src: "/videosets/videos2_cat/pixel2.mp4" },
        ],
        active: false,
        type: "video"
      },
      {
        id: "videos_set_3_instruments",
        title: "instruments",
        text_content: "music snippets",
        asset: [
          { type: "video", src: "/videosets/videos3_instruments/pianosnippet.mp4" },
          { type: "video", src: "/videosets/videos3_instruments/sarahguitar.mp4" },
          { type: "video", src: "/videosets/videos3_instruments/squiddy.mp4" },
        ],
        active: false,
        type: "video"
      },
    ],
  },


  {
    id: 6,
    text: "Socials",
    image: "/xmb_icons/socials-icon.png",
    active: false,
    items: [
      {
        id: "socials_instagram",
        title: "instagram",
        text_content: "instagram link",
        link: "https://www.instagram.com/strawberrycult_/",
        text_content: `ig handle: @strawberrycult_`,
        text_description: `my very casual instagram for the very curious`,
        active: false,
        type: "link"
      },
    ],
  },
];

export { xmbIcons };
