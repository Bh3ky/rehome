const photo = (id) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=900&q=75`;

export const UPDATES = [
  {
    id: "hope-room-paintings",
    campaignSlug: "hope-room",
    campaign: "The Hope Room",
    city: "Harare",
    when: "2 days ago",
    title: "Three paintings arrive at the Hope Room",
    text: "Two paintings and a woven wall hanging from donors in Borrowdale are now up in the counselling room. Young people say it already feels warmer.",
    photos: [
      photo("1578301978693-85fa9c0320b9"),
      photo("1555041469-a586c61ea9bc"),
      photo("1493663284031-b7e3aefcae8e"),
    ],
  },
  {
    id: "learning-corner-shelves",
    campaignSlug: "the-learning-corner",
    campaign: "The Learning Corner",
    city: "Bulawayo",
    when: "1 week ago",
    title: "The Learning Corner gets its first bookshelves",
    text: "Two sturdy bookcases were delivered this week. The learners spent the afternoon filling them, and the reading nook is open.",
    photos: [
      photo("1481627834876-b7833e8f5570"),
      photo("1524995997946-a1c2e315a42f"),
      photo("1503676382389-4809596d5290"),
    ],
  },
  {
    id: "studio-wall-progress",
    campaignSlug: "the-studio-wall",
    campaign: "The Studio Wall",
    city: "Masvingo",
    when: "2 weeks ago",
    title: "The Studio Wall is 75% of the way there",
    text: "Nine of twelve pieces have arrived, including a hand-painted mural panel from a local artist. Three items are still on the wishlist.",
    photos: [
      photo("1544967082-d9d25d867d66"),
      photo("1558618666-fcd25c85cd64"),
      photo("1586023492125-27b2c045efd7"),
    ],
  },
];
