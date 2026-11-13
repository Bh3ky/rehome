const photo = (id) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=900&q=70`;

export const CAMPAIGNS = [
  {
    slug: "hope-room",
    title: "The Hope Room",
    hub: "Placeholder Youth Hub",
    city: "Harare",
    status: "active",
    needs: "Warm wall art and soft seating for a counselling room.",
    received: 12,
    needed: 20,
    photo: photo("1503676260728-1c00da094a0b"),
  },
  {
    slug: "the-learning-corner",
    title: "The Learning Corner",
    hub: "Placeholder Learning Hub",
    city: "Bulawayo",
    status: "active",
    needs: "Bookshelves, rugs and colourful posters for a reading nook.",
    received: 7,
    needed: 15,
    photo: photo("1509062522246-3755977927d7"),
  },
  {
    slug: "the-quiet-container",
    title: "The Quiet Container",
    hub: "Placeholder Recovery Hub",
    city: "Mutare",
    status: "active",
    needs: "Calming textiles and local art for a recovery space.",
    received: 4,
    needed: 18,
    photo: photo("1513364776144-60967b0f800f"),
  },
  {
    slug: "the-studio-wall",
    title: "The Studio Wall",
    hub: "Placeholder Tech Hub",
    city: "Gweru",
    status: "active",
    needs: "Murals, framed prints and craft pieces for a coding studio.",
    received: 9,
    needed: 12,
    photo: photo("1460661419201-fd4cecdf8a8b"),
  },
];

export const getActiveCampaigns = () =>
  CAMPAIGNS.filter((c) => c.status === "active");
