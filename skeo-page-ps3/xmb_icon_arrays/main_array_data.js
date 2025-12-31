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
        text_content: "home about test content",
      },
      {
        id: "home_resources_used",
        title: "resources used",
        text_content: "home resources used test content",
      },
      {
        id: "home_repository_link",
        title: "repository link",
        text_content: "home repository link test content",
        link: "https://github.com/skeoswf/skeo-ps3",
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
        text_content: "skeo about test content",
      },
      {
        id: "user_resume",
        title: "resume",
        text_content: "skeo resume test content",
        asset: {
          type: "file", // swap to "pdf" if you want
          src: null,    // put a URL/path later
        },
      },
      {
        id: "user_linkedin",
        title: "linkedin",
        text_content: "skeo linkedin test content",
        link: "https://www.linkedin.com/in/sk3o",
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
        title: "my github repositories",
        text_content: "link to my github repositories",
        link: "https://github.com/skeoswf",
      },
      {
        id: "github_notemap_repo",
        title: "notemap",
        text_content: "notemap repository test content",
        link: "https://github.com/skeoswf/notemap",
      },
      {
        id: "github_vocab_you_lary_repo",
        title: "vocab-you-lary",
        text_content: "vocab-you-lary repository test content",
        link: "https://github.com/skeoswf/vocab-you-lary",
      },
      {
        id: "github_superbeatboy_repo",
        title: "supa beat boy",
        text_content: "supabeatboy repository test content",
        link: "https://github.com/skeoswf/super-beat-boy",
      },
      {
        id: "github_calculator_repo",
        title: "calculator",
        text_content: "calculator repository test content",
        link: "https://github.com/skeoswf/calculator",
      },
    ],
  },

  {
    id: 4,
    text: "Videos",
    image: "/xmb_icons/videos-icon.png",
    active: false,
    items: [
      {
        id: "videos_set_1",
        title: "sample video 1",
        text_content: "sample video 1 description",
        asset: { type: "video", src: null },
      },
      {
        id: "videos_set_2",
        title: "sample video 2",
        text_content: "sample video 2 description",
        asset: { type: "video", src: null },
      },
      {
        id: "videos_set_3",
        title: "sample video 3",
        text_content: "sample video 3 description",
        asset: { type: "video", src: null },
      },
    ],
  },

  {
    id: 5,
    text: "Photos",
    image: "/xmb_icons/photos-icon.png",
    active: false,
    items: [
      {
        id: "photos_set_1",
        title: "sample photo 1",
        text_content: "sample photo 1 description",
        asset: { type: "image", src: null },
      },
      {
        id: "photos_set_2",
        title: "sample photo 2",
        text_content: "sample photo 2 description",
        asset: { type: "image", src: null },
      },
      {
        id: "photos_set_3",
        title: "sample photo 3",
        text_content: "sample photo 3 description",
        asset: { type: "image", src: null },
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
        text_content: "instagram link test content",
        link: "https://www.instagram.com/strawberrycult_/",
      },
    ],
  },
];

export { xmbIcons };
