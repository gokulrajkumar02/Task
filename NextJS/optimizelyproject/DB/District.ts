export const cities = [
  { name: "Chennai", img: "/Chennai.jpg" },
  { name: "Bengaluru", img: "/Bengaluru.jpg" },
  { name: "Hyderabad", img: "/Hyderabed.jpg" },
  { name: "Mumbai", img: "/Mumbai.jpg" },
  { name: "Pune", img: "/pune.jpg" },
  { name: "Delhi", img: "/Delhi.jpg" },
  { name: "Kolkata", img: "/Kolkata.jpg" },
  { name: "Ahmedabad", img: "/Ahmedabad.jpg" },
  { name: "Abu Dhabi", img: "/abuDhabi.jpg" },
  { name: "Dubai", img: "/Dubai.jpg" },
  { name: "Goa", img: "/Goa.jpg" },
  { name: "Chandigarh", img: "/Chandigarh.jpg" },
];

export const cityAlphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

export const locationOptions = [
  "Mumbai",
  "Delhi",
  "Bengaluru",
  "Hyderabad",
  "Chennai",
  "Kolkata",
  "Pune",
  "Ahmedabad",

  "Jaipur",
  "Lucknow",
  "Chandigarh",
  "Indore",
  "Bhopal",
  "Surat",
  "Nagpur",
  "Kochi",
  "Coimbatore",
  "Visakhapatnam",
  "Patna",
  "Vadodara",
  "Ludhiana",
  "Agra",
  "Nashik",
  "Faridabad",
  "Meerut",
  "Rajkot",
  "Varanasi",
  "Srinagar",
  "Aurangabad",
  "Dhanbad",
  "Amritsar",
  "Allahabad",
  "Ranchi",
  "Howrah",
  "Jabalpur",
  "Gwalior",
  "Vijayawada",
  "Jodhpur",
  "Madurai",
  "Raipur",
  "Kota",
  "Guwahati",
  "Solapur",
  "Hubli",
  "Mysuru",
  "Tiruchirappalli",

  "Noida",
  "Gurgaon",
  "Ghaziabad",
  "Thiruvananthapuram",
  "Warangal",
  "Salem",
  "Aligarh",
  "Bareilly",
  "Moradabad",
  "Jalandhar",
  "Bhubaneswar",
  "Dehradun",
  "Ujjain",
  "Siliguri",
  "Ajmer",
  "Kolhapur",
  "Akola",
  "Gaya",
  "Jamnagar",
  "Mangalore",
  "Erode",
  "Belgaum",
  "Ambattur",
  "Tirunelveli",

  "Goa",
  "Udaipur",
  "Rishikesh",
  "Shimla",
  "Manali",
  "Darjeeling",
  "Ooty",
  "Kodaikanal",
  "Leh",
  "Gangtok",
  "Pondicherry",
  "Amarnath",
  "Haridwar",
  "Mount Abu",
  "Khajuraho",
  "Hampi",
  "Mahabalipuram",
  "New York",
  "Los Angeles",
  "Chicago",
  "San Francisco",
  "Washington DC",
  "Boston",
  "Houston",
  "Dallas",
  "Seattle",
  "Miami",
  "Atlanta",
  "Denver",

  "London",
  "Manchester",
  "Birmingham",
  "Liverpool",
  "Leeds",
  "Glasgow",
  "Edinburgh",

  "Paris",
  "Berlin",
  "Rome",
  "Madrid",
  "Amsterdam",
  "Barcelona",
  "Vienna",
  "Prague",
  "Budapest",
  "Zurich",
  "Munich",
  "Brussels",
  "Copenhagen",
  "Stockholm",
  "Oslo",
  "Helsinki",
  "Lisbon",
  "Dublin",
  "Warsaw",

  "Dubai",
  "Abu Dhabi",
  "Doha",
  "Riyadh",
  "Jeddah",
  "Kuwait City",
  "Muscat",
  "Tel Aviv",

  "Tokyo",
  "Seoul",
  "Beijing",
  "Shanghai",
  "Hong Kong",
  "Singapore",
  "Bangkok",
  "Kuala Lumpur",
  "Jakarta",
  "Manila",
  "Hanoi",
  "Ho Chi Minh City",
  "Taipei",
  "Osaka",
  "Kyoto",
  "Colombo",
  "Kathmandu",
  "Dhaka",

  "Sydney",
  "Melbourne",
  "Brisbane",
  "Perth",
  "Auckland",
  "Wellington",

  "Cape Town",
  "Johannesburg",
  "Nairobi",
  "Cairo",
  "Lagos",
  "Addis Ababa",
  "Casablanca",

  "Toronto",
  "Vancouver",
  "Montreal",
  "Calgary",
  "Ottawa",
  "Edmonton",

  "São Paulo",
  "Rio de Janeiro",
  "Buenos Aires",
  "Santiago",
  "Lima",
  "Bogotá",
].sort();

export type SearchEntity = {
  id: string;
  display_title: string;
  display_subtitle: string;
  image_url: string;
  images?: string[];
  entity_type:
    | "EntityTypeMovie"
    | "EntityTypeEvent"
    | "EntityTypeRes"
    | "EntityTypeArtist"
    | "EntityTypeStore";
  metadata: Record<string, string>;
};

export const trendingSearches: SearchEntity[] = [
  {
    id: "211577",
    display_title: "Dhurandhar The Revenge",
    display_subtitle: "movie",
    entity_type: "EntityTypeMovie",
    image_url:
      "https://cdn.district.in/movies-assets/images/cinema/DD-ea86c5a0-1d31-11f1-96c9-4539b6d27dc7.jpg",
    metadata: { format_id: "goaSOXSVdp0", language: "Tamil +2 more" },
  },
  {
    id: "693bb53f0266bdd14cc5c888",
    display_title:
      "Sitar for Mental Health by Rishab Rikhiram Sharma India Tour 2026 | Chennai",
    display_subtitle: "event",
    entity_type: "EntityTypeEvent",
    image_url:
      "https://media.insider.in/image/upload/c_crop,g_custom/v1774529962/e0xernbflpjsdvzymuy6.jpg",
    metadata: {
      category: "Music",
      slug: "sitar-for-mental-health-by-rishab-rikhiram-sharma-india-tour-2026-chennai",
    },
  },
  {
    id: "65484",
    display_title: "Samco",
    display_subtitle: "restaurant",
    entity_type: "EntityTypeRes",
    image_url:
      "https://b.zmtcdn.com/data/pictures/chains/4/65484/b4ddfec42564e21ef0d330595334ba14.jpg",
    images: [
      "https://b.zmtcdn.com/data/pictures/chains/4/65484/b4ddfec42564e21ef0d330595334ba14.jpg",
      "https://b.zmtcdn.com/data/pictures/3/20852253/d85db1cd92f39cad2fc686b7c93e670d.jpg",
      "https://b.zmtcdn.com/data/pictures/chains/5/20953065/e20f23bbbdb9971a4cfa1958afb8e03a.jpg",
      "https://b.zmtcdn.com/data/pictures/1/21104441/417c8a90f561508bf34837fc67fb4492.jpg",
      "https://b.zmtcdn.com/data/pictures/chains/9/21316959/bb56f29ee344bd6ab362a6eef8c09ba6.jpg",
    ],
    metadata: { road_distance: "18.6", seo_url: "/chennai/samco-alwarpet" },
  },
  {
    id: "67a06c0ad570f4f70c23d264",
    display_title: "Rishab Rikhiram Sharma",
    display_subtitle: "artist",
    entity_type: "EntityTypeArtist",
    image_url:
      "https://media.insider.in/image/upload/c_crop,g_custom/v1739349668/plroeaif9bmftkbqrg7d.jpg",
    metadata: { slug: "rishab-rikhiram-sharma" },
  },
  {
    id: "1001007",
    display_title: "Naturals Salon",
    display_subtitle: "store",
    entity_type: "EntityTypeStore",
    image_url: "https://b.zmtcdn.com//data/edition_assets/174798119847439.png",
    images: [
      "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=400&h=600&fit=crop",
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&h=600&fit=crop",
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=600&fit=crop",
      "https://images.unsplash.com/photo-1633681122182-2c5f08cc4543?w=400&h=600&fit=crop",
      "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=400&h=600&fit=crop",
    ],
    metadata: {
      address: "Phoenix Market City, Velachery, Chennai",
      dist: "10.6",
      pay_config: "PayBill",
    },
  },
  {
    id: "213456",
    display_title: "Youth",
    display_subtitle: "movie",
    entity_type: "EntityTypeMovie",
    image_url:
      "https://cdn.district.in/movies-assets/images/cinema/Youth_Poster-3d17c4e0-2444-11f1-8704-ab6f874147b6.jpg",
    metadata: { format_id: "FptXPunmvC", language: "Tamil" },
  },
  {
    id: "69b263560c701afeebd6ffe6",
    display_title: "TATA IPL 2026: Match 8 | Delhi Capitals vs Mumbai Indians",
    display_subtitle: "event",
    entity_type: "EntityTypeEvent",
    image_url:
      "https://media.insider.in/image/upload/c_crop,g_custom/v1774767256/iptyybuu86uoybiu3pea.jpg",
    metadata: {
      category: "Sports",
      slug: "tata-ipl-2026-match-8--delhi-capitals-vs-mumbai-indians",
    },
  },
  {
    id: "20852253",
    display_title: "Amrita Amore",
    display_subtitle: "restaurant",
    entity_type: "EntityTypeRes",
    image_url:
      "https://b.zmtcdn.com/data/pictures/3/20852253/d85db1cd92f39cad2fc686b7c93e670d.jpg",
    images: [
      "https://b.zmtcdn.com/data/pictures/3/20852253/d85db1cd92f39cad2fc686b7c93e670d.jpg",
      "https://b.zmtcdn.com/data/pictures/chains/4/65484/b4ddfec42564e21ef0d330595334ba14.jpg",
      "https://b.zmtcdn.com/data/pictures/1/21104441/417c8a90f561508bf34837fc67fb4492.jpg",
      "https://b.zmtcdn.com/data/pictures/3/20910053/fb1c2dd75e5da9a57fd045ce6bc7cecc.jpg",
      "https://b.zmtcdn.com/data/pictures/7/18752937/f15f179083b8d904ad28841a90091806.jpg",
    ],
    metadata: {
      road_distance: "2.0",
      seo_url: "/chennai/amrita-amore-chromepet",
    },
  },
  {
    id: "66fcf1cd8b1301627db0394d",
    display_title: "P. C. Sorcar",
    display_subtitle: "artist",
    entity_type: "EntityTypeArtist",
    image_url:
      "https://media.insider.in/image/upload/c_crop,g_custom/v1728546031/g6h9sx7qohwvbnsc1cea.jpg",
    metadata: { slug: "p-c-sorcar" },
  },
  {
    id: "1002826",
    display_title: "Puma",
    display_subtitle: "store",
    entity_type: "EntityTypeStore",
    image_url: "https://b.zmtcdn.com//data/edition_assets/174178658730421.jpg",
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=600&fit=crop", // sports shoes
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400&h=600&fit=crop", // sneakers
      "https://images.unsplash.com/photo-1556906781-9a412961a28c?w=400&h=600&fit=crop", // running shoes
      "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?w=400&h=600&fit=crop", // sportswear
      "https://images.unsplash.com/photo-1483721310020-03333e577078?w=400&h=600&fit=crop", // sports store
    ],
    metadata: {
      address: "Selaiyur, Chennai",
      dist: "4.7",
      pay_config: "ScanAndPay",
    },
  },
  {
    id: "212079",
    display_title: "Happy Raj",
    display_subtitle: "movie",
    entity_type: "EntityTypeMovie",
    image_url:
      "https://cdn.district.in/movies-assets/images/cinema/Happy-Raj-6e933bf0-1871-11f1-a857-fd0378823a8e.jpg",
    metadata: { format_id: "yHvmP7Id5z", language: "Tamil" },
  },
  {
    id: "69c2bb088442088f36764e31",
    display_title:
      "TATA IPL 2026: Match 10 | Sunrisers Hyderabad vs Lucknow Super Giants",
    display_subtitle: "event",
    entity_type: "EntityTypeEvent",
    image_url:
      "https://media.insider.in/image/upload/c_crop,g_custom/v1774426595/vwgcqia259g328dqkrae.jpg",
    metadata: {
      category: "Sports",
      slug: "tata-ipl-2026-match-10-sunrisers-hyderabad-vs-lucknow-super-giants",
    },
  },
  {
    id: "20953065",
    display_title: "California Burrito",
    display_subtitle: "restaurant",
    entity_type: "EntityTypeRes",
    image_url:
      "https://b.zmtcdn.com/data/pictures/chains/5/20953065/e20f23bbbdb9971a4cfa1958afb8e03a.jpg",
    images: [
      "https://b.zmtcdn.com/data/pictures/chains/5/20953065/e20f23bbbdb9971a4cfa1958afb8e03a.jpg",
      "https://b.zmtcdn.com/data/pictures/chains/9/21316959/bb56f29ee344bd6ab362a6eef8c09ba6.jpg",
      "https://b.zmtcdn.com/data/pictures/chains/2/21010042/e3206e31c35419f7e9f7fe33f5b0724a.jpg",
      "https://b.zmtcdn.com/data/pictures/chains/4/65484/b4ddfec42564e21ef0d330595334ba14.jpg",
      "https://b.zmtcdn.com/data/pictures/3/20852253/d85db1cd92f39cad2fc686b7c93e670d.jpg",
    ],
    metadata: {
      road_distance: "11.1",
      seo_url: "/chennai/california-burrito-guindy",
    },
  },
  {
    id: "6998662b6f025dc900b9a6c7",
    display_title: "Dhayaa",
    display_subtitle: "artist",
    entity_type: "EntityTypeArtist",
    image_url:
      "https://media.insider.in/image/upload/c_crop,g_custom/v1771595261/bxq8tpp39kc7pzlg4bse.jpg",
    metadata: { slug: "dhayaa" },
  },
  {
    id: "1000086",
    display_title: "The Souled Store",
    display_subtitle: "store",
    entity_type: "EntityTypeStore",
    image_url: "https://b.zmtcdn.com//data/edition_assets/174073126869636.jpg",
    images: [
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=400&h=600&fit=crop", // tshirts
      "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=400&h=600&fit=crop", // casual wear
      "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=400&h=600&fit=crop", // clothing rack
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=400&h=600&fit=crop", // graphic tees
      "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=400&h=600&fit=crop", // apparel store
    ],
    metadata: {
      address: "Express Avenue Mall, Royapettah, Chennai",
      dist: "18.5",
      pay_config: "PayBill",
    },
  },
  {
    id: "200953",
    display_title: "Project Hail Mary",
    display_subtitle: "movie",
    entity_type: "EntityTypeMovie",
    image_url:
      "https://cdn.district.in/movies-assets/images/cinema/P%20Project-Hail-Mary-ac632240-77fb-11f0-bf18-ef07befd2b97.jpg",
    metadata: { format_id: "eTaRL9n_zJ", language: "English +1 more" },
  },
  {
    id: "69af16a61aa4c8b2a119ce19",
    display_title:
      "SongKran | Chennai's Biggest Water Festival in a Theme Park",
    display_subtitle: "event",
    entity_type: "EntityTypeEvent",
    image_url:
      "https://media.insider.in/image/upload/c_crop,g_custom/v1773213101/cegey5qjfjxyxihny9ms.jpg",
    metadata: {
      category: "Theme Parks",
      slug: "songkran-chennais-biggest-water-festival-in-a-theme-park-apr11-2026",
    },
  },
  {
    id: "21104441",
    display_title: "Kites",
    display_subtitle: "restaurant",
    entity_type: "EntityTypeRes",
    image_url:
      "https://b.zmtcdn.com/data/pictures/1/21104441/417c8a90f561508bf34837fc67fb4492.jpg",
    images: [
      "https://b.zmtcdn.com/data/pictures/1/21104441/417c8a90f561508bf34837fc67fb4492.jpg",
      "https://b.zmtcdn.com/data/pictures/7/18752937/f15f179083b8d904ad28841a90091806.jpg",
      "https://b.zmtcdn.com/data/pictures/3/20910053/fb1c2dd75e5da9a57fd045ce6bc7cecc.jpg",
      "https://b.zmtcdn.com/data/pictures/chains/5/20953065/e20f23bbbdb9971a4cfa1958afb8e03a.jpg",
      "https://b.zmtcdn.com/data/pictures/chains/2/21010042/e3206e31c35419f7e9f7fe33f5b0724a.jpg",
    ],
    metadata: { road_distance: "18.4", seo_url: "/chennai/kites-adyar" },
  },
  {
    id: "1008671",
    display_title: "Joyalukkas",
    display_subtitle: "store",
    entity_type: "EntityTypeStore",
    image_url: "https://b.zmtcdn.com//data/edition_assets/17527506941641.png",
    images: [
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=600&fit=crop", // jewellery
      "https://images.unsplash.com/photo-1601121141461-9d6647bef0a2?w=400&h=600&fit=crop", // gold necklace
      "https://images.unsplash.com/photo-1573408301185-9519f94815b1?w=400&h=600&fit=crop", // diamond ring
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=600&fit=crop", // bangles
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=600&fit=crop", // jewellery store
    ],
    metadata: {
      address: "Chromepet, Chennai",
      dist: "1.8",
      pay_config: "PayBill",
    },
  },
  {
    id: "212782",
    display_title: "Thaai Kizhavi",
    display_subtitle: "movie",
    entity_type: "EntityTypeMovie",
    image_url:
      "https://cdn.district.in/movies-assets/images/cinema/_Poster%20(8)-4487a990-11aa-11f1-b8e9-3913d9769fcc.jpg",
    metadata: { format_id: "VDfa8k7vHR", language: "Tamil" },
  },
  {
    id: "69b18a2042bf5f5afe4a5d33",
    display_title: "Screening of CSK vs PBKS - TATA IPL 2026",
    display_subtitle: "event",
    entity_type: "EntityTypeEvent",
    image_url:
      "https://media.insider.in/image/upload/c_crop,g_custom/v1773242820/eoirj7uoxjcvt361py0l.png",
    metadata: {
      category: "TV Screenings",
      slug: "screening-of-csk-vs-pbks-tata-ipl-2026-apr3-2026",
    },
  },
  {
    id: "20910053",
    display_title: "Pind Chromepet",
    display_subtitle: "restaurant",
    entity_type: "EntityTypeRes",
    image_url:
      "https://b.zmtcdn.com/data/pictures/3/20910053/fb1c2dd75e5da9a57fd045ce6bc7cecc.jpg",
    images: [
      "https://b.zmtcdn.com/data/pictures/3/20910053/fb1c2dd75e5da9a57fd045ce6bc7cecc.jpg",
      "https://b.zmtcdn.com/data/pictures/3/20910053/a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7.jpg",
      "https://b.zmtcdn.com/data/pictures/3/20910053/c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9.jpg",
      "https://b.zmtcdn.com/data/pictures/3/20910053/e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1.jpg",
      "https://b.zmtcdn.com/data/pictures/3/20910053/b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3.jpg",
    ],
    metadata: {
      road_distance: "5.3",
      seo_url: "/chennai/pind-chromepet-chromepet",
    },
  },
  {
    id: "1015016",
    display_title: "Wrogn",
    display_subtitle: "store",
    entity_type: "EntityTypeStore",
    image_url: "https://b.zmtcdn.com//data/edition_assets/17706219884364.png",
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=600&fit=crop", // men fashion
      "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=400&h=600&fit=crop", // casual shirts
      "https://images.unsplash.com/photo-1594938298603-c8148c4b4a44?w=400&h=600&fit=crop", // menswear
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&h=600&fit=crop", // street style
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&h=600&fit=crop", // fashion store
    ],
    metadata: { address: "Velachery", dist: "10.5", pay_config: "PayBill" },
  },
  {
    id: "214837",
    display_title: "Leader",
    display_subtitle: "movie",
    entity_type: "EntityTypeMovie",
    image_url:
      "https://cdn.district.in/movies-assets/images/cinema/Leader_Poster-4207eca0-2cbe-11f1-9e39-efcdb83019c6.jpg",
    metadata: { format_id: "F3FCqmdq8M", language: "Tamil" },
  },
  {
    id: "69a960e5e663f3e0f519f94f",
    display_title:
      "TATA IPL 2026: Match 13 | Rajasthan Royals vs Mumbai Indians",
    display_subtitle: "event",
    entity_type: "EntityTypeEvent",
    image_url:
      "https://media.insider.in/image/upload/c_crop,g_custom/v1774424714/zspkhwyubr7xguz7bpxf.jpg",
    metadata: {
      category: "Sports",
      slug: "tata-ipl-2026-match-13-rajasthan-royals-vs-mumbai-indians",
    },
  },
  {
    id: "21316959",
    display_title: "Macaw By Stories",
    display_subtitle: "restaurant",
    entity_type: "EntityTypeRes",
    image_url:
      "https://b.zmtcdn.com/data/pictures/chains/9/21316959/bb56f29ee344bd6ab362a6eef8c09ba6.jpg",
    images: [
      "https://b.zmtcdn.com/data/pictures/chains/9/21316959/bb56f29ee344bd6ab362a6eef8c09ba6.jpg",
      "https://b.zmtcdn.com/data/pictures/chains/5/20953065/e20f23bbbdb9971a4cfa1958afb8e03a.jpg",
      "https://b.zmtcdn.com/data/pictures/3/20852253/d85db1cd92f39cad2fc686b7c93e670d.jpg",
      "https://b.zmtcdn.com/data/pictures/chains/4/65484/b4ddfec42564e21ef0d330595334ba14.jpg",
      "https://b.zmtcdn.com/data/pictures/3/20910053/fb1c2dd75e5da9a57fd045ce6bc7cecc.jpg",
    ],
    metadata: {
      road_distance: "16.6",
      seo_url: "/chennai/macaw-by-stories-sholinganallur",
    },
  },
  {
    id: "1012445",
    display_title: "Skechers",
    display_subtitle: "store",
    entity_type: "EntityTypeStore",
    image_url: "https://b.zmtcdn.com//data/edition_assets/17562024963001.jpg",
    images: [
      "https://images.unsplash.com/photo-1539185441755-769473a23570?w=400&h=600&fit=crop", // sneakers
      "https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=400&h=600&fit=crop", // comfort shoes
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=400&h=600&fit=crop", // running shoes
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=400&h=600&fit=crop", // footwear
      "https://images.unsplash.com/photo-1543508282-6319a3e2621f?w=400&h=600&fit=crop", // shoe store
    ],
    metadata: {
      address: "Selaiyur, Chennai",
      dist: "4.8",
      pay_config: "ScanAndPay",
    },
  },
  {
    id: "203137",
    display_title: "Kaalidas 2",
    display_subtitle: "movie",
    entity_type: "EntityTypeMovie",
    image_url:
      "https://cdn.district.in/movies-assets/images/cinema/Kalidas-2_Poster-a49e5650-2b34-11f1-8c0c-ed167c06e8f9.jpg",
    metadata: { format_id: "2MzrBQQmjY", language: "Tamil" },
  },
  {
    id: "69b268f5ffb70f65f883a1ef",
    display_title: "TATA IPL 2026: Match 14 | Delhi Capitals vs Gujarat Titans",
    display_subtitle: "event",
    entity_type: "EntityTypeEvent",
    image_url:
      "https://media.insider.in/image/upload/c_crop,g_custom/v1774423321/ivihrv3hypwsaggjz4j9.jpg",
    metadata: {
      category: "Sports",
      slug: "tata-ipl-2026-match-14--delhi-capitals-vs-gujarat-titans",
    },
  },
  {
    id: "21010042",
    display_title: "Moon Man",
    display_subtitle: "restaurant",
    entity_type: "EntityTypeRes",
    image_url:
      "https://b.zmtcdn.com/data/pictures/chains/2/21010042/e3206e31c35419f7e9f7fe33f5b0724a.jpg",
    images: [
      "https://b.zmtcdn.com/data/pictures/chains/2/21010042/e3206e31c35419f7e9f7fe33f5b0724a.jpg",
      "https://b.zmtcdn.com/data/pictures/chains/2/21010042/a5b6c7d8e9f0a1b2c3d4e5f6a7b8c9d0.jpg",
      "https://b.zmtcdn.com/data/pictures/chains/2/21010042/c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2.jpg",
      "https://b.zmtcdn.com/data/pictures/chains/2/21010042/e9f0a1b2c3d4e5f6a7b8c9d0e1f2a3b4.jpg",
      "https://b.zmtcdn.com/data/pictures/chains/2/21010042/c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6.jpg",
    ],
    metadata: {
      road_distance: "20.1",
      seo_url: "/chennai/moon-man-besant-nagar",
    },
  },
  {
    id: "1009325",
    display_title: "adidas",
    display_subtitle: "store",
    entity_type: "EntityTypeStore",
    image_url: "https://b.zmtcdn.com//data/edition_assets/174765456406935.jpeg",
    images: [
      "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?w=400&h=600&fit=crop", // adidas shoes
      "https://images.unsplash.com/photo-1518002054494-3a6f94352e9d?w=400&h=600&fit=crop", // sports shoes
      "https://images.unsplash.com/photo-1616138394046-52e3f6e1e0cd?w=400&h=600&fit=crop", // sportswear
      "https://images.unsplash.com/photo-1556048219-bb6978360b84?w=400&h=600&fit=crop", // athletic wear
      "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=400&h=600&fit=crop", // sport store
    ],
    metadata: {
      address: "Selaiyur, Chennai",
      dist: "5.0",
      pay_config: "PayBill",
    },
  },
  {
    id: "214231",
    display_title: "Vaazha II: Biopic of a Billion Bros",
    display_subtitle: "movie",
    entity_type: "EntityTypeMovie",
    image_url:
      "https://cdn.district.in/movies-assets/images/cinema/Vaazha%202-43d71120-2c2b-11f1-a7d0-35090adde4d8.jpg",
    metadata: { format_id: "6fluImUDpwl", language: "Malayalam" },
  },
  {
    id: "697919fcf89c4f55645b9e67",
    display_title:
      "Sukoon: A Grand Sufi Concert - Rais Anis Sabri Live in Chennai",
    display_subtitle: "event",
    entity_type: "EntityTypeEvent",
    image_url:
      "https://media.insider.in/image/upload/c_crop,g_custom/v1774899229/zd6mzunflv0hdpqmaxqs.jpg",
    metadata: {
      category: "Music",
      slug: "sukoon-chennais-grand-sufi-concert-apr5-2026",
    },
  },
  {
    id: "18752937",
    display_title: "Barbeque Nation",
    display_subtitle: "restaurant",
    entity_type: "EntityTypeRes",
    image_url:
      "https://b.zmtcdn.com/data/pictures/7/18752937/f15f179083b8d904ad28841a90091806.jpg",
    images: [
      "https://b.zmtcdn.com/data/pictures/7/18752937/f15f179083b8d904ad28841a90091806.jpg",
      "https://b.zmtcdn.com/data/pictures/chains/2/21010042/e3206e31c35419f7e9f7fe33f5b0724a.jpg",
      "https://b.zmtcdn.com/data/pictures/chains/9/21316959/bb56f29ee344bd6ab362a6eef8c09ba6.jpg",
      "https://b.zmtcdn.com/data/pictures/3/20852253/d85db1cd92f39cad2fc686b7c93e670d.jpg",
      "https://b.zmtcdn.com/data/pictures/chains/5/20953065/e20f23bbbdb9971a4cfa1958afb8e03a.jpg",
    ],
    metadata: {
      road_distance: "4.0",
      seo_url: "/chennai/barbeque-nation-chromepet",
    },
  },
  {
    id: "1007431",
    display_title: "Bounce Salons",
    display_subtitle: "store",
    entity_type: "EntityTypeStore",
    image_url: "https://b.zmtcdn.com//data/edition_assets/17495521777531.avif",
    images: [
      "https://images.unsplash.com/photo-1582095133179-bfd08e2fb6b9?w=400&h=600&fit=crop", // salon
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&h=600&fit=crop", // hair cut
      "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=400&h=600&fit=crop", // hair styling
      "https://images.unsplash.com/photo-1523263685509-57c1d050d19b?w=400&h=600&fit=crop", // salon interior
      "https://images.unsplash.com/photo-1620331311520-246422fd82f9?w=400&h=600&fit=crop", // beauty salon
    ],
    metadata: {
      address: "Rajiv Gandhi Salai, Chennai",
      dist: "11.9",
      pay_config: "PayBill",
    },
  },
  {
    id: "206127",
    display_title: "The Super Mario Galaxy Movie",
    display_subtitle: "movie",
    entity_type: "EntityTypeMovie",
    image_url:
      "https://cdn.district.in/movies-assets/images/cinema/portrait%20(20)-97115df0-2a64-11f1-a444-5502f378ea93.jpg",
    metadata: { format_id: "r_kASn_n6z", language: "English" },
  },
  {
    id: "69c55491a88326cd1f04b44f",
    display_title: "BMW M DRIFT ACADEMY | CHENNAI",
    display_subtitle: "event",
    entity_type: "EntityTypeEvent",
    image_url:
      "https://media.insider.in/image/upload/c_crop,g_custom/v1774539774/ybcyt48ww5cpbs60z7n3.jpg",
    metadata: {
      category: "Workshops",
      slug: "bmw-m-drift-academy-chennai-2026",
    },
  },
  {
    id: "1011489",
    display_title: "Snitch",
    display_subtitle: "store",
    entity_type: "EntityTypeStore",
    image_url: "https://b.zmtcdn.com//data/edition_assets/17653476645621.png",
    images: [
      "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=400&h=600&fit=crop", // fashion
      "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=400&h=600&fit=crop", // men clothing
      "https://images.unsplash.com/photo-1578681994506-b8f463449011?w=400&h=600&fit=crop", // streetwear
      "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=400&h=600&fit=crop", // casual fashion
      "https://images.unsplash.com/photo-1561861422-a549073e547a?w=400&h=600&fit=crop", // clothing store
    ],
    metadata: {
      address: "Phoenix Market City, Velachery, Chennai",
      dist: "10.6",
      pay_config: "PayBill",
    },
  },
  {
    id: "208898",
    display_title: "Biker",
    display_subtitle: "movie",
    entity_type: "EntityTypeMovie",
    image_url:
      "https://cdn.district.in/movies-assets/images/cinema/Biker-4cab8cc0-29d5-11f1-b563-9d23ea210a10.jpg",
    metadata: { format_id: "4YvtpYPiFd", language: "Tamil +1 more" },
  },
  {
    id: "69b2e880c6989e2e619f1964",
    display_title: "Screening of RCB vs CSK | IPL 2026",
    display_subtitle: "event",
    entity_type: "EntityTypeEvent",
    image_url:
      "https://media.insider.in/image/upload/c_crop,g_custom/v1773332399/bs7abal9vgaaa2qaaobs.png",
    metadata: {
      category: "TV Screenings",
      slug: "screening-of-rcb-vs-csk-ipl-2026-apr5-2026",
    },
  },
  {
    id: "1002287",
    display_title: "Bodycraft Salon",
    display_subtitle: "store",
    entity_type: "EntityTypeStore",
    image_url: "https://b.zmtcdn.com//data/edition_assets/174144005660413.png",
    images: [
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&h=600&fit=crop", // facial
      "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400&h=600&fit=crop", // beauty treatment
      "https://images.unsplash.com/photo-1559599101-f09722fb4948?w=400&h=600&fit=crop", // spa
      "https://images.unsplash.com/photo-1626196340016-23efb44e6b53?w=400&h=600&fit=crop", // salon
      "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=400&h=600&fit=crop", // skincare
    ],
    metadata: {
      address: "Anna Nagar West, Chennai",
      dist: "16.2",
      pay_config: "PayBill",
    },
  },
  {
    id: "217190",
    display_title: "Satan - The Dark",
    display_subtitle: "movie",
    entity_type: "EntityTypeMovie",
    image_url:
      "https://cdn.district.in/movies-assets/images/cinema/Satan---The-Dark-s-5c2821b0-2145-11f1-9d94-bf8c6496c731.jpg",
    metadata: { format_id: "Zyd~3ZMKqf", language: "Tamil" },
  },
  {
    id: "69c4ffdaa3499f92e805c2cd",
    display_title: "Board Games Meetup - Chennai",
    display_subtitle: "event",
    entity_type: "EntityTypeEvent",
    image_url:
      "https://media.insider.in/image/upload/c_crop,g_custom/v1774518219/g33zwsn9l22ndzhod3ue.jpg",
    metadata: {
      category: "Social Mixers",
      slug: "board-games-meetup-chennai-apr4-2026",
    },
  },
  {
    id: "1008068",
    display_title: "Lakmē Salon",
    display_subtitle: "store",
    entity_type: "EntityTypeStore",
    image_url: "https://b.zmtcdn.com//data/edition_assets/17528215234191.jpg",
    images: [
      "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?w=400&h=600&fit=crop", // makeup
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=400&h=600&fit=crop", // beauty products
      "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?w=400&h=600&fit=crop", // lipstick
      "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=400&h=600&fit=crop", // salon chair
      "https://images.unsplash.com/photo-1607748862156-7c548e7e98f4?w=400&h=600&fit=crop", // lakme beauty
    ],
    metadata: {
      address: "Kilpauk, Chennai",
      dist: "18.6",
      pay_config: "PayBill",
    },
  },
  {
    id: "217217",
    display_title: "Neelira",
    display_subtitle: "movie",
    entity_type: "EntityTypeMovie",
    image_url:
      "https://cdn.district.in/movies-assets/images/cinema/Neelira-9acd1d80-2cc1-11f1-964a-c1e672ed4c9b.jpg",
    metadata: { format_id: "y9kxxHubK~", language: "Tamil" },
  },
  {
    id: "1000127",
    display_title: "Make Your Own Perfume (MYOP)",
    display_subtitle: "store",
    entity_type: "EntityTypeStore",
    image_url: "https://b.zmtcdn.com//data/edition_assets/174073198012815.jpg",
    images: [
      "https://images.unsplash.com/photo-1541643600914-78b084683702?w=400&h=600&fit=crop", // perfume bottle
      "https://images.unsplash.com/photo-1590156546523-39f599b3fef3?w=400&h=600&fit=crop", // fragrance
      "https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?w=400&h=600&fit=crop", // perfume making
      "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=400&h=600&fit=crop", // scent bottles
      "https://images.unsplash.com/photo-1547887537-6158d64c35b3?w=400&h=600&fit=crop", // perfume store
    ],
    metadata: {
      address: "Phoenix Market City, Velachery, Chennai",
      dist: "10.4",
      pay_config: "PayBill",
    },
  },
];

// export const searchPlaceholders: string[] = [

//   "Search for events,  movies,  restaurants...",
//   "Search for 'Hoppers'",
//   "Search for 'Verses and Voices'",
//   "Search for 'Michael Bibi'",
//   "Search for 'Pubs & Bars'",
//   "Search for 'South Indian Spots'",
//   "Search for 'Sushi'",
//   "Search for 'Cafes'",
//   "Search for 'Vegan Treats'",
//   "Search for 'Asian Restaurants'",
// ];

type Show = {
  time: string;
  screen: string;
};

export type Theatre = {
  id: number;
  name: string;
  location: string;
  distance: string;
  cancellable: boolean;
  image: string;
  alt: string;
  shows: Show[];
};

export const theatres: Theatre[] = [
  {
    id: 1,
    name: "Sangam Cinemas 4K RGB Laser Dolby Atmos",
    location: "Kilpauk, Chennai",
    distance: "18.8 km away",
    cancellable: false,
    image: "/sangamCinemas.jpg",
    alt: "Sangam Cinemas 4K RGB Laser Dolby Atmos",
    shows: [
      { time: "10:40 AM", screen: "D-LOUNGE 4K" },
      { time: "01:30 PM", screen: "D-LOUNGE 4K" },
      { time: "04:45 PM", screen: "RGB SCREEN" },
      { time: "07:30 PM", screen: "D-LOUNGE 4K" },
      { time: "10:40 PM", screen: "D-LOUNGE 4K" },
    ],
  },
  {
    id: 2,
    name: "Kamala Cinemas 4K RGB Laser Dolby",
    location: "Vadapalani, Chennai",
    distance: "13.4 km away",
    cancellable: true,
    image: "/kamalaCinemas.jpg",
    alt: "Kamala Cinemas 4K RGB Laser Dolby",
    shows: [
      { time: "11:00 AM", screen: "SCREEN 1" },
      { time: "02:15 PM", screen: "SCREEN 2" },
      { time: "05:30 PM", screen: "SCREEN 1" },
      { time: "08:45 PM", screen: "SCREEN 3" },
      { time: "11:55 PM", screen: "SCREEN 1" },
    ],
  },
  {
    id: 3,
    name: "Devi Cineplex",
    location: "Anna Salai, Chennai",
    distance: "19.6 km away",
    cancellable: false,
    image: "/deviCinemas.jpg",
    alt: "Devi Cineplex",
    shows: [
      { time: "10:30 AM", screen: "BALA" },
      { time: "01:45 PM", screen: "DEVI" },
      { time: "04:30 PM", screen: "BALA" },
      { time: "07:15 PM", screen: "DEVI" },
      { time: "10:45 PM", screen: "BALA" },
    ],
  },
  {
    id: 4,
    name: "Woodlands Complex",
    location: "Royapettah, Chennai",
    distance: "18.5 km away",
    cancellable: false,
    image: "/woodlandCinemas.jpg",
    alt: "Woodlands Complex",
    shows: [
      { time: "09:45 AM", screen: "SCREEN 1" },
      { time: "12:30 PM", screen: "SCREEN 2" },
      { time: "03:15 PM", screen: "SCREEN 1" },
      { time: "06:30 PM", screen: "SCREEN 2" },
      { time: "10:15 PM", screen: "SCREEN 1" },
    ],
  },
];

export const sangamCinemas = [
  {
    section: "Corporate",
    price: 170,
    prefix: "C",
    // Each row = 18 total slots
    rows: [
      {
        rowId: "CA",
        // 2 gaps + 16 seats = 18
        seats: [
          { id: "CA_gap1", type: "gap" },
          { id: "CA_gap2", type: "gap" },
          { id: "CA1", type: "seat" },
          { id: "CA2", type: "seat" },
          { id: "CA3", type: "seat" },
          { id: "CA4", type: "seat" },
          { id: "CA5", type: "seat" },
          { id: "CA6", type: "seat" },
          { id: "CA7", type: "seat" },
          { id: "CA8", type: "seat" },
          { id: "CA9", type: "seat" },
          { id: "CA10", type: "seat" },
          { id: "CA11", type: "seat" },
          { id: "CA12", type: "seat" },
          { id: "CA13", type: "seat" },
          { id: "CA14", type: "seat" },
          { id: "CA15", type: "seat" },
          { id: "CA16", type: "seat" },
        ],
      },
      {
        rowId: "CB",
        // 1 gap + 17 seats = 18
        seats: [
          { id: "CB1", type: "seat" },
          { id: "CB2", type: "seat" },
          { id: "CB3", type: "seat" },
          { id: "CB4", type: "seat" },
          { id: "CB5", type: "seat" },
          { id: "CB6", type: "seat" },
          { id: "CB7", type: "seat" },
          { id: "CB8", type: "seat" },
          { id: "CB_gap1", type: "gap" },
          { id: "CB9", type: "seat" },
          { id: "CB10", type: "seat" },
          { id: "CB11", type: "seat" },
          { id: "CB12", type: "seat" },
          { id: "CB13", type: "seat" },
          { id: "CB14", type: "seat" },
          { id: "CB15", type: "seat" },
          { id: "CB16", type: "seat" },
          { id: "CB17", type: "seat" },
        ],
      },
      {
        rowId: "CC",
        // 3 gaps + 15 seats = 18
        seats: [
          { id: "CC1", type: "seat" },
          { id: "CC2", type: "seat" },
          { id: "CC3", type: "seat" },
          { id: "CC4", type: "seat" },
          { id: "CC5", type: "seat" },
          { id: "CC_gap1", type: "gap" },
          { id: "CC6", type: "seat" },
          { id: "CC7", type: "seat" },
          { id: "CC8", type: "seat" },
          { id: "CC9", type: "seat" },
          { id: "CC10", type: "seat" },
          { id: "CC_gap2", type: "gap" },
          { id: "CC11", type: "seat" },
          { id: "CC12", type: "seat" },
          { id: "CC13", type: "seat" },
          { id: "CC14", type: "seat" },
          { id: "CC15", type: "seat" },
          { id: "CC_gap3", type: "gap" },
        ],
      },
      {
        rowId: "CD",
        // 2 gaps + 16 seats = 18
        seats: [
          { id: "CD1", type: "seat" },
          { id: "CD2", type: "seat" },
          { id: "CD3", type: "seat" },
          { id: "CD_gap1", type: "gap" },
          { id: "CD4", type: "seat" },
          { id: "CD5", type: "seat" },
          { id: "CD6", type: "seat" },
          { id: "CD7", type: "seat" },
          { id: "CD8", type: "seat" },
          { id: "CD9", type: "seat" },
          { id: "CD10", type: "seat" },
          { id: "CD11", type: "seat" },
          { id: "CD12", type: "seat" },
          { id: "CD_gap2", type: "gap" },
          { id: "CD13", type: "seat" },
          { id: "CD14", type: "seat" },
          { id: "CD15", type: "seat" },
          { id: "CD16", type: "seat" },
        ],
      },
      {
        rowId: "CE",
        // 4 gaps + 14 seats = 18
        seats: [
          { id: "CE_gap1", type: "gap" },
          { id: "CE1", type: "seat" },
          { id: "CE2", type: "seat" },
          { id: "CE3", type: "seat" },
          { id: "CE4", type: "seat" },
          { id: "CE_gap2", type: "gap" },
          { id: "CE5", type: "seat" },
          { id: "CE6", type: "seat" },
          { id: "CE7", type: "seat" },
          { id: "CE8", type: "seat" },
          { id: "CE_gap3", type: "gap" },
          { id: "CE9", type: "seat" },
          { id: "CE10", type: "seat" },
          { id: "CE11", type: "seat" },
          { id: "CE12", type: "seat" },
          { id: "CE_gap4", type: "gap" },
          { id: "CE13", type: "seat" },
          { id: "CE14", type: "seat" },
        ],
      },
    ],
  },
  {
    section: "Gold",
    price: 150,
    prefix: "G",
    // Each row = 18 total slots
    rows: [
      {
        rowId: "GA",
        // 3 gaps + 15 seats = 18
        seats: [
          { id: "GA_gap1", type: "gap" },
          { id: "GA_gap2", type: "gap" },
          { id: "GA1", type: "seat" },
          { id: "GA2", type: "seat" },
          { id: "GA3", type: "seat" },
          { id: "GA4", type: "seat" },
          { id: "GA5", type: "seat" },
          { id: "GA6", type: "seat" },
          { id: "GA7", type: "seat" },
          { id: "GA8", type: "seat" },
          { id: "GA_gap3", type: "gap" },
          { id: "GA9", type: "seat" },
          { id: "GA10", type: "seat" },
          { id: "GA11", type: "seat" },
          { id: "GA12", type: "seat" },
          { id: "GA13", type: "seat" },
          { id: "GA14", type: "seat" },
          { id: "GA15", type: "seat" },
        ],
      },
      {
        rowId: "GB",
        // 1 gap + 17 seats = 18
        seats: [
          { id: "GB1", type: "seat" },
          { id: "GB2", type: "seat" },
          { id: "GB3", type: "seat" },
          { id: "GB4", type: "seat" },
          { id: "GB5", type: "seat" },
          { id: "GB6", type: "seat" },
          { id: "GB7", type: "seat" },
          { id: "GB8", type: "seat" },
          { id: "GB9", type: "seat" },
          { id: "GB_gap1", type: "gap" },
          { id: "GB10", type: "seat" },
          { id: "GB11", type: "seat" },
          { id: "GB12", type: "seat" },
          { id: "GB13", type: "seat" },
          { id: "GB14", type: "seat" },
          { id: "GB15", type: "seat" },
          { id: "GB16", type: "seat" },
          { id: "GB17", type: "seat" },
        ],
      },
      {
        rowId: "GC",
        // 2 gaps + 16 seats = 18
        seats: [
          { id: "GC1", type: "seat" },
          { id: "GC2", type: "seat" },
          { id: "GC3", type: "seat" },
          { id: "GC4", type: "seat" },
          { id: "GC_gap1", type: "gap" },
          { id: "GC5", type: "seat" },
          { id: "GC6", type: "seat" },
          { id: "GC7", type: "seat" },
          { id: "GC8", type: "seat" },
          { id: "GC9", type: "seat" },
          { id: "GC10", type: "seat" },
          { id: "GC11", type: "seat" },
          { id: "GC12", type: "seat" },
          { id: "GC_gap2", type: "gap" },
          { id: "GC13", type: "seat" },
          { id: "GC14", type: "seat" },
          { id: "GC15", type: "seat" },
          { id: "GC16", type: "seat" },
        ],
      },
      {
        rowId: "GD",
        // 4 gaps + 14 seats = 18
        seats: [
          { id: "GD1", type: "seat" },
          { id: "GD2", type: "seat" },
          { id: "GD_gap1", type: "gap" },
          { id: "GD3", type: "seat" },
          { id: "GD4", type: "seat" },
          { id: "GD5", type: "seat" },
          { id: "GD6", type: "seat" },
          { id: "GD_gap2", type: "gap" },
          { id: "GD_gap3", type: "gap" },
          { id: "GD7", type: "seat" },
          { id: "GD8", type: "seat" },
          { id: "GD9", type: "seat" },
          { id: "GD10", type: "seat" },
          { id: "GD11", type: "seat" },
          { id: "GD12", type: "seat" },
          { id: "GD_gap4", type: "gap" },
          { id: "GD13", type: "seat" },
          { id: "GD14", type: "seat" },
        ],
      },
      {
        rowId: "GE",
        // 2 gaps + 16 seats = 18
        seats: [
          { id: "GE1", type: "seat" },
          { id: "GE2", type: "seat" },
          { id: "GE3", type: "seat" },
          { id: "GE4", type: "seat" },
          { id: "GE5", type: "seat" },
          { id: "GE6", type: "seat" },
          { id: "GE_gap1", type: "gap" },
          { id: "GE7", type: "seat" },
          { id: "GE8", type: "seat" },
          { id: "GE9", type: "seat" },
          { id: "GE10", type: "seat" },
          { id: "GE11", type: "seat" },
          { id: "GE12", type: "seat" },
          { id: "GE_gap2", type: "gap" },
          { id: "GE13", type: "seat" },
          { id: "GE14", type: "seat" },
          { id: "GE15", type: "seat" },
          { id: "GE16", type: "seat" },
        ],
      },
    ],
  },
  {
    section: "Exclusive",
    price: 200,
    prefix: "E",
    // Each row = 18 total slots
    rows: [
      {
        rowId: "EA",
        // 5 gaps + 13 seats = 18
        seats: [
          { id: "EA_gap1", type: "gap" },
          { id: "EA_gap2", type: "gap" },
          { id: "EA_gap3", type: "gap" },
          { id: "EA1", type: "seat" },
          { id: "EA2", type: "seat" },
          { id: "EA3", type: "seat" },
          { id: "EA4", type: "seat" },
          { id: "EA_gap4", type: "gap" },
          { id: "EA5", type: "seat" },
          { id: "EA6", type: "seat" },
          { id: "EA7", type: "seat" },
          { id: "EA8", type: "seat" },
          { id: "EA9", type: "seat" },
          { id: "EA10", type: "seat" },
          { id: "EA_gap5", type: "gap" },
          { id: "EA11", type: "seat" },
          { id: "EA12", type: "seat" },
          { id: "EA13", type: "seat" },
        ],
      },
      {
        rowId: "EB",
        // 2 gaps + 16 seats = 18
        seats: [
          { id: "EB1", type: "seat" },
          { id: "EB2", type: "seat" },
          { id: "EB3", type: "seat" },
          { id: "EB4", type: "seat" },
          { id: "EB5", type: "seat" },
          { id: "EB6", type: "seat" },
          { id: "EB7", type: "seat" },
          { id: "EB8", type: "seat" },
          { id: "EB_gap1", type: "gap" },
          { id: "EB9", type: "seat" },
          { id: "EB10", type: "seat" },
          { id: "EB11", type: "seat" },
          { id: "EB12", type: "seat" },
          { id: "EB13", type: "seat" },
          { id: "EB14", type: "seat" },
          { id: "EB15", type: "seat" },
          { id: "EB16", type: "seat" },
          { id: "EB_gap2", type: "gap" },
        ],
      },
      {
        rowId: "EC",
        // 3 gaps + 15 seats = 18
        seats: [
          { id: "EC1", type: "seat" },
          { id: "EC2", type: "seat" },
          { id: "EC3", type: "seat" },
          { id: "EC_gap1", type: "gap" },
          { id: "EC4", type: "seat" },
          { id: "EC5", type: "seat" },
          { id: "EC6", type: "seat" },
          { id: "EC7", type: "seat" },
          { id: "EC8", type: "seat" },
          { id: "EC_gap2", type: "gap" },
          { id: "EC9", type: "seat" },
          { id: "EC10", type: "seat" },
          { id: "EC11", type: "seat" },
          { id: "EC12", type: "seat" },
          { id: "EC13", type: "seat" },
          { id: "EC14", type: "seat" },
          { id: "EC15", type: "seat" },
          { id: "EC_gap3", type: "gap" },
        ],
      },
      {
        rowId: "ED",
        // 1 gap + 17 seats = 18
        seats: [
          { id: "ED1", type: "seat" },
          { id: "ED2", type: "seat" },
          { id: "ED3", type: "seat" },
          { id: "ED4", type: "seat" },
          { id: "ED5", type: "seat" },
          { id: "ED6", type: "seat" },
          { id: "ED_gap1", type: "gap" },
          { id: "ED7", type: "seat" },
          { id: "ED8", type: "seat" },
          { id: "ED9", type: "seat" },
          { id: "ED10", type: "seat" },
          { id: "ED11", type: "seat" },
          { id: "ED12", type: "seat" },
          { id: "ED13", type: "seat" },
          { id: "ED14", type: "seat" },
          { id: "ED15", type: "seat" },
          { id: "ED16", type: "seat" },
          { id: "ED17", type: "seat" },
        ],
      },
    ],
  },
  {
    section: "Budget",
    price: 120,
    prefix: "B",
    // Each row = 18 total slots
    rows: [
      {
        rowId: "BA",
        // 1 gap + 17 seats = 18
        seats: [
          { id: "BA_gap1", type: "gap" },
          { id: "BA1", type: "seat" },
          { id: "BA2", type: "seat" },
          { id: "BA3", type: "seat" },
          { id: "BA4", type: "seat" },
          { id: "BA5", type: "seat" },
          { id: "BA6", type: "seat" },
          { id: "BA7", type: "seat" },
          { id: "BA8", type: "seat" },
          { id: "BA9", type: "seat" },
          { id: "BA10", type: "seat" },
          { id: "BA11", type: "seat" },
          { id: "BA12", type: "seat" },
          { id: "BA13", type: "seat" },
          { id: "BA14", type: "seat" },
          { id: "BA15", type: "seat" },
          { id: "BA16", type: "seat" },
          { id: "BA17", type: "seat" },
        ],
      },
      {
        rowId: "BB",
        // 2 gaps + 16 seats = 18
        seats: [
          { id: "BB1", type: "seat" },
          { id: "BB2", type: "seat" },
          { id: "BB3", type: "seat" },
          { id: "BB4", type: "seat" },
          { id: "BB5", type: "seat" },
          { id: "BB6", type: "seat" },
          { id: "BB7", type: "seat" },
          { id: "BB8", type: "seat" },
          { id: "BB_gap1", type: "gap" },
          { id: "BB9", type: "seat" },
          { id: "BB10", type: "seat" },
          { id: "BB11", type: "seat" },
          { id: "BB12", type: "seat" },
          { id: "BB13", type: "seat" },
          { id: "BB14", type: "seat" },
          { id: "BB15", type: "seat" },
          { id: "BB16", type: "seat" },
          { id: "BB_gap2", type: "gap" },
        ],
      },
      {
        rowId: "BC",
        // 3 gaps + 15 seats = 18
        seats: [
          { id: "BC1", type: "seat" },
          { id: "BC2", type: "seat" },
          { id: "BC_gap1", type: "gap" },
          { id: "BC3", type: "seat" },
          { id: "BC4", type: "seat" },
          { id: "BC5", type: "seat" },
          { id: "BC6", type: "seat" },
          { id: "BC7", type: "seat" },
          { id: "BC8", type: "seat" },
          { id: "BC_gap2", type: "gap" },
          { id: "BC9", type: "seat" },
          { id: "BC10", type: "seat" },
          { id: "BC11", type: "seat" },
          { id: "BC12", type: "seat" },
          { id: "BC13", type: "seat" },
          { id: "BC14", type: "seat" },
          { id: "BC15", type: "seat" },
          { id: "BC_gap3", type: "gap" },
        ],
      },
      {
        rowId: "BD",
        // 4 gaps + 14 seats = 18
        seats: [
          { id: "BD_gap1", type: "gap" },
          { id: "BD1", type: "seat" },
          { id: "BD2", type: "seat" },
          { id: "BD3", type: "seat" },
          { id: "BD4", type: "seat" },
          { id: "BD_gap2", type: "gap" },
          { id: "BD5", type: "seat" },
          { id: "BD6", type: "seat" },
          { id: "BD7", type: "seat" },
          { id: "BD8", type: "seat" },
          { id: "BD_gap3", type: "gap" },
          { id: "BD9", type: "seat" },
          { id: "BD10", type: "seat" },
          { id: "BD11", type: "seat" },
          { id: "BD12", type: "seat" },
          { id: "BD_gap4", type: "gap" },
          { id: "BD13", type: "seat" },
          { id: "BD14", type: "seat" },
        ],
      },
      {
        rowId: "BE",
        // 0 gaps + 18 seats = 18
        seats: [
          { id: "BE1", type: "seat" },
          { id: "BE2", type: "seat" },
          { id: "BE3", type: "seat" },
          { id: "BE4", type: "seat" },
          { id: "BE5", type: "seat" },
          { id: "BE6", type: "seat" },
          { id: "BE7", type: "seat" },
          { id: "BE8", type: "seat" },
          { id: "BE9", type: "seat" },
          { id: "BE10", type: "seat" },
          { id: "BE11", type: "seat" },
          { id: "BE12", type: "seat" },
          { id: "BE13", type: "seat" },
          { id: "BE14", type: "seat" },
          { id: "BE15", type: "seat" },
          { id: "BE16", type: "seat" },
          { id: "BE17", type: "seat" },
          { id: "BE18", type: "seat" },
        ],
      },
    ],
  },
];

export const kamalaCinemas = [
  {
    section: "Exclusive",
    price: 200,
    prefix: "E",
    rows: [
      {
        rowId: "EA",
        seats: [
          { id: "EA1", type: "seat" },
          { id: "EA2", type: "seat" },
          { id: "EA_gap1", type: "gap" },
          { id: "EA_gap2", type: "gap" },
          { id: "EA3", type: "seat" },
          { id: "EA4", type: "seat" },
          { id: "EA5", type: "seat" },
          { id: "EA_gap3", type: "gap" },
          { id: "EA6", type: "seat" },
          { id: "EA7", type: "seat" },
          { id: "EA8", type: "seat" },
          { id: "EA9", type: "seat" },
          { id: "EA10", type: "seat" },
        ],
      },
      {
        rowId: "EB",
        seats: [
          { id: "EB1", type: "seat" },
          { id: "EB2", type: "seat" },
          { id: "EB3", type: "seat" },
          { id: "EB4", type: "seat" },
          { id: "EB5", type: "seat" },
          { id: "EB_gap1", type: "gap" },
          { id: "EB6", type: "seat" },
          { id: "EB7", type: "seat" },
          { id: "EB8", type: "seat" },
          { id: "EB9", type: "seat" },
          { id: "EB10", type: "seat" },
          { id: "EB11", type: "seat" },
          { id: "EB12", type: "seat" },
        ],
      },
      {
        rowId: "EC",
        seats: [
          { id: "EC1", type: "seat" },
          { id: "EC2", type: "seat" },
          { id: "EC3", type: "seat" },
          { id: "EC_gap1", type: "gap" },
          { id: "EC4", type: "seat" },
          { id: "EC5", type: "seat" },
          { id: "EC6", type: "seat" },
          { id: "EC7", type: "seat" },
          { id: "EC8", type: "seat" },
          { id: "EC_gap2", type: "gap" },
          { id: "EC_gap3", type: "gap" },
          { id: "EC9", type: "seat" },
          { id: "EC10", type: "seat" },
          { id: "EC11", type: "seat" },
        ],
      },
      {
        rowId: "ED",
        seats: [
          { id: "ED_gap1", type: "gap" },
          { id: "ED1", type: "seat" },
          { id: "ED2", type: "seat" },
          { id: "ED3", type: "seat" },
          { id: "ED4", type: "seat" },
          { id: "ED5", type: "seat" },
          { id: "ED6", type: "seat" },
          { id: "ED_gap2", type: "gap" },
          { id: "ED7", type: "seat" },
          { id: "ED8", type: "seat" },
          { id: "ED9", type: "seat" },
          { id: "ED10", type: "seat" },
          { id: "ED11", type: "seat" },
        ],
      },
    ],
  },
  {
    section: "Gold",
    price: 150,
    prefix: "G",
    rows: [
      {
        rowId: "GA",
        seats: [
          { id: "GA1", type: "seat" },
          { id: "GA2", type: "seat" },
          { id: "GA3", type: "seat" },
          { id: "GA4", type: "seat" },
          { id: "GA_gap1", type: "gap" },
          { id: "GA_gap2", type: "gap" },
          { id: "GA5", type: "seat" },
          { id: "GA6", type: "seat" },
          { id: "GA7", type: "seat" },
          { id: "GA8", type: "seat" },
          { id: "GA9", type: "seat" },
          { id: "GA10", type: "seat" },
          { id: "GA_gap3", type: "gap" },
          { id: "GA11", type: "seat" },
          { id: "GA12", type: "seat" },
        ],
      },
      {
        rowId: "GB",
        seats: [
          { id: "GB1", type: "seat" },
          { id: "GB2", type: "seat" },
          { id: "GB3", type: "seat" },
          { id: "GB4", type: "seat" },
          { id: "GB5", type: "seat" },
          { id: "GB_gap1", type: "gap" },
          { id: "GB6", type: "seat" },
          { id: "GB7", type: "seat" },
          { id: "GB8", type: "seat" },
          { id: "GB9", type: "seat" },
          { id: "GB_gap2", type: "gap" },
          { id: "GB10", type: "seat" },
          { id: "GB11", type: "seat" },
          { id: "GB12", type: "seat" },
          { id: "GB13", type: "seat" },
        ],
      },
      {
        rowId: "GC",
        seats: [
          { id: "GC_gap1", type: "gap" },
          { id: "GC_gap2", type: "gap" },
          { id: "GC1", type: "seat" },
          { id: "GC2", type: "seat" },
          { id: "GC3", type: "seat" },
          { id: "GC4", type: "seat" },
          { id: "GC5", type: "seat" },
          { id: "GC6", type: "seat" },
          { id: "GC_gap3", type: "gap" },
          { id: "GC7", type: "seat" },
          { id: "GC8", type: "seat" },
          { id: "GC9", type: "seat" },
          { id: "GC10", type: "seat" },
          { id: "GC11", type: "seat" },
        ],
      },
      {
        rowId: "GD",
        seats: [
          { id: "GD1", type: "seat" },
          { id: "GD2", type: "seat" },
          { id: "GD3", type: "seat" },
          { id: "GD_gap1", type: "gap" },
          { id: "GD4", type: "seat" },
          { id: "GD5", type: "seat" },
          { id: "GD6", type: "seat" },
          { id: "GD7", type: "seat" },
          { id: "GD8", type: "seat" },
          { id: "GD9", type: "seat" },
          { id: "GD10", type: "seat" },
          { id: "GD11", type: "seat" },
          { id: "GD12", type: "seat" },
          { id: "GD13", type: "seat" },
        ],
      },
      {
        rowId: "GE",
        seats: [
          { id: "GE1", type: "seat" },
          { id: "GE2", type: "seat" },
          { id: "GE_gap1", type: "gap" },
          { id: "GE3", type: "seat" },
          { id: "GE4", type: "seat" },
          { id: "GE5", type: "seat" },
          { id: "GE6", type: "seat" },
          { id: "GE7", type: "seat" },
          { id: "GE_gap2", type: "gap" },
          { id: "GE_gap3", type: "gap" },
          { id: "GE8", type: "seat" },
          { id: "GE9", type: "seat" },
          { id: "GE10", type: "seat" },
          { id: "GE11", type: "seat" },
          { id: "GE12", type: "seat" },
        ],
      },
    ],
  },
  {
    section: "Corporate",
    price: 170,
    prefix: "C",
    rows: [
      {
        rowId: "CA",
        seats: [
          { id: "CA1", type: "seat" },
          { id: "CA2", type: "seat" },
          { id: "CA3", type: "seat" },
          { id: "CA4", type: "seat" },
          { id: "CA5", type: "seat" },
          { id: "CA6", type: "seat" },
          { id: "CA_gap1", type: "gap" },
          { id: "CA_gap2", type: "gap" },
          { id: "CA7", type: "seat" },
          { id: "CA8", type: "seat" },
          { id: "CA9", type: "seat" },
          { id: "CA10", type: "seat" },
          { id: "CA11", type: "seat" },
          { id: "CA12", type: "seat" },
          { id: "CA13", type: "seat" },
        ],
      },
      {
        rowId: "CB",
        seats: [
          { id: "CB_gap1", type: "gap" },
          { id: "CB1", type: "seat" },
          { id: "CB2", type: "seat" },
          { id: "CB3", type: "seat" },
          { id: "CB4", type: "seat" },
          { id: "CB5", type: "seat" },
          { id: "CB6", type: "seat" },
          { id: "CB_gap2", type: "gap" },
          { id: "CB7", type: "seat" },
          { id: "CB8", type: "seat" },
          { id: "CB9", type: "seat" },
          { id: "CB10", type: "seat" },
          { id: "CB11", type: "seat" },
        ],
      },
      {
        rowId: "CC",
        seats: [
          { id: "CC1", type: "seat" },
          { id: "CC2", type: "seat" },
          { id: "CC3", type: "seat" },
          { id: "CC4", type: "seat" },
          { id: "CC_gap1", type: "gap" },
          { id: "CC5", type: "seat" },
          { id: "CC6", type: "seat" },
          { id: "CC7", type: "seat" },
          { id: "CC8", type: "seat" },
          { id: "CC9", type: "seat" },
          { id: "CC_gap2", type: "gap" },
          { id: "CC_gap3", type: "gap" },
          { id: "CC10", type: "seat" },
          { id: "CC11", type: "seat" },
          { id: "CC12", type: "seat" },
          { id: "CC13", type: "seat" },
        ],
      },
      {
        rowId: "CD",
        seats: [
          { id: "CD1", type: "seat" },
          { id: "CD2", type: "seat" },
          { id: "CD3", type: "seat" },
          { id: "CD4", type: "seat" },
          { id: "CD5", type: "seat" },
          { id: "CD_gap1", type: "gap" },
          { id: "CD6", type: "seat" },
          { id: "CD7", type: "seat" },
          { id: "CD8", type: "seat" },
          { id: "CD9", type: "seat" },
          { id: "CD10", type: "seat" },
          { id: "CD11", type: "seat" },
          { id: "CD12", type: "seat" },
          { id: "CD13", type: "seat" },
        ],
      },
      {
        rowId: "CE",
        seats: [
          { id: "CE1", type: "seat" },
          { id: "CE2", type: "seat" },
          { id: "CE3", type: "seat" },
          { id: "CE_gap1", type: "gap" },
          { id: "CE_gap2", type: "gap" },
          { id: "CE4", type: "seat" },
          { id: "CE5", type: "seat" },
          { id: "CE6", type: "seat" },
          { id: "CE7", type: "seat" },
          { id: "CE8", type: "seat" },
          { id: "CE9", type: "seat" },
          { id: "CE_gap3", type: "gap" },
          { id: "CE10", type: "seat" },
          { id: "CE11", type: "seat" },
          { id: "CE12", type: "seat" },
        ],
      },
    ],
  },
  {
    section: "Budget",
    price: 120,
    prefix: "B",
    rows: [
      {
        rowId: "BA",
        seats: [
          { id: "BA1", type: "seat" },
          { id: "BA2", type: "seat" },
          { id: "BA3", type: "seat" },
          { id: "BA_gap1", type: "gap" },
          { id: "BA4", type: "seat" },
          { id: "BA5", type: "seat" },
          { id: "BA6", type: "seat" },
          { id: "BA7", type: "seat" },
          { id: "BA8", type: "seat" },
          { id: "BA9", type: "seat" },
          { id: "BA10", type: "seat" },
          { id: "BA11", type: "seat" },
          { id: "BA12", type: "seat" },
          { id: "BA13", type: "seat" },
        ],
      },
      {
        rowId: "BB",
        seats: [
          { id: "BB1", type: "seat" },
          { id: "BB2", type: "seat" },
          { id: "BB3", type: "seat" },
          { id: "BB4", type: "seat" },
          { id: "BB5", type: "seat" },
          { id: "BB6", type: "seat" },
          { id: "BB7", type: "seat" },
          { id: "BB_gap1", type: "gap" },
          { id: "BB_gap2", type: "gap" },
          { id: "BB8", type: "seat" },
          { id: "BB9", type: "seat" },
          { id: "BB10", type: "seat" },
          { id: "BB11", type: "seat" },
          { id: "BB12", type: "seat" },
        ],
      },
      {
        rowId: "BC",
        seats: [
          { id: "BC_gap1", type: "gap" },
          { id: "BC_gap2", type: "gap" },
          { id: "BC1", type: "seat" },
          { id: "BC2", type: "seat" },
          { id: "BC3", type: "seat" },
          { id: "BC4", type: "seat" },
          { id: "BC5", type: "seat" },
          { id: "BC_gap3", type: "gap" },
          { id: "BC6", type: "seat" },
          { id: "BC7", type: "seat" },
          { id: "BC8", type: "seat" },
          { id: "BC9", type: "seat" },
          { id: "BC10", type: "seat" },
          { id: "BC11", type: "seat" },
        ],
      },
      {
        rowId: "BD",
        seats: [
          { id: "BD1", type: "seat" },
          { id: "BD2", type: "seat" },
          { id: "BD3", type: "seat" },
          { id: "BD4", type: "seat" },
          { id: "BD_gap1", type: "gap" },
          { id: "BD5", type: "seat" },
          { id: "BD6", type: "seat" },
          { id: "BD7", type: "seat" },
          { id: "BD8", type: "seat" },
          { id: "BD9", type: "seat" },
          { id: "BD10", type: "seat" },
          { id: "BD11", type: "seat" },
          { id: "BD12", type: "seat" },
          { id: "BD13", type: "seat" },
        ],
      },
      {
        rowId: "BE",
        seats: [
          { id: "BE1", type: "seat" },
          { id: "BE2", type: "seat" },
          { id: "BE3", type: "seat" },
          { id: "BE4", type: "seat" },
          { id: "BE5", type: "seat" },
          { id: "BE_gap1", type: "gap" },
          { id: "BE_gap2", type: "gap" },
          { id: "BE6", type: "seat" },
          { id: "BE7", type: "seat" },
          { id: "BE8", type: "seat" },
          { id: "BE9", type: "seat" },
          { id: "BE10", type: "seat" },
          { id: "BE11", type: "seat" },
          { id: "BE12", type: "seat" },
        ],
      },
    ],
  },
];

export const deviCinemas = [
  {
    section: "Exclusive",
    price: 200,
    prefix: "E",
    rows: [
      {
        rowId: "EA",
        seats: [
          { id: "EA_gap1", type: "gap" },
          { id: "EA_gap2", type: "gap" },
          { id: "EA1", type: "seat" },
          { id: "EA2", type: "seat" },
          { id: "EA3", type: "seat" },
          { id: "EA_gap3", type: "gap" },
          { id: "EA4", type: "seat" },
          { id: "EA5", type: "seat" },
          { id: "EA6", type: "seat" },
          { id: "EA7", type: "seat" },
          { id: "EA8", type: "seat" },
          { id: "EA9", type: "seat" },
        ],
      },
      {
        rowId: "EB",
        seats: [
          { id: "EB1", type: "seat" },
          { id: "EB2", type: "seat" },
          { id: "EB3", type: "seat" },
          { id: "EB4", type: "seat" },
          { id: "EB_gap1", type: "gap" },
          { id: "EB_gap2", type: "gap" },
          { id: "EB5", type: "seat" },
          { id: "EB6", type: "seat" },
          { id: "EB7", type: "seat" },
          { id: "EB8", type: "seat" },
          { id: "EB9", type: "seat" },
          { id: "EB10", type: "seat" },
          { id: "EB11", type: "seat" },
        ],
      },
      {
        rowId: "EC",
        seats: [
          { id: "EC1", type: "seat" },
          { id: "EC2", type: "seat" },
          { id: "EC3", type: "seat" },
          { id: "EC4", type: "seat" },
          { id: "EC5", type: "seat" },
          { id: "EC_gap1", type: "gap" },
          { id: "EC6", type: "seat" },
          { id: "EC7", type: "seat" },
          { id: "EC8", type: "seat" },
          { id: "EC_gap2", type: "gap" },
          { id: "EC9", type: "seat" },
          { id: "EC10", type: "seat" },
          { id: "EC11", type: "seat" },
          { id: "EC12", type: "seat" },
        ],
      },
      {
        rowId: "ED",
        seats: [
          { id: "ED1", type: "seat" },
          { id: "ED2", type: "seat" },
          { id: "ED3", type: "seat" },
          { id: "ED_gap1", type: "gap" },
          { id: "ED_gap2", type: "gap" },
          { id: "ED4", type: "seat" },
          { id: "ED5", type: "seat" },
          { id: "ED6", type: "seat" },
          { id: "ED7", type: "seat" },
          { id: "ED8", type: "seat" },
          { id: "ED9", type: "seat" },
          { id: "ED10", type: "seat" },
          { id: "ED11", type: "seat" },
          { id: "ED12", type: "seat" },
        ],
      },
    ],
  },
  {
    section: "Gold",
    price: 150,
    prefix: "G",
    rows: [
      {
        rowId: "GA",
        seats: [
          { id: "GA1", type: "seat" },
          { id: "GA2", type: "seat" },
          { id: "GA3", type: "seat" },
          { id: "GA4", type: "seat" },
          { id: "GA5", type: "seat" },
          { id: "GA6", type: "seat" },
          { id: "GA_gap1", type: "gap" },
          { id: "GA7", type: "seat" },
          { id: "GA8", type: "seat" },
          { id: "GA9", type: "seat" },
          { id: "GA10", type: "seat" },
          { id: "GA_gap2", type: "gap" },
          { id: "GA_gap3", type: "gap" },
          { id: "GA11", type: "seat" },
          { id: "GA12", type: "seat" },
          { id: "GA13", type: "seat" },
        ],
      },
      {
        rowId: "GB",
        seats: [
          { id: "GB_gap1", type: "gap" },
          { id: "GB1", type: "seat" },
          { id: "GB2", type: "seat" },
          { id: "GB3", type: "seat" },
          { id: "GB4", type: "seat" },
          { id: "GB5", type: "seat" },
          { id: "GB_gap2", type: "gap" },
          { id: "GB6", type: "seat" },
          { id: "GB7", type: "seat" },
          { id: "GB8", type: "seat" },
          { id: "GB9", type: "seat" },
          { id: "GB10", type: "seat" },
          { id: "GB11", type: "seat" },
          { id: "GB12", type: "seat" },
          { id: "GB13", type: "seat" },
        ],
      },
      {
        rowId: "GC",
        seats: [
          { id: "GC1", type: "seat" },
          { id: "GC2", type: "seat" },
          { id: "GC3", type: "seat" },
          { id: "GC_gap1", type: "gap" },
          { id: "GC_gap2", type: "gap" },
          { id: "GC4", type: "seat" },
          { id: "GC5", type: "seat" },
          { id: "GC6", type: "seat" },
          { id: "GC7", type: "seat" },
          { id: "GC8", type: "seat" },
          { id: "GC_gap3", type: "gap" },
          { id: "GC9", type: "seat" },
          { id: "GC10", type: "seat" },
          { id: "GC11", type: "seat" },
          { id: "GC12", type: "seat" },
        ],
      },
      {
        rowId: "GD",
        seats: [
          { id: "GD1", type: "seat" },
          { id: "GD2", type: "seat" },
          { id: "GD3", type: "seat" },
          { id: "GD4", type: "seat" },
          { id: "GD5", type: "seat" },
          { id: "GD6", type: "seat" },
          { id: "GD7", type: "seat" },
          { id: "GD_gap1", type: "gap" },
          { id: "GD8", type: "seat" },
          { id: "GD9", type: "seat" },
          { id: "GD10", type: "seat" },
          { id: "GD11", type: "seat" },
          { id: "GD12", type: "seat" },
          { id: "GD13", type: "seat" },
        ],
      },
      {
        rowId: "GE",
        seats: [
          { id: "GE1", type: "seat" },
          { id: "GE2", type: "seat" },
          { id: "GE_gap1", type: "gap" },
          { id: "GE_gap2", type: "gap" },
          { id: "GE3", type: "seat" },
          { id: "GE4", type: "seat" },
          { id: "GE5", type: "seat" },
          { id: "GE6", type: "seat" },
          { id: "GE7", type: "seat" },
          { id: "GE8", type: "seat" },
          { id: "GE_gap3", type: "gap" },
          { id: "GE9", type: "seat" },
          { id: "GE10", type: "seat" },
          { id: "GE11", type: "seat" },
          { id: "GE12", type: "seat" },
          { id: "GE13", type: "seat" },
        ],
      },
    ],
  },
  {
    section: "Corporate",
    price: 170,
    prefix: "C",
    rows: [
      {
        rowId: "CA",
        seats: [
          { id: "CA1", type: "seat" },
          { id: "CA2", type: "seat" },
          { id: "CA3", type: "seat" },
          { id: "CA4", type: "seat" },
          { id: "CA5", type: "seat" },
          { id: "CA_gap1", type: "gap" },
          { id: "CA_gap2", type: "gap" },
          { id: "CA6", type: "seat" },
          { id: "CA7", type: "seat" },
          { id: "CA8", type: "seat" },
          { id: "CA9", type: "seat" },
          { id: "CA10", type: "seat" },
          { id: "CA11", type: "seat" },
          { id: "CA12", type: "seat" },
          { id: "CA13", type: "seat" },
        ],
      },
      {
        rowId: "CB",
        seats: [
          { id: "CB1", type: "seat" },
          { id: "CB2", type: "seat" },
          { id: "CB3", type: "seat" },
          { id: "CB_gap1", type: "gap" },
          { id: "CB4", type: "seat" },
          { id: "CB5", type: "seat" },
          { id: "CB6", type: "seat" },
          { id: "CB7", type: "seat" },
          { id: "CB8", type: "seat" },
          { id: "CB9", type: "seat" },
          { id: "CB_gap2", type: "gap" },
          { id: "CB_gap3", type: "gap" },
          { id: "CB10", type: "seat" },
          { id: "CB11", type: "seat" },
          { id: "CB12", type: "seat" },
        ],
      },
      {
        rowId: "CC",
        seats: [
          { id: "CC_gap1", type: "gap" },
          { id: "CC1", type: "seat" },
          { id: "CC2", type: "seat" },
          { id: "CC3", type: "seat" },
          { id: "CC4", type: "seat" },
          { id: "CC5", type: "seat" },
          { id: "CC6", type: "seat" },
          { id: "CC7", type: "seat" },
          { id: "CC_gap2", type: "gap" },
          { id: "CC8", type: "seat" },
          { id: "CC9", type: "seat" },
          { id: "CC10", type: "seat" },
          { id: "CC11", type: "seat" },
          { id: "CC12", type: "seat" },
          { id: "CC13", type: "seat" },
        ],
      },
      {
        rowId: "CD",
        seats: [
          { id: "CD1", type: "seat" },
          { id: "CD2", type: "seat" },
          { id: "CD3", type: "seat" },
          { id: "CD4", type: "seat" },
          { id: "CD_gap1", type: "gap" },
          { id: "CD_gap2", type: "gap" },
          { id: "CD5", type: "seat" },
          { id: "CD6", type: "seat" },
          { id: "CD7", type: "seat" },
          { id: "CD8", type: "seat" },
          { id: "CD9", type: "seat" },
          { id: "CD10", type: "seat" },
          { id: "CD11", type: "seat" },
          { id: "CD12", type: "seat" },
        ],
      },
      {
        rowId: "CE",
        seats: [
          { id: "CE1", type: "seat" },
          { id: "CE2", type: "seat" },
          { id: "CE3", type: "seat" },
          { id: "CE4", type: "seat" },
          { id: "CE5", type: "seat" },
          { id: "CE6", type: "seat" },
          { id: "CE_gap1", type: "gap" },
          { id: "CE7", type: "seat" },
          { id: "CE8", type: "seat" },
          { id: "CE9", type: "seat" },
          { id: "CE10", type: "seat" },
          { id: "CE_gap2", type: "gap" },
          { id: "CE_gap3", type: "gap" },
          { id: "CE11", type: "seat" },
          { id: "CE12", type: "seat" },
        ],
      },
    ],
  },
  {
    section: "Budget",
    price: 120,
    prefix: "B",
    rows: [
      {
        rowId: "BA",
        seats: [
          { id: "BA1", type: "seat" },
          { id: "BA2", type: "seat" },
          { id: "BA_gap1", type: "gap" },
          { id: "BA3", type: "seat" },
          { id: "BA4", type: "seat" },
          { id: "BA5", type: "seat" },
          { id: "BA6", type: "seat" },
          { id: "BA7", type: "seat" },
          { id: "BA8", type: "seat" },
          { id: "BA_gap2", type: "gap" },
          { id: "BA_gap3", type: "gap" },
          { id: "BA9", type: "seat" },
          { id: "BA10", type: "seat" },
          { id: "BA11", type: "seat" },
          { id: "BA12", type: "seat" },
        ],
      },
      {
        rowId: "BB",
        seats: [
          { id: "BB_gap1", type: "gap" },
          { id: "BB_gap2", type: "gap" },
          { id: "BB1", type: "seat" },
          { id: "BB2", type: "seat" },
          { id: "BB3", type: "seat" },
          { id: "BB4", type: "seat" },
          { id: "BB5", type: "seat" },
          { id: "BB6", type: "seat" },
          { id: "BB_gap3", type: "gap" },
          { id: "BB7", type: "seat" },
          { id: "BB8", type: "seat" },
          { id: "BB9", type: "seat" },
          { id: "BB10", type: "seat" },
          { id: "BB11", type: "seat" },
          { id: "BB12", type: "seat" },
          { id: "BB13", type: "seat" },
        ],
      },
      {
        rowId: "BC",
        seats: [
          { id: "BC1", type: "seat" },
          { id: "BC2", type: "seat" },
          { id: "BC3", type: "seat" },
          { id: "BC4", type: "seat" },
          { id: "BC5", type: "seat" },
          { id: "BC_gap1", type: "gap" },
          { id: "BC_gap2", type: "gap" },
          { id: "BC6", type: "seat" },
          { id: "BC7", type: "seat" },
          { id: "BC8", type: "seat" },
          { id: "BC9", type: "seat" },
          { id: "BC10", type: "seat" },
          { id: "BC11", type: "seat" },
          { id: "BC12", type: "seat" },
        ],
      },
      {
        rowId: "BD",
        seats: [
          { id: "BD1", type: "seat" },
          { id: "BD2", type: "seat" },
          { id: "BD3", type: "seat" },
          { id: "BD_gap1", type: "gap" },
          { id: "BD4", type: "seat" },
          { id: "BD5", type: "seat" },
          { id: "BD6", type: "seat" },
          { id: "BD7", type: "seat" },
          { id: "BD8", type: "seat" },
          { id: "BD_gap2", type: "gap" },
          { id: "BD_gap3", type: "gap" },
          { id: "BD9", type: "seat" },
          { id: "BD10", type: "seat" },
          { id: "BD11", type: "seat" },
          { id: "BD12", type: "seat" },
          { id: "BD13", type: "seat" },
        ],
      },
      {
        rowId: "BE",
        seats: [
          { id: "BE1", type: "seat" },
          { id: "BE2", type: "seat" },
          { id: "BE3", type: "seat" },
          { id: "BE4", type: "seat" },
          { id: "BE5", type: "seat" },
          { id: "BE6", type: "seat" },
          { id: "BE7", type: "seat" },
          { id: "BE_gap1", type: "gap" },
          { id: "BE_gap2", type: "gap" },
          { id: "BE8", type: "seat" },
          { id: "BE9", type: "seat" },
          { id: "BE10", type: "seat" },
          { id: "BE11", type: "seat" },
          { id: "BE12", type: "seat" },
          { id: "BE13", type: "seat" },
        ],
      },
    ],
  },
];

export const infoCards = [
  {
    title: "About the place",
    description:
      "Discover a lively beer garden with authentic German beers and global flavors, perfect for a vibrant community vibe.",
    icon: "💎",
  },
  {
    title: "Must tries dishes and cuisines",
    description:
      "Savor the Pulled Pork Burger with BBQ sauce and spice fries, or try the Biergarten Deconstructed Black Forest Cake.",
    icon: "🍔",
  },
  {
    title: "Why people go",
    description:
      "Visit for the wide selection of German ales, communal seating that encourages socializing, and the lively atmosphere.",
    icon: "🍽️",
  },
  {
    title: "Legacy and reputation",
    description:
      "Check out Bangalore’s original Biergarten, a key spot in the city's craft beer scene!",
    icon: "👑",
  },
];

export const offers = [
  {
    id: 1,
    title: "FLAT 20% OFF",
    subtitle: "From 6:00 PM, today",
    extra: "10 slots left",
  },
  {
    id: 2,
    title: "FLAT 15% OFF",
    subtitle: "No booking required",
    extra: "Valid all day",
  },
  {
    id: 3,
    title: "FLAT 25% OFF",
    subtitle: "Lunch special (12 PM - 3 PM)",
    extra: "Limited time offer",
  },
  {
    id: 4,
    title: "FLAT 10% OFF",
    subtitle: "On first booking",
    extra: "New users only",
  },
  {
    id: 5,
    title: "FLAT 30% OFF",
    subtitle: "Weekend special",
    extra: "Only on Sat & Sun",
  },
];

export const menus = [
  {
    id: 1,
    image: "/menu1.jpg",
  },
  {
    id: 2,
    image: "/menu2.jpg",
  },
  {
    id: 3,
    image: "/menu3.jpg",
  },
];

export const features = [
  "Lunch",
  "Dinner",
  "Home delivery",
  "Wheelchair accessible",
  "Full bar available",
  "Step-free entry",
  "DJ",
  "Valet parking",
  "Parking available",
  "Stags allowed",
  "Work friendly",
  "Mall parking",
  "Party place",
  "Vegetarian friendly",
];

export const restaurantActions = ["Directions", "Share", "Call", "All outlets"];

export const signatureFeatures = [
  {
    id: 1,
    title: "Signature packages",
    description: "Curated menus & selections across the best spots in town",
    image:
      "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Peak hour booking",
    description: "Skip the queue - priority entry at top restaurants",
    image:
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "On-the-house",
    description: "Complimentary delights along with your favourite meals",
    image:
      "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=600&auto=format&fit=crop",
  },
];

export const offersData = [
  {
    id: 1,
    title: "Up to 50% OFF",
    description: "Get more for less on your dining bill",
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Buffets",
    description:
      "Indulge in incredible buffets - Book now, eat more, pay less!",
    image:
      "https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=600&auto=format&fit=crop",
  },
];


export type slidesType = {
  id:string,
  title:string,
  certificate:string,
  genres:string,
  description : string,
  bg:string
}
export const slides : slidesType[] = [
  {
    id: "212782",
    title: "Thaai Kizhavi",
    certificate: "U/A",
    genres: "Drama, Family",
    description:
      "Thaai Kizhavi is a heartwarming Tamil drama that explores the deep bond between a mother and her children, navigating the challenges of family, love, and sacrifice.",
    bg: "data:image/jpeg;base64,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",
  },
  {
    id: "211577",
    title: "Dhurandhar The Revenge",
    certificate: "A",
    genres: "Thriller, Action",
    description:
      "Dhurandhar The Revenge introduces Jaskirat Singh Rangi, tracing the chain of events that compel him to become Hamza Ali Mazari, and follows his rise as he operates deep inside Pakistan.",
    bg: "https://cdn.district.in/movies-assets/images/cinema/DD-ea86c5a0-1d31-11f1-96c9-4539b6d27dc7.jpg",
  },
  {
    id: "206127",
    title: "The Super Mario Galaxy Movie",
    certificate: "U",
    genres: "Animation, Adventure, Comedy",
    description:
      "Mario and his friends embark on a thrilling intergalactic adventure across the galaxy, facing new enemies and discovering the true power of friendship and courage.",
    bg: "https://upload.wikimedia.org/wikipedia/en/b/bf/The_Super_Mario_Galaxy_Movie_poster.jpeg?_=20260326003931",
  },
  {
    id: "203137",
    title: "Kaalidas 2",
    certificate: "U/A",
    genres: "Comedy, Drama",
    description:
      "The laugh-riot continues as Kaalidas returns with bigger misadventures, hilarious twists, and an entertaining story that keeps the audience hooked from start to finish.",
    bg: "https://cdn.district.in/movies-assets/images/cinema/Kalidas-2_Poster-a49e5650-2b34-11f1-8c0c-ed167c06e8f9.jpg",
  },
  {
    id: "208898",
    title: "Biker",
    certificate: "U/A",
    genres: "Action, Drama",
    description:
      "A fearless biker takes on dangerous roads and ruthless rivals, pushing the limits of speed and survival in this high-octane action thriller.",
    bg: "https://cdn.district.in/movies-assets/images/cinema/Biker-4cab8cc0-29d5-11f1-b563-9d23ea210a10.jpg",
  },
  {
    id: "214231",
    title: "Vaazha II: Biopic of a Billion Bros",
    certificate: "U/A",
    genres: "Biography, Comedy, Drama",
    description:
      "The hilarious and inspiring saga of ordinary brothers chasing extraordinary dreams continues, celebrating the spirit of friendship, ambition, and the uniquely Indian hustle.",
    bg: "https://cdn.district.in/movies-assets/images/cinema/Vaazha%202-43d71120-2c2b-11f1-a7d0-35090adde4d8.jpg",
  },
];

export const theatreMovies = [
  {
    id: "211577",
    title: "Dhurandhar The Revenge",
    certificate: "A",
    genres: "Thriller, Action",
    description:
      "An undercover Indian intelligence agent infiltrates Karachi's criminal syndicates, avenging the 26/11 attacks while confronting larger threats to the nation.",
    poster:
      "https://cdn.district.in/movies-assets/images/cinema/DD-ea86c5a0-1d31-11f1-96c9-4539b6d27dc7.jpg",
    bg: "https://cdn.district.in/movies-assets/images/cinema/DD-ea86c5a0-1d31-11f1-96c9-4539b6d27dc7.jpg",
  },
  {
    id: "213456",
    title: "Youth",
    certificate: "UA13+",
    genres: "Drama, Family",
    description:
      "A young man torn between his dreams and family responsibilities discovers the true meaning of growing up in this heartfelt Tamil drama.",
    poster:
      "https://cdn.district.in/movies-assets/images/cinema/Youth_Poster-3d17c4e0-2444-11f1-8704-ab6f874147b6.jpg",
    bg: "https://cdn.district.in/movies-assets/images/cinema/Youth_Poster-3d17c4e0-2444-11f1-8704-ab6f874147b6.jpg",
  },
  {
    id: "212079",
    title: "Happy Raj",
    certificate: "UA13+",
    genres: "Comedy, Drama",
    description:
      "A fun-filled Tamil entertainer following the misadventures of a carefree young man whose life turns upside down in the most hilarious ways.",
    poster:
      "https://cdn.district.in/movies-assets/images/cinema/Happy-Raj-6e933bf0-1871-11f1-a857-fd0378823a8e.jpg",
    bg: "https://cdn.district.in/movies-assets/images/cinema/Happy-Raj-6e933bf0-1871-11f1-a857-fd0378823a8e.jpg",
  },
  {
    id: "200953",
    title: "Project Hail Mary",
    certificate: "UA13+",
    genres: "Sci-Fi, Adventure",
    description:
      "A lone astronaut wakes up millions of miles from Earth with no memory, and must figure out how to save the planet from an extinction-level threat.",
    poster:
      "https://cdn.district.in/movies-assets/images/cinema/P%20Project-Hail-Mary-ac632240-77fb-11f0-bf18-ef07befd2b97.jpg",
    bg: "https://cdn.district.in/movies-assets/images/cinema/P%20Project-Hail-Mary-ac632240-77fb-11f0-bf18-ef07befd2b97.jpg",
  },
  {
    id: "212782",
    title: "Thaai Kizhavi",
    certificate: "UA13+",
    genres: "Drama, Family",
    description:
      "A heartwarming Tamil drama that explores the deep bond between a mother and her children, navigating the challenges of family, love, and sacrifice.",
    poster:
      "https://cdn.district.in/movies-assets/images/cinema/_Poster%20(8)-4487a990-11aa-11f1-b8e9-3913d9769fcc.jpg",
    bg: "https://cdn.district.in/movies-assets/images/cinema/_Poster%20(8)-4487a990-11aa-11f1-b8e9-3913d9769fcc.jpg",
  },
  {
    id: "203137",
    title: "Kaalidas 2",
    certificate: "UA13+",
    genres: "Comedy, Drama",
    description:
      "The laugh-riot continues as Kaalidas returns with bigger misadventures, hilarious twists, and an entertaining story that keeps the audience hooked.",
    poster:
      "https://cdn.district.in/movies-assets/images/cinema/Kalidas-2_Poster-a49e5650-2b34-11f1-8c0c-ed167c06e8f9.jpg",
    bg: "https://cdn.district.in/movies-assets/images/cinema/Kalidas-2_Poster-a49e5650-2b34-11f1-8c0c-ed167c06e8f9.jpg",
  },
  {
    id: "214231",
    title: "Vaazha II: Biopic of a Billion Bros",
    certificate: "UA13+",
    genres: "Biography, Comedy, Drama",
    description:
      "The hilarious and inspiring saga of ordinary brothers chasing extraordinary dreams continues, celebrating friendship and the uniquely Indian hustle.",
    poster:
      "https://cdn.district.in/movies-assets/images/cinema/Vaazha%202-43d71120-2c2b-11f1-a7d0-35090adde4d8.jpg",
    bg: "https://cdn.district.in/movies-assets/images/cinema/Vaazha%202-43d71120-2c2b-11f1-a7d0-35090adde4d8.jpg",
  },
  {
    id: "214837",
    title: "Leader",
    certificate: "UA13+",
    genres: "Action, Drama",
    description:
      "A powerful political drama following a young idealistic leader who fights against corruption and injustice to bring real change to the system.",
    poster:
      "https://cdn.district.in/movies-assets/images/cinema/Leader_Poster-4207eca0-2cbe-11f1-9e39-efcdb83019c6.jpg",
    bg: "https://cdn.district.in/movies-assets/images/cinema/Leader_Poster-4207eca0-2cbe-11f1-9e39-efcdb83019c6.jpg",
  },
  {
    id: "206127",
    title: "The Super Mario Galaxy Movie",
    certificate: "U",
    genres: "Animation, Adventure",
    description:
      "Mario and his friends embark on a thrilling intergalactic adventure across the galaxy, facing new enemies and discovering the true power of friendship.",
    poster:
      "https://cdn.district.in/movies-assets/images/cinema/portrait%20(20)-97115df0-2a64-11f1-a444-5502f378ea93.jpg",
    bg: "https://cdn.district.in/movies-assets/images/cinema/portrait%20(20)-97115df0-2a64-11f1-a444-5502f378ea93.jpg",
  },
  {
    id: "208898",
    title: "Biker",
    certificate: "UA13+",
    genres: "Action, Drama",
    description:
      "A fearless biker takes on dangerous roads and ruthless rivals, pushing the limits of speed and survival in this high-octane action thriller.",
    poster:
      "https://cdn.district.in/movies-assets/images/cinema/Biker-4cab8cc0-29d5-11f1-b563-9d23ea210a10.jpg",
    bg: "https://cdn.district.in/movies-assets/images/cinema/Biker-4cab8cc0-29d5-11f1-b563-9d23ea210a10.jpg",
  },
  {
    id: "217190",
    title: "Satan - The Dark",
    certificate: "UA13+",
    genres: "Horror, Thriller",
    description:
      "A spine-chilling Tamil horror thriller that follows a group drawn into a terrifying supernatural force lurking in the darkness around them.",
    poster:
      "https://cdn.district.in/movies-assets/images/cinema/Satan---The-Dark-s-5c2821b0-2145-11f1-9d94-bf8c6496c731.jpg",
    bg: "https://cdn.district.in/movies-assets/images/cinema/Satan---The-Dark-s-5c2821b0-2145-11f1-9d94-bf8c6496c731.jpg",
  },
  {
    id: "217217",
    title: "Neelira",
    certificate: "UA13+",
    genres: "Drama, Romance",
    description:
      "A beautiful Tamil romantic drama that explores love, loss, and the courage it takes to start over when life doesn't go as planned.",
    poster:
      "https://cdn.district.in/movies-assets/images/cinema/Neelira-9acd1d80-2cc1-11f1-964a-c1e672ed4c9b.jpg",
    bg: "https://cdn.district.in/movies-assets/images/cinema/Neelira-9acd1d80-2cc1-11f1-964a-c1e672ed4c9b.jpg",
  },
];

export const events = [
  {
    id: "693bb53f0266bdd14cc5c888",
    title:
      "Sitar for Mental Health by Rishab Rikhiram Sharma India Tour 2026 | Chennai",
    date: "Sat, 26 Apr",
    slots: "Gates open at 6 PM",
    venue: "Music Academy, Chennai",
    city: "Chennai",
    price: 999,
    category: "Music",
    image_url:
      "https://media.insider.in/image/upload/c_crop,g_custom/v1774529962/e0xernbflpjsdvzymuy6.jpg",
  },
  {
    id: "69b263560c701afeebd6ffe6",
    title: "TATA IPL 2026: Match 8 | Delhi Capitals vs Mumbai Indians",
    date: "Sun, 13 Apr",
    slots: "Match starts at 7:30 PM",
    venue: "Arun Jaitley Stadium, Delhi",
    city: "Delhi",
    price: 1499,
    category: "Sports",
    image_url:
      "https://media.insider.in/image/upload/c_crop,g_custom/v1774767256/iptyybuu86uoybiu3pea.jpg",
  },
  {
    id: "69c2bb088442088f36764e31",
    title:
      "TATA IPL 2026: Match 10 | Sunrisers Hyderabad vs Lucknow Super Giants",
    date: "Tue, 15 Apr",
    slots: "Match starts at 7:30 PM",
    venue: "Rajiv Gandhi International Stadium, Hyderabad",
    city: "Hyderabad",
    price: 1299,
    category: "Sports",
    image_url:
      "https://media.insider.in/image/upload/c_crop,g_custom/v1774426595/vwgcqia259g328dqkrae.jpg",
  },
  {
    id: "69af16a61aa4c8b2a119ce19",
    title: "SongKran | Chennai's Biggest Water Festival in a Theme Park",
    date: "Sat, 12 Apr",
    slots: "10 AM – 6 PM",
    venue: "MGM Dizzee World, Chennai",
    city: "Chennai",
    price: 799,
    category: "Theme Parks",
    image_url:
      "https://media.insider.in/image/upload/c_crop,g_custom/v1773213101/cegey5qjfjxyxihny9ms.jpg",
  },
  {
    id: "69b18a2042bf5f5afe4a5d33",
    title: "Screening of CSK vs PBKS - TATA IPL 2026",
    date: "Thu, 3 Apr",
    slots: "Match starts at 7:30 PM",
    venue: "Sports Bar, Anna Nagar, Chennai",
    city: "Chennai",
    price: 299,
    category: "TV Screenings",
    image_url:
      "https://media.insider.in/image/upload/c_crop,g_custom/v1773242820/eoirj7uoxjcvt361py0l.png",
  },
  {
    id: "69a960e5e663f3e0f519f94f",
    title: "TATA IPL 2026: Match 13 | Rajasthan Royals vs Mumbai Indians",
    date: "Fri, 18 Apr",
    slots: "Match starts at 7:30 PM",
    venue: "Sawai Mansingh Stadium, Jaipur",
    city: "Jaipur",
    price: 1399,
    category: "Sports",
    image_url:
      "https://media.insider.in/image/upload/c_crop,g_custom/v1774424714/zspkhwyubr7xguz7bpxf.jpg",
  },
  {
    id: "69b268f5ffb70f65f883a1ef",
    title: "TATA IPL 2026: Match 14 | Delhi Capitals vs Gujarat Titans",
    date: "Sat, 19 Apr",
    slots: "Match starts at 3:30 PM",
    venue: "Arun Jaitley Stadium, Delhi",
    city: "Delhi",
    price: 1499,
    category: "Sports",
    image_url:
      "https://media.insider.in/image/upload/c_crop,g_custom/v1774423321/ivihrv3hypwsaggjz4j9.jpg",
  },
  {
    id: "697919fcf89c4f55645b9e67",
    title: "Sukoon: A Grand Sufi Concert - Rais Anis Sabri Live in Chennai",
    date: "Sat, 5 Apr",
    slots: "Doors open at 6 PM",
    venue: "Sri Sathya Sai Auditorium, Chennai",
    city: "Chennai",
    price: 699,
    category: "Music",
    image_url:
      "https://media.insider.in/image/upload/c_crop,g_custom/v1774899229/zd6mzunflv0hdpqmaxqs.jpg",
  },
  {
    id: "69c55491a88326cd1f04b44f",
    title: "BMW M DRIFT ACADEMY | CHENNAI",
    date: "Sun, 27 Apr",
    slots: "9 AM – 5 PM",
    venue: "MMRT Circuit, Chennai",
    city: "Chennai",
    price: 4999,
    category: "Workshops",
    image_url:
      "https://media.insider.in/image/upload/c_crop,g_custom/v1774539774/ybcyt48ww5cpbs60z7n3.jpg",
  },
  {
    id: "69b2e880c6989e2e619f1964",
    title: "Screening of RCB vs CSK | IPL 2026",
    date: "Sat, 5 Apr",
    slots: "Match starts at 7:30 PM",
    venue: "The Permit Room, Indiranagar, Bengaluru",
    city: "Bengaluru",
    price: 399,
    category: "TV Screenings",
    image_url:
      "https://media.insider.in/image/upload/c_crop,g_custom/v1773332399/bs7abal9vgaaa2qaaobs.png",
  },
  {
    id: "69c4ffdaa3499f92e805c2cd",
    title: "Board Games Meetup - Chennai",
    date: "Fri, 4 Apr",
    slots: "6 PM – 10 PM",
    venue: "The Board Room Cafe, Nungambakkam, Chennai",
    city: "Chennai",
    price: 199,
    category: "Social Mixers",
    image_url:
      "https://media.insider.in/image/upload/c_crop,g_custom/v1774518219/g33zwsn9l22ndzhod3ue.jpg",
  },
];
export type categoryType = {
  id: string;
  title: string;
  image_url: string;
};

export const eventCategories: categoryType[] = [
  {
    id: "cat_music_01",
    title: "Music",
    image_url: "https://cdn-icons-png.flaticon.com/512/727/727218.png",
  },
  {
    id: "cat_nightlife_02",
    title: "Nightlife",
    image_url: "https://cdn-icons-png.flaticon.com/512/869/869636.png",
  },
  {
    id: "cat_comedy_03",
    title: "Comedy",
    image_url: "https://cdn-icons-png.flaticon.com/512/742/742751.png",
  },
  {
    id: "cat_sports_04",
    title: "Sports",
    image_url: "https://cdn-icons-png.flaticon.com/512/857/857455.png",
  },
  {
    id: "cat_performances_05",
    title: "Performances",
    image_url: "https://cdn-icons-png.flaticon.com/512/3103/3103446.png",
  },
  {
    id: "cat_food_06",
    title: "Food & Drinks",
    image_url: "https://cdn-icons-png.flaticon.com/512/1046/1046784.png",
  },

  {
    id: "cat_social_07",
    title: "Social Mixers",
    image_url: "https://cdn-icons-png.flaticon.com/512/1946/1946429.png",
  },
  {
    id: "cat_screenings_08",
    title: "Screenings",
    image_url: "https://cdn-icons-png.flaticon.com/512/833/833314.png",
  },
  {
    id: "cat_fitness_09",
    title: "Fitness",
    image_url: "https://cdn-icons-png.flaticon.com/512/2964/2964514.png",
  },
  {
    id: "cat_pets_10",
    title: "Pets",
    image_url: "https://cdn-icons-png.flaticon.com/512/616/616408.png",
  },
  {
    id: "cat_art_11",
    title: "Art Exhibitions",
    image_url: "https://cdn-icons-png.flaticon.com/512/1829/1829586.png",
  },
  {
    id: "cat_conferences_12",
    title: "Conferences",
    image_url: "https://cdn-icons-png.flaticon.com/512/3062/3062634.png",
  },
  {
    id: "cat_openmic_13",
    title: "Open Mics",
    image_url: "https://cdn-icons-png.flaticon.com/512/727/727245.png",
  },
];

export type EventType = {
  id: string;
  title: string;
  image_url: string;
  date: string;
  venue: string;
  price: number;
  category: string;
  slots?: string;
  city?: string;
  images?: string[];
};

export type CategoryType = {
  id: string;
  title: string;
  slug: string;
  events: EventType[];
};

export const eventEachCategoryData: CategoryType[] = [
  {
    id: "cat_music_01",
    title: "Music",
    slug: "music",
    events: [
      {
        id: "evt_mus_9f3a",
        title: "Invincia 2026",
        date: "Fri, 10 Apr, 9:30 AM",
        venue: "Presidency University, Bengaluru",
        price: 199,
        category: "Music",
        image_url:
          "https://media.insider.in/image/upload/c_crop,g_custom/v1774529962/e0xernbflpjsdvzymuy6.jpg",
      },
      {
        id: "evt_mus_2b7c",
        title: "Sunburn Arena ft. Martin Garrix",
        date: "Sat, 19 Apr, 4:00 PM",
        venue: "KTPO Trade Centre, Whitefield, Bengaluru",
        price: 1999,
        category: "Music",
        image_url:
          "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80",
      },
      {
        id: "evt_mus_7d1e",
        title: "Sitar for Mental Health by Rishab Rikhiram Sharma | Chennai",
        date: "Sat, 26 Apr, 6:00 PM",
        venue: "Music Academy, Chennai",
        price: 999,
        category: "Music",
        image_url:
          "https://media.insider.in/image/upload/c_crop,g_custom/v1774529962/e0xernbflpjsdvzymuy6.jpg",
      },
      {
        id: "evt_mus_4k8p",
        title: "Sukoon: A Grand Sufi Concert - Rais Anis Sabri Live",
        date: "Sat, 5 Apr, 6:00 PM",
        venue: "Sri Sathya Sai Auditorium, Chennai",
        price: 699,
        category: "Music",
        image_url:
          "https://media.insider.in/image/upload/c_crop,g_custom/v1774899229/zd6mzunflv0hdpqmaxqs.jpg",
      },
      {
        id: "evt_mus_5m2r",
        title: "Carnatic Music Evening: Sudha Raghunathan Live",
        date: "Fri, 11 Apr, 6:30 PM",
        venue: "Bangalore Gayana Samaja, Malleswaram",
        price: 800,
        category: "Music",
        image_url:
          "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=600&q=80",
      },
    ],
  },
  {
    id: "cat_nightlife_02",
    title: "Nightlife",
    slug: "nightlife",
    events: [
      {
        id: "evt_ngt_3x9z",
        title: "elrow India 2026 | Bengaluru",
        date: "Sat, 23 May, 3:00 PM",
        venue: "Venue to be announced, Bengaluru",
        price: 1770,
        category: "Nightlife",
        image_url:
          "https://images.unsplash.com/photo-1545128485-c400ce7b23d5?w=600&q=80",
      },
      {
        id: "evt_ngt_8p4w",
        title: "Jim Beam Jams | Best Enjoyed Together",
        date: "Sat, 12 Apr, 8:00 PM",
        venue: "Hard Rock Cafe, Indiranagar, Bengaluru",
        price: 599,
        category: "Nightlife",
        image_url:
          "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&q=80",
      },
      {
        id: "evt_ngt_2c6v",
        title: "Bengaluru Craft Beer Festival",
        date: "Fri, 18 Apr – Sat, 19 Apr, 12 PM",
        venue: "UB City Mall Courtyard, Bengaluru",
        price: 999,
        category: "Nightlife",
        image_url:
          "https://images.unsplash.com/photo-1436076863939-06870fe779c2?w=600&q=80",
      },
      {
        id: "evt_ngt_6h1q",
        title: "Saturday Night Rave | District",
        date: "Sat, 19 Apr, 9:00 PM",
        venue: "Club Octave, Koramangala, Bengaluru",
        price: 799,
        category: "Nightlife",
        image_url:
          "https://images.unsplash.com/photo-1574391884720-bbc3740c59d1?w=600&q=80",
      },
      {
        id: "evt_ngt_9j3t",
        title: "Neon Nights | Glow Party 2026",
        date: "Fri, 25 Apr, 9:00 PM",
        venue: "The Lalit Ashok, Bengaluru",
        price: 1299,
        category: "Nightlife",
        image_url:
          "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=600&q=80",
      },
    ],
  },
  {
    id: "cat_comedy_03",
    title: "Comedy",
    slug: "comedy",
    events: [
      {
        id: "evt_cmd_4r7n",
        title: "Comedy Nights with Zakir Khan",
        date: "Sat, 26 Apr, 7:00 PM",
        venue: "Chowdiah Memorial Hall, Bengaluru",
        price: 1499,
        category: "Comedy",
        image_url:
          "https://images.unsplash.com/photo-1527224538127-2104bb71c51b?w=600&q=80",
      },
      {
        id: "evt_cmd_1s5b",
        title: "Open Mic Madness ft. Rahul Subramanian",
        date: "Fri, 11 Apr, 7:30 PM",
        venue: "Canvas Laugh Club, Mumbai",
        price: 699,
        category: "Comedy",
        image_url:
          "https://images.unsplash.com/photo-1585699324551-f6c309eedeca?w=600&q=80",
      },
      {
        id: "evt_cmd_7m2k",
        title: "Stand Up Tamasha | Bengaluru Edition",
        date: "Sat, 19 Apr, 8:00 PM",
        venue: "The Comedy Store, Bengaluru",
        price: 499,
        category: "Comedy",
        image_url:
          "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&q=80",
      },
      {
        id: "evt_cmd_3d9f",
        title: "Biswa Kalyan Rath Live",
        date: "Sun, 20 Apr, 6:00 PM",
        venue: "Sonic Boom, Indiranagar, Bengaluru",
        price: 899,
        category: "Comedy",
        image_url:
          "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=600&q=80",
      },
      {
        id: "evt_cmd_5p8h",
        title: "Late Night Laughs | Open Mic",
        date: "Wed, 16 Apr, 8:30 PM",
        venue: "The Humming Tree, Indiranagar, Bengaluru",
        price: 300,
        category: "Comedy",
        image_url:
          "https://images.unsplash.com/photo-1522158637959-30385a09e0da?w=600&q=80",
      },
    ],
  },
  {
    id: "cat_sports_04",
    title: "Sports",
    slug: "sports",
    events: [
      {
        id: "evt_spt_6w3a",
        title: "TATA IPL 2026: Match 8 | Delhi Capitals vs Mumbai Indians",
        date: "Sun, 13 Apr, 7:30 PM",
        venue: "Arun Jaitley Stadium, Delhi",
        price: 1499,
        category: "Sports",
        image_url:
          "https://media.insider.in/image/upload/c_crop,g_custom/v1774767256/iptyybuu86uoybiu3pea.jpg",
      },
      {
        id: "evt_spt_2n7c",
        title:
          "TATA IPL 2026: Match 10 | Sunrisers Hyderabad vs Lucknow Super Giants",
        date: "Tue, 15 Apr, 7:30 PM",
        venue: "Rajiv Gandhi International Stadium, Hyderabad",
        price: 1299,
        category: "Sports",
        image_url:
          "https://media.insider.in/image/upload/c_crop,g_custom/v1774426595/vwgcqia259g328dqkrae.jpg",
      },
      {
        id: "evt_spt_8t1m",
        title: "TATA IPL 2026: Match 13 | Rajasthan Royals vs Mumbai Indians",
        date: "Fri, 18 Apr, 7:30 PM",
        venue: "Sawai Mansingh Stadium, Jaipur",
        price: 1399,
        category: "Sports",
        image_url:
          "https://media.insider.in/image/upload/c_crop,g_custom/v1774424714/zspkhwyubr7xguz7bpxf.jpg",
      },
      {
        id: "evt_spt_4k9p",
        title: "TATA IPL 2026: Match 14 | Delhi Capitals vs Gujarat Titans",
        date: "Sat, 19 Apr, 3:30 PM",
        venue: "Arun Jaitley Stadium, Delhi",
        price: 1499,
        category: "Sports",
        image_url:
          "https://media.insider.in/image/upload/c_crop,g_custom/v1774423321/ivihrv3hypwsaggjz4j9.jpg",
      },
      {
        id: "evt_spt_5r2q",
        title: "IPL Watch Party: RCB vs MI",
        date: "Sun, 20 Apr, 7:30 PM",
        venue: "Hard Rock Cafe, Indiranagar, Bengaluru",
        price: 599,
        category: "Sports",
        image_url:
          "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=600&q=80",
      },
    ],
  },
  {
    id: "cat_performances_05",
    title: "Performances",
    slug: "performances",
    events: [
      {
        id: "evt_prf_7b4x",
        title: "Mere Krishn | A Live Theatrical Performance",
        date: "Sat, 27 Jun – Sun, 28 Jun, Multiple slots",
        venue: "Prestige Centre for Performing Arts, Bengaluru",
        price: 3000,
        category: "Performances",
        image_url:
          "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=600&q=80",
      },
      {
        id: "evt_prf_2m9s",
        title: "Osho Jain Experience | Bengaluru | Raag Mehfil",
        date: "Sat, 18 Apr, 7:00 PM",
        venue: "Dr. B. R. Ambedkar Bhavan, Bengaluru",
        price: 499,
        category: "Performances",
        image_url:
          "https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?w=600&q=80",
      },
      {
        id: "evt_prf_5h1v",
        title: "Draupadi | A Dance Drama",
        date: "Fri, 25 Apr, 6:30 PM",
        venue: "Ravindra Kalakshetra, Bengaluru",
        price: 400,
        category: "Performances",
        image_url:
          "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?w=600&q=80",
      },
      {
        id: "evt_prf_9c3r",
        title: "Bangalore Literature Festival 2026",
        date: "Fri, 25 Apr – Sun, 27 Apr, 10 AM",
        venue: "Jayamahal Palace Hotel, Bengaluru",
        price: 500,
        category: "Performances",
        image_url:
          "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&q=80",
      },
      {
        id: "evt_prf_3z6w",
        title: "Kalakshetra Dance Festival 2026",
        date: "Sun, 27 Apr, 5:00 PM",
        venue: "Kalakshetra Foundation, Chennai",
        price: 350,
        category: "Performances",
        image_url:
          "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?w=600&q=80",
      },
    ],
  },
  {
    id: "cat_food_06",
    title: "Food & Drinks",
    slug: "food-drinks",
    events: [
      {
        id: "evt_fnd_8a2y",
        title: "Hosa Goa takes over The Persian Terrace",
        date: "Fri, 10 Apr – Sun, 12 Apr, Multiple slots",
        venue: "The Persian Terrace, Sheraton Grand Bangalore",
        price: 3540,
        category: "Food & Drinks",
        image_url:
          "https://images.unsplash.com/photo-1555244162-803834f70033?w=600&q=80",
      },
      {
        id: "evt_fnd_4p7k",
        title: "Bengaluru Craft Beer Festival",
        date: "Fri, 18 Apr – Sat, 19 Apr, 12 PM",
        venue: "UB City Mall Courtyard, Bengaluru",
        price: 999,
        category: "Food & Drinks",
        image_url:
          "https://images.unsplash.com/photo-1436076863939-06870fe779c2?w=600&q=80",
      },
      {
        id: "evt_fnd_1m5n",
        title: "Farmers Market & Organic Fest",
        date: "Sun, 20 Apr, 8 AM – 2 PM",
        venue: "Lalbagh Botanical Garden, Bengaluru",
        price: 0,
        category: "Food & Drinks",
        image_url:
          "https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=600&q=80",
      },
      {
        id: "evt_fnd_6r3t",
        title: "Chennai Food Carnival 2026",
        date: "Sat, 26 Apr, 11 AM – 9 PM",
        venue: "Island Grounds, Chennai",
        price: 199,
        category: "Food & Drinks",
        image_url:
          "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80",
      },
      {
        id: "evt_fnd_9d1b",
        title: "Kids Cooking Workshop",
        date: "Sat, 12 Apr, 10 AM – 1 PM",
        venue: "The Cooking Studio, Koramangala, Bengaluru",
        price: 1200,
        category: "Food & Drinks",
        image_url:
          "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=600&q=80",
      },
    ],
  },
  {
    id: "cat_social_07",
    title: "Social Mixers",
    slug: "social-mixers",
    events: [
      {
        id: "evt_smx_3f8c",
        title: "Board Games Meetup - Chennai",
        date: "Fri, 4 Apr, 6:00 PM – 10:00 PM",
        venue: "The Board Room Cafe, Nungambakkam, Chennai",
        price: 199,
        category: "Social Mixers",
        image_url:
          "https://media.insider.in/image/upload/c_crop,g_custom/v1774518219/g33zwsn9l22ndzhod3ue.jpg",
      },
      {
        id: "evt_smx_7w2p",
        title: "Startup Networking Night",
        date: "Thu, 17 Apr, 6 PM – 9 PM",
        venue: "91springboard, Koramangala, Bengaluru",
        price: 399,
        category: "Social Mixers",
        image_url:
          "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=600&q=80",
      },
      {
        id: "evt_smx_5k9m",
        title: "Singles Mixer | Speed Friending",
        date: "Sat, 19 Apr, 5:00 PM",
        venue: "Sotally Tober, Indiranagar, Bengaluru",
        price: 499,
        category: "Social Mixers",
        image_url:
          "https://images.unsplash.com/photo-1529543544282-ea669407fca3?w=600&q=80",
      },
      {
        id: "evt_smx_2b6r",
        title: "Language Exchange Meetup - Bengaluru",
        date: "Sun, 27 Apr, 4:00 PM",
        venue: "Dialogues Cafe, Koramangala, Bengaluru",
        price: 149,
        category: "Social Mixers",
        image_url:
          "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600&q=80",
      },
      {
        id: "evt_smx_8h4v",
        title: "Tech & Coffee | Morning Networking",
        date: "Sat, 12 Apr, 9:00 AM",
        venue: "WeWork Galaxy, Residency Road, Bengaluru",
        price: 299,
        category: "Social Mixers",
        image_url:
          "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80",
      },
    ],
  },
  {
    id: "cat_screenings_08",
    title: "Screenings",
    slug: "screenings",
    events: [
      {
        id: "evt_scr_4n7a",
        title: "Screening of CSK vs PBKS - TATA IPL 2026",
        date: "Thu, 3 Apr, 7:30 PM",
        venue: "Sports Bar, Anna Nagar, Chennai",
        price: 299,
        category: "Screenings",
        image_url:
          "https://media.insider.in/image/upload/c_crop,g_custom/v1773242820/eoirj7uoxjcvt361py0l.png",
      },
      {
        id: "evt_scr_9p2x",
        title: "Screening of RCB vs CSK | IPL 2026",
        date: "Sat, 5 Apr, 7:30 PM",
        venue: "The Permit Room, Indiranagar, Bengaluru",
        price: 399,
        category: "Screenings",
        image_url:
          "https://media.insider.in/image/upload/c_crop,g_custom/v1773332399/bs7abal9vgaaa2qaaobs.png",
      },
      {
        id: "evt_scr_6m1q",
        title: "Open Air Cinema | Jurassic Park",
        date: "Fri, 18 Apr, 7:00 PM",
        venue: "Orion Mall Rooftop, Bengaluru",
        price: 349,
        category: "Screenings",
        image_url:
          "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=600&q=80",
      },
      {
        id: "evt_scr_2c8w",
        title: "Tamil Cinema Night | Classics",
        date: "Sat, 19 Apr, 6:30 PM",
        venue: "Sathyam Cinemas, Chennai",
        price: 250,
        category: "Screenings",
        image_url:
          "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=600&q=80",
      },
      {
        id: "evt_scr_5r4b",
        title: "Indie Film Screening | Short Films Festival",
        date: "Sun, 27 Apr, 5:00 PM",
        venue: "Alliance Française, Bengaluru",
        price: 150,
        category: "Screenings",
        image_url:
          "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600&q=80",
      },
    ],
  },
  {
    id: "cat_fitness_09",
    title: "Fitness",
    slug: "fitness",
    events: [
      {
        id: "evt_fit_7z3d",
        title: "Yoga & Wellness Retreat",
        date: "Sun, 13 Apr, 6 AM – 12 PM",
        venue: "Cubbon Park, Central Lawn, Bengaluru",
        price: 799,
        category: "Fitness",
        image_url:
          "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&q=80",
      },
      {
        id: "evt_fit_3k8v",
        title: "Bollywood Dance Workshop",
        date: "Sat, 19 Apr, 4 PM – 7 PM",
        venue: "Nritya Mandala Academy, Jayanagar, Bengaluru",
        price: 699,
        category: "Fitness",
        image_url:
          "https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?w=600&q=80",
      },
      {
        id: "evt_fit_1p5r",
        title: "Marathon Training Camp | 5K & 10K",
        date: "Sun, 20 Apr, 5:30 AM",
        venue: "Kanteerava Stadium, Bengaluru",
        price: 499,
        category: "Fitness",
        image_url:
          "https://images.unsplash.com/photo-1571008887538-b36bb32f4571?w=600&q=80",
      },
      {
        id: "evt_fit_8m2n",
        title: "Zumba Fiesta | Outdoor Edition",
        date: "Sat, 12 Apr, 7:00 AM",
        venue: "Ulsoor Lake, Bengaluru",
        price: 399,
        category: "Fitness",
        image_url:
          "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&q=80",
      },
      {
        id: "evt_fit_4w9h",
        title: "BMW M Drift Academy | Chennai",
        date: "Sun, 27 Apr, 9 AM – 5 PM",
        venue: "MMRT Circuit, Chennai",
        price: 4999,
        category: "Fitness",
        image_url:
          "https://media.insider.in/image/upload/c_crop,g_custom/v1774539774/ybcyt48ww5cpbs60z7n3.jpg",
      },
    ],
  },
  {
    id: "cat_pets_10",
    title: "Pets",
    slug: "pets",
    events: [
      {
        id: "evt_pet_6a1c",
        title: "Paws & Play | Pet Adoption Fair",
        date: "Sun, 13 Apr, 10 AM – 4 PM",
        venue: "Cubbon Park, Bengaluru",
        price: 0,
        category: "Pets",
        image_url:
          "https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?w=600&q=80",
      },
      {
        id: "evt_pet_3r7m",
        title: "Dog Agility Championship 2026",
        date: "Sat, 19 Apr, 9:00 AM",
        venue: "CODISSIA Trade Fair Complex, Coimbatore",
        price: 299,
        category: "Pets",
        image_url:
          "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&q=80",
      },
      {
        id: "evt_pet_9b4k",
        title: "Pet Photography Workshop",
        date: "Sun, 20 Apr, 11:00 AM",
        venue: "Studio 21, Koramangala, Bengaluru",
        price: 999,
        category: "Pets",
        image_url:
          "https://images.unsplash.com/photo-1453227588063-bb302b62f50b?w=600&q=80",
      },
      {
        id: "evt_pet_5h2q",
        title: "Cat Cafe Pop-Up | Bangalore",
        date: "Sat, 26 Apr, 12 PM – 6 PM",
        venue: "Indiranagar, Bengaluru",
        price: 499,
        category: "Pets",
        image_url:
          "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&q=80",
      },
      {
        id: "evt_pet_2v6n",
        title: "Pet Nutrition Talk | Expert Session",
        date: "Fri, 11 Apr, 5:00 PM",
        venue: "Heads Up For Tails, Koramangala, Bengaluru",
        price: 199,
        category: "Pets",
        image_url:
          "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600&q=80",
      },
    ],
  },
  {
    id: "cat_art_11",
    title: "Art Exhibitions",
    slug: "art-exhibitions",
    events: [
      {
        id: "evt_art_8x3f",
        title: "Contemporary Art Exhibition: Threads of Time",
        date: "Sat, 12 Apr – Sun, 4 May, 11 AM – 8 PM",
        venue: "Gallery Sumukha, BTM Layout, Bengaluru",
        price: 200,
        category: "Art Exhibitions",
        image_url:
          "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&q=80",
      },
      {
        id: "evt_art_4p1w",
        title: "Photography Walk: Old Pete",
        date: "Sun, 27 Apr, 7 AM – 10 AM",
        venue: "Russell Market, Shivajinagar, Bengaluru",
        price: 499,
        category: "Art Exhibitions",
        image_url:
          "https://images.unsplash.com/photo-1452780212940-6f5c0d14d848?w=600&q=80",
      },
      {
        id: "evt_art_7m9b",
        title: "Watercolour Workshop | Beginners",
        date: "Sat, 19 Apr, 10 AM – 1 PM",
        venue: "Chitrakala Parishath, Bengaluru",
        price: 799,
        category: "Art Exhibitions",
        image_url:
          "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=600&q=80",
      },
      {
        id: "evt_art_2d5r",
        title: "Sculpture & Ceramics Fair 2026",
        date: "Fri, 25 Apr – Sun, 27 Apr, 10 AM – 7 PM",
        venue: "National Gallery of Modern Art, Bengaluru",
        price: 150,
        category: "Art Exhibitions",
        image_url:
          "https://images.unsplash.com/photo-1561839561-b13bcfe95249?w=600&q=80",
      },
      {
        id: "evt_art_6k4t",
        title: "Street Art Tour | Bengaluru Walls",
        date: "Sun, 13 Apr, 9:00 AM",
        venue: "Jayanagar 4th Block, Bengaluru",
        price: 349,
        category: "Art Exhibitions",
        image_url:
          "https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?w=600&q=80",
      },
    ],
  },
  {
    id: "cat_conferences_12",
    title: "Conferences",
    slug: "conferences",
    events: [
      {
        id: "evt_cnf_9w2a",
        title: "SongKran | Chennai's Biggest Water Festival",
        date: "Sat, 12 Apr, 10 AM – 6 PM",
        venue: "MGM Dizzee World, Chennai",
        price: 799,
        category: "Conferences",
        image_url:
          "https://media.insider.in/image/upload/c_crop,g_custom/v1773213101/cegey5qjfjxyxihny9ms.jpg",
      },
      {
        id: "evt_cnf_3b6p",
        title: "Tech Summit Bengaluru 2026",
        date: "Fri, 18 Apr, 9 AM – 6 PM",
        venue: "NIMHANS Convention Centre, Bengaluru",
        price: 1999,
        category: "Conferences",
        image_url:
          "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80",
      },
      {
        id: "evt_cnf_7h1m",
        title: "Startup India Summit 2026",
        date: "Sat, 19 Apr, 10 AM – 5 PM",
        venue: "Bangalore International Exhibition Centre",
        price: 2499,
        category: "Conferences",
        image_url:
          "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&q=80",
      },
      {
        id: "evt_cnf_5r4v",
        title: "Women in Tech | Bengaluru Chapter",
        date: "Thu, 17 Apr, 10 AM – 4 PM",
        venue: "Microsoft Office, Bengaluru",
        price: 499,
        category: "Conferences",
        image_url:
          "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=600&q=80",
      },
      {
        id: "evt_cnf_1n8k",
        title: "Design Matters Conference 2026",
        date: "Sun, 27 Apr, 9:30 AM",
        venue: "IISc Campus, Bengaluru",
        price: 1499,
        category: "Conferences",
        image_url:
          "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&q=80",
      },
    ],
  },
  {
    id: "cat_openmic_13",
    title: "Open Mics",
    slug: "open-mics",
    events: [
      {
        id: "evt_opm_4c7z",
        title: "Open Mic Night: Voices Unleashed",
        date: "Wed, 16 Apr, 7 PM – 10 PM",
        venue: "The Humming Tree, Indiranagar, Bengaluru",
        price: 300,
        category: "Open Mics",
        image_url:
          "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&q=80",
      },
      {
        id: "evt_opm_8v2s",
        title: "Mic Drop | Poetry & Spoken Word",
        date: "Fri, 18 Apr, 7:30 PM",
        venue: "Atta Galatta, Koramangala, Bengaluru",
        price: 199,
        category: "Open Mics",
        image_url:
          "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=600&q=80",
      },
      {
        id: "evt_opm_2r5n",
        title: "Chennai Open Mic | All Genres",
        date: "Sat, 19 Apr, 6:00 PM",
        venue: "Café Mocha, Nungambakkam, Chennai",
        price: 149,
        category: "Open Mics",
        image_url:
          "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&q=80",
      },
      {
        id: "evt_opm_6k9w",
        title: "Underground Open Mic | Indie Artists",
        date: "Thu, 24 Apr, 8:00 PM",
        venue: "Arbor Brewing Company, Bengaluru",
        price: 250,
        category: "Open Mics",
        image_url:
          "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=600&q=80",
      },
      {
        id: "evt_opm_3m1b",
        title: "First Timer's Open Mic | Bengaluru",
        date: "Sun, 27 Apr, 5:00 PM",
        venue: "Toit Brewpub, Indiranagar, Bengaluru",
        price: 199,
        category: "Open Mics",
        image_url:
          "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=600&q=80",
      },
    ],
  },
  {
    id: "event_slider_00",
    title: "eventSliderData",
    slug: "all",
    events: [
      {
        id: "693bb53f0266bdd14cc5c888",
        title:
          "Sitar for Mental Health by Rishab Rikhiram Sharma India Tour 2026 | Chennai",
        date: "Sat, 26 Apr",
        slots: "Gates open at 6 PM",
        venue: "Music Academy, Chennai",
        city: "Chennai",
        price: 999,
        category: "Music",
        image_url:
          "https://media.insider.in/image/upload/c_crop,g_custom/v1774529962/e0xernbflpjsdvzymuy6.jpg",
      },
      {
        id: "69b263560c701afeebd6ffe6",
        title: "TATA IPL 2026: Match 8 | Delhi Capitals vs Mumbai Indians",
        date: "Sun, 13 Apr",
        slots: "Match starts at 7:30 PM",
        venue: "Arun Jaitley Stadium, Delhi",
        city: "Delhi",
        price: 1499,
        category: "Sports",
        image_url:
          "https://media.insider.in/image/upload/c_crop,g_custom/v1774767256/iptyybuu86uoybiu3pea.jpg",
      },
      {
        id: "69c2bb088442088f36764e31",
        title:
          "TATA IPL 2026: Match 10 | Sunrisers Hyderabad vs Lucknow Super Giants",
        date: "Tue, 15 Apr",
        slots: "Match starts at 7:30 PM",
        venue: "Rajiv Gandhi International Stadium, Hyderabad",
        city: "Hyderabad",
        price: 1299,
        category: "Sports",
        image_url:
          "https://media.insider.in/image/upload/c_crop,g_custom/v1774426595/vwgcqia259g328dqkrae.jpg",
      },
      {
        id: "69af16a61aa4c8b2a119ce19",
        title: "SongKran | Chennai's Biggest Water Festival in a Theme Park",
        date: "Sat, 12 Apr",
        slots: "10 AM – 6 PM",
        venue: "MGM Dizzee World, Chennai",
        city: "Chennai",
        price: 799,
        category: "Theme Parks",
        image_url:
          "https://media.insider.in/image/upload/c_crop,g_custom/v1773213101/cegey5qjfjxyxihny9ms.jpg",
      },
      {
        id: "69b18a2042bf5f5afe4a5d33",
        title: "Screening of CSK vs PBKS - TATA IPL 2026",
        date: "Thu, 3 Apr",
        slots: "Match starts at 7:30 PM",
        venue: "Sports Bar, Anna Nagar, Chennai",
        city: "Chennai",
        price: 299,
        category: "TV Screenings",
        image_url:
          "https://media.insider.in/image/upload/c_crop,g_custom/v1773242820/eoirj7uoxjcvt361py0l.png",
      },
      {
        id: "69a960e5e663f3e0f519f94f",
        title: "TATA IPL 2026: Match 13 | Rajasthan Royals vs Mumbai Indians",
        date: "Fri, 18 Apr",
        slots: "Match starts at 7:30 PM",
        venue: "Sawai Mansingh Stadium, Jaipur",
        city: "Jaipur",
        price: 1399,
        category: "Sports",
        image_url:
          "https://media.insider.in/image/upload/c_crop,g_custom/v1774424714/zspkhwyubr7xguz7bpxf.jpg",
      },
      {
        id: "69b268f5ffb70f65f883a1ef",
        title: "TATA IPL 2026: Match 14 | Delhi Capitals vs Gujarat Titans",
        date: "Sat, 19 Apr",
        slots: "Match starts at 3:30 PM",
        venue: "Arun Jaitley Stadium, Delhi",
        city: "Delhi",
        price: 1499,
        category: "Sports",
        image_url:
          "https://media.insider.in/image/upload/c_crop,g_custom/v1774423321/ivihrv3hypwsaggjz4j9.jpg",
      },
      {
        id: "697919fcf89c4f55645b9e67",
        title: "Sukoon: A Grand Sufi Concert - Rais Anis Sabri Live in Chennai",
        date: "Sat, 5 Apr",
        slots: "Doors open at 6 PM",
        venue: "Sri Sathya Sai Auditorium, Chennai",
        city: "Chennai",
        price: 699,
        category: "Music",
        image_url:
          "https://media.insider.in/image/upload/c_crop,g_custom/v1774899229/zd6mzunflv0hdpqmaxqs.jpg",
      },
      {
        id: "69c55491a88326cd1f04b44f",
        title: "BMW M DRIFT ACADEMY | CHENNAI",
        date: "Sun, 27 Apr",
        slots: "9 AM – 5 PM",
        venue: "MMRT Circuit, Chennai",
        city: "Chennai",
        price: 4999,
        category: "Workshops",
        image_url:
          "https://media.insider.in/image/upload/c_crop,g_custom/v1774539774/ybcyt48ww5cpbs60z7n3.jpg",
      },
      {
        id: "69b2e880c6989e2e619f1964",
        title: "Screening of RCB vs CSK | IPL 2026",
        date: "Sat, 5 Apr",
        slots: "Match starts at 7:30 PM",
        venue: "The Permit Room, Indiranagar, Bengaluru",
        city: "Bengaluru",
        price: 399,
        category: "TV Screenings",
        image_url:
          "https://media.insider.in/image/upload/c_crop,g_custom/v1773332399/bs7abal9vgaaa2qaaobs.png",
      },
      {
        id: "69c4ffdaa3499f92e805c2cd",
        title: "Board Games Meetup - Chennai",
        date: "Fri, 4 Apr",
        slots: "6 PM – 10 PM",
        venue: "The Board Room Cafe, Nungambakkam, Chennai",
        city: "Chennai",
        price: 199,
        category: "Social Mixers",
        image_url:
          "https://media.insider.in/image/upload/c_crop,g_custom/v1774518219/g33zwsn9l22ndzhod3ue.jpg",
      },
    ],
  },
];

export const EventSingersData = [
  {
    id: 1,
    name: "Sid Sriram",
    image_url: "/Sid_Sriram.jpg",
  },
  {
    id: 2,
    name: "Anirudh Ravichander",
    image_url: "/Anirudh.jpg",
  },
  {
    id: 3,
    name: "Haricharan",
    image_url: "/Haricharan.jpg",
  },
  {
    id: 4,
    name: "Karthik",
    image_url: "/Karthik.jpg",
  },
  {
    id: 5,
    name: "Srinivas",
    image_url: "/Srinivas.jpg",
  },
  {
    id: 6,
    name: "Vijay Yesudas",
    image_url: "/Vijay_Yesudas.jpg",
  },
  {
    id: 7,
    name: "Hariharan",
    image_url: "/Hariharan.jpg",
  },
  {
    id: 8,
    name: "S. P. Balasubrahmanyam",
    image_url: "/SP_Balasubrahmanyam.jpg",
  },
  {
    id: 9,
    name: "Yuvan Shankar Raja",
    image_url: "/Yuvan_Shankar_Raja.jpg",
  },
  {
    id: 10,
    name: "D. Imman",
    image_url: "/D_Imman.jpg",
  },
  {
    id: 11,
    name: "G. V. Prakash Kumar",
    image_url: "/GV_Prakash_Kumar.jpg",
  },
  {
    id: 132,
    name: "Sean Roldan",
    image_url: "/Sean_Roldan.jpg",
  },
  {
    id: 13,
    name: "Harish Raghavendra",
    image_url: "/Harish_Raghavendra.jpg",
  },
];

export const eventTicketOffer = [
  {
    id: "OFF10",
    label: "10% OFF",
    description: "Flat 10% on all tickets",
    discount: 0.1,
  },
  {
    id: "OFF20",
    label: "20% OFF",
    description: "Flat 20% on premium events",
    discount: 0.2,
  },
  {
    id: "OFF15",
    label: "15% OFF",
    description: "Weekend special offer",
    discount: 0.15,
  },
];

export const iplTeamsData = [
  {
    id: 1,
    label: "CSK",
    image: "/csk_logo.jpg",
    fullform: "Chennai Super Kings",
  },
  {
    id: 2,
    label: "DC",
    image: "/dc_logo.jpg",
    fullform: "Delhi Capitals",
  },
  {
    id: 3,
    label: "PBKS",
    image: "/pbks_logo.jpg",
    fullform: "Punjab Kings",
  },
  {
    id: 4,
    label: "SRH",
    image: "/srh_logo.jpg",
    fullform: "Sunrises Hyderabad",
  },
  {
    id: 5,
    label: "RR",
    image: "/rr_logo.jpg",
    fullform: "Rajasthan Royals",
  },
];

interface Team {
  short: string;
  name: string;
  color: string;
  logo: string;
}

interface Venue {
  city: string;
  stadium: string;
  state: string;
}

export interface Match {
  matchNumber: number;
  date: string;
  day: string;
  time: string;
  team1: Team;
  team2: Team;
  venue: Venue;
  result: string | null;
}

export const iplMatches: Match[] = [
  {
    matchNumber: 1,
    date: "2026-03-28",
    day: "Saturday",
    time: "19:30",
    team1: {
      short: "RCB",
      name: "Royal Challengers Bengaluru",
      color: "#c60000",
      logo: "https://b.zmtcdn.com/data/edition_assets/177392584654917.png",
    },
    team2: {
      short: "SRH",
      name: "Sunrisers Hyderabad",
      color: "#f26522",
      logo: "https://b.zmtcdn.com/data/edition_assets/177392584654815.png",
    },
    venue: {
      city: "Bengaluru",
      stadium: "M. Chinnaswamy Stadium",
      state: "Karnataka",
    },
    result: "RCB won by 6 wickets",
  },
  {
    matchNumber: 2,
    date: "2026-03-29",
    day: "Sunday",
    time: "19:30",
    team1: {
      short: "MI",
      name: "Mumbai Indians",
      color: "#004ba0",
      logo: "https://b.zmtcdn.com/data/edition_assets/177392584654714.png",
    },
    team2: {
      short: "KKR",
      name: "Kolkata Knight Riders",
      color: "#3a225d",
      logo: "https://b.zmtcdn.com/data/edition_assets/177392584655020.png",
    },
    venue: {
      city: "Mumbai",
      stadium: "Wankhede Stadium",
      state: "Maharashtra",
    },
    result: "MI won by 6 wickets",
  },
  {
    matchNumber: 3,
    date: "2026-03-30",
    day: "Monday",
    time: "19:30",
    team1: {
      short: "RR",
      name: "Rajasthan Royals",
      color: "#254aa5",
      logo: "https://b.zmtcdn.com/data/edition_assets/177392584654411.png",
    },
    team2: {
      short: "CSK",
      name: "Chennai Super Kings",
      color: "#f9cd05",
      logo: "https://b.zmtcdn.com/data/edition_assets/177392584654613.png",
    },
    venue: {
      city: "Guwahati",
      stadium: "Barsapara Cricket Stadium",
      state: "Assam",
    },
    result: "RR won by 8 wickets",
  },
  {
    matchNumber: 4,
    date: "2026-03-31",
    day: "Tuesday",
    time: "19:30",
    team1: {
      short: "PBKS",
      name: "Punjab Kings",
      color: "#dc143c",
      logo: "https://b.zmtcdn.com/data/edition_assets/177392584654918.png",
    },
    team2: {
      short: "GT",
      name: "Gujarat Titans",
      color: "#1d3557",
      logo: "https://b.zmtcdn.com/data/edition_assets/177392584655019.png",
    },
    venue: {
      city: "New Chandigarh",
      stadium: "Maharaja Yadavindra Singh Int'l Stadium, Mullanpur",
      state: "Punjab",
    },
    result: "PBKS won by 3 wickets",
  },
  {
    matchNumber: 5,
    date: "2026-04-01",
    day: "Wednesday",
    time: "19:30",
    team1: {
      short: "LSG",
      name: "Lucknow Super Giants",
      color: "#a72b2a",
      logo: "https://b.zmtcdn.com/data/edition_assets/177392584655019.png",
    },
    team2: {
      short: "DC",
      name: "Delhi Capitals",
      color: "#0078bc",
      logo: "https://b.zmtcdn.com/data/edition_assets/177392584654612.png",
    },
    venue: {
      city: "Lucknow",
      stadium: "Ekana Cricket Stadium",
      state: "Uttar Pradesh",
    },
    result: "DC won by 6 wickets",
  },
  {
    matchNumber: 6,
    date: "2026-04-02",
    day: "Thursday",
    time: "19:30",
    team1: {
      short: "KKR",
      name: "Kolkata Knight Riders",
      color: "#3a225d",
      logo: "https://b.zmtcdn.com/data/edition_assets/177392584655020.png",
    },
    team2: {
      short: "SRH",
      name: "Sunrisers Hyderabad",
      color: "#f26522",
      logo: "https://b.zmtcdn.com/data/edition_assets/177392584654815.png",
    },
    venue: {
      city: "Kolkata",
      stadium: "Eden Gardens",
      state: "West Bengal",
    },
    result: "SRH won by 65 runs",
  },
  {
    matchNumber: 7,
    date: "2026-04-03",
    day: "Friday",
    time: "19:30",
    team1: {
      short: "CSK",
      name: "Chennai Super Kings",
      color: "#f9cd05",
      logo: "https://b.zmtcdn.com/data/edition_assets/177392584654613.png",
    },
    team2: {
      short: "PBKS",
      name: "Punjab Kings",
      color: "#dc143c",
      logo: "https://b.zmtcdn.com/data/edition_assets/177392584654918.png",
    },
    venue: {
      city: "Chennai",
      stadium: "MA Chidambaram Stadium",
      state: "Tamil Nadu",
    },
    result: "PBKS won by 5 wickets",
  },
  {
    matchNumber: 8,
    date: "2026-04-04",
    day: "Saturday",
    time: "15:30",
    team1: {
      short: "DC",
      name: "Delhi Capitals",
      color: "#0078bc",
      logo: "https://b.zmtcdn.com/data/edition_assets/177392584654612.png",
    },
    team2: {
      short: "MI",
      name: "Mumbai Indians",
      color: "#004ba0",
      logo: "https://b.zmtcdn.com/data/edition_assets/177392584654714.png",
    },
    venue: {
      city: "Delhi",
      stadium: "Arun Jaitley Stadium",
      state: "Delhi",
    },
    result: "DC won by 6 wickets",
  },
  {
    matchNumber: 9,
    date: "2026-04-04",
    day: "Saturday",
    time: "19:30",
    team1: {
      short: "GT",
      name: "Gujarat Titans",
      color: "#1d3557",
      logo: "https://b.zmtcdn.com/data/edition_assets/177392584655019.png",
    },
    team2: {
      short: "RR",
      name: "Rajasthan Royals",
      color: "#254aa5",
      logo: "https://b.zmtcdn.com/data/edition_assets/177392584654411.png",
    },
    venue: {
      city: "Ahmedabad",
      stadium: "Narendra Modi Stadium",
      state: "Gujarat",
    },
    result: "RR won by 6 runs",
  },
  {
    matchNumber: 10,
    date: "2026-04-05",
    day: "Sunday",
    time: "15:30",
    team1: {
      short: "SRH",
      name: "Sunrisers Hyderabad",
      color: "#f26522",
      logo: "https://b.zmtcdn.com/data/edition_assets/177392584654815.png",
    },
    team2: {
      short: "LSG",
      name: "Lucknow Super Giants",
      color: "#a72b2a",
      logo: "https://b.zmtcdn.com/data/edition_assets/177392584655019.png",
    },
    venue: {
      city: "Hyderabad",
      stadium: "Rajiv Gandhi Int'l Cricket Stadium",
      state: "Telangana",
    },
    result: "LSG won by 5 wickets",
  },
  {
    matchNumber: 11,
    date: "2026-04-05",
    day: "Sunday",
    time: "19:30",
    team1: {
      short: "RCB",
      name: "Royal Challengers Bengaluru",
      color: "#c60000",
      logo: "https://b.zmtcdn.com/data/edition_assets/177392584654917.png",
    },
    team2: {
      short: "CSK",
      name: "Chennai Super Kings",
      color: "#f9cd05",
      logo: "https://b.zmtcdn.com/data/edition_assets/177392584654613.png",
    },
    venue: {
      city: "Bengaluru",
      stadium: "M. Chinnaswamy Stadium",
      state: "Karnataka",
    },
    result: "RCB won by 43 runs",
  },
  {
    matchNumber: 12,
    date: "2026-04-06",
    day: "Monday",
    time: "19:30",
    team1: {
      short: "KKR",
      name: "Kolkata Knight Riders",
      color: "#3a225d",
      logo: "https://b.zmtcdn.com/data/edition_assets/177392584655020.png",
    },
    team2: {
      short: "PBKS",
      name: "Punjab Kings",
      color: "#dc143c",
      logo: "https://b.zmtcdn.com/data/edition_assets/177392584654918.png",
    },
    venue: {
      city: "Kolkata",
      stadium: "Eden Gardens",
      state: "West Bengal",
    },
    result: "Match abandoned (rain)",
  },
  {
    matchNumber: 13,
    date: "2026-04-07",
    day: "Tuesday",
    time: "19:30",
    team1: {
      short: "RR",
      name: "Rajasthan Royals",
      color: "#254aa5",
      logo: "https://b.zmtcdn.com/data/edition_assets/177392584654411.png",
    },
    team2: {
      short: "MI",
      name: "Mumbai Indians",
      color: "#004ba0",
      logo: "https://b.zmtcdn.com/data/edition_assets/177392584654714.png",
    },
    venue: {
      city: "Guwahati",
      stadium: "Barsapara Cricket Stadium",
      state: "Assam",
    },
    result: "RR won by 27 runs",
  },
  {
    matchNumber: 14,
    date: "2026-04-08",
    day: "Wednesday",
    time: "19:30",
    team1: {
      short: "DC",
      name: "Delhi Capitals",
      color: "#0078bc",
      logo: "https://b.zmtcdn.com/data/edition_assets/177392584654612.png",
    },
    team2: {
      short: "GT",
      name: "Gujarat Titans",
      color: "#1d3557",
      logo: "https://b.zmtcdn.com/data/edition_assets/177392584655019.png",
    },
    venue: {
      city: "Delhi",
      stadium: "Arun Jaitley Stadium",
      state: "Delhi",
    },
    result: "GT won by 1 run",
  },
  {
    matchNumber: 15,
    date: "2026-04-09",
    day: "Thursday",
    time: "19:30",
    team1: {
      short: "KKR",
      name: "Kolkata Knight Riders",
      color: "#3a225d",
      logo: "https://b.zmtcdn.com/data/edition_assets/177392584655020.png",
    },
    team2: {
      short: "LSG",
      name: "Lucknow Super Giants",
      color: "#a72b2a",
      logo: "https://b.zmtcdn.com/data/edition_assets/177392584655019.png",
    },
    venue: {
      city: "Kolkata",
      stadium: "Eden Gardens",
      state: "West Bengal",
    },
    result: "LSG won by 3 wickets",
  },
  {
    matchNumber: 16,
    date: "2026-04-10",
    day: "Friday",
    time: "19:30",
    team1: {
      short: "RR",
      name: "Rajasthan Royals",
      color: "#254aa5",
      logo: "https://b.zmtcdn.com/data/edition_assets/177392584654411.png",
    },
    team2: {
      short: "RCB",
      name: "Royal Challengers Bengaluru",
      color: "#c60000",
      logo: "https://b.zmtcdn.com/data/edition_assets/177392584654917.png",
    },
    venue: {
      city: "Guwahati",
      stadium: "Barsapara Cricket Stadium",
      state: "Assam",
    },
    result: "RR won by 6 wickets",
  },
  {
    matchNumber: 17,
    date: "2026-04-11",
    day: "Saturday",
    time: "15:30",
    team1: {
      short: "PBKS",
      name: "Punjab Kings",
      color: "#dc143c",
      logo: "https://b.zmtcdn.com/data/edition_assets/177392584654918.png",
    },
    team2: {
      short: "SRH",
      name: "Sunrisers Hyderabad",
      color: "#f26522",
      logo: "https://b.zmtcdn.com/data/edition_assets/177392584654815.png",
    },
    venue: {
      city: "New Chandigarh",
      stadium: "Maharaja Yadavindra Singh Int'l Stadium, Mullanpur",
      state: "Punjab",
    },
    result: "PBKS won by 6 wickets",
  },
  {
    matchNumber: 18,
    date: "2026-04-11",
    day: "Saturday",
    time: "19:30",
    team1: {
      short: "CSK",
      name: "Chennai Super Kings",
      color: "#f9cd05",
      logo: "https://b.zmtcdn.com/data/edition_assets/177392584654613.png",
    },
    team2: {
      short: "DC",
      name: "Delhi Capitals",
      color: "#0078bc",
      logo: "https://b.zmtcdn.com/data/edition_assets/177392584654612.png",
    },
    venue: {
      city: "Chennai",
      stadium: "MA Chidambaram Stadium",
      state: "Tamil Nadu",
    },
    result: "CSK won by 23 runs",
  },
  {
    matchNumber: 19,
    date: "2026-04-12",
    day: "Sunday",
    time: "15:30",
    team1: {
      short: "LSG",
      name: "Lucknow Super Giants",
      color: "#a72b2a",
      logo: "https://b.zmtcdn.com/data/edition_assets/177392584655019.png",
    },
    team2: {
      short: "GT",
      name: "Gujarat Titans",
      color: "#1d3557",
      logo: "https://b.zmtcdn.com/data/edition_assets/177392584655019.png",
    },
    venue: {
      city: "Lucknow",
      stadium: "Ekana Cricket Stadium",
      state: "Uttar Pradesh",
    },
    result: null,
  },
  {
    matchNumber: 20,
    date: "2026-04-12",
    day: "Sunday",
    time: "19:30",
    team1: {
      short: "MI",
      name: "Mumbai Indians",
      color: "#004ba0",
      logo: "https://b.zmtcdn.com/data/edition_assets/177392584654714.png",
    },
    team2: {
      short: "RCB",
      name: "Royal Challengers Bengaluru",
      color: "#c60000",
      logo: "https://b.zmtcdn.com/data/edition_assets/177392584654917.png",
    },
    venue: {
      city: "Mumbai",
      stadium: "Wankhede Stadium",
      state: "Maharashtra",
    },
    result: null,
  },
  {
    matchNumber: 21,
    date: "2026-04-13",
    day: "Monday",
    time: "19:30",
    team1: {
      short: "SRH",
      name: "Sunrisers Hyderabad",
      color: "#f26522",
      logo: "https://b.zmtcdn.com/data/edition_assets/177392584654815.png",
    },
    team2: {
      short: "RR",
      name: "Rajasthan Royals",
      color: "#254aa5",
      logo: "https://b.zmtcdn.com/data/edition_assets/177392584654411.png",
    },
    venue: {
      city: "Hyderabad",
      stadium: "Rajiv Gandhi Int'l Cricket Stadium",
      state: "Telangana",
    },
    result: null,
  },
  {
    matchNumber: 22,
    date: "2026-04-14",
    day: "Tuesday",
    time: "19:30",
    team1: {
      short: "CSK",
      name: "Chennai Super Kings",
      color: "#f9cd05",
      logo: "https://b.zmtcdn.com/data/edition_assets/177392584654613.png",
    },
    team2: {
      short: "KKR",
      name: "Kolkata Knight Riders",
      color: "#3a225d",
      logo: "https://b.zmtcdn.com/data/edition_assets/177392584655020.png",
    },
    venue: {
      city: "Chennai",
      stadium: "MA Chidambaram Stadium",
      state: "Tamil Nadu",
    },
    result: null,
  },
  {
    matchNumber: 23,
    date: "2026-04-15",
    day: "Wednesday",
    time: "19:30",
    team1: {
      short: "RCB",
      name: "Royal Challengers Bengaluru",
      color: "#c60000",
      logo: "https://b.zmtcdn.com/data/edition_assets/177392584654917.png",
    },
    team2: {
      short: "LSG",
      name: "Lucknow Super Giants",
      color: "#a72b2a",
      logo: "https://b.zmtcdn.com/data/edition_assets/177392584655019.png",
    },
    venue: {
      city: "Bengaluru",
      stadium: "M. Chinnaswamy Stadium",
      state: "Karnataka",
    },
    result: null,
  },
  {
    matchNumber: 24,
    date: "2026-04-16",
    day: "Thursday",
    time: "19:30",
    team1: {
      short: "MI",
      name: "Mumbai Indians",
      color: "#004ba0",
      logo: "https://b.zmtcdn.com/data/edition_assets/177392584654714.png",
    },
    team2: {
      short: "PBKS",
      name: "Punjab Kings",
      color: "#dc143c",
      logo: "https://b.zmtcdn.com/data/edition_assets/177392584654918.png",
    },
    venue: {
      city: "Mumbai",
      stadium: "Wankhede Stadium",
      state: "Maharashtra",
    },
    result: null,
  },
  {
    matchNumber: 25,
    date: "2026-04-17",
    day: "Friday",
    time: "19:30",
    team1: {
      short: "GT",
      name: "Gujarat Titans",
      color: "#1d3557",
      logo: "https://b.zmtcdn.com/data/edition_assets/177392584655019.png",
    },
    team2: {
      short: "KKR",
      name: "Kolkata Knight Riders",
      color: "#3a225d",
      logo: "https://b.zmtcdn.com/data/edition_assets/177392584655020.png",
    },
    venue: {
      city: "Ahmedabad",
      stadium: "Narendra Modi Stadium",
      state: "Gujarat",
    },
    result: null,
  },
  {
    matchNumber: 26,
    date: "2026-04-18",
    day: "Saturday",
    time: "15:30",
    team1: {
      short: "RCB",
      name: "Royal Challengers Bengaluru",
      color: "#c60000",
      logo: "https://b.zmtcdn.com/data/edition_assets/177392584654917.png",
    },
    team2: {
      short: "DC",
      name: "Delhi Capitals",
      color: "#0078bc",
      logo: "https://b.zmtcdn.com/data/edition_assets/177392584654612.png",
    },
    venue: {
      city: "Bengaluru",
      stadium: "M. Chinnaswamy Stadium",
      state: "Karnataka",
    },
    result: null,
  },
  {
    matchNumber: 27,
    date: "2026-04-18",
    day: "Saturday",
    time: "19:30",
    team1: {
      short: "SRH",
      name: "Sunrisers Hyderabad",
      color: "#f26522",
      logo: "https://b.zmtcdn.com/data/edition_assets/177392584654815.png",
    },
    team2: {
      short: "CSK",
      name: "Chennai Super Kings",
      color: "#f9cd05",
      logo: "https://b.zmtcdn.com/data/edition_assets/177392584654613.png",
    },
    venue: {
      city: "Hyderabad",
      stadium: "Rajiv Gandhi Int'l Cricket Stadium",
      state: "Telangana",
    },
    result: null,
  },
  {
    matchNumber: 28,
    date: "2026-04-19",
    day: "Sunday",
    time: "15:30",
    team1: {
      short: "KKR",
      name: "Kolkata Knight Riders",
      color: "#3a225d",
      logo: "https://b.zmtcdn.com/data/edition_assets/177392584655020.png",
    },
    team2: {
      short: "RR",
      name: "Rajasthan Royals",
      color: "#254aa5",
      logo: "https://b.zmtcdn.com/data/edition_assets/177392584654411.png",
    },
    venue: {
      city: "Kolkata",
      stadium: "Eden Gardens",
      state: "West Bengal",
    },
    result: null,
  },
  {
    matchNumber: 29,
    date: "2026-04-19",
    day: "Sunday",
    time: "19:30",
    team1: {
      short: "PBKS",
      name: "Punjab Kings",
      color: "#dc143c",
      logo: "https://b.zmtcdn.com/data/edition_assets/177392584654918.png",
    },
    team2: {
      short: "LSG",
      name: "Lucknow Super Giants",
      color: "#a72b2a",
      logo: "https://b.zmtcdn.com/data/edition_assets/177392584655019.png",
    },
    venue: {
      city: "New Chandigarh",
      stadium: "Maharaja Yadavindra Singh Int'l Stadium, Mullanpur",
      state: "Punjab",
    },
    result: null,
  },
  {
    matchNumber: 30,
    date: "2026-04-20",
    day: "Monday",
    time: "19:30",
    team1: {
      short: "GT",
      name: "Gujarat Titans",
      color: "#1d3557",
      logo: "https://b.zmtcdn.com/data/edition_assets/177392584655019.png",
    },
    team2: {
      short: "MI",
      name: "Mumbai Indians",
      color: "#004ba0",
      logo: "https://b.zmtcdn.com/data/edition_assets/177392584654714.png",
    },
    venue: {
      city: "Ahmedabad",
      stadium: "Narendra Modi Stadium",
      state: "Gujarat",
    },
    result: null,
  },
  {
    matchNumber: 31,
    date: "2026-04-21",
    day: "Tuesday",
    time: "19:30",
    team1: {
      short: "SRH",
      name: "Sunrisers Hyderabad",
      color: "#f26522",
      logo: "https://b.zmtcdn.com/data/edition_assets/177392584654815.png",
    },
    team2: {
      short: "DC",
      name: "Delhi Capitals",
      color: "#0078bc",
      logo: "https://b.zmtcdn.com/data/edition_assets/177392584654612.png",
    },
    venue: {
      city: "Hyderabad",
      stadium: "Rajiv Gandhi Int'l Cricket Stadium",
      state: "Telangana",
    },
    result: null,
  },
  {
    matchNumber: 32,
    date: "2026-04-22",
    day: "Wednesday",
    time: "19:30",
    team1: {
      short: "LSG",
      name: "Lucknow Super Giants",
      color: "#a72b2a",
      logo: "https://b.zmtcdn.com/data/edition_assets/177392584655019.png",
    },
    team2: {
      short: "RR",
      name: "Rajasthan Royals",
      color: "#254aa5",
      logo: "https://b.zmtcdn.com/data/edition_assets/177392584654411.png",
    },
    venue: {
      city: "Lucknow",
      stadium: "Ekana Cricket Stadium",
      state: "Uttar Pradesh",
    },
    result: null,
  },
  {
    matchNumber: 33,
    date: "2026-04-23",
    day: "Thursday",
    time: "19:30",
    team1: {
      short: "MI",
      name: "Mumbai Indians",
      color: "#004ba0",
      logo: "https://b.zmtcdn.com/data/edition_assets/177392584654714.png",
    },
    team2: {
      short: "CSK",
      name: "Chennai Super Kings",
      color: "#f9cd05",
      logo: "https://b.zmtcdn.com/data/edition_assets/177392584654613.png",
    },
    venue: {
      city: "Mumbai",
      stadium: "Wankhede Stadium",
      state: "Maharashtra",
    },
    result: null,
  },
  {
    matchNumber: 34,
    date: "2026-04-24",
    day: "Friday",
    time: "19:30",
    team1: {
      short: "RCB",
      name: "Royal Challengers Bengaluru",
      color: "#c60000",
      logo: "https://b.zmtcdn.com/data/edition_assets/177392584654917.png",
    },
    team2: {
      short: "GT",
      name: "Gujarat Titans",
      color: "#1d3557",
      logo: "https://b.zmtcdn.com/data/edition_assets/177392584655019.png",
    },
    venue: {
      city: "Bengaluru",
      stadium: "M. Chinnaswamy Stadium",
      state: "Karnataka",
    },
    result: null,
  },
  {
    matchNumber: 35,
    date: "2026-04-25",
    day: "Saturday",
    time: "15:30",
    team1: {
      short: "DC",
      name: "Delhi Capitals",
      color: "#0078bc",
      logo: "https://b.zmtcdn.com/data/edition_assets/177392584654612.png",
    },
    team2: {
      short: "PBKS",
      name: "Punjab Kings",
      color: "#dc143c",
      logo: "https://b.zmtcdn.com/data/edition_assets/177392584654918.png",
    },
    venue: {
      city: "Delhi",
      stadium: "Arun Jaitley Stadium",
      state: "Delhi",
    },
    result: null,
  },
  {
    matchNumber: 36,
    date: "2026-04-25",
    day: "Saturday",
    time: "19:30",
    team1: {
      short: "RR",
      name: "Rajasthan Royals",
      color: "#254aa5",
      logo: "https://b.zmtcdn.com/data/edition_assets/177392584654411.png",
    },
    team2: {
      short: "SRH",
      name: "Sunrisers Hyderabad",
      color: "#f26522",
      logo: "https://b.zmtcdn.com/data/edition_assets/177392584654815.png",
    },
    venue: {
      city: "Jaipur",
      stadium: "Sawai Mansingh Stadium",
      state: "Rajasthan",
    },
    result: null,
  },
  {
    matchNumber: 37,
    date: "2026-04-26",
    day: "Sunday",
    time: "15:30",
    team1: {
      short: "GT",
      name: "Gujarat Titans",
      color: "#1d3557",
      logo: "https://b.zmtcdn.com/data/edition_assets/177392584655019.png",
    },
    team2: {
      short: "CSK",
      name: "Chennai Super Kings",
      color: "#f9cd05",
      logo: "https://b.zmtcdn.com/data/edition_assets/177392584654613.png",
    },
    venue: {
      city: "Ahmedabad",
      stadium: "Narendra Modi Stadium",
      state: "Gujarat",
    },
    result: null,
  },
  {
    matchNumber: 38,
    date: "2026-04-26",
    day: "Sunday",
    time: "19:30",
    team1: {
      short: "LSG",
      name: "Lucknow Super Giants",
      color: "#a72b2a",
      logo: "https://b.zmtcdn.com/data/edition_assets/177392584655019.png",
    },
    team2: {
      short: "KKR",
      name: "Kolkata Knight Riders",
      color: "#3a225d",
      logo: "https://b.zmtcdn.com/data/edition_assets/177392584655020.png",
    },
    venue: {
      city: "Lucknow",
      stadium: "Ekana Cricket Stadium",
      state: "Uttar Pradesh",
    },
    result: null,
  },
  {
    matchNumber: 39,
    date: "2026-04-27",
    day: "Monday",
    time: "19:30",
    team1: {
      short: "DC",
      name: "Delhi Capitals",
      color: "#0078bc",
      logo: "https://b.zmtcdn.com/data/edition_assets/177392584654612.png",
    },
    team2: {
      short: "RCB",
      name: "Royal Challengers Bengaluru",
      color: "#c60000",
      logo: "https://b.zmtcdn.com/data/edition_assets/177392584654917.png",
    },
    venue: {
      city: "Delhi",
      stadium: "Arun Jaitley Stadium",
      state: "Delhi",
    },
    result: null,
  },
  {
    matchNumber: 40,
    date: "2026-04-28",
    day: "Tuesday",
    time: "19:30",
    team1: {
      short: "PBKS",
      name: "Punjab Kings",
      color: "#dc143c",
      logo: "https://b.zmtcdn.com/data/edition_assets/177392584654918.png",
    },
    team2: {
      short: "RR",
      name: "Rajasthan Royals",
      color: "#254aa5",
      logo: "https://b.zmtcdn.com/data/edition_assets/177392584654411.png",
    },
    venue: {
      city: "New Chandigarh",
      stadium: "Maharaja Yadavindra Singh Int'l Stadium, Mullanpur",
      state: "Punjab",
    },
    result: null,
  },
  {
    matchNumber: 41,
    date: "2026-04-29",
    day: "Wednesday",
    time: "19:30",
    team1: {
      short: "MI",
      name: "Mumbai Indians",
      color: "#004ba0",
      logo: "https://b.zmtcdn.com/data/edition_assets/177392584654714.png",
    },
    team2: {
      short: "SRH",
      name: "Sunrisers Hyderabad",
      color: "#f26522",
      logo: "https://b.zmtcdn.com/data/edition_assets/177392584654815.png",
    },
    venue: {
      city: "Mumbai",
      stadium: "Wankhede Stadium",
      state: "Maharashtra",
    },
    result: null,
  },
  {
    matchNumber: 42,
    date: "2026-04-30",
    day: "Thursday",
    time: "19:30",
    team1: {
      short: "GT",
      name: "Gujarat Titans",
      color: "#1d3557",
      logo: "https://b.zmtcdn.com/data/edition_assets/177392584655019.png",
    },
    team2: {
      short: "RCB",
      name: "Royal Challengers Bengaluru",
      color: "#c60000",
      logo: "https://b.zmtcdn.com/data/edition_assets/177392584654917.png",
    },
    venue: {
      city: "Ahmedabad",
      stadium: "Narendra Modi Stadium",
      state: "Gujarat",
    },
    result: null,
  },
  {
    matchNumber: 43,
    date: "2026-05-01",
    day: "Friday",
    time: "19:30",
    team1: {
      short: "RR",
      name: "Rajasthan Royals",
      color: "#254aa5",
      logo: "https://b.zmtcdn.com/data/edition_assets/177392584654411.png",
    },
    team2: {
      short: "DC",
      name: "Delhi Capitals",
      color: "#0078bc",
      logo: "https://b.zmtcdn.com/data/edition_assets/177392584654612.png",
    },
    venue: {
      city: "Jaipur",
      stadium: "Sawai Mansingh Stadium",
      state: "Rajasthan",
    },
    result: null,
  },
  {
    matchNumber: 44,
    date: "2026-05-02",
    day: "Saturday",
    time: "19:30",
    team1: {
      short: "CSK",
      name: "Chennai Super Kings",
      color: "#f9cd05",
      logo: "https://b.zmtcdn.com/data/edition_assets/177392584654613.png",
    },
    team2: {
      short: "MI",
      name: "Mumbai Indians",
      color: "#004ba0",
      logo: "https://b.zmtcdn.com/data/edition_assets/177392584654714.png",
    },
    venue: {
      city: "Chennai",
      stadium: "MA Chidambaram Stadium",
      state: "Tamil Nadu",
    },
    result: null,
  },
  {
    matchNumber: 45,
    date: "2026-05-03",
    day: "Sunday",
    time: "15:30",
    team1: {
      short: "SRH",
      name: "Sunrisers Hyderabad",
      color: "#f26522",
      logo: "https://b.zmtcdn.com/data/edition_assets/177392584654815.png",
    },
    team2: {
      short: "KKR",
      name: "Kolkata Knight Riders",
      color: "#3a225d",
      logo: "https://b.zmtcdn.com/data/edition_assets/177392584655020.png",
    },
    venue: {
      city: "Hyderabad",
      stadium: "Rajiv Gandhi Int'l Cricket Stadium",
      state: "Telangana",
    },
    result: null,
  },
  {
    matchNumber: 46,
    date: "2026-05-03",
    day: "Sunday",
    time: "19:30",
    team1: {
      short: "GT",
      name: "Gujarat Titans",
      color: "#1d3557",
      logo: "https://b.zmtcdn.com/data/edition_assets/177392584655019.png",
    },
    team2: {
      short: "PBKS",
      name: "Punjab Kings",
      color: "#dc143c",
      logo: "https://b.zmtcdn.com/data/edition_assets/177392584654918.png",
    },
    venue: {
      city: "Ahmedabad",
      stadium: "Narendra Modi Stadium",
      state: "Gujarat",
    },
    result: null,
  },
  {
    matchNumber: 47,
    date: "2026-05-04",
    day: "Monday",
    time: "19:30",
    team1: {
      short: "MI",
      name: "Mumbai Indians",
      color: "#004ba0",
      logo: "https://b.zmtcdn.com/data/edition_assets/177392584654714.png",
    },
    team2: {
      short: "LSG",
      name: "Lucknow Super Giants",
      color: "#a72b2a",
      logo: "https://b.zmtcdn.com/data/edition_assets/177392584655019.png",
    },
    venue: {
      city: "Mumbai",
      stadium: "Wankhede Stadium",
      state: "Maharashtra",
    },
    result: null,
  },
  {
    matchNumber: 48,
    date: "2026-05-05",
    day: "Tuesday",
    time: "19:30",
    team1: {
      short: "DC",
      name: "Delhi Capitals",
      color: "#0078bc",
      logo: "https://b.zmtcdn.com/data/edition_assets/177392584654612.png",
    },
    team2: {
      short: "CSK",
      name: "Chennai Super Kings",
      color: "#f9cd05",
      logo: "https://b.zmtcdn.com/data/edition_assets/177392584654613.png",
    },
    venue: {
      city: "Delhi",
      stadium: "Arun Jaitley Stadium",
      state: "Delhi",
    },
    result: null,
  },
  {
    matchNumber: 49,
    date: "2026-05-06",
    day: "Wednesday",
    time: "19:30",
    team1: {
      short: "SRH",
      name: "Sunrisers Hyderabad",
      color: "#f26522",
      logo: "https://b.zmtcdn.com/data/edition_assets/177392584654815.png",
    },
    team2: {
      short: "PBKS",
      name: "Punjab Kings",
      color: "#dc143c",
      logo: "https://b.zmtcdn.com/data/edition_assets/177392584654918.png",
    },
    venue: {
      city: "Hyderabad",
      stadium: "Rajiv Gandhi Int'l Cricket Stadium",
      state: "Telangana",
    },
    result: null,
  },
  {
    matchNumber: 50,
    date: "2026-05-07",
    day: "Thursday",
    time: "19:30",
    team1: {
      short: "LSG",
      name: "Lucknow Super Giants",
      color: "#a72b2a",
      logo: "https://b.zmtcdn.com/data/edition_assets/177392584655019.png",
    },
    team2: {
      short: "RCB",
      name: "Royal Challengers Bengaluru",
      color: "#c60000",
      logo: "https://b.zmtcdn.com/data/edition_assets/177392584654917.png",
    },
    venue: {
      city: "Lucknow",
      stadium: "Ekana Cricket Stadium",
      state: "Uttar Pradesh",
    },
    result: null,
  },
  {
    matchNumber: 51,
    date: "2026-05-08",
    day: "Friday",
    time: "19:30",
    team1: {
      short: "DC",
      name: "Delhi Capitals",
      color: "#0078bc",
      logo: "https://b.zmtcdn.com/data/edition_assets/177392584654612.png",
    },
    team2: {
      short: "KKR",
      name: "Kolkata Knight Riders",
      color: "#3a225d",
      logo: "https://b.zmtcdn.com/data/edition_assets/177392584655020.png",
    },
    venue: {
      city: "Delhi",
      stadium: "Arun Jaitley Stadium",
      state: "Delhi",
    },
    result: null,
  },
  {
    matchNumber: 52,
    date: "2026-05-09",
    day: "Saturday",
    time: "19:30",
    team1: {
      short: "RR",
      name: "Rajasthan Royals",
      color: "#254aa5",
      logo: "https://b.zmtcdn.com/data/edition_assets/177392584654411.png",
    },
    team2: {
      short: "GT",
      name: "Gujarat Titans",
      color: "#1d3557",
      logo: "https://b.zmtcdn.com/data/edition_assets/177392584655019.png",
    },
    venue: {
      city: "Jaipur",
      stadium: "Sawai Mansingh Stadium",
      state: "Rajasthan",
    },
    result: null,
  },
  {
    matchNumber: 53,
    date: "2026-05-10",
    day: "Sunday",
    time: "15:30",
    team1: {
      short: "CSK",
      name: "Chennai Super Kings",
      color: "#f9cd05",
      logo: "https://b.zmtcdn.com/data/edition_assets/177392584654613.png",
    },
    team2: {
      short: "LSG",
      name: "Lucknow Super Giants",
      color: "#a72b2a",
      logo: "https://b.zmtcdn.com/data/edition_assets/177392584655019.png",
    },
    venue: {
      city: "Chennai",
      stadium: "MA Chidambaram Stadium",
      state: "Tamil Nadu",
    },
    result: null,
  },
  {
    matchNumber: 54,
    date: "2026-05-10",
    day: "Sunday",
    time: "19:30",
    team1: {
      short: "RCB",
      name: "Royal Challengers Bengaluru",
      color: "#c60000",
      logo: "https://b.zmtcdn.com/data/edition_assets/177392584654917.png",
    },
    team2: {
      short: "MI",
      name: "Mumbai Indians",
      color: "#004ba0",
      logo: "https://b.zmtcdn.com/data/edition_assets/177392584654714.png",
    },
    venue: {
      city: "Raipur",
      stadium: "Shaheed Veer Narayan Singh Stadium",
      state: "Chhattisgarh",
    },
    result: null,
  },
  {
    matchNumber: 55,
    date: "2026-05-11",
    day: "Monday",
    time: "19:30",
    team1: {
      short: "PBKS",
      name: "Punjab Kings",
      color: "#dc143c",
      logo: "https://b.zmtcdn.com/data/edition_assets/177392584654918.png",
    },
    team2: {
      short: "DC",
      name: "Delhi Capitals",
      color: "#0078bc",
      logo: "https://b.zmtcdn.com/data/edition_assets/177392584654612.png",
    },
    venue: {
      city: "Dharamshala",
      stadium: "HPCA Stadium",
      state: "Himachal Pradesh",
    },
    result: null,
  },
  {
    matchNumber: 56,
    date: "2026-05-12",
    day: "Tuesday",
    time: "19:30",
    team1: {
      short: "GT",
      name: "Gujarat Titans",
      color: "#1d3557",
      logo: "https://b.zmtcdn.com/data/edition_assets/177392584655019.png",
    },
    team2: {
      short: "SRH",
      name: "Sunrisers Hyderabad",
      color: "#f26522",
      logo: "https://b.zmtcdn.com/data/edition_assets/177392584654815.png",
    },
    venue: {
      city: "Ahmedabad",
      stadium: "Narendra Modi Stadium",
      state: "Gujarat",
    },
    result: null,
  },
  {
    matchNumber: 57,
    date: "2026-05-13",
    day: "Wednesday",
    time: "19:30",
    team1: {
      short: "RCB",
      name: "Royal Challengers Bengaluru",
      color: "#c60000",
      logo: "https://b.zmtcdn.com/data/edition_assets/177392584654917.png",
    },
    team2: {
      short: "KKR",
      name: "Kolkata Knight Riders",
      color: "#3a225d",
      logo: "https://b.zmtcdn.com/data/edition_assets/177392584655020.png",
    },
    venue: {
      city: "Raipur",
      stadium: "Shaheed Veer Narayan Singh Stadium",
      state: "Chhattisgarh",
    },
    result: null,
  },
  {
    matchNumber: 58,
    date: "2026-05-14",
    day: "Thursday",
    time: "19:30",
    team1: {
      short: "PBKS",
      name: "Punjab Kings",
      color: "#dc143c",
      logo: "https://b.zmtcdn.com/data/edition_assets/177392584654918.png",
    },
    team2: {
      short: "MI",
      name: "Mumbai Indians",
      color: "#004ba0",
      logo: "https://b.zmtcdn.com/data/edition_assets/177392584654714.png",
    },
    venue: {
      city: "Dharamshala",
      stadium: "HPCA Stadium",
      state: "Himachal Pradesh",
    },
    result: null,
  },
  {
    matchNumber: 59,
    date: "2026-05-15",
    day: "Friday",
    time: "19:30",
    team1: {
      short: "LSG",
      name: "Lucknow Super Giants",
      color: "#a72b2a",
      logo: "https://b.zmtcdn.com/data/edition_assets/177392584655019.png",
    },
    team2: {
      short: "CSK",
      name: "Chennai Super Kings",
      color: "#f9cd05",
      logo: "https://b.zmtcdn.com/data/edition_assets/177392584654613.png",
    },
    venue: {
      city: "Lucknow",
      stadium: "Ekana Cricket Stadium",
      state: "Uttar Pradesh",
    },
    result: null,
  },
  {
    matchNumber: 60,
    date: "2026-05-16",
    day: "Saturday",
    time: "19:30",
    team1: {
      short: "KKR",
      name: "Kolkata Knight Riders",
      color: "#3a225d",
      logo: "https://b.zmtcdn.com/data/edition_assets/177392584655020.png",
    },
    team2: {
      short: "GT",
      name: "Gujarat Titans",
      color: "#1d3557",
      logo: "https://b.zmtcdn.com/data/edition_assets/177392584655019.png",
    },
    venue: {
      city: "Kolkata",
      stadium: "Eden Gardens",
      state: "West Bengal",
    },
    result: null,
  },
  {
    matchNumber: 61,
    date: "2026-05-17",
    day: "Sunday",
    time: "15:30",
    team1: {
      short: "PBKS",
      name: "Punjab Kings",
      color: "#dc143c",
      logo: "https://b.zmtcdn.com/data/edition_assets/177392584654918.png",
    },
    team2: {
      short: "RCB",
      name: "Royal Challengers Bengaluru",
      color: "#c60000",
      logo: "https://b.zmtcdn.com/data/edition_assets/177392584654917.png",
    },
    venue: {
      city: "Dharamshala",
      stadium: "HPCA Stadium",
      state: "Himachal Pradesh",
    },
    result: null,
  },
  {
    matchNumber: 62,
    date: "2026-05-17",
    day: "Sunday",
    time: "19:30",
    team1: {
      short: "DC",
      name: "Delhi Capitals",
      color: "#0078bc",
      logo: "https://b.zmtcdn.com/data/edition_assets/177392584654612.png",
    },
    team2: {
      short: "RR",
      name: "Rajasthan Royals",
      color: "#254aa5",
      logo: "https://b.zmtcdn.com/data/edition_assets/177392584654411.png",
    },
    venue: {
      city: "Delhi",
      stadium: "Arun Jaitley Stadium",
      state: "Delhi",
    },
    result: null,
  },
  {
    matchNumber: 63,
    date: "2026-05-18",
    day: "Monday",
    time: "19:30",
    team1: {
      short: "CSK",
      name: "Chennai Super Kings",
      color: "#f9cd05",
      logo: "https://b.zmtcdn.com/data/edition_assets/177392584654613.png",
    },
    team2: {
      short: "SRH",
      name: "Sunrisers Hyderabad",
      color: "#f26522",
      logo: "https://b.zmtcdn.com/data/edition_assets/177392584654815.png",
    },
    venue: {
      city: "Chennai",
      stadium: "MA Chidambaram Stadium",
      state: "Tamil Nadu",
    },
    result: null,
  },
  {
    matchNumber: 64,
    date: "2026-05-19",
    day: "Tuesday",
    time: "19:30",
    team1: {
      short: "RR",
      name: "Rajasthan Royals",
      color: "#254aa5",
      logo: "https://b.zmtcdn.com/data/edition_assets/177392584654411.png",
    },
    team2: {
      short: "LSG",
      name: "Lucknow Super Giants",
      color: "#a72b2a",
      logo: "https://b.zmtcdn.com/data/edition_assets/177392584655019.png",
    },
    venue: {
      city: "Jaipur",
      stadium: "Sawai Mansingh Stadium",
      state: "Rajasthan",
    },
    result: null,
  },
  {
    matchNumber: 65,
    date: "2026-05-20",
    day: "Wednesday",
    time: "19:30",
    team1: {
      short: "KKR",
      name: "Kolkata Knight Riders",
      color: "#3a225d",
      logo: "https://b.zmtcdn.com/data/edition_assets/177392584655020.png",
    },
    team2: {
      short: "MI",
      name: "Mumbai Indians",
      color: "#004ba0",
      logo: "https://b.zmtcdn.com/data/edition_assets/177392584654714.png",
    },
    venue: {
      city: "Kolkata",
      stadium: "Eden Gardens",
      state: "West Bengal",
    },
    result: null,
  },
  {
    matchNumber: 66,
    date: "2026-05-21",
    day: "Thursday",
    time: "19:30",
    team1: {
      short: "CSK",
      name: "Chennai Super Kings",
      color: "#f9cd05",
      logo: "https://b.zmtcdn.com/data/edition_assets/177392584654613.png",
    },
    team2: {
      short: "GT",
      name: "Gujarat Titans",
      color: "#1d3557",
      logo: "https://b.zmtcdn.com/data/edition_assets/177392584655019.png",
    },
    venue: {
      city: "Chennai",
      stadium: "MA Chidambaram Stadium",
      state: "Tamil Nadu",
    },
    result: null,
  },
  {
    matchNumber: 67,
    date: "2026-05-22",
    day: "Friday",
    time: "19:30",
    team1: {
      short: "SRH",
      name: "Sunrisers Hyderabad",
      color: "#f26522",
      logo: "https://b.zmtcdn.com/data/edition_assets/177392584654815.png",
    },
    team2: {
      short: "RCB",
      name: "Royal Challengers Bengaluru",
      color: "#c60000",
      logo: "https://b.zmtcdn.com/data/edition_assets/177392584654917.png",
    },
    venue: {
      city: "Hyderabad",
      stadium: "Rajiv Gandhi Int'l Cricket Stadium",
      state: "Telangana",
    },
    result: null,
  },
  {
    matchNumber: 68,
    date: "2026-05-23",
    day: "Saturday",
    time: "19:30",
    team1: {
      short: "LSG",
      name: "Lucknow Super Giants",
      color: "#a72b2a",
      logo: "https://b.zmtcdn.com/data/edition_assets/177392584655019.png",
    },
    team2: {
      short: "PBKS",
      name: "Punjab Kings",
      color: "#dc143c",
      logo: "https://b.zmtcdn.com/data/edition_assets/177392584654918.png",
    },
    venue: {
      city: "Lucknow",
      stadium: "Ekana Cricket Stadium",
      state: "Uttar Pradesh",
    },
    result: null,
  },
  {
    matchNumber: 69,
    date: "2026-05-24",
    day: "Sunday",
    time: "15:30",
    team1: {
      short: "MI",
      name: "Mumbai Indians",
      color: "#004ba0",
      logo: "https://b.zmtcdn.com/data/edition_assets/177392584654714.png",
    },
    team2: {
      short: "RR",
      name: "Rajasthan Royals",
      color: "#254aa5",
      logo: "https://b.zmtcdn.com/data/edition_assets/177392584654411.png",
    },
    venue: {
      city: "Mumbai",
      stadium: "Wankhede Stadium",
      state: "Maharashtra",
    },
    result: null,
  },
  {
    matchNumber: 70,
    date: "2026-05-24",
    day: "Sunday",
    time: "19:30",
    team1: {
      short: "KKR",
      name: "Kolkata Knight Riders",
      color: "#3a225d",
      logo: "https://b.zmtcdn.com/data/edition_assets/177392584655020.png",
    },
    team2: {
      short: "DC",
      name: "Delhi Capitals",
      color: "#0078bc",
      logo: "https://b.zmtcdn.com/data/edition_assets/177392584654612.png",
    },
    venue: {
      city: "Kolkata",
      stadium: "Eden Gardens",
      state: "West Bengal",
    },
    result: null,
  },
];

export const ticketAreas = [
  {
    id: 1,
    name: "Upper Stand",
    code: "U",
    price: 499,
  },
  {
    id: 2,
    name: "Lower Stand",
    code: "L",
    price: 999,
  },
  {
    id: 3,
    name: "Premium Stand",
    code: "P",
    price: 1499,
  },
  {
    id: 4,
    name: "VIP Box",
    code: "VIP",
    price: 2999,
  },
  {
    id: 5,
    name: "Corporate Lounge",
    code: "CL",
    price: 4999,
  },
];

export const activities = [
  {
    id: "activity-001",
    title: "Museum of Illusions - New Delhi",
    date: "Thu, 16 Apr onwards",
    slots: "Multiple time slots",
    venue: "Museum of Illusions, Delhi/NCR",
    city: "Delhi",
    price: 590,
    category: "Experiences",
    image_url:
      "https://media.insider.in/image/upload/c_crop,g_custom/v1768904208/eqtyybwy4skojbulqw4y.png",
  },
  {
    id: "activity-002",
    title: "Adventure Island | Rohini",
    date: "Daily",
    slots: "10:00 AM onwards",
    venue: "Adventure Island - Metro Walk, Delhi",
    city: "Delhi",
    price: 500,
    category: "Theme Parks",
    image_url:
      "https://media.insider.in/image/upload/c_crop,g_custom/v1773122668/j1fh8orb28rgufnq8jhk.png",
  },
  {
    id: "activity-003",
    title: "Qutub Minar Entry",
    date: "Daily",
    slots: "Multiple slots",
    venue: "Qutub Minar, Delhi",
    city: "Delhi",
    price: 35,
    category: "Monuments",
    image_url:
      "https://media.insider.in/image/upload/c_crop,g_custom/v1769069655/uh7wxbx3ber0pir6guca.png",
  },
  {
    id: "activity-004",
    title: "Formula Karting | Noida",
    date: "Daily",
    slots: "12:00 AM onwards",
    venue: "Formula Karting, Noida",
    city: "Noida",
    price: 825,
    category: "Adventure",
    image_url:
      "https://media.insider.in/image/upload/c_crop,g_custom/v1752068519/e1tch70ijkrbiwzqoore.jpg",
  },
  {
    id: "activity-005",
    title: "Turbo Track | Go Karting",
    date: "16 Apr – 30 Apr",
    slots: "12:00 AM onwards",
    venue: "Turbo Track, Gurugram",
    city: "Gurugram",
    price: 699,
    category: "Adventure",
    image_url:
      "https://media.insider.in/image/upload/c_crop,g_custom/v1771502746/ibqilqnflfyf4qcf2yo0.png",
  },
  {
    id: "activity-006",
    title: "SkyJumper Trampoline Park",
    date: "16 Apr – 30 Apr",
    slots: "10:00 AM onwards",
    venue: "SkyJumper, ILD Trade Center, Gurugram",
    city: "Gurugram",
    price: 490,
    category: "Kids / Fun",
    image_url:
      "https://media.insider.in/image/upload/c_crop,g_custom/v1772971241/fge9il9noco6pubmycqa.jpg",
  },
  {
    id: "activity-008",
    title: "F9 Go Karting | Sector 18",
    date: "Daily",
    slots: "12:00 AM onwards",
    venue: "F9 Go Karting, Gurugram",
    city: "Gurugram",
    price: 675,
    category: "Adventure",
    image_url:
      "https://media.insider.in/image/upload/c_crop,g_custom/v1771999232/uii7y8iuecbitzclanft.png",
  },
  {
    id: "activity-009",
    title: "Worlds of Wonder (WOW) Water Park",
    date: "Daily",
    slots: "10:00 AM onwards",
    venue: "Worlds of Wonder, Noida",
    city: "Noida",
    price: 799,
    category: "Water Parks",
    image_url:
      "https://media.insider.in/image/upload/c_crop,g_custom/v1776305302/i6psqonbemsqmjpszdcy.png",
  },
  {
    id: "activity-010",
    title: "Yes Minister Bowling & Kitchen",
    date: "Daily",
    slots: "12:00 PM onwards",
    venue: "Yes Minister, Delhi",
    city: "Delhi",
    price: 300,
    category: "Bowling",
    image_url:
      "https://media.insider.in/image/upload/c_crop,g_custom/v1771915155/oetu8n53islvk2royt3q.png",
  },
];

export const activityCategories: categoryType[] = [
  {
    id: "cat_gamezones_01",
    title: "Game Zones",
    image_url: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db",
  },
  {
    id: "cat_themeparks_02",
    title: "Theme Parks",
    image_url: "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83",
  },
  {
    id: "cat_monuments_03",
    title: "Monuments",
    image_url:
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=200&q=80",
  },
  {
    id: "cat_waterparks_04",
    title: "Water Parks",
    image_url: "https://images.unsplash.com/photo-1563245372-f21724e3856d",
  },
  {
    id: "cat_kidsplay_05",
    title: "Kids Play",
    image_url: "https://images.unsplash.com/photo-1596464716127-f2a82984de30",
  },
  {
    id: "cat_workshops_06",
    title: "Workshops",
    image_url:
      "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=200&q=80",
  },
  {
    id: "cat_museums_07",
    title: "Museums",
    image_url:
      "https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=200&q=80",
  },
  {
    id: "cat_adventure_08",
    title: "Adventures",
    image_url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
  },
  {
    id: "cat_farmoutings_09",
    title: "Farm Outings",
    image_url:
      "https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=200&q=80",
  },
  {
    id: "cat_gamesquiz_10",
    title: "Games & Quizzes",
    image_url: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5",
  },
];

export const activityEachCategoryData: CategoryType[] = [
  {
    id: "cat_all_00",
    title: "All Events",
    slug: "All",
    events: [
      {
        id: "activity-001",
        title: "Museum of Illusions - New Delhi",
        date: "Thu, 16 Apr onwards",
        slots: "Multiple time slots",
        venue: "Museum of Illusions, Delhi/NCR",
        city: "Delhi",
        price: 590,
        category: "Experiences",
        image_url:
          "https://media.insider.in/image/upload/c_crop,g_custom/v1768904208/eqtyybwy4skojbulqw4y.png",
        images: [
          "https://media.insider.in/image/upload/c_crop,g_custom/v1768904208/eqtyybwy4skojbulqw4y.png",
          "https://media.insider.in/image/upload/w_800/v1776326209/u68rpgmo0ijok5edhg2m.jpg",
          "https://media.insider.in/image/upload/w_800/v1776326212/cxhqua7exzulez0cwotu.jpg",
          "https://media.insider.in/image/upload/c_crop,g_custom/v1768904190/igxzgobfmuapn6is1oev.png",
          "https://media.insider.in/image/upload/w_800/v1776326212/cxhqua7exzulez0cwotu.jpg",
        ],
      },
      {
        id: "activity-002",
        title: "Adventure Island | Rohini",
        date: "Daily",
        slots: "10:00 AM onwards",
        venue: "Adventure Island - Metro Walk, Delhi",
        city: "Delhi",
        price: 500,
        category: "Theme Parks",
        image_url:
          "https://media.insider.in/image/upload/c_crop,g_custom/v1773122668/j1fh8orb28rgufnq8jhk.png",
        images: [
          "https://media.insider.in/image/upload/c_crop,g_custom/v1773122832/ivilvnnqns2dgnyt2bem.jpg",
          "https://media.insider.in/image/upload/w_800/v1776327826/gcy9rlde7ztacl8cauw1.jpg",
          "https://media.insider.in/image/upload/w_800/v1776327828/mzk7fha8classx8ygrwo.jpg",
          "https://media.insider.in/image/upload/w_800/v1776327828/bcou1zs1hxt2kyc4jo2y.jpg",
          "https://media.insider.in/image/upload/w_800/v1776327829/emwe35d2whbdravzuwqn.jpg",
        ],
      },
      {
        id: "activity-003",
        title: "Qutub Minar Entry",
        date: "Daily",
        slots: "Multiple slots",
        venue: "Qutub Minar, Delhi",
        city: "Delhi",
        price: 35,
        category: "Monuments",
        image_url:
          "https://media.insider.in/image/upload/c_crop,g_custom/v1769069655/uh7wxbx3ber0pir6guca.png",
        images: [
          "https://media.insider.in/image/upload/c_crop,g_custom/v1769069645/o16zdegkzzkp3s7jbt3t.png",
          "https://media.insider.in/image/upload/w_800/v1769245955/hlvgd2wl1sc3uxunyyds.png",
          "https://media.insider.in/image/upload/w_800/v1768233746/nggcxoppntxv81uvlrdb.png",
          "https://media.insider.in/image/upload/w_800/v1768233739/ziwf44nftbgyl6ajme7h.png",
        ],
      },
      {
        id: "activity-004",
        title: "Formula Karting | Noida",
        date: "Daily",
        slots: "12:00 AM onwards",
        venue: "Formula Karting, Noida",
        city: "Noida",
        price: 825,
        category: "Adventure",
        image_url:
          "https://media.insider.in/image/upload/c_crop,g_custom/v1752068519/e1tch70ijkrbiwzqoore.jpg",
        images: [
          "https://media.insider.in/image/upload/c_crop,g_custom/v1753090332/ixumv2ubjbq3hjq0wq5z.jpg",
          "https://media.insider.in/image/upload/w_800/v1769084225/yitmvr1iikknn1gjl8so.png",
          "https://media.insider.in/image/upload/w_800/v1761837373/zfaddbqwj4hjcoew5uem.jpg",
          "https://media.insider.in/image/upload/w_800/v1761837364/oxfs5xvnvs5ppsjnuzgt.jpg",
          "https://media.insider.in/image/upload/w_800/v1761837357/qwu2kwvdoxxzyxfxcqxn.jpg",
        ],
      },
      {
        id: "activity-005",
        title: "Turbo Track | Go Karting",
        date: "16 Apr – 30 Apr",
        slots: "12:00 AM onwards",
        venue: "Turbo Track, Gurugram",
        city: "Gurugram",
        price: 699,
        category: "Adventure",
        image_url:
          "https://media.insider.in/image/upload/c_crop,g_custom/v1771502746/ibqilqnflfyf4qcf2yo0.png",
        images: [
          "https://media.insider.in/image/upload/c_crop,g_custom/v1771502694/dqdcxxquant8ahsaj0fm.png",
          "https://media.insider.in/image/upload/w_800/v1748712183/zetbel959czh6dtqvgr5.png",
          "https://media.insider.in/image/upload/w_800/v1748712184/qtaqp0s9nijwhs0ezlxy.png",
          "https://media.insider.in/image/upload/w_800/v1748712186/kwiu0rmh30d8hzh4nmkg.png",
          "https://media.insider.in/image/upload/w_800/v1748712186/fytzpypvnj5ggae1tovo.png",
        ],
      },
      {
        id: "activity-006",
        title: "SkyJumper Trampoline Park",
        date: "16 Apr – 30 Apr",
        slots: "10:00 AM onwards",
        venue: "SkyJumper, ILD Trade Center, Gurugram",
        city: "Gurugram",
        price: 490,
        category: "Kids / Fun",
        image_url:
          "https://media.insider.in/image/upload/c_crop,g_custom/v1772971241/fge9il9noco6pubmycqa.jpg",
        images: [
          "https://media.insider.in/image/upload/c_crop,g_custom/v1753787132/pgrkndjggoqjkz5dwlni.jpg",
          "https://media.insider.in/image/upload/w_800/v1752053068/zs0wu9gl3opsa5kssgxd.jpg",
          "https://media.insider.in/image/upload/w_800/v1752053069/lt9z3ut4n3eelctw9yca.jpg",
          "https://media.insider.in/image/upload/w_800/v1752053069/pytgqd5tcgpx74b5jj1i.jpg",
          "https://media.insider.in/image/upload/w_800/v1752053068/qb5ztngdgdxqon2wenaw.jpg",
        ],
      },
      {
        id: "activity-008",
        title: "F9 Go Karting | Sector 18",
        date: "Daily",
        slots: "12:00 AM onwards",
        venue: "F9 Go Karting, Gurugram",
        city: "Gurugram",
        price: 675,
        category: "Adventure",
        image_url:
          "https://media.insider.in/image/upload/c_crop,g_custom/v1771999232/uii7y8iuecbitzclanft.png",
        images: [
          "https://media.insider.in/image/upload/c_crop,g_custom/v1763548398/syv8o9b67bhro1vdziwp.png",
          "https://media.insider.in/image/upload/w_800/v1763642538/qd7wqjchvsxbweewvodb.png",
          "https://media.insider.in/image/upload/w_800/v1764414930/rmsk5ccvwazrhaegdioj.jpg",
          "https://media.insider.in/image/upload/w_800/v1764414937/lbti9iuqt65ssubktnzv.jpg",
          "https://media.insider.in/image/upload/w_800/v1764414943/eflldtjr8boheorozl0d.jpg",
        ],
      },
      {
        id: "activity-009",
        title: "Worlds of Wonder (WOW) Water Park",
        date: "Daily",
        slots: "10:00 AM onwards",
        venue: "Worlds of Wonder, Noida",
        city: "Noida",
        price: 799,
        category: "Water Parks",
        image_url:
          "https://media.insider.in/image/upload/c_crop,g_custom/v1776305302/i6psqonbemsqmjpszdcy.png",
        images: [
          "https://media.insider.in/image/upload/c_crop,g_custom/v1776305429/pwigy0ihh11jpa1xrzrr.png",
          "https://media.insider.in/image/upload/w_800/v1775813814/wixns5vrvxdi10yygpvl.jpg",
          "https://media.insider.in/image/upload/w_800/v1775813815/w3itwcxzczasipbndelk.jpg",
          "https://media.insider.in/image/upload/w_800/v1775813817/whsi6k5ba2vokp0xb92u.jpg",
        ],
      },
      {
        id: "activity-010",
        title: "Yes Minister Bowling & Kitchen",
        date: "Daily",
        slots: "12:00 PM onwards",
        venue: "Yes Minister, Delhi",
        city: "Delhi",
        price: 300,
        category: "Bowling",
        image_url:
          "https://media.insider.in/image/upload/c_crop,g_custom/v1771915155/oetu8n53islvk2royt3q.png",
      },
    ],
  },
  {
    id: "cat_gamezones_01",
    title: "Game Zones",
    slug: "game-zones",
    events: [
      {
        id: "act_gz_01",
        title: "F9 Go Karting",
        date: "Daily",
        venue: "Gurugram",
        price: 675,
        category: "Game Zones",
        image_url:
          "https://media.insider.in/image/upload/c_crop,g_custom/v1771999232/uii7y8iuecbitzclanft.png",
        images: [
          "https://images.unsplash.com/photo-1632245889029-e406faaa34cd?w=600&q=80",
          "https://images.unsplash.com/photo-1599059813005-11265ba4b4ce?w=600&q=80",
          "https://images.unsplash.com/photo-1621891334489-5c6d5c7a9ff6?w=600&q=80",
          "https://images.unsplash.com/photo-1587496679742-bad502958fbf?w=600&q=80",
          "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?w=600&q=80",
        ],
      },
      {
        id: "act_gz_02",
        title: "Yes Minister Bowling",
        date: "Daily",
        venue: "Delhi",
        price: 300,
        category: "Game Zones",
        image_url:
          "https://media.insider.in/image/upload/c_crop,g_custom/v1771915155/oetu8n53islvk2royt3q.png",
        images: [
          "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=600&q=80",
          "https://images.unsplash.com/photo-1606293926075-69a8c8a9b7d3?w=600&q=80",
          "https://images.unsplash.com/photo-1586816001966-79b736744398?w=600&q=80",
          "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?w=600&q=80",
          "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?w=600&q=80",
        ],
      },
      {
        id: "act_gz_03",
        title: "Timezone Arcade",
        date: "Daily",
        venue: "Bengaluru",
        price: 250,
        category: "Game Zones",
        image_url:
          "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&q=80",
        images: [
          "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&q=80",
          "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=600&q=80",
          "https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=600&q=80",
          "https://images.unsplash.com/photo-1625805868252-f3e8b6c6b134?w=600&q=80",
          "https://images.unsplash.com/photo-1580327332925-a10e6cb11baa?w=600&q=80",
        ],
      },
      {
        id: "act_gz_04",
        title: "Play Arena",
        date: "Daily",
        venue: "Bengaluru",
        price: 499,
        category: "Game Zones",
        image_url:
          "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&q=80",
        images: [
          "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&q=80",
          "https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=600&q=80",
          "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=600&q=80",
          "https://images.unsplash.com/photo-1580327332925-a10e6cb11baa?w=600&q=80",
          "https://images.unsplash.com/photo-1625805868252-f3e8b6c6b134?w=600&q=80",
        ],
      },
      {
        id: "act_gz_05",
        title: "Fun City",
        date: "Daily",
        venue: "Bengaluru",
        price: 199,
        category: "Game Zones",
        image_url:
          "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=600&q=80",
        images: [
          "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=600&q=80",
          "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&q=80",
          "https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=600&q=80",
          "https://images.unsplash.com/photo-1625805868252-f3e8b6c6b134?w=600&q=80",
          "https://images.unsplash.com/photo-1580327332925-a10e6cb11baa?w=600&q=80",
        ],
      },
    ],
  },

  {
    id: "cat_themeparks_02",
    title: "Theme Parks",
    slug: "theme-parks",
    events: [
      {
        id: "act_tp_01",
        title: "Adventure Island",
        date: "Daily",
        venue: "Delhi",
        price: 500,
        category: "Theme Parks",
        image_url:
          "https://media.insider.in/image/upload/c_crop,g_custom/v1773122668/j1fh8orb28rgufnq8jhk.png",
        images: [
          "https://media.insider.in/image/upload/c_crop,g_custom/v1773122832/ivilvnnqns2dgnyt2bem.jpg",
          "https://media.insider.in/image/upload/w_800/v1776327826/gcy9rlde7ztacl8cauw1.jpg",
          "https://media.insider.in/image/upload/w_800/v1776327828/mzk7fha8classx8ygrwo.jpg",
          "https://media.insider.in/image/upload/w_800/v1776327828/bcou1zs1hxt2kyc4jo2y.jpg",
          "https://media.insider.in/image/upload/w_800/v1776327829/emwe35d2whbdravzuwqn.jpg",
        ],
      },
      {
        id: "act_tp_02",
        title: "EOD Adventure Park",
        date: "Daily",
        venue: "Delhi",
        price: 599,
        category: "Theme Parks",
        image_url:
          "https://media.insider.in/image/upload/c_crop,g_custom/v1751524285/kd62c3bgduhgs9lyu4zv.png",
        images: [
          "https://media.insider.in/image/upload/c_crop,g_custom/v1773122832/ivilvnnqns2dgnyt2bem.jpg",
          "https://media.insider.in/image/upload/w_800/v1776327826/gcy9rlde7ztacl8cauw1.jpg",
          "https://media.insider.in/image/upload/w_800/v1776327828/mzk7fha8classx8ygrwo.jpg",
          "https://media.insider.in/image/upload/w_800/v1776327828/bcou1zs1hxt2kyc4jo2y.jpg",
          "https://media.insider.in/image/upload/w_800/v1776327829/emwe35d2whbdravzuwqn.jpg",
        ],
      },
      {
        id: "act_tp_03",
        title: "Wonderla",
        date: "Daily",
        venue: "Bengaluru",
        price: 999,
        category: "Theme Parks",
        image_url:
          "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=600&q=80",
        images: [
          "https://media.insider.in/image/upload/c_crop,g_custom/v1773122832/ivilvnnqns2dgnyt2bem.jpg",
          "https://media.insider.in/image/upload/w_800/v1776327826/gcy9rlde7ztacl8cauw1.jpg",
          "https://media.insider.in/image/upload/w_800/v1776327828/mzk7fha8classx8ygrwo.jpg",
          "https://media.insider.in/image/upload/w_800/v1776327828/bcou1zs1hxt2kyc4jo2y.jpg",
          "https://media.insider.in/image/upload/w_800/v1776327829/emwe35d2whbdravzuwqn.jpg",
        ],
      },
      {
        id: "act_tp_04",
        title: "Imagicaa Park",
        date: "Daily",
        venue: "Mumbai",
        price: 1200,
        category: "Theme Parks",
        image_url:
          "https://images.unsplash.com/photo-1508672019048-805c876b67e2?w=600&q=80",
        images: [
          "https://media.insider.in/image/upload/c_crop,g_custom/v1773122832/ivilvnnqns2dgnyt2bem.jpg",
          "https://media.insider.in/image/upload/w_800/v1776327826/gcy9rlde7ztacl8cauw1.jpg",
          "https://media.insider.in/image/upload/w_800/v1776327828/mzk7fha8classx8ygrwo.jpg",
          "https://media.insider.in/image/upload/w_800/v1776327828/bcou1zs1hxt2kyc4jo2y.jpg",
          "https://media.insider.in/image/upload/w_800/v1776327829/emwe35d2whbdravzuwqn.jpg",
        ],
      },
      {
        id: "act_tp_05",
        title: "Appu Ghar",
        date: "Daily",
        venue: "Gurugram",
        price: 799,
        category: "Theme Parks",
        image_url:
          "https://images.unsplash.com/photo-1513883049090-d0b7439799bf?w=600&q=80",
        images: [
          "https://media.insider.in/image/upload/c_crop,g_custom/v1773122832/ivilvnnqns2dgnyt2bem.jpg",
          "https://media.insider.in/image/upload/w_800/v1776327826/gcy9rlde7ztacl8cauw1.jpg",
          "https://media.insider.in/image/upload/w_800/v1776327828/mzk7fha8classx8ygrwo.jpg",
          "https://media.insider.in/image/upload/w_800/v1776327828/bcou1zs1hxt2kyc4jo2y.jpg",
          "https://media.insider.in/image/upload/w_800/v1776327829/emwe35d2whbdravzuwqn.jpg",
        ],
      },
      {
        id: "act_tp_06",
        title: "Ramoji Film City",
        date: "Daily",
        venue: "Hyderabad",
        price: 1500,
        category: "Theme Parks",
        image_url:
          "https://images.unsplash.com/photo-1598899134739-24c46f58b8d9?w=600&q=80",
        images: [
          "https://media.insider.in/image/upload/c_crop,g_custom/v1773122832/ivilvnnqns2dgnyt2bem.jpg",
          "https://media.insider.in/image/upload/w_800/v1776327826/gcy9rlde7ztacl8cauw1.jpg",
          "https://media.insider.in/image/upload/w_800/v1776327828/mzk7fha8classx8ygrwo.jpg",
          "https://media.insider.in/image/upload/w_800/v1776327828/bcou1zs1hxt2kyc4jo2y.jpg",
          "https://media.insider.in/image/upload/w_800/v1776327829/emwe35d2whbdravzuwqn.jpg",
        ],
      },
    ],
  },

  // 3️⃣ MONUMENTS
  {
    id: "cat_monuments_03",
    title: "Monuments",
    slug: "monuments",
    events: [
      {
        id: "act_mon_01",
        title: "Taj Mahal Tour",
        date: "Daily",
        venue: "Agra",
        price: 450,
        category: "Monuments",
        image_url:
          "https://images.unsplash.com/photo-1586882829491-f92e1b2c0cc4?w=600&q=80",
        images: [
          "https://media.insider.in/image/upload/c_crop,g_custom/v1769069645/o16zdegkzzkp3s7jbt3t.png",
          "https://media.insider.in/image/upload/w_800/v1769245955/hlvgd2wl1sc3uxunyyds.png",
          "https://media.insider.in/image/upload/w_800/v1768233746/nggcxoppntxv81uvlrdb.png",
          "https://media.insider.in/image/upload/w_800/v1768233739/ziwf44nftbgyl6ajme7h.png",
        ],
      },
      {
        id: "act_mon_02",
        title: "Qutub Minar Visit",
        date: "Daily",
        venue: "Delhi",
        price: 100,
        category: "Monuments",
        image_url:
          "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600&q=80",
        images: [
          "https://media.insider.in/image/upload/c_crop,g_custom/v1769069645/o16zdegkzzkp3s7jbt3t.png",
          "https://media.insider.in/image/upload/w_800/v1769245955/hlvgd2wl1sc3uxunyyds.png",
          "https://media.insider.in/image/upload/w_800/v1768233746/nggcxoppntxv81uvlrdb.png",
          "https://media.insider.in/image/upload/w_800/v1768233739/ziwf44nftbgyl6ajme7h.png",
        ],
      },
      {
        id: "act_mon_03",
        title: "Hawa Mahal Tour",
        date: "Daily",
        venue: "Jaipur",
        price: 200,
        category: "Monuments",
        image_url:
          "https://images.unsplash.com/photo-1567521464027-f127ff144326?w=600&q=80",
        images: [
          "https://media.insider.in/image/upload/c_crop,g_custom/v1769069645/o16zdegkzzkp3s7jbt3t.png",
          "https://media.insider.in/image/upload/w_800/v1769245955/hlvgd2wl1sc3uxunyyds.png",
          "https://media.insider.in/image/upload/w_800/v1768233746/nggcxoppntxv81uvlrdb.png",
          "https://media.insider.in/image/upload/w_800/v1768233739/ziwf44nftbgyl6ajme7h.png",
        ],
      },
      {
        id: "act_mon_04",
        title: "Charminar Visit",
        date: "Daily",
        venue: "Hyderabad",
        price: 150,
        category: "Monuments",
        image_url:
          "https://images.unsplash.com/photo-1599661046827-dacde6976548?w=600&q=80",
        images: [
          "https://media.insider.in/image/upload/c_crop,g_custom/v1769069645/o16zdegkzzkp3s7jbt3t.png",
          "https://media.insider.in/image/upload/w_800/v1769245955/hlvgd2wl1sc3uxunyyds.png",
          "https://media.insider.in/image/upload/w_800/v1768233746/nggcxoppntxv81uvlrdb.png",
          "https://media.insider.in/image/upload/w_800/v1768233739/ziwf44nftbgyl6ajme7h.png",
        ],
      },
      {
        id: "act_mon_05",
        title: "Red Fort Tour",
        date: "Daily",
        venue: "Delhi",
        price: 120,
        category: "Monuments",
        image_url:
          "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=600&q=80",
        images: [
          "https://media.insider.in/image/upload/c_crop,g_custom/v1769069645/o16zdegkzzkp3s7jbt3t.png",
          "https://media.insider.in/image/upload/w_800/v1769245955/hlvgd2wl1sc3uxunyyds.png",
          "https://media.insider.in/image/upload/w_800/v1768233746/nggcxoppntxv81uvlrdb.png",
          "https://media.insider.in/image/upload/w_800/v1768233739/ziwf44nftbgyl6ajme7h.png",
        ],
      },
      {
        id: "act_mon_06",
        title: "Mysore Palace",
        date: "Daily",
        venue: "Mysore",
        price: 180,
        category: "Monuments",
        image_url:
          "https://images.unsplash.com/photo-1580657018950-c7f7d6a6d990?w=600&q=80",
        images: [
          "https://media.insider.in/image/upload/c_crop,g_custom/v1769069645/o16zdegkzzkp3s7jbt3t.png",
          "https://media.insider.in/image/upload/w_800/v1769245955/hlvgd2wl1sc3uxunyyds.png",
          "https://media.insider.in/image/upload/w_800/v1768233746/nggcxoppntxv81uvlrdb.png",
          "https://media.insider.in/image/upload/w_800/v1768233739/ziwf44nftbgyl6ajme7h.png",
        ],
      },
    ],
  },

  // 4️⃣ WATER PARKS
  {
    id: "cat_waterparks_04",
    title: "Water Parks",
    slug: "water-parks",
    events: [
      {
        id: "act_wp_01",
        title: "WOW Water Park",
        date: "Daily",
        venue: "Noida",
        price: 799,
        category: "Water Parks",
        image_url:
          "https://media.insider.in/image/upload/c_crop,g_custom/v1776305302/i6psqonbemsqmjpszdcy.png",
        images: [
          "https://images.unsplash.com/photo-1502933691298-84fc14542831?w=600&q=80",
          "https://images.unsplash.com/photo-1560067897-fc0ccc5b6e8f?w=600&q=80",
          "https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce?w=600&q=80",
          "https://images.unsplash.com/photo-1530866495561-507c9faab2ed?w=600&q=80",
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80",
        ],
      },
      {
        id: "act_wp_02",
        title: "Fun N Food Water Park",
        date: "Daily",
        venue: "Delhi",
        price: 750,
        category: "Water Parks",
        image_url:
          "https://images.unsplash.com/photo-1502933691298-84fc14542831?w=600&q=80",
        images: [
          "https://images.unsplash.com/photo-1502933691298-84fc14542831?w=600&q=80",
          "https://images.unsplash.com/photo-1560067897-fc0ccc5b6e8f?w=600&q=80",
          "https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce?w=600&q=80",
          "https://images.unsplash.com/photo-1530866495561-507c9faab2ed?w=600&q=80",
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80",
        ],
      },
      {
        id: "act_wp_03",
        title: "Wet n Wild",
        date: "Daily",
        venue: "Gurugram",
        price: 699,
        category: "Water Parks",
        image_url:
          "https://images.unsplash.com/photo-1560067897-fc0ccc5b6e8f?w=600&q=80",
        images: [
          "https://images.unsplash.com/photo-1560067897-fc0ccc5b6e8f?w=600&q=80",
          "https://images.unsplash.com/photo-1502933691298-84fc14542831?w=600&q=80",
          "https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce?w=600&q=80",
          "https://images.unsplash.com/photo-1530866495561-507c9faab2ed?w=600&q=80",
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80",
        ],
      },
      {
        id: "act_wp_04",
        title: "GRS Fantasy Park",
        date: "Daily",
        venue: "Mysore",
        price: 650,
        category: "Water Parks",
        image_url:
          "https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce?w=600&q=80",
        images: [
          "https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce?w=600&q=80",
          "https://images.unsplash.com/photo-1502933691298-84fc14542831?w=600&q=80",
          "https://images.unsplash.com/photo-1560067897-fc0ccc5b6e8f?w=600&q=80",
          "https://images.unsplash.com/photo-1530866495561-507c9faab2ed?w=600&q=80",
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80",
        ],
      },
      {
        id: "act_wp_05",
        title: "Jalavihar Water Park",
        date: "Daily",
        venue: "Hyderabad",
        price: 500,
        category: "Water Parks",
        image_url:
          "https://images.unsplash.com/photo-1530866495561-507c9faab2ed?w=600&q=80",
        images: [
          "https://images.unsplash.com/photo-1530866495561-507c9faab2ed?w=600&q=80",
          "https://images.unsplash.com/photo-1502933691298-84fc14542831?w=600&q=80",
          "https://images.unsplash.com/photo-1560067897-fc0ccc5b6e8f?w=600&q=80",
          "https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce?w=600&q=80",
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80",
        ],
      },
    ],
  },
  // 5️⃣ KIDS PLAY
  {
    id: "cat_kidsplay_05",
    title: "Kids Play",
    slug: "kids-play",
    events: [
      {
        id: "act_kp_01",
        title: "SkyJumper Trampoline Park",
        date: "Daily",
        venue: "Gurugram",
        price: 490,
        category: "Kids Play",
        image_url:
          "https://media.insider.in/image/upload/c_crop,g_custom/v1772971241/fge9il9noco6pubmycqa.jpg",
        images: [
          "https://images.unsplash.com/photo-1601758123927-1963b6f4f0c1?w=600&q=80",
          "https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=600&q=80",
          "https://images.unsplash.com/photo-1588072432836-e10032774350?w=600&q=80",
          "https://images.unsplash.com/photo-1576267423048-15c0040fec78?w=600&q=80",
          "https://images.unsplash.com/photo-1553066886-d1e6a85dd32a?w=600&q=80",
        ],
      },
      {
        id: "act_kp_02",
        title: "KidZania",
        date: "Daily",
        venue: "Mumbai",
        price: 849,
        category: "Kids Play",
        image_url:
          "https://images.unsplash.com/photo-1553066886-d1e6a85dd32a?w=600&q=80",
        images: [
          "https://images.unsplash.com/photo-1553066886-d1e6a85dd32a?w=600&q=80",
          "https://images.unsplash.com/photo-1601758123927-1963b6f4f0c1?w=600&q=80",
          "https://images.unsplash.com/photo-1588072432836-e10032774350?w=600&q=80",
          "https://images.unsplash.com/photo-1576267423048-15c0040fec78?w=600&q=80",
          "https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=600&q=80",
        ],
      },
      {
        id: "act_kp_03",
        title: "Play Factory",
        date: "Daily",
        venue: "Bengaluru",
        price: 299,
        category: "Kids Play",
        image_url:
          "https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=600&q=80",
        images: [
          "https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=600&q=80",
          "https://images.unsplash.com/photo-1601758123927-1963b6f4f0c1?w=600&q=80",
          "https://images.unsplash.com/photo-1588072432836-e10032774350?w=600&q=80",
          "https://images.unsplash.com/photo-1576267423048-15c0040fec78?w=600&q=80",
          "https://images.unsplash.com/photo-1553066886-d1e6a85dd32a?w=600&q=80",
        ],
      },
      {
        id: "act_kp_04",
        title: "Fun City Kids Zone",
        date: "Daily",
        venue: "Chennai",
        price: 250,
        category: "Kids Play",
        image_url:
          "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600&q=80",
        images: [
          "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600&q=80",
          "https://images.unsplash.com/photo-1601758123927-1963b6f4f0c1?w=600&q=80",
          "https://images.unsplash.com/photo-1588072432836-e10032774350?w=600&q=80",
          "https://images.unsplash.com/photo-1576267423048-15c0040fec78?w=600&q=80",
          "https://images.unsplash.com/photo-1553066886-d1e6a85dd32a?w=600&q=80",
        ],
      },
      {
        id: "act_kp_05",
        title: "Kids Adventure Park",
        date: "Daily",
        venue: "Hyderabad",
        price: 350,
        category: "Kids Play",
        image_url:
          "https://images.unsplash.com/photo-1576267423048-15c0040fec78?w=600&q=80",
        images: [
          "https://media.insider.in/image/upload/c_crop,g_custom/v1753090332/ixumv2ubjbq3hjq0wq5z.jpg",
          "https://media.insider.in/image/upload/w_800/v1769084225/yitmvr1iikknn1gjl8so.png",
          "https://media.insider.in/image/upload/w_800/v1761837373/zfaddbqwj4hjcoew5uem.jpg",
          "https://media.insider.in/image/upload/w_800/v1761837364/oxfs5xvnvs5ppsjnuzgt.jpg",
          "https://media.insider.in/image/upload/w_800/v1761837357/qwu2kwvdoxxzyxfxcqxn.jpg",
        ],
      },
      {
        id: "act_kp_06",
        title: "Mini World Play Area",
        date: "Daily",
        venue: "Delhi",
        price: 200,
        category: "Kids Play",
        image_url:
          "https://images.unsplash.com/photo-1588072432836-e10032774350?w=600&q=80",
        images: [
          "https://images.unsplash.com/photo-1588072432836-e10032774350?w=600&q=80",
          "https://images.unsplash.com/photo-1601758123927-1963b6f4f0c1?w=600&q=80",
          "https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=600&q=80",
          "https://images.unsplash.com/photo-1576267423048-15c0040fec78?w=600&q=80",
          "https://images.unsplash.com/photo-1553066886-d1e6a85dd32a?w=600&q=80",
        ],
      },
    ],
  },

  // 6️⃣ WORKSHOPS
  {
    id: "cat_workshops_06",
    title: "Workshops",
    slug: "workshops",
    events: [
      {
        id: "act_ws_01",
        title: "Pottery Workshop",
        date: "Sat & Sun",
        slots: "10:00 AM onwards",
        venue: "Bengaluru",
        city: "Bengaluru",
        price: 799,
        category: "Workshops",
        image_url:
          "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=600&q=80",
        images: [
          "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=600&q=80",
          "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=600&q=80",
          "https://images.unsplash.com/photo-1526318472351-bc6b6cde0c4a?w=600&q=80",
          "https://images.unsplash.com/photo-1600566752227-8f2c7a4d3d21?w=600&q=80",
          "https://images.unsplash.com/photo-1590080875515-8f3a8dc5735e?w=600&q=80",
        ],
      },
      {
        id: "act_ws_02",
        title: "Painting Workshop",
        date: "Mon-Fri",
        venue: "Chennai",
        price: 599,
        category: "Workshops",
        image_url:
          "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=600&q=80",
        images: [
          "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=600&q=80",
          "https://images.unsplash.com/photo-1504198266285-165a3c1d8eae?w=600&q=80",
          "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&q=80",
          "https://images.unsplash.com/photo-1549887534-1541e9326642?w=600&q=80",
          "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600&q=80",
        ],
      },
      {
        id: "act_ws_03",
        title: "Cooking Class",
        date: "Daily",
        venue: "Delhi",
        price: 699,
        category: "Workshops",
        image_url:
          "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=600&q=80",
        images: [
          "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=600&q=80",
          "https://images.unsplash.com/photo-1506368249639-73a05d6f6488?w=600&q=80",
          "https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?w=600&q=80",
          "https://images.unsplash.com/photo-1528715471579-d1bcf0ba5e83?w=600&q=80",
          "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&q=80",
        ],
      },
      {
        id: "act_ws_04",
        title: "Photography Workshop",
        date: "Weekend",
        venue: "Mumbai",
        price: 999,
        category: "Workshops",
        image_url:
          "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&q=80",
        images: [
          "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&q=80",
          "https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=600&q=80",
          "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=600&q=80",
          "https://images.unsplash.com/photo-1519183071298-a2962eadc8b6?w=600&q=80",
          "https://images.unsplash.com/photo-1502920917128-1aa500764b7c?w=600&q=80",
        ],
      },
      {
        id: "act_ws_05",
        title: "Dance Workshop",
        date: "Daily",
        venue: "Hyderabad",
        price: 499,
        category: "Workshops",
        image_url:
          "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?w=600&q=80",
        images: [
          "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?w=600&q=80",
          "https://images.unsplash.com/photo-1521336575822-6da63fb45455?w=600&q=80",
          "https://images.unsplash.com/photo-1515168833906-d2a3b82b1d4c?w=600&q=80",
          "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?w=600&q=80",
          "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=600&q=80",
        ],
      },
      {
        id: "act_ws_06",
        title: "Coding Bootcamp",
        date: "Mon-Fri",
        venue: "Bengaluru",
        price: 1499,
        category: "Workshops",
        image_url:
          "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&q=80",
        images: [
          "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&q=80",
          "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80",
          "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80",
          "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?w=600&q=80",
          "https://images.unsplash.com/photo-1537432376769-00a3f9f9dfb0?w=600&q=80",
        ],
      },
    ],
  },
  // 7️⃣ MUSEUMS
  {
    id: "cat_museums_07",
    title: "Museums",
    slug: "museums",
    events: [
      {
        id: "act_ms_01",
        title: "Museum of Illusions",
        date: "Daily",
        venue: "Delhi",
        price: 590,
        category: "Museums",
        image_url:
          "https://media.insider.in/image/upload/c_crop,g_custom/v1768904208/eqtyybwy4skojbulqw4y.png",
        images: [
          "https://images.unsplash.com/photo-1573053009372-68c9d8f9bcb4?w=600&q=80",
          "https://images.unsplash.com/photo-1526401281623-342c7c1bdb99?w=600&q=80",
          "https://images.unsplash.com/photo-1504198266285-165a3c1d8eae?w=600&q=80",
          "https://images.unsplash.com/photo-1549887534-1541e9326642?w=600&q=80",
          "https://images.unsplash.com/photo-1581093458791-9d15482442f7?w=600&q=80",
        ],
      },
      {
        id: "act_ms_02",
        title: "National Museum",
        date: "Daily",
        venue: "Delhi",
        price: 100,
        category: "Museums",
        image_url:
          "https://images.unsplash.com/photo-1549887534-1541e9326642?w=600&q=80",
        images: [
          "https://images.unsplash.com/photo-1549887534-1541e9326642?w=600&q=80",
          "https://images.unsplash.com/photo-1504198266285-165a3c1d8eae?w=600&q=80",
          "https://images.unsplash.com/photo-1526401281623-342c7c1bdb99?w=600&q=80",
          "https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?w=600&q=80",
          "https://images.unsplash.com/photo-1581093458791-9d15482442f7?w=600&q=80",
        ],
      },
      {
        id: "act_ms_03",
        title: "Science Museum",
        date: "Daily",
        venue: "Bengaluru",
        price: 150,
        category: "Museums",
        image_url:
          "https://images.unsplash.com/photo-1581093458791-9d15482442f7?w=600&q=80",
        images: [
          "https://images.unsplash.com/photo-1581093458791-9d15482442f7?w=600&q=80",
          "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&q=80",
          "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600&q=80",
          "https://images.unsplash.com/photo-1526401281623-342c7c1bdb99?w=600&q=80",
          "https://images.unsplash.com/photo-1549887534-1541e9326642?w=600&q=80",
        ],
      },
      {
        id: "act_ms_04",
        title: "Art Gallery Visit",
        date: "Daily",
        venue: "Mumbai",
        price: 200,
        category: "Museums",
        image_url:
          "https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?w=600&q=80",
        images: [
          "https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?w=600&q=80",
          "https://images.unsplash.com/photo-1504198266285-165a3c1d8eae?w=600&q=80",
          "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&q=80",
          "https://images.unsplash.com/photo-1549887534-1541e9326642?w=600&q=80",
          "https://images.unsplash.com/photo-1526401281623-342c7c1bdb99?w=600&q=80",
        ],
      },
      {
        id: "act_ms_05",
        title: "Rail Museum",
        date: "Daily",
        venue: "Delhi",
        price: 80,
        category: "Museums",
        image_url:
          "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600&q=80",
        images: [
          "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600&q=80",
          "https://images.unsplash.com/photo-1518552787110-2a3d3e0b2f82?w=600&q=80",
          "https://images.unsplash.com/photo-1504198266285-165a3c1d8eae?w=600&q=80",
          "https://images.unsplash.com/photo-1526401281623-342c7c1bdb99?w=600&q=80",
          "https://images.unsplash.com/photo-1549887534-1541e9326642?w=600&q=80",
        ],
      },
      {
        id: "act_ms_06",
        title: "Vintage Car Museum",
        date: "Daily",
        venue: "Jaipur",
        price: 300,
        category: "Museums",
        image_url:
          "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=600&q=80",
        images: [
          "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=600&q=80",
          "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&q=80",
          "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=600&q=80",
          "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?w=600&q=80",
          "https://images.unsplash.com/photo-1504198266285-165a3c1d8eae?w=600&q=80",
        ],
      },
    ],
  },

  // 8️⃣ ADVENTURES
  {
    id: "cat_adventures_08",
    title: "Adventures",
    slug: "adventures",
    events: [
      {
        id: "act_adv_01",
        title: "Go Kart Racing",
        date: "Daily",
        venue: "Gurugram",
        price: 675,
        category: "Adventures",
        image_url:
          "https://media.insider.in/image/upload/c_crop,g_custom/v1771999232/uii7y8iuecbitzclanft.png",
        images: [
          "https://images.unsplash.com/photo-1632245889029-e406faaa34cd?w=600&q=80",
          "https://images.unsplash.com/photo-1599059813005-11265ba4b4ce?w=600&q=80",
          "https://images.unsplash.com/photo-1621891334489-5c6d5c7a9ff6?w=600&q=80",
          "https://images.unsplash.com/photo-1587496679742-bad502958fbf?w=600&q=80",
          "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?w=600&q=80",
        ],
      },
      {
        id: "act_adv_02",
        title: "Zipline Adventure",
        date: "Daily",
        venue: "Manali",
        price: 1200,
        category: "Adventures",
        image_url:
          "https://images.unsplash.com/photo-1533356270992-51bde9b13b3f?w=600&q=80",
        images: [
          "https://images.unsplash.com/photo-1533356270992-51bde9b13b3f?w=600&q=80",
          "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&q=80",
          "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=600&q=80",
          "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600&q=80",
          "https://images.unsplash.com/photo-1504198266285-165a3c1d8eae?w=600&q=80",
        ],
      },
      {
        id: "act_adv_03",
        title: "Bungee Jumping",
        date: "Daily",
        venue: "Rishikesh",
        price: 3500,
        category: "Adventures",
        image_url:
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80",
        images: [
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80",
          "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=600&q=80",
          "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&q=80",
          "https://images.unsplash.com/photo-1523861751933-66e7c4c9d0f3?w=600&q=80",
          "https://images.unsplash.com/photo-1533106418989-88406c7cc8ca?w=600&q=80",
        ],
      },
      {
        id: "act_adv_04",
        title: "Skydiving",
        date: "Daily",
        venue: "Mysore",
        price: 25000,
        category: "Adventures",
        image_url:
          "https://images.unsplash.com/photo-1523861751933-66e7c4c9d0f3?w=600&q=80",
        images: [
          "https://images.unsplash.com/photo-1523861751933-66e7c4c9d0f3?w=600&q=80",
          "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=600&q=80",
          "https://images.unsplash.com/photo-1533106418989-88406c7cc8ca?w=600&q=80",
          "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&q=80",
          "https://images.unsplash.com/photo-1504198266285-165a3c1d8eae?w=600&q=80",
        ],
      },
      {
        id: "act_adv_05",
        title: "Rock Climbing",
        date: "Daily",
        venue: "Bengaluru",
        price: 500,
        category: "Adventures",
        image_url:
          "https://images.unsplash.com/photo-1522163182402-834f871fd851?w=600&q=80",
        images: [
          "https://images.unsplash.com/photo-1522163182402-834f871fd851?w=600&q=80",
          "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600&q=80",
          "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&q=80",
          "https://images.unsplash.com/photo-1504198266285-165a3c1d8eae?w=600&q=80",
          "https://images.unsplash.com/photo-1533106418989-88406c7cc8ca?w=600&q=80",
        ],
      },
      {
        id: "act_adv_06",
        title: "ATV Ride",
        date: "Daily",
        venue: "Goa",
        price: 1500,
        category: "Adventures",
        image_url:
          "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=600&q=80",
        images: [
          "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=600&q=80",
          "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&q=80",
          "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=600&q=80",
          "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600&q=80",
          "https://images.unsplash.com/photo-1504198266285-165a3c1d8eae?w=600&q=80",
        ],
      },
    ],
  },
  // 9️⃣ FARM OUTINGS
  {
    id: "cat_farmoutings_09",
    title: "Farm Outings",
    slug: "farm-outings",
    events: [
      {
        id: "act_fm_01",
        title: "Strawberry Farm Visit",
        date: "Weekend",
        venue: "Mahabaleshwar",
        price: 399,
        category: "Farm Outings",
        image_url:
          "https://images.unsplash.com/photo-1464226184081-280282069ffa?w=600&q=80",
        images: [
          "https://images.unsplash.com/photo-1464226184081-280282069ffa?w=600&q=80",
          "https://images.unsplash.com/photo-1500382017468-6049ebb288e3?w=600&q=80",
          "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=600&q=80",
          "https://images.unsplash.com/photo-1500622944204-b135684e99fd?w=600&q=80",
          "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&q=80",
        ],
      },
      {
        id: "act_fm_02",
        title: "Organic Farm Tour",
        date: "Daily",
        venue: "Bangalore",
        price: 299,
        category: "Farm Outings",
        image_url:
          "https://images.unsplash.com/photo-1500382017468-6049ebb288e3?w=600&q=80",
        images: [
          "https://images.unsplash.com/photo-1500382017468-6049ebb288e3?w=600&q=80",
          "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&q=80",
          "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=600&q=80",
          "https://images.unsplash.com/photo-1500622944204-b135684e99fd?w=600&q=80",
          "https://images.unsplash.com/photo-1464226184081-280282069ffa?w=600&q=80",
        ],
      },
      {
        id: "act_fm_03",
        title: "Dairy Farm Visit",
        date: "Daily",
        venue: "Punjab",
        price: 200,
        category: "Farm Outings",
        image_url:
          "https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=600&q=80",
        images: [
          "https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=600&q=80",
          "https://images.unsplash.com/photo-1464226184081-280282069ffa?w=600&q=80",
          "https://images.unsplash.com/photo-1500382017468-6049ebb288e3?w=600&q=80",
          "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&q=80",
          "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=600&q=80",
        ],
      },
      {
        id: "act_fm_04",
        title: "Village Life Experience",
        date: "Weekend",
        venue: "Tamil Nadu",
        price: 350,
        category: "Farm Outings",
        image_url:
          "https://images.unsplash.com/photo-1500622944204-b135684e99fd?w=600&q=80",
        images: [
          "https://images.unsplash.com/photo-1500622944204-b135684e99fd?w=600&q=80",
          "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&q=80",
          "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=600&q=80",
          "https://images.unsplash.com/photo-1500382017468-6049ebb288e3?w=600&q=80",
          "https://images.unsplash.com/photo-1464226184081-280282069ffa?w=600&q=80",
        ],
      },
      {
        id: "act_fm_05",
        title: "Agri Tourism Visit",
        date: "Daily",
        venue: "Maharashtra",
        price: 450,
        category: "Farm Outings",
        image_url:
          "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&q=80",
        images: [
          "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&q=80",
          "https://images.unsplash.com/photo-1500382017468-6049ebb288e3?w=600&q=80",
          "https://images.unsplash.com/photo-1464226184081-280282069ffa?w=600&q=80",
          "https://images.unsplash.com/photo-1500622944204-b135684e99fd?w=600&q=80",
          "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=600&q=80",
        ],
      },
      {
        id: "act_fm_06",
        title: "Nature Farm Stay",
        date: "Daily",
        venue: "Coorg",
        price: 1200,
        category: "Farm Outings",
        image_url:
          "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=600&q=80",
        images: [
          "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=600&q=80",
          "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&q=80",
          "https://images.unsplash.com/photo-1500382017468-6049ebb288e3?w=600&q=80",
          "https://images.unsplash.com/photo-1464226184081-280282069ffa?w=600&q=80",
          "https://images.unsplash.com/photo-1500622944204-b135684e99fd?w=600&q=80",
        ],
      },
    ],
  },
  {
    id: "cat_gamesquiz_10",
    title: "Games & Quizzes",
    slug: "games-quizzes",
    events: [
      {
        id: "act_gq_01",
        title: "Board Games Cafe",
        date: "Daily",
        venue: "Bengaluru",
        price: 199,
        category: "Games & Quizzes",
        image_url:
          "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=600&q=80",
        images: [
          "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=600&q=80",
          "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=600&q=80",
          "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=600&q=80",
          "https://images.unsplash.com/photo-1580327332925-a10e6cb11baa?w=600&q=80",
          "https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=600&q=80",
        ],
      },
      {
        id: "act_gq_02",
        title: "Escape Room Challenge",
        date: "Daily",
        venue: "Bengaluru",
        price: 599,
        category: "Games & Quizzes",
        image_url:
          "https://images.unsplash.com/photo-1570303540963-c5450b70a49f?w=600&q=80",
        images: [
          "https://images.unsplash.com/photo-1570303540963-c5450b70a49f?w=600&q=80",
          "https://images.unsplash.com/photo-1520975922284-5d1db3f3bfa6?w=600&q=80",
          "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=600&q=80",
          "https://images.unsplash.com/photo-1580327332925-a10e6cb11baa?w=600&q=80",
          "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=600&q=80",
        ],
      },
      {
        id: "act_gq_03",
        title: "Quiz Night",
        date: "Weekend",
        venue: "Delhi",
        price: 150,
        category: "Games & Quizzes",
        image_url:
          "https://images.unsplash.com/photo-1519750157634-b6d493a0f77d?w=600&q=80",
        images: [
          "https://images.unsplash.com/photo-1519750157634-b6d493a0f77d?w=600&q=80",
          "https://images.unsplash.com/photo-1503428593586-e225b39bddfe?w=600&q=80",
          "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80",
          "https://images.unsplash.com/photo-1515168833906-d2a3b82b1d4c?w=600&q=80",
          "https://images.unsplash.com/photo-1553484771-cc0d9b8c2b33?w=600&q=80",
        ],
      },
      {
        id: "act_gq_04",
        title: "Chess Tournament",
        date: "Monthly",
        venue: "Chennai",
        price: 100,
        category: "Games & Quizzes",
        image_url:
          "https://images.unsplash.com/photo-1528819622765-d6bcf132f793?w=600&q=80",
        images: [
          "https://images.unsplash.com/photo-1528819622765-d6bcf132f793?w=600&q=80",
          "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=600&q=80",
          "https://images.unsplash.com/photo-1580327332925-a10e6cb11baa?w=600&q=80",
          "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=600&q=80",
          "https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=600&q=80",
        ],
      },
      {
        id: "act_gq_05",
        title: "Trivia Night",
        date: "Weekly",
        venue: "Mumbai",
        price: 200,
        category: "Games & Quizzes",
        image_url:
          "https://images.unsplash.com/photo-1553484771-cc0d9b8c2b33?w=600&q=80",
        images: [
          "https://images.unsplash.com/photo-1553484771-cc0d9b8c2b33?w=600&q=80",
          "https://images.unsplash.com/photo-1519750157634-b6d493a0f77d?w=600&q=80",
          "https://images.unsplash.com/photo-1503428593586-e225b39bddfe?w=600&q=80",
          "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80",
          "https://images.unsplash.com/photo-1515168833906-d2a3b82b1d4c?w=600&q=80",
        ],
      },
      {
        id: "act_gq_06",
        title: "Puzzle Challenge",
        date: "Daily",
        venue: "Hyderabad",
        price: 120,
        category: "Games & Quizzes",
        image_url:
          "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=600&q=80",
        images: [
          "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=600&q=80",
          "https://images.unsplash.com/photo-1580327332925-a10e6cb11baa?w=600&q=80",
          "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=600&q=80",
          "https://images.unsplash.com/photo-1520975922284-5d1db3f3bfa6?w=600&q=80",
          "https://images.unsplash.com/photo-1553484771-cc0d9b8c2b33?w=600&q=80",
        ],
      },
    ],
  },
];

type Feature = {
  id: string;
  text: string;
};

type Ticket = {
  id: string;
  title: string;
  duration: string;
  originalPrice: number;
  discountedPrice: number;
  discount: string;
  features: Feature[];
};

export const activityTickets: Ticket[] = [
  {
    id: "track-9min",
    title: "Track Time",
    duration: "9 Minutes",
    originalPrice: 750,
    discountedPrice: 675,
    discount: "Flat 10% Off",
    features: [
      { id: "f1", text: "Entry for one person" },
      { id: "f2", text: "Access to 450-meter karting track" },
      { id: "f3", text: "8 minutes session + 1 extra minute" },
      { id: "f4", text: "Unlimited laps within duration" },
      { id: "f5", text: "Safety gear & briefing included" },
      { id: "f6", text: "Venue rules apply" },
    ],
  },
  {
    id: "track-19min",
    title: "Track Time",
    duration: "19 Minutes",
    originalPrice: 1450,
    discountedPrice: 1200,
    discount: "Flat 15% Off",
    features: [
      { id: "f1", text: "Entry for one person" },
      { id: "f2", text: "Access to 450-meter karting track" },
      { id: "f3", text: "16 minutes session + 3 extra minutes" },
      { id: "f4", text: "Unlimited laps within duration" },
      { id: "f5", text: "Safety gear & briefing included" },
      { id: "f6", text: "Venue rules apply" },
    ],
  },
  {
    id: "track-33min",
    title: "Track Time",
    duration: "33 Minutes",
    originalPrice: 2400,
    discountedPrice: 1900,
    discount: "Flat 20% Off",
    features: [
      { id: "f1", text: "Entry for one person" },
      { id: "f2", text: "Access to 450-meter karting track" },
      { id: "f3", text: "28 minutes session + 5 extra minutes" },
      { id: "f4", text: "Unlimited laps within duration" },
      { id: "f5", text: "Safety gear & briefing included" },
      { id: "f6", text: "Venue rules apply" },
    ],
  },
];


export const infiniteScrollData = [
  {
    id: 1,
    image: "https://picsum.photos/id/1011/400/300",
    title: "Live Music Concert",
    description: "Experience an electrifying live performance with top artists."
  },
  {
    id: 2,
    image: "https://picsum.photos/id/1015/400/300",
    title: "Cultural Festival",
    description: "Celebrate traditions, food, and performances from around the world."
  },
  {
    id: 3,
    image: "https://picsum.photos/id/1016/400/300",
    title: "Sports Event",
    description: "Catch the thrill of live sports action in your city."
  },
  {
    id: 4,
    image: "https://picsum.photos/id/1020/400/300",
    title: "Theatre Show",
    description: "Enjoy a captivating drama performance on stage."
  },
  {
    id: 5,
    image: "https://picsum.photos/id/1024/400/300",
    title: "Stand-up Comedy",
    description: "Laugh out loud with top comedians and fresh jokes."
  },
  {
    id: 6,
    image: "https://picsum.photos/id/1027/400/300",
    title: "Creative Workshop",
    description: "Learn new skills with hands-on sessions and experts."
  },
  {
    id: 7,
    image: "https://picsum.photos/id/1035/400/300",
    title: "Art Exhibition",
    description: "Explore stunning artworks from talented creators."
  },
  {
    id: 8,
    image: "https://picsum.photos/id/1039/400/300",
    title: "Food Carnival",
    description: "Taste delicious cuisines from various regions."
  },
  {
    id: 9,
    image: "https://picsum.photos/id/1043/400/300",
    title: "Tech Conference",
    description: "Discover the latest trends in technology and innovation."
  },
  {
    id: 10,
    image: "https://picsum.photos/id/1050/400/300",
    title: "Night Party",
    description: "Enjoy music, dance, and nightlife vibes with friends."
  }
];
