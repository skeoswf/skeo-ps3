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
        active: false
      },
      {
        id: "home_resources_used",
        title: "resources used",
        text_content: "home resources used test content",
        active: false
      },
      {
        id: "home_repository_link",
        title: "repository link",
        text_content: "home repository link test content",
        link: "https://github.com/skeoswf/skeo-ps3",
        active: false
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
        active: true
      },
      {
        id: "user_resume",
        title: "resume",
        text_content: "skeo resume test content",
        asset: {
          type: "pdf",
          src: null,
        },
        active: false
      },
      {
        id: "user_linkedin",
        title: "linkedin",
        text_content: "skeo linkedin test content",
        link: "https://www.linkedin.com/in/sk3o",
        active: false
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
        text_content: "link to my github repositories",
        link: "https://github.com/skeoswf",
        active: false
      },
      {
        id: "github_notemap_repo",
        title: "notemap",
        text_content: "notemap repository test content",
        link: "https://github.com/skeoswf/notemap",
        active: false
      },
      {
        id: "github_vocab_you_lary_repo",
        title: "vocab-you-lary",
        text_content: "vocab-you-lary repository test content",
        link: "https://github.com/skeoswf/vocab-you-lary",
        active: false
      },
      {
        id: "github_superbeatboy_repo",
        title: "supa beat boy",
        text_content: "supabeatboy repository test content",
        link: "https://github.com/skeoswf/super-beat-boy",
        active: false
      },
      {
        id: "github_calculator_repo",
        title: "calculator",
        text_content: "calculator repository test content",
        link: "https://github.com/skeoswf/calculator",
        active: false
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
        id: "videos_set_1_concerts",
        title: "concerts",
        text_content: "videos from concerts",
        asset: [
          { type: "video", src: "/videosets/videos1_concerts/diles-music.mp4" },
          { type: "video", src: "/videosets/videos1_concerts/wisp.mp4" },
        ],
        active: false
      },
      {
        id: "videos_set_2_cat",
        title: "pixel",
        text_content: "pixel videos",
        asset: [
          { type: "video", src: "/videosets/videos2_cat/pixel1.mp4" },
          { type: "video", src: "/videosets/videos2_cat/pixel2.mp4" },
        ],
        active: false
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
        active: false
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
        title: "photo set 1",
        text_content: "sample photo 1 description",
        asset:
          [
            { type: "image", src: "/photosets/set1_motorcycle/photo1_1.png" },
            { type: "image", src: "/photosets/set1_motorcycle/photo1_2.png" },
          ],
        active: false
      },
      {
        id: "photos_set_2",
        title: "photo set 2",
        text_content: "sample photo 2 description",
        asset:
          [
            { type: "image", src: "/photosets/set2_hands/photo3_2.png" },
            { type: "image", src: "/photosets/set2_hands/photo4_2.png" },
            { type: "image", src: "/photosets/set2_hands/photos5_2.png" },
          ],
        active: false
      },
      {
        id: "photos_set_3",
        title: "photo set 3",
        text_content: "sample photo 3 description",
        asset:
          [
            { type: "image", src: "/photosets/set3_smoke/photos6_3.png" },
            { type: "image", src: "/photosets/set3_smoke/photos7_3.png" },
            { type: "image", src: "/photosets/set3_smoke/photos8_3.png" },
          ],
        active: false
      },
      {
        id: "photos_set_4",
        title: "photo set 3",
        text_content: "sample photo 3 description",
        asset:
          [
            { type: "image", src: "/photosets/set4_helmet/photos9_4.png" },
            { type: "image", src: "/photosets/set4_helmet/photos10_4.png" },
          ],
        active: false
      },
      {
        id: "photos_set_5",
        title: "photo set 5",
        text_content: "sample photo 3 description",
        asset:
          [
            { type: "image", src: "/photosets/set5_cat/photos11_5.png" },
            { type: "image", src: "/photosets/set5_cat/photos12_5.png" },
          ],
        active: false
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
        active: false
      },
    ],
  },
];

export { xmbIcons };
