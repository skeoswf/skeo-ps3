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
        text_content:
          `originally, this page was intended to be a sort of professional/portfolio page. i always felt that the xmb bar from the playstation 3 era was clean, interactive, and intuitive, without it being plagued by an overtly 'sterile' quality you see in a lot of more modern uis. with a place for photos and videos as well, it'd be a nice way to also showcase who i am -- beyond the resume.
          
          also! if you're on mobile, it may be best to 'view as desktop site' to get the full experience of the xmb layout...i won't deny there's some areas and viewports where it may not be perfect, but either way, welcome! feel free to look around and check out the different sections. if you have any questions or just wanna chat about anything, hit me up on the contact page or linkedin!`,
        active: false,
        type: "text",
      },
      {
        id: "home_resources_used",
        title: "resources",

        active: false,
        type: "linkstack",
        links: [
          {
            id: "home_resource_ps3_dev_wiki",
            text_content: `ps3 developer wiki`,
            link: "https://www.psdevwiki.com/ps3/Landing_Page",
          },
          {
            id: "home_resource_ps3_user_guide",
            text_content: `playstation 3's user guide -- "about the XMB™ (XrossMediaBar)"`,
            link: "https://manuals.playstation.net/document/en/ps3/current/basicoperations/xmb.html",
          },
          {
            id: "home_resource_ps3_xmb_sounds",
            text_content: `sounds.spriters-resource.com -- ps3 xmb sound effects`,
            link: "https://sounds.spriters-resource.com/playstation_3/playstationhome/asset/450189/",
          },
          {
            id: "soundcloud_developer_docs",
            text_content: `soundcloud developer's docs -- embedding tracks`,
            link: "https://developers.soundcloud.com/docs/api/guide",
          },
          {
            id: "home_resource_fot_rodin_pro_db",
            text_content: `xmb font: fot rodin pro db`,
            link: "https://fontsgeek.com/fonts/fot-rodin-pro-db",
          },
        ],
      },
      {
        id: "apis_used",
        title: "APIs",
        active: false,
        type: "linkstack",
        links: [
          {
            id: "web3forms_contact_form",
            text_content: `web3forms contact form api`,
            link: "https://www.web3forms.com/",
          },
          {
            id: "geoip_api",
            text_content: `maxmind's geoip api -- to find user's rough location`,
            link: "https://www.maxmind.com/en/home",
          },
          {
            id: "weather_api",
            text_content: `weather api -- to use rough location to get user's current weather`,
            link: "https://www.weatherapi.com/",
          },
        ],
      },
      {
        id: "home_repository_link",
        title: "repository link",
        text_content: `repository for this project on github`,
        text_description:
          "for this project, i used react with next.js. the site is hosted on vercel, and the code repository can be found on my github linked below.",
        link: "https://github.com/skeoswf/skeo-ps3",
        active: false,
        type: "link",
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

        in the past, i took on a variety of roles in the food industry. i worked both FOH and BOH in roles ranging from line cook and barista to trainer and manager — experience that shaped how i work with people, pressure, and fast-moving environments. 
        
        in my personal life, i enjoy new things immensely, and am always looking to learn! i especially love riding my motorcycle (kawasaki ninja!!), making music, playing video games,  cooking, and photography. these days in particular ive been really into pottery and ceramics! i also have a cat named pixel who is the best.`,
        active: true,
        type: "about",
        link: "resume/sawakkeo-resume.pdf",
      },

      {
        id: "user_contact",
        title: "contact",
        active: false,
        type: "contact",
      },
      {
        id: "user_linkedin",
        title: "linkedin",
        text_content: `my linkedin`,
        text_description: `feel free to connect with me on linkedin! im always looking to expand my network and meet new people in the industry. maybe even hit me up for some fun projects!`,
        link: "https://www.linkedin.com/in/sk3o",
        active: false,
        type: "link",
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
        type: "link",
      },
      {
        id: "github_notemap_repo",
        title: "notemap",
        text_content: `notemap repository`,
        text_description: `an application tailored for both casual and professional musicians to create and view bands, organize their upcoming gigs, and connect with other musicians.

        'notemap' solves the problem of communication between musicians who 1) largely perform freelance, 2) is looking for fulfill a role (or roles) for a group, 3) is already in a group and is looking for members, or 4) is interested in creating a group. for the most part, outside of relatively niche online communities and local networking, it can be hard for the average musician to socially connect for the sole purpose of performance.

        notemap was developed during as a frontend capstone during my time at nashville software school. created with react, react-bootstrap, and firebase.`,
        link: "https://github.com/skeoswf/notemap",
        active: false,
        type: "link",
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
        type: "link",
      },
      {
        id: "github_vocab_you_lary_repo",
        title: "vocab-you-lary",
        text_content: `vocab-you-lary repository`,
        text_description: `a vocabulary building application designed to help users practice study on user submitted vocabulary words. created with firebase.`,
        link: "https://github.com/skeoswf/vocab-you-lary",
        active: false,
        type: "link",
      },
      {
        id: "github_superbeatboy_repo",
        title: "supa beat boy",
        text_content: `supabeatboy repository`,
        text_description: `a WIP personal project. more or less planned to be a custom glorified beat pad. users can upload their own sounds, edit sounds and hotkeys, archive and delete. i want to eventually have it be able to pull audio from local and online sources, and allow the user to splice samples from that audio.`,
        link: "https://github.com/skeoswf/super-beat-boy",
        active: false,
        type: "link",
      },
      {
        id: "github_flicker_repo",
        title: "flickerwalk",
        text_content: `flickerwalk repository`,
        text_description: `another WIP personal project. a relatively unsettling atmospheric point-and-click adventure game with some sort of scattered lore thinly veiled as something else. maybe with a rudimentary inventory system?`,
        link: "https://github.com/skeoswf/flickerwalk",
        active: false,
        type: "link",
      },
      {
        id: "github_calculator_repo",
        title: "calculator",
        text_content: `calculator repository`,
        text_description: `a simple calculator application built with basic arithmetic functions. designed for quick calculations and ease of use.`,
        active: false,
        type: "link",
      },
    ],
  },

  {
    id: 4,
    text: "Music Recs",
    image: "/xmb_icons/soundcloud-icon.png",
    active: false,
    items: [
      {
        id: "aug_9-15th",
        title: "august 9-15th",
        text_content: `leon the professional is one of my favorite movies. it's about a girl named matilda who returned home from the grocery store to find her family murdered. i don't know alt-j that well. im sure for most people (myself included), alt-j becomes familiar in the context of the song that more or less brought them into the mainstream all those years ago -- breezeblocks. so when i found this song and immediately recognized that it  was likened it to leon the professional, i was shook. matilda does need leon in every possible way. you can hear it in the choruses. `,
        embedded: `<iframe width="100%" height="170" scrolling="no" frameborder="no" allow="autoplay; encrypted-media" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A46579085&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/alt-j" title="alt-J" target="_blank" style="color: #cccccc; text-decoration: none;">alt-J</a> · <a href="https://soundcloud.com/alt-j/08-m-tilda" title="Matilda" target="_blank" style="color: #cccccc; text-decoration: none;">Matilda</a></div>`,
        type: "song",
      },
      {
        id: "aug_1-8th",
        title: "august 1-8th",
        text_content: `dream, ivory is an electronic pop band from southern california.they're a pair of brothers. milk was another one of their songs i stumbled upon in my soundcloud weekly ages ago. i have a distinct memory of riding my bike in an early a.m, listening to the lines of "racing through the street", and "bright lights reflecting" while i watched the interstate streetlights streak across my visor. i absolutely adore the segment at 1:28 with the higher pitched, moodier excerpt.`,
        embedded: `<iframe width="100%" height="170" scrolling="no" frameborder="no" allow="autoplay; encrypted-media" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A1625872767&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/dreamivory" title="Dream, Ivory" target="_blank" style="color: #cccccc; text-decoration: none;">Dream, Ivory</a> · <a href="https://soundcloud.com/dreamivory/milk" title="Milk" target="_blank" style="color: #cccccc; text-decoration: none;">Milk</a></div>`,
        type: "song",
      },
      {
        id: "july_2026",
        title: "july 2026 weeklies",
        songs_embedded: [
          {
            id: "july_1-11",
            text_content: `yung lean's someone i certainly look up to. right away you'd notice the slightly out of tune piano and the sort of not-quite-sad and certainly-not-happy lyrics. there's a sort of hope here. among yung lean's works, this is certainly one of the more minimalistic songs of his. the instrumental break at 1:00 might sound familiar -- it's been making the rounds on social media. apparently the song was written about lean's return to his father's house after his time in a psychiatric unit. let's see...haunting? no, i wouldn't say so. "so many times i realized what i seek for is right in front of my eyes."`,
            embedded: `<iframe width="100%" height="170" scrolling="no" frameborder="no" allow="autoplay; encrypted-media" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A824616631&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/p3r0x1d3" title="P3R0X1D3" target="_blank" style="color: #cccccc; text-decoration: none;">P3R0X1D3</a> · <a href="https://soundcloud.com/p3r0x1d3/agony" title="Yung Lean - Agony" target="_blank" style="color: #cccccc; text-decoration: none;">Yung Lean - Agony</a></div>`,
            type: "song",
          },
          {
            id: "july_12-18",
            text_content: `this song's a big collaborative effort between a lot of early-2020s soundcloud hyperpop/indie electronic artists. observer as a group is comprised of 15+ artists "and friends". the production of idmyw is sourced to 7 artists, and was mixed by 3. the lyrics are song by 5+ different singers. all of that said -- that's besides the point. i just thought that was really interesting. idmyw stands for "i don't mind your way". i found this song a couple years ago (my comment that shoutout the saxophone blurbs at 2:10 are still there!). i adore the lyrics and production. the string and horns and the pizzicato-esque sounds flowing with the layered lyrics at 2:30-3:10. MAN. it still hits just as hard as it did when i first heard it.`,
            embedded: `<iframe width="100%" height="170" scrolling="no" frameborder="no" allow="autoplay; encrypted-media" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A1465428283&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/hiddencontact" title="hidden contact" target="_blank" style="color: #cccccc; text-decoration: none;">hidden contact</a> · <a href="https://soundcloud.com/hiddencontact/observer-idmyw" title="observer - IDMYW" target="_blank" style="color: #cccccc; text-decoration: none;">observer - IDMYW</a></div>`,
            type: "song",
          },
          {
            id: "july_19-25",
            text_content: `super catchy. hard. "i just-- i just walked in da sto 🗣️🗣️". zaybeezy is a newer, more underground rapper with some songs garnering good success in the past few years. 360/2 was released by him september 1st, 2024, but has been making the rounds in the underground scene. while zaybeezy's most popular songs took several years to reach about half a hundred thousand listens (still a huge feat!!), 360/2 has been rapidly approaching those numbers since being recently "discovered". if you like 360/2 by him, certainly check out his other track "infinity". not as energetic and playful. definitely more angsty. but a lot of what makes 360/2 so nice could be heard just as well.`,
            embedded: `<iframe width="100%" height="170" scrolling="no" frameborder="no" allow="autoplay; encrypted-media" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A1907940293&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/itszaybeezy" title="zaybeezy !" target="_blank" style="color: #cccccc; text-decoration: none;">zaybeezy !</a> · <a href="https://soundcloud.com/itszaybeezy/beez360" title="360/2" target="_blank" style="color: #cccccc; text-decoration: none;">360/2</a></div>`,
            type: "song",
          },
          {
            id: "july_26-31",
            text_content: `an orchestraic retelling (pretentious, i know. i couldn't think of a better word!) of black hole sun with female led vocals. you'll notice right away this is BASICALLY an entirely different song. trust the build up. get blown away as i did when i first heard this song in some counter-strike frag movie about a decade ago.`,
            embedded: `<iframe width="100%" height="170" scrolling="no" frameborder="no" allow="autoplay; encrypted-media" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A165539620&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/nmmo1995" title="Tushkkar" target="_blank" style="color: #cccccc; text-decoration: none;">Tushkkar</a> · <a href="https://soundcloud.com/nmmo1995/black-hole-sun-nauela-ftswann" title="Black Hole Sun - Nauela Ft.Swann" target="_blank" style="color: #cccccc; text-decoration: none;">Black Hole Sun - Nauela Ft.Swann</a></div>`,
            type: "song",
          }
        ],
        type: "songlist",
      },
      {
        id: "june_2026",
        title: "june 2026 weeklies",
        songs_embedded: [
          {
            id: "june_21-30",
            text_content: `i found this randomly during a ride to my buddie's place in clarksville about an hour away. max volume, empty night interstate. i found myself messing with my cardo (helmet audio system) to keep putting the song back on repeat whenever it ended. the immediate heavy synths, the melancholic pitched up vocals. the chamber slide and single casing drop. 0:12 comes in with a wall of abrasive, distorted, almost industrial synths. repeated lyrics of remaining love, cold drinks, changes, and what matters. the sudden break about a minute in with the boops and the beeps and the hesistant guitars and the sudden return to the wall of synths. MAN. if you know songs like this please immediately hit me up. shoutout to nano.`,
            embedded: `<iframe width="100%" height="170" scrolling="no" frameborder="no" allow="autoplay; encrypted-media" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2219971646&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/nano17780" title="nano" target="_blank" style="color: #cccccc; text-decoration: none;">nano</a> · <a href="https://soundcloud.com/nano17780/virus-feat-whateveryouwantband" title="Virus (feat. whateveryouwantband)" target="_blank" style="color: #cccccc; text-decoration: none;">Virus (feat. whateveryouwantband)</a></div>`,
            type: "song",
          },
          {
            id: "june_14-20",
            text_content: `i DID say i have a thing for underground soundcloud rap. here we got 'project x' by haldadedd. i don't know anything about that producer/singer/artist-- but like whereami from few weeks back, they're also uk based. that being said, this song's definitely made it on my racing playlist. i DO have some fond memories winning laps with this song. what can i say!! it gets me feeling myself.`,
            embedded: `<iframe width="100%" height="170" scrolling="no" frameborder="no" allow="autoplay; encrypted-media" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2131272033&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/halfadedd" title="halfadedd" target="_blank" style="color: #cccccc; text-decoration: none;">halfadedd</a> · <a href="https://soundcloud.com/halfadedd/project-x-1" title="project x" target="_blank" style="color: #cccccc; text-decoration: none;">project x</a></div>`,
            type: "song",
          },
          {
            id: "june_7-13",
            text_content: `here's another example of music i picked up from the radio! i found this song a few hours ago on 91.1 WNXP. i don't know too much about feeble little horse, but apparently they're an indie rock band from pennsylvania. and as it turns out-- they're gonna be at the basement east in just a month! maybe i should go. 'rewind' is just such a pretty song. sometimes affections come and go. maybe we really are that different! `,
            embedded: `<iframe width="100%" height="170" scrolling="no" frameborder="no" allow="autoplay; encrypted-media" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2301955979&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/feeblelittlehorse" title="feeble little horse" target="_blank" style="color: #cccccc; text-decoration: none;">feeble little horse</a> · <a href="https://soundcloud.com/feeblelittlehorse/rewind" title="Rewind" target="_blank" style="color: #cccccc; text-decoration: none;">Rewind</a></div>`,
            type: "song",
          },

          {
            id: "june_1-6",
            text_content: `this song should immediately hit different. i was first introduced to clipping. about 10 years ago, and that more or less was my entry to experimental hip hop. 'Get Up' is the 8th song of their debut album 'CLIPPNG', and comes right after a song titled 'Dream'. 'Dream' is smooth, surreal... dystopian, drifting with heavy references to weed filling up his lungs, overtly aware of the city. 'Get Up' cuts into that haze immediately with the abrasive alarm, lines of grinding, paper plates, urban violence, hustling, all the while interspersed with Mariel's lines sharing a sort of unity and grittiness-- 'i gotta get mine, i gotta get it.'. excellent song!!`,
            embedded: `<iframe width="100%" height="170" scrolling="no" frameborder="no" allow="autoplay; encrypted-media" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A263982340&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/clppng" title="clipping." target="_blank" style="color: #cccccc; text-decoration: none;">clipping.</a> · <a href="https://soundcloud.com/clppng/get-up" title="Get Up" target="_blank" style="color: #cccccc; text-decoration: none;">Get Up</a></div>`,
            type: "song",
          }
        ],
        type: "songlist",
      },
      {
        id: "may_2026",
        title: "may 2026 weeklies",
        songs_embedded: [
          {
            id: "weekly_song_may_24_31st",
            text_content: `may 24-31st: i'm a sucker for underground soundcloud rap. i know there's a (honestly relatively deserved) rep-- but i genuinely believe there's so many gems out there! whereami is an uk underground rapper, and 'deja vu' was produced by typhelicia. the production is CRISP. hearing these sort of lines of an almost-angsty, bravado rap from the underground scene over olivia rodrigo's well known "deja vu" sampled lyrics-- it's such an interesting mix. his lines "i don't think they feel me, i don't think they'll feel me like you do" fading into olivia's "...do you get deja vu when she's with you?". awesome track!! i cant tell you how many times ive had this single song on repeat on my night rides.`,
            embedded: `<iframe width="100%" height="170" scrolling="no" frameborder="no" allow="autoplay; encrypted-media" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2149700496&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/er100-240297185" title="whereami" target="_blank" style="color: #cccccc; text-decoration: none;">whereami</a> · <a href="https://soundcloud.com/er100-240297185/2dc57f74-4831-48e4-b1b4-795183f57f17" title="deja vu (prod. typhelicia)" target="_blank" style="color: #cccccc; text-decoration: none;">deja vu (prod. typhelicia)</a></div>`,
            type: "song",
          },
          {
            id: "weekly_song_may_17_23rd",
            text_content: `may 17-23rd: we can't forget nujabes! stay easy.`,
            embedded: `<iframe width="100%" height="170" scrolling="no" frameborder="no" allow="autoplay; encrypted-media" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A1121609815&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/nujabes-sc" title="Nujabes" target="_blank" style="color: #cccccc; text-decoration: none;">Nujabes</a> · <a href="https://soundcloud.com/nujabes-sc/reflection-eternal" title="reflection eternal" target="_blank" style="color: #cccccc; text-decoration: none;">reflection eternal</a></div>`,
            type: "song",
          },
          {
            id: "weekly_song_may_10_16th",
            text_content: `may 10-16th: 'cheerwine' by chrysalis is another soft, lovely song. chrysalis is actually local to here! they're a nashville based alternative/indie group. the song is drifting, casual, earnestly vulnerable -- relatable too, of all things. i remember first hearing the line "i dial drunk and know exactly who i called too", and thinking 'huh'. yeah. i've done that.`,
            embedded: `<iframe width="100%" height="170" scrolling="no" frameborder="no" allow="autoplay; encrypted-media" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2043974908&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/chrysalis80170" title="chrysalis" target="_blank" style="color: #cccccc; text-decoration: none;">chrysalis</a> · <a href="https://soundcloud.com/chrysalis80170/cheerwine" title="cheerwine" target="_blank" style="color: #cccccc; text-decoration: none;">cheerwine</a></div>`,
            type: "song",
          },
          {
            id: "weekly_song_may_1_9th",
            text_content: `may 1-9th: azie is an artist from atlanta -- and recently she's made a presence in the underground scene with her release of "everglades". it's an awesome track. understated, but has presence with the chill drums, the lowkey overdriven guitars, and clean flow. she carries an emo aesthetic with her, and this song feels like a culmination of so many different genres. i HEAR the alternative rock, the hip hop, and the emo rap influence from the mid 2010s. she deserves to blow up!`,
            embedded: `<iframe width="100%" height="170" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2281253198&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/aziedoesntexist" title="AZIEDOESNTEXIST" target="_blank" style="color: #cccccc; text-decoration: none;">AZIEDOESNTEXIST</a> · <a href="https://soundcloud.com/aziedoesntexist/everglades" title="Everglades" target="_blank" style="color: #cccccc; text-decoration: none;">Everglades</a></div>`,
            type: "song",
          },
        ],
        type: "songlist",
      },
      {
        id: "april_2026",
        title: "april 2026 weeklies",
        songs_embedded: [
          {
            id: "weekly_song_past_3",
            text_content: `april 19th-30th: in the mood for some bright-surfacy melodic yearning jpop?? this track is about the singer having a friend with a heart of a "sugarless girl". the singer herself is upbeat, and calls out to her about the morning, grinning. meanwhile her friend talks of terrible things happening, and the singer replies with traps in romance, blowing her off for music, and not caring if her friend blames everything on the times-- saying it isn't enough to make her feel like everything is alright. the singer talking to her friend is stubborn, direct, and caring-- just like the song-- refusing to let her sink.`,
            embedded: `<iframe width="100%" height="170" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A187450954&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/maslyastar" title="maslyastar" target="_blank" style="color: #cccccc; text-decoration: none;">maslyastar</a> · <a href="https://soundcloud.com/maslyastar/capsule-sugarless-girl" title="capsule - Sugarless GiRL" target="_blank" style="color: #cccccc; text-decoration: none;">capsule - Sugarless GiRL</a></div>`,
            type: "song",
          },

          {

            text_content: `april 12th-18th: she was a 'wisp' girl and he was a 'whirr' boy. whirr is definitely a wonderful example of modern shoegaze. this track in particular slams you with a wall of almost-aggressive, fuzzy, overdriven guitar, all while being so melodic and accompanied by these relentless drums. soon, a woman's voice could be heard, just barely drowned out by the instrumentation. as far as other shoegaze bands go, i feel like whirr is a lot more textural and abrasive, not focusing so much on melodic vocals and a "clean"-er sound. that being said, 'leave' is whirr's most well known song, and id definitely recommend their other works-- especially their 'distressor' album!!`,
            embedded: `<iframe width="100%" height="170" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A1352054233&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/whirr-official" title="Whirr" target="_blank" style="color: #cccccc; text-decoration: none;">Whirr</a> · <a href="https://soundcloud.com/whirr-official/leave" title="Leave" target="_blank" style="color: #cccccc; text-decoration: none;">Leave</a></div>`,
            type: "song",
          },
          {

            text_content: `april 5-11th: the entry this week is 'heartlocket' by elusin. i found it going through my recommended soundcloud playlists -- the 'weekly wave'. they really do pull through sometimes! the song immediately draws you in with this lovely, misty electric guitar and light humming. whispered lyrics of nights spent talking about guns and god, recollections of heart- touched sleeves and heavy minds. what a precious song! we should all be so lucky to be in someone's heartlocket. i don't know anything about this artist or their works, but this track has me convinced to change that.`,
            embedded: `<iframe width = "100%" height = "170" scrolling = "no" frameborder = "no" allow = "autoplay" src = "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A1357363174&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true" ></ > <div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/elusin13" title="elusin" target="_blank" style="color: #cccccc; text-decoration: none;">elusin</a> · <a href="https://soundcloud.com/elusin13/heart-locket" title="Heart Locket" target="_blank" style="color: #cccccc; text-decoration: none;">Heart Locket</a></div>`,
            type: "song",
          },
          {
            text_content: `april: 1-4th: this week i wanna recommend atmosphere's 'sunshine'. i have fond memories of listening to this song when i was younger. i think the track came out in 2007? i came across it sometime during late middle school/early high school, and lost the track to memory...until recently! i was doing some laundry. and just thought 'man what was that song ? '. these days -- a good 10+ years later -- ive come to really appreciate the lyrics.`,
            embedded: `<iframe width="100%" height="170" scrolling="no" frameborder="yes" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A18913738&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/rhymesayers" title="rhymesayers" target="_blank" style="color: #cccccc; text-decoration: none;">rhymesayers</a> · <a href="https://soundcloud.com/rhymesayers/atmosphere-sunshine" title="Atmosphere - Sunshine" target="_blank" style="color: #cccccc; text-decoration: none;">Atmosphere - Sunshine</a></div>`,
            type: "song",
          },
        ],
        type: "songlist",
      },
      {
        id: "march_2026",
        title: "march 2026 weeklies",
        songs_embedded: [
          {
            text_content: `march 22-31st: this time we got dean blunt & elias ronnefelt's 'lucre 5'... i dont know anything about these guys. i believe dean blunt is a well-known producer and elias is the singer. that being said -- this track is wonderful. i adore the chill guitar and the soft, raspy vocals. the lyrics themselves give a lot to chew over-- you see feelings of acceptance, self-aware insecurity, wanting to be seen, snaps of anger, all throughout the track. big recommend!`,
            embedded: `<iframe width="100%" height="170" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A1998816411&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/samuel-775871805" title="sammysito" target="_blank" style="color: #cccccc; text-decoration: none;">sammysito</a> · <a href="https://soundcloud.com/samuel-775871805/dean-blunt-elias-ronnenfelt-lucre-5" title="Dean Blunt &amp; Elias Rønnenfelt - Lucre 5" target="_blank" style="color: #cccccc; text-decoration: none;">Dean Blunt &amp; Elias Rønnenfelt - Lucre 5</a></div>`,
          },
          {
            text_content: `march 15-21st: this week's song is '27a pitfield st" by bassvictim. the title itself points to a pretty specific not-too-memorable flat in east london. words about small emotional jabs and friends and nostalgia. the lyrics start soft and become more assertive -- being coated in this sort of catchy, hazy, electroclash(?) sound that's just super well done. this track is the second track of their fourth album ('forever') and after just now deciding to listen to the whole album-- if you're a fan of this so far-- i'd definitely recommend 'mr president'!`,
            embedded: `<iframe width="100%" height="170" scrolling="no" frameborder="no" allow="autoplay; encrypted-media" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2365180979&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/bassvictim-music" title="Bassvictim" target="_blank" style="color: #cccccc; text-decoration: none;">Bassvictim</a> · <a href="https://soundcloud.com/bassvictim-music/27a-pitfield-st" title="27a Pitfield St" target="_blank" style="color: #cccccc; text-decoration: none;">27a Pitfield St</a></div>`,
          },
          {
            text_content: `march 5-11th: here we got ag cook's 'official'. some people may recognize the same lyrics as charli xcx's 'official'! ag cook works closely and produces a ton of charli's (and other artist's) stuff -- and here we see him doing his "own" take of the song, on his terms. if you compare the two, immediately youd notice how ag's version is less... sparkly. not as grandiose and less rushed. the electric edge on the ends of some of his words, the layering and warping on some lines. i love it. i remember exactly where i first heard this track -- i was visiting an online friend of 7 years at this point -- and this came on his local college experimental radio station. the folks at UNC got some good taste!`,
            embedded: `<iframe width="100%" height="170" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A945390475&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/agcook" title="A. G. Cook" target="_blank" style="color: #cccccc; text-decoration: none;">A. G. Cook</a> · <a href="https://soundcloud.com/agcook/official" title="Official" target="_blank" style="color: #cccccc; text-decoration: none;">Official</a></div>`,
          },
          {
            text_content: `march 1-4th: 'striptease' by carwash is probably one of my most favorite songs. easily a personal top 5. the song itself sits somewhere in that alternative-indie lofi or dream-pop area. to be fair, there's almost always some heavy overlap between all of those labels. it feels so fleeting, nostalgic, hopeful-- but ultimately grounded. the light bass guitar and muted strings in the back become more prominent as he speaks up, matching his tempo while setting the mood. sometimes i wonder if there's bittersweet feelings in the lyrics.`,
            embedded: `<iframe width="100%" height="170" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A737027887&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/carwashh" title="carwash" target="_blank" style="color: #cccccc; text-decoration: none;">carwash</a> · <a href="https://soundcloud.com/carwashh/striptease-1" title="striptease" target="_blank" style="color: #cccccc; text-decoration: none;">striptease</a></div>`,
          }
        ],
        type: "songlist",
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
        title: "my bike (sharkie!)",
        text_content: `sample photo 1 description`,
        asset: [
          { type: "image", src: "/photosets/set1_motorcycle/photo1_1.png" },
          { type: "image", src: "/photosets/set1_motorcycle/photo2_1.png" },
          { type: "image", src: "/photosets/set1_motorcycle/photo3_1.png" },
        ],
        active: false,
        type: "image",
      },
      {
        id: "photos_set_2",
        title: "hands",
        text_content: `sample photo 2 description`,
        asset: [
          { type: "image", src: "/photosets/set2_hands/photos5_2.png" },
          { type: "image", src: "/photosets/set2_hands/photo3_2.png" },
          { type: "image", src: "/photosets/set2_hands/photo4_2.png" },
        ],
        active: false,
        type: "image",
      },
      {
        id: "photos_set_3",
        title: "habits",
        text_content: `sample photo 3 description`,
        asset: [
          { type: "image", src: "/photosets/set3_smoke/photos6_3.png" },
          { type: "image", src: "/photosets/set3_smoke/photos7_3.png" },
          { type: "image", src: "/photosets/set3_smoke/photos8_3.png" },
        ],
        active: false,
        type: "image",
      },
      {
        id: "photos_set_4",
        title: "helmet",
        text_content: `sample photo 4 description`,
        asset: [
          { type: "image", src: "/photosets/set4_helmet/photos9_4.png" },
          { type: "image", src: "/photosets/set4_helmet/photos11_4.png" },
          { type: "image", src: "/photosets/set4_helmet/photos11_5.png" },
          { type: "image", src: "/photosets/set4_helmet/photo3_1.png" },
        ],
        active: false,
        type: "image",
      },
      {
        id: "photos_set_5",
        title: "feline friends",
        text_content: `sample photo 5 description`,
        asset: [
          { type: "image", src: "/photosets/set5_cat/photos11_5.png" },
          { type: "image", src: "/photosets/set5_cat/photos12_5.png" },
        ],
        active: false,
        type: "image",
      },
    ],
  },


  {
    id: 6,
    text: "Videos",
    image: "/xmb_icons/videos-icon.png",
    active: false,
    items: [
      {
        id: "videos_set_1_cats",
        title: "my cat (pixel!)",
        text_content: "videos of cats",
        asset: [
          { type: "video", src: "/videosets/catvidyas/cat1.mp4" },
          { type: "video", src: "/videosets/catvidyas/cat3.mp4" },
          { type: "video", src: "/videosets/catvidyas/cat2.mp4" },
        ],
        active: false,
        type: "video",
      },
      {
        id: "videos_set_2_concerts",
        title: "concert snippets",
        text_content: "videos from concerts",
        asset: [
          { type: "video", src: "/videosets/concertvidyas/concert1.mp4" },
          { type: "video", src: "/videosets/concertvidyas/concert2.mp4" },
        ],
        active: false,
        type: "video",
      },
      {
        id: "videos_set_3_music",
        title: "music clips",
        text_content: "music clips",
        asset: [
          { type: "video", src: "/videosets/musicvidyas/music1.mp4" },
          { type: "video", src: "/videosets/musicvidyas/music2.mp4" },
          { type: "video", src: "/videosets/musicvidyas/music3.mp4" },
        ],
        active: false,
        type: "video",
      },
      {
        id: "videos_set_3_talks",
        title: "ambient?",
        text_content: "talk snippets",
        asset: [
          { type: "video", src: "/videosets/talkvidyas/talk1.mp4" },
          { type: "video", src: "/videosets/talkvidyas/talk2.mp4" },
        ],
        active: false,
        type: "video",
      },
    ],
  },


  {
    id: 7,
    text: "Socials",
    image: "/xmb_icons/socials-icon.png",
    active: false,
    items: [
      {
        id: "socials_instagram",
        title: "instagram",
        text_content: "instagram link",
        link: "https://www.instagram.com/strawberrycult_/",
        text_description: `my very casual instagram for the very curious`,
        active: false,
        type: "link",
      },
      {
        id: "socials_letterboxd",
        title: "letterboxd",
        text_content: "letterboxd link",
        link: "https://letterboxd.com/itsskeo/",
        text_description: `im getting into movies a lot more these days, and this is where i keep track of them!`,
        active: false,
        type: "link",
      },
      {
        id: "socials_soundcloud",
        title: "soundcloud",
        text_content: "soundcloud link",
        link: "https://soundcloud.com/tapleswf",
        text_description: `all the music i love is here!!`,
        active: false,
        type: "link",
      },
    ],
  },
];

export { xmbIcons };
