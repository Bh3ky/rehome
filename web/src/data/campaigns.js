const photo = (id) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1200&q=75`;

// Ordered by city so each city's campaigns sit together on the list page.
const RAW_CAMPAIGNS = [
  {
    slug: "hope-room",
    title: "The Hope Room",
    hub: "Placeholder Youth Hub",
    hubType: "Youth mental health hub",
    hubAbout:
      "A container-built hub offering free counselling and peer support groups to young people aged 14 to 25.",
    city: "Harare",
    status: "active",
    needs: "Warm wall art and soft seating for a counselling room.",
    story: [
      "The counselling room is the heart of our hub, but right now it is a bare grey box. Young people tell us it feels clinical, and that it is hard to open up in a space that does not feel safe or warm.",
      "We want to turn it into somewhere that feels like a living room: colour on the walls, soft places to sit, and pieces that remind people they belong. Art with a story helps. So does anything that carries the warmth of a home.",
      "Every piece we receive will be photographed in the room, and the donor will see exactly where it ended up.",
    ],
    photo: photo("1503676260728-1c00da094a0b"),
    gallery: [
      photo("1555041469-a586c61ea9bc"),
      photo("1493663284031-b7e3aefcae8e"),
      photo("1524758631624-e2822e304c36"),
    ],
    wishlist: [
      {
        name: "Framed wall art",
        description:
          "Paintings, prints and framed textiles in warm colours. Medium to large, ready to hang.",
        photo: photo("1578301978693-85fa9c0320b9"),
        needed: 6,
        received: 4,
      },
      {
        name: "Cushions and floor seating",
        description:
          "Soft, clean cushions, pouffes and bean bags so groups can sit comfortably on the floor.",
        photo: photo("1555041469-a586c61ea9bc"),
        needed: 8,
        received: 5,
      },
      {
        name: "Warm rugs",
        description:
          "Woven or hand-made rugs, about 1.5 to 2 metres, to soften the floor and absorb sound.",
        photo: photo("1493663284031-b7e3aefcae8e"),
        needed: 6,
        received: 3,
      },
    ],
  },
  {
    slug: "the-makers-space",
    title: "The Makers' Space",
    hub: "Placeholder Creative Hub",
    hubType: "Youth arts and crafts hub",
    hubAbout:
      "A creative hub where young people learn crafts, design and small-business skills, and sell what they make.",
    city: "Harare",
    status: "active",
    needs: "Work tables, craft supplies and display shelves for a maker studio.",
    story: [
      "Our young makers turn offcuts and fabric scraps into things people want to buy, but they work crowded around one table with supplies stacked on the floor.",
      "A proper studio would give them room to work, shelves to show what they have made, and the materials to keep going. Leftover craft supplies are as welcome as furniture.",
      "Everything you give goes straight into the next thing a young maker creates.",
    ],
    photo: photo("1452860606245-08befc0ff44b"),
    gallery: [
      photo("1544967082-d9d25d867d66"),
      photo("1513694203232-719a280e022f"),
      photo("1586023492125-27b2c045efd7"),
    ],
    wishlist: [
      {
        name: "Craft supplies",
        description:
          "Fabric, thread, beads, paint, brushes and paper. Opened or part-used is fine if it is clean and usable.",
        photo: photo("1452860606245-08befc0ff44b"),
        needed: 10,
        received: 6,
      },
      {
        name: "Display shelves",
        description:
          "Open shelves or cabinets to show finished pieces to visitors and customers.",
        photo: photo("1507842217343-583bb7270b66"),
        needed: 4,
        received: 2,
      },
      {
        name: "Work tables and stools",
        description:
          "Sturdy tables and stools that can take scissors, glue and a lot of elbows.",
        photo: photo("1540518614846-7eded433c457"),
        needed: 4,
        received: 1,
      },
    ],
  },
  {
    slug: "the-welcome-room",
    title: "The Welcome Room",
    hub: "Placeholder Community Hub",
    hubType: "Community drop-in hub",
    hubAbout:
      "A drop-in hub where young people can charge their phones, find a meal, and meet someone who will listen.",
    city: "Harare",
    status: "active",
    needs: "Seating, plants and warm lighting for a welcome area.",
    story: [
      "The first room a young person sees at our hub decides whether they stay or turn around. Right now it is a plain entrance with a few plastic chairs.",
      "We want it to say welcome the moment the door opens: comfortable seating, a few plants and soft light in the evenings, when most people arrive.",
      "Small things change how a room feels, and how a person feels in it.",
    ],
    photo: photo("1556228453-efd6c1ff04f6"),
    gallery: [
      photo("1524758631624-e2822e304c36"),
      photo("1513694203232-719a280e022f"),
      photo("1493663284031-b7e3aefcae8e"),
    ],
    wishlist: [
      {
        name: "Comfortable seating",
        description:
          "Armchairs, sofas and benches in good, clean condition. Small to medium sizes work best.",
        photo: photo("1555041469-a586c61ea9bc"),
        needed: 8,
        received: 5,
      },
      {
        name: "Indoor plants",
        description:
          "Hardy, healthy plants such as aloes, ferns and succulents, with their pots.",
        photo: photo("1463320726281-696a485928c7"),
        needed: 6,
        received: 3,
      },
      {
        name: "Lamps and lighting",
        description:
          "Table lamps and floor lamps that give warm light, with working bulbs and cables.",
        photo: photo("1524758631624-e2822e304c36"),
        needed: 6,
        received: 2,
      },
    ],
  },
  {
    slug: "the-learning-corner",
    title: "The Learning Corner",
    hub: "Placeholder Learning Hub",
    hubType: "After-school learning hub",
    hubAbout:
      "A learning hub where primary and secondary school learners get homework help, reading support and free computer time.",
    city: "Bulawayo",
    status: "active",
    needs: "Bookshelves, rugs and colourful posters for a reading nook.",
    story: [
      "Our learners read in the middle of a busy room, on whatever chair is free. We want to give reading a place of its own: a quiet corner where a child can pick up a book and stay a while.",
      "That means shelves to hold the books we already have, rugs and mats to sit on, and bright posters that make learning look inviting. Nothing needs to be new. It only needs to be cared for.",
      "Once the corner is ready, we will share photos of the children using it.",
    ],
    photo: photo("1509062522246-3755977927d7"),
    gallery: [
      photo("1481627834876-b7833e8f5570"),
      photo("1456513080510-7bf3a84b82f8"),
      photo("1503676382389-4809596d5290"),
    ],
    wishlist: [
      {
        name: "Bookshelves",
        description:
          "Sturdy shelves or small bookcases, no taller than 1.5 metres, so children can reach every row.",
        photo: photo("1481627834876-b7833e8f5570"),
        needed: 3,
        received: 2,
      },
      {
        name: "Rugs and reading mats",
        description:
          "Clean rugs and floor mats big enough for a small group to sit on together.",
        photo: photo("1524995997946-a1c2e315a42f"),
        needed: 4,
        received: 2,
      },
      {
        name: "Educational posters",
        description:
          "Maps, alphabets, number charts and illustrated posters, framed or ready to frame.",
        photo: photo("1456513080510-7bf3a84b82f8"),
        needed: 8,
        received: 3,
      },
    ],
  },
  {
    slug: "the-story-room",
    title: "The Story Room",
    hub: "Placeholder Library Hub",
    hubType: "Community library hub",
    hubAbout:
      "A small community library that lends books to families and runs story hours for young children.",
    city: "Bulawayo",
    status: "active",
    needs: "Children's books, bean bags and wall art for a story room.",
    story: [
      "Every Saturday, dozens of children crowd into our library for story hour. They sit on a concrete floor, and the books they love are falling apart.",
      "We want a story room that feels like a treat: soft seating, brightly illustrated walls and books in good condition that children are proud to hold.",
      "Picture books in any language are welcome, especially Shona and Ndebele titles.",
    ],
    photo: photo("1503676382389-4809596d5290"),
    gallery: [
      photo("1481627834876-b7833e8f5570"),
      photo("1456513080510-7bf3a84b82f8"),
      photo("1524995997946-a1c2e315a42f"),
    ],
    wishlist: [
      {
        name: "Children's books",
        description:
          "Picture books and early readers in good condition, in English, Shona or Ndebele.",
        photo: photo("1481627834876-b7833e8f5570"),
        needed: 20,
        received: 12,
      },
      {
        name: "Bean bags and floor cushions",
        description:
          "Washable bean bags and cushions for small readers to sprawl on.",
        photo: photo("1555041469-a586c61ea9bc"),
        needed: 8,
        received: 4,
      },
      {
        name: "Illustrated wall art",
        description:
          "Bright, child-friendly prints and paintings to hang at a child's eye level.",
        photo: photo("1513364776144-60967b0f800f"),
        needed: 4,
        received: 2,
      },
    ],
  },
  {
    slug: "the-quiet-container",
    title: "The Quiet Container",
    hub: "Placeholder Recovery Hub",
    hubType: "Addiction recovery hub",
    hubAbout:
      "A recovery hub that offers daily group sessions, one-to-one support and a safe place to spend the day.",
    city: "Masvingo",
    status: "active",
    needs: "Calming textiles and local art for a recovery space.",
    story: [
      "People come to us at some of the hardest moments of their lives. The room where they sit with a counsellor should feel calm, safe and human, but it is a plain metal box with nothing on the walls.",
      "We are looking for soft textiles, local art and a few plants to make the space feel steady and welcoming. Pieces rooted in local culture matter most, because recovery is easier when a space feels like home.",
      "We will always say clearly where a piece came from, and honour any wishes the donor has about how it is displayed.",
    ],
    photo: photo("1513364776144-60967b0f800f"),
    gallery: [
      photo("1519710164239-da123dc03ef4"),
      photo("1505691938895-1758d7feb511"),
      photo("1513694203232-719a280e022f"),
    ],
    wishlist: [
      {
        name: "Calming textiles",
        description:
          "Blankets, throws, curtains and wall hangings in soft, natural colours. Clean and in good repair.",
        photo: photo("1505691938895-1758d7feb511"),
        needed: 8,
        received: 2,
      },
      {
        name: "Local art",
        description:
          "Paintings, carvings and prints by Zimbabwean artists. Please tell us the story behind each piece.",
        photo: photo("1541961017774-22349e4a1262"),
        needed: 6,
        received: 1,
      },
      {
        name: "Plants and planters",
        description:
          "Healthy indoor plants and sturdy pots or baskets to bring some green into the room.",
        photo: photo("1485955900006-10f4d324d411"),
        needed: 4,
        received: 1,
      },
    ],
  },
  {
    slug: "the-studio-wall",
    title: "The Studio Wall",
    hub: "Placeholder Tech Hub",
    hubType: "Tech skills hub",
    hubAbout:
      "A coding and design hub where young people learn digital skills and build their first projects.",
    city: "Masvingo",
    status: "active",
    needs: "Murals, framed prints and craft pieces for a coding studio.",
    story: [
      "Our studio is where young people learn to build things with code. The room has fast internet and plenty of screens, but the walls are blank, and it does not feel like a place where creativity lives.",
      "We want the studio to reflect the people in it: bold local art, framed prints and craft pieces that show how technology and tradition can sit side by side.",
      "If you are an artist, we would love a mural, too. Tell us and we will make space.",
    ],
    photo: photo("1460661419201-fd4cecdf8a8b"),
    gallery: [
      photo("1544967082-d9d25d867d66"),
      photo("1558618666-fcd25c85cd64"),
      photo("1586023492125-27b2c045efd7"),
    ],
    wishlist: [
      {
        name: "Murals and framed prints",
        description:
          "Large, colourful pieces for the long studio wall, framed or ready to hang.",
        photo: photo("1544967082-d9d25d867d66"),
        needed: 6,
        received: 5,
      },
      {
        name: "Craft pieces",
        description:
          "Woven baskets, carvings and ceramics for the shelves and window ledges.",
        photo: photo("1558618666-fcd25c85cd64"),
        needed: 4,
        received: 3,
      },
      {
        name: "Shelving",
        description:
          "Open wall shelves to display craft pieces and the learners' own projects.",
        photo: photo("1507842217343-583bb7270b66"),
        needed: 2,
        received: 1,
      },
    ],
  },
  {
    slug: "the-garden-classroom",
    title: "The Garden Classroom",
    hub: "Placeholder Farming Hub",
    hubType: "Youth agriculture hub",
    hubAbout:
      "A hub that teaches young people to grow food and run small farming businesses.",
    city: "Masvingo",
    status: "active",
    needs: "Benches, planters and posters for an outdoor classroom.",
    story: [
      "Our lessons happen under a tree, with learners perched on upturned buckets. They are learning to grow food, but there is nowhere comfortable to sit and nothing on display to learn from.",
      "A garden classroom needs sturdy benches, planters the learners can tend themselves, and posters that explain what is growing.",
      "Weatherproof pieces last longest, and everything is put to work every day.",
    ],
    photo: photo("1463320726281-696a485928c7"),
    gallery: [
      photo("1485955900006-10f4d324d411"),
      photo("1497366216548-37526070297c"),
      photo("1513519245088-0e12902e5a38"),
    ],
    wishlist: [
      {
        name: "Outdoor benches",
        description:
          "Wooden or metal benches that can stay outside in the sun and rain.",
        photo: photo("1540518614846-7eded433c457"),
        needed: 6,
        received: 3,
      },
      {
        name: "Planters and pots",
        description:
          "Large pots, troughs and crates the learners can plant and look after.",
        photo: photo("1485955900006-10f4d324d411"),
        needed: 10,
        received: 6,
      },
      {
        name: "Teaching posters",
        description:
          "Posters on crops, soil, water and seasons, laminated or framed.",
        photo: photo("1456513080510-7bf3a84b82f8"),
        needed: 6,
        received: 2,
      },
    ],
  },
];

const sum = (items, key) => items.reduce((total, item) => total + item[key], 0);

export const CAMPAIGNS = RAW_CAMPAIGNS.map((campaign) => ({
  ...campaign,
  received: sum(campaign.wishlist, "received"),
  needed: sum(campaign.wishlist, "needed"),
}));

export const getActiveCampaigns = () =>
  CAMPAIGNS.filter((c) => c.status === "active");

export const getCampaign = (slug) => CAMPAIGNS.find((c) => c.slug === slug);

// Placeholder figures derived from the received count until real tracking exists
export const getCampaignTracker = (c) => ({
  offered: Math.min(c.needed + 4, c.received + 5),
  screened: Math.min(c.needed + 2, c.received + 3),
  accepted: Math.min(c.needed, c.received + 2),
  collected: Math.min(c.needed, c.received + 1),
  placed: c.received,
});

const GALLERY_POOL = [
  "1578301978693-85fa9c0320b9",
  "1555041469-a586c61ea9bc",
  "1493663284031-b7e3aefcae8e",
  "1524758631624-e2822e304c36",
  "1481627834876-b7833e8f5570",
  "1456513080510-7bf3a84b82f8",
  "1503676382389-4809596d5290",
  "1519710164239-da123dc03ef4",
  "1505691938895-1758d7feb511",
  "1513694203232-719a280e022f",
  "1544967082-d9d25d867d66",
  "1558618666-fcd25c85cd64",
  "1586023492125-27b2c045efd7",
  "1485955900006-10f4d324d411",
  "1541961017774-22349e4a1262",
  "1556228453-efd6c1ff04f6",
];

// 9 placeholder photos (a 3 x 3 grid), in a different order for each campaign
export const getCampaignGallery = (c) => {
  const offset = (CAMPAIGNS.indexOf(c) * 5) % GALLERY_POOL.length;
  return [...GALLERY_POOL.slice(offset), ...GALLERY_POOL.slice(0, offset)]
    .slice(0, 9)
    .map(
      (id) =>
        `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=600&q=70`
    );
};
