import { NextResponse } from "next/server";

export async function GET() {
  const recommendedHotels = [
    // --- GOA (3 Hotels) ---
    {
      id: "goa-1",
      name: "Azure Horizon Beach Resort",
      description: "Experience luxury at its finest in this stunning beachfront resort. Features panoramic ocean views, a private infinity pool, and world-class dining. Perfect for honeymooners or anyone looking for a serene getaway.",
      type: "Resort",
      city: "Goa",
      state: "Goa",
      address: "123 Coastal Road, Vagator Beach",
      coordinates: { lat: 15.5982, lng: 73.7336 },
      price: { amount: 15500, currency: "INR", period: "night" },
      rating: 4.9,
      reviewCount: 128,
      images: ["https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200"],
      gallery: {
        "Living room": [
          "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1600210491866-e84dec78764b?auto=format&fit=crop&w=1200"
        ],
        "Bedroom": [
          "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=1200"
        ],
        "Kitchen": [
          "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1556911227-4c177e172433?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1556911261-68743685f0f7?auto=format&fit=crop&w=1200"
        ]
      },
      amenities: [
        { id: "wifi", name: "High-speed WiFi", category: "Essential" },
        { id: "pool", name: "Pool", category: "Luxury" }
      ],
      host: { name: "Elena Rodriguez", isSuperhost: true, joinedDate: "2021-03-15", avatar: "https://i.pravatar.cc/150?u=elena" },
      bedrooms: 2, beds: 2, bathrooms: 2, max_guests: 4, pet_friendly: true, type_of_place: "Entire home", unavailableDates: ["2026-05-02", "2026-05-03", "2026-05-04", "2026-05-05", "2026-05-06", "2026-05-07", "2026-05-08", "2026-05-09", "2026-05-10", "2026-05-15", "2026-05-16", "2026-05-17", "2026-05-18", "2026-05-19", "2026-05-20", "2026-05-21", "2026-05-22", "2026-05-23", "2026-05-24", "2026-05-25"], tags: ["Beachfront", "Luxury"], status: "available"
    },
    {
      id: "goa-2",
      name: "Villa Siolim",
      description: "A heritage Portuguese villa restored to provide modern comfort while maintaining its old-world charm. Set in a lush tropical garden with a private courtyard.",
      type: "Villa",
      city: "Siolim",
      state: "Goa",
      address: "Heritage Lane, Siolim",
      coordinates: { lat: 15.6200, lng: 73.7600 },
      price: { amount: 12000, currency: "INR", period: "night" },
      rating: 4.8,
      reviewCount: 45,
      images: ["https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200"],
      gallery: {
        "Garden": [
          "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1583163773177-33a8712a20ca?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1595872245019-f002fd5035ae?auto=format&fit=crop&w=1200"
        ],
        "Interior": [
          "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1616489953149-86ec1840e6c1?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1616489953146-2490d1952e4a?auto=format&fit=crop&w=1200"
        ],
        "Rooms": [
          "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1598928636135-d146006ff4be?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=1200"
        ]
      },
      amenities: [
        { id: "wifi", name: "High-speed WiFi", category: "Essential" },
        { id: "kitchen", name: "Kitchen", category: "Essential" }
      ],
      host: { name: "Marco Souza", isSuperhost: false, joinedDate: "2020-05-12", avatar: "https://i.pravatar.cc/150?u=marco" },
      bedrooms: 4, beds: 4, bathrooms: 4, max_guests: 8, pet_friendly: false, type_of_place: "Entire home", unavailableDates: [], tags: ["Heritage", "Quiet"], status: "available"
    },
    {
      id: "goa-3",
      name: "Palolem eco-stay",
      description: "Stay close to nature in these sustainable bamboo huts just steps away from the tranquil Palolem beach. Ideal for backpackers and eco-conscious travelers.",
      type: "Eco Lodge",
      city: "Palolem",
      state: "Goa",
      address: "Palolem Beach South",
      coordinates: { lat: 15.0100, lng: 74.0300 },
      price: { amount: 3500, currency: "INR", period: "night" },
      rating: 4.6,
      reviewCount: 92,
      images: ["https://images.unsplash.com/photo-1505881502353-a1986add3732?auto=format&fit=crop&w=1200"],
      gallery: {
        "Hut View": [
          "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200"
        ],
        "Beach": [
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200"
        ],
        "Common Area": [
          "https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=1200"
        ]
      },
      amenities: [
        { id: "wifi", name: "High-speed WiFi", category: "Essential" }
      ],
      host: { name: "Anjali Rao", isSuperhost: true, joinedDate: "2023-01-10", avatar: "https://i.pravatar.cc/150?u=anjali" },
      bedrooms: 1, beds: 1, bathrooms: 1, max_guests: 2, pet_friendly: true, type_of_place: "Room", unavailableDates: [], tags: ["Eco-friendly", "Beach"], status: "available"
    },

    // --- RAJASTHAN (3 Hotels) ---
    {
      id: "raj-1",
      name: "The Oberoi Udaivilas",
      description: "A luxury city resort in Udaipur. Built on the 200-year-old hunting grounds of the Maharana of Mewar, it offers grand architecture and unparalleled service.",
      type: "Palace Resort",
      city: "Udaipur",
      state: "Rajasthan",
      address: "Haridasji Ki Magri, Udaipur",
      coordinates: { lat: 24.5765, lng: 73.6666 },
      price: { amount: 35000, currency: "INR", period: "night" },
      rating: 4.95,
      reviewCount: 310,
      images: ["https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?auto=format&fit=crop&w=1200"],
      gallery: {
        "Royal Suites": [
          "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1595181829924-823fc67251fa?auto=format&fit=crop&w=1200"
        ],
        "Pools": [
          "https://images.unsplash.com/photo-1551882547-ff40c0d588fa?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200"
        ],
        "Courtyards": [
          "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1551882547-ff40c0d588fa?auto=format&fit=crop&w=1200"
        ]
      },
      amenities: [
        { id: "wifi", name: "High-speed WiFi", category: "Essential" },
        { id: "pool", name: "Pool", category: "Luxury" },
        { id: "gym", name: "Gym", category: "Wellness" }
      ],
      host: { name: "Oberoi Group", isSuperhost: true, joinedDate: "2015-01-01", avatar: "https://i.pravatar.cc/150?u=oberoi" },
      bedrooms: 1, beds: 1, bathrooms: 1, max_guests: 2, pet_friendly: false, type_of_place: "Room", unavailableDates: ["2026-05-02", "2026-05-03", "2026-05-04", "2026-05-05", "2026-05-06", "2026-05-07", "2026-05-08", "2026-05-09", "2026-05-10", "2026-05-15", "2026-05-16", "2026-05-17", "2026-05-18", "2026-05-19", "2026-05-20", "2026-05-21", "2026-05-22", "2026-05-23", "2026-05-24", "2026-05-25"], tags: ["Palace", "Lake View"], status: "available"
    },
    {
      id: "raj-2",
      name: "Desert Night Camp",
      description: "Experience the magic of the Thar desert under the stars. Luxury tents with all modern amenities, camel safaris, and traditional folk music.",
      type: "Desert Camp",
      city: "Jaisalmer",
      state: "Rajasthan",
      address: "Sam Sand Dunes, Jaisalmer",
      coordinates: { lat: 26.9157, lng: 70.9160 },
      price: { amount: 8500, currency: "INR", period: "night" },
      rating: 4.7,
      reviewCount: 156,
      images: ["https://images.unsplash.com/photo-1505886617061-396561f5f3e9?auto=format&fit=crop&w=1200"],
      gallery: {
        "Tents": [
          "https://images.unsplash.com/photo-1496102434273-049539308cc5?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1486915307544-b1ae73221ae4?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200"
        ],
        "Desert Safaris": [
          "https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200"
        ],
        "Dinner Setup": [
          "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1551882547-ff40c0d588fa?auto=format&fit=crop&w=1200"
        ]
      },
      amenities: [
        { id: "wifi", name: "Limited WiFi", category: "Essential" },
        { id: "utensils", name: "Dinner Included", category: "Essential" }
      ],
      host: { name: "Kabir Khan", isSuperhost: true, joinedDate: "2018-03-20", avatar: "https://i.pravatar.cc/150?u=kabir" },
      bedrooms: 1, beds: 2, bathrooms: 1, max_guests: 4, pet_friendly: true, type_of_place: "Room", unavailableDates: [], tags: ["Adventure", "Desert"], status: "available"
    },
    {
      id: "raj-3",
      name: "Heritage Haveli Suites",
      description: "Step back in time in this restored 19th-century Haveli in the heart of the old city. Experience royal hospitality.",
      type: "Heritage Home",
      city: "Jaipur",
      state: "Rajasthan",
      address: "Johari Bazaar, Old City",
      coordinates: { lat: 26.9124, lng: 75.7873 },
      price: { amount: 12000, currency: "INR", period: "night" },
      rating: 4.9,
      reviewCount: 56,
      images: ["https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?auto=format&fit=crop&w=1200"],
      gallery: {
        "Living room": [
          "https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200"
        ],
        "Courtyard": [
          "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1551882547-ff40c0d588fa?auto=format&fit=crop&w=1200"
        ],
        "Suites": [
          "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1591088398332-8a77d399e80c?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200"
        ]
      },
      amenities: [
        { id: "wifi", name: "High-speed WiFi", category: "Essential" },
        { id: "pool", name: "Pool", category: "Luxury" }
      ],
      host: { name: "Vikram Singh", isSuperhost: true, joinedDate: "2020-08-05", avatar: "https://i.pravatar.cc/150?u=vikram" },
      bedrooms: 5, beds: 6, bathrooms: 4, max_guests: 12, pet_friendly: false, type_of_place: "Entire home", unavailableDates: [], tags: ["Palace", "Culture"], status: "available"
    },

    // --- KERALA (3 Hotels) ---
    {
      id: "ker-1",
      name: "Kumarakom Lake Resort",
      description: "One of India's finest luxury resorts, set against the backdrop of the backwaters. Famous for its authentic Keralite architecture and luxury houseboats.",
      type: "Backwater Resort",
      city: "Kumarakom",
      state: "Kerala",
      address: "Kottayam, Kumarakom",
      coordinates: { lat: 9.5910, lng: 76.4260 },
      price: { amount: 22000, currency: "INR", period: "night" },
      rating: 4.9,
      reviewCount: 215,
      images: ["https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200"],
      gallery: {
        "Backwater Views": [
          "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1528605248644-14dd04cb21c7?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200"
        ],
        "Eco Villas": [
          "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200"
        ],
        "Pools": [
          "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1551882547-ff40c0d588fa?auto=format&fit=crop&w=1200"
        ]
      },
      amenities: [
        { id: "wifi", name: "High-speed WiFi", category: "Essential" },
        { id: "pool", name: "Luxury Pool", category: "Luxury" }
      ],
      host: { name: "Kerala Heritage", isSuperhost: true, joinedDate: "2017-09-15", avatar: "https://i.pravatar.cc/150?u=kerala" },
      bedrooms: 1, beds: 2, bathrooms: 1, max_guests: 3, pet_friendly: false, type_of_place: "Room", unavailableDates: [], tags: ["Backwaters", "Spa"], status: "available"
    },
    {
      id: "ker-2",
      name: "The Wayside Inn",
      description: "A charming boutique hotel in the heart of Munnar's tea plantations. Wake up to the mist and the scent of fresh tea leaves.",
      type: "Boutique Hotel",
      city: "Munnar",
      state: "Kerala",
      address: "Tea Estate Road, Munnar",
      coordinates: { lat: 10.0889, lng: 77.0595 },
      price: { amount: 7800, currency: "INR", period: "night" },
      rating: 4.7,
      reviewCount: 134,
      images: ["https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200"],
      gallery: {
        "Tea Garden Views": [
          "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1532708059644-5590ed51ce4c?auto=format&fit=crop&w=1200"
        ],
        "Cozy Rooms": [
          "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200"
        ],
        "Dining": [
          "https://images.unsplash.com/photo-1556911227-4c177e172433?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1556911261-68743685f0f7?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200"
        ]
      },
      amenities: [
        { id: "wifi", name: "High-speed WiFi", category: "Essential" },
        { id: "utensils", name: "Restaurant", category: "Essential" }
      ],
      host: { name: "Thomas Kutty", isSuperhost: true, joinedDate: "2019-11-10", avatar: "https://i.pravatar.cc/150?u=thomas" },
      bedrooms: 2, beds: 2, bathrooms: 2, max_guests: 4, pet_friendly: false, type_of_place: "Entire home", unavailableDates: [], tags: ["Mountains", "Nature"], status: "available"
    },
    {
      id: "ker-3",
      name: "Coconut Grove Homestay",
      description: "Experience true Keralite hospitality in this ancestral home surrounded by thousand-year-old palm trees. Traditional home-cooked meals included.",
      type: "Homestay",
      city: "Alleppey",
      state: "Kerala",
      address: "North Alleppey, Backwater Road",
      coordinates: { lat: 9.4981, lng: 76.3329 },
      price: { amount: 4500, currency: "INR", period: "night" },
      rating: 4.85,
      reviewCount: 78,
      images: ["https://images.unsplash.com/photo-1512100356956-c122ddc5c246?auto=format&fit=crop&w=1200"],
      gallery: {
        "House": [
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1600210491866-e84dec78764b?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200"
        ],
        "Food": [
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200"
        ],
        "Environs": [
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1505881502353-a1986add3732?auto=format&fit=crop&w=1200"
        ]
      },
      amenities: [
        { id: "wifi", name: "High-speed WiFi", category: "Essential" },
        { id: "utensils", name: "Home Cooking", category: "Essential" }
      ],
      host: { name: "Leela Amma", isSuperhost: true, joinedDate: "2021-02-14", avatar: "https://i.pravatar.cc/150?u=leela" },
      bedrooms: 1, beds: 1, bathrooms: 1, max_guests: 2, pet_friendly: true, type_of_place: "Room", unavailableDates: [], tags: ["Authentic", "Quiet"], status: "available"
    },

    // --- HIMACHAL PRADESH (3 Hotels) ---
    {
      id: "hp-1",
      name: "The Cedar Peak Lodge",
      description: "A cozy, authentic log cabin nestled in the heart of the Himalayas. Ideal for adventure seekers and nature lovers.",
      type: "Cabin",
      city: "Manali",
      state: "Himachal Pradesh",
      address: "Old Manali, Near Hadimba Temple",
      coordinates: { lat: 32.2475, lng: 77.1892 },
      price: { amount: 4200, currency: "INR", period: "night" },
      rating: 4.7,
      reviewCount: 185,
      images: ["https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200"],
      gallery: {
        "Living room": [
          "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1600585154542-6379b1d9773a?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1600210491369-e753d80a41f3?auto=format&fit=crop&w=1200"
        ],
        "Bedroom": [
          "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1560184897-ae75f418493e?auto=format&fit=crop&w=1200"
        ],
        "Scenic": [
          "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1532708059644-5590ed51ce4c?auto=format&fit=crop&w=1200"
        ]
      },
      amenities: [
        { id: "wifi", name: "High-speed WiFi", category: "Essential" },
        { id: "pool", name: "Heated Pool", category: "Luxury" }
      ],
      host: { name: "Arjun Sharma", isSuperhost: false, joinedDate: "2022-06-10", avatar: "https://i.pravatar.cc/150?u=arjun" },
      bedrooms: 3, beds: 3, bathrooms: 3, max_guests: 6, pet_friendly: false, type_of_place: "Entire home", unavailableDates: ["2026-05-02", "2026-05-03", "2026-05-04", "2026-05-05", "2026-05-06", "2026-05-07", "2026-05-08", "2026-05-09", "2026-05-10", "2026-05-15", "2026-05-16", "2026-05-17", "2026-05-18", "2026-05-19", "2026-05-20", "2026-05-21", "2026-05-22", "2026-05-23", "2026-05-24", "2026-05-25"], tags: ["Mountains", "Cosy"], status: "available"
    },
    {
      id: "hp-2",
      name: "Wildflower Hall",
      description: "Formerly the residence of Lord Kitchener, Wildflower Hall exudes the ambience of a grand stately home in the Shimla mountains.",
      type: "Luxury Resort",
      city: "Shimla",
      state: "Himachal Pradesh",
      address: "Chharabra, Shimla",
      coordinates: { lat: 31.1048, lng: 77.1734 },
      price: { amount: 28000, currency: "INR", period: "night" },
      rating: 4.9,
      reviewCount: 312,
      images: ["https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200"],
      gallery: {
        "Library": [
          "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200"
        ],
        "Spa Area": [
          "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200"
        ],
        "Mountain Rooms": [
          "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200"
        ]
      },
      amenities: [
        { id: "wifi", name: "High-speed WiFi", category: "Essential" },
        { id: "gym", name: "Fitness Center", category: "Wellness" }
      ],
      host: { name: "Oberoi Properties", isSuperhost: true, joinedDate: "2016-03-22", avatar: "https://i.pravatar.cc/150?u=oberoi2" },
      bedrooms: 1, beds: 1, bathrooms: 1, max_guests: 2, pet_friendly: false, type_of_place: "Room", unavailableDates: [], tags: ["History", "Luxury"], status: "available"
    },
    {
      id: "hp-3",
      name: "The Himalayan Village",
      description: "Authentic Kath-Kuni architecture with modern luxury in the Parvati Valley. Experience the real Himachal culture.",
      type: "Eco Resort",
      city: "Kasol",
      state: "Himachal Pradesh",
      address: "Parvati Valley, Kasol",
      coordinates: { lat: 31.9790, lng: 77.2954 },
      price: { amount: 14000, currency: "INR", period: "night" },
      rating: 4.8,
      reviewCount: 145,
      images: ["https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200"],
      gallery: {
        "Wood Huts": [
          "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1551882547-ff40c0d588fa?auto=format&fit=crop&w=1200"
        ],
        "Riverside": [
          "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200"
        ],
        "Local Decor": [
          "https://images.unsplash.com/photo-1556911227-4c177e172433?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1556911261-68743685f0f7?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200"
        ]
      },
      amenities: [
        { id: "wifi", name: "High-speed WiFi", category: "Essential" },
        { id: "pool", name: "Steam Room", category: "Wellness" }
      ],
      host: { name: "Rajat Negi", isSuperhost: true, joinedDate: "2018-05-18", avatar: "https://i.pravatar.cc/150?u=rajat" },
      bedrooms: 2, beds: 2, bathrooms: 2, max_guests: 4, pet_friendly: true, type_of_place: "Entire home", unavailableDates: [], tags: ["Authentic", "Peaceful"], status: "available"
    },

    // --- KARNATAKA (3 Hotels) ---
    {
      id: "kar-1",
      name: "Metropolis Loft Apartment",
      description: "Sleek, modern living in the bustling center of Bangalore's tech hub.",
      type: "Apartment",
      city: "Bangalore",
      state: "Karnataka",
      address: "Indiranagar 100ft Road",
      coordinates: { lat: 12.9716, lng: 77.5946 },
      price: { amount: 8900, currency: "INR", period: "night" },
      rating: 4.8,
      reviewCount: 220,
      images: ["https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200"],
      gallery: {
        "Living room": [
          "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200"
        ],
        "Bedroom": [
          "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1522708323590-d24dab6ae574?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200"
        ],
        "Kitchen": [
          "https://images.unsplash.com/photo-1556911177-f212752ae491?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1556911227-4c177e172433?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1556911261-68743685f0f7?auto=format&fit=crop&w=1200"
        ]
      },
      amenities: [
        { id: "wifi", name: "High-speed WiFi", category: "Essential" }
      ],
      host: { name: "Priya Das", isSuperhost: true, joinedDate: "2019-11-22", avatar: "https://i.pravatar.cc/150?u=priya" },
      bedrooms: 4, beds: 4, bathrooms: 1, max_guests: 9, pet_friendly: false, type_of_place: "Entire home", unavailableDates: [], tags: ["Modern", "Center"], status: "available"
    },
    {
      id: "kar-2",
      name: "Evolve Back Coorg",
      description: "Set in a 300-acre coffee and spice plantation, this resort offers a unique blend of nature and luxury.",
      type: "Resort",
      city: "Coorg",
      state: "Karnataka",
      address: "Sidhapur, Coorg",
      coordinates: { lat: 12.3375, lng: 75.8450 },
      price: { amount: 26000, currency: "INR", period: "night" },
      rating: 4.9,
      reviewCount: 345,
      images: ["https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200"],
      gallery: {
        "Private Pool Villas": [
          "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200"
        ],
        "Spice Plantation": [
          "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1532708059644-5590ed51ce4c?auto=format&fit=crop&w=1200"
        ],
        "Restaurant": [
          "https://images.unsplash.com/photo-1556911227-4c177e172433?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1556911261-68743685f0f7?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200"
        ]
      },
      amenities: [
        { id: "wifi", name: "High-speed WiFi", category: "Essential" },
        { id: "pool", name: "Private Pool", category: "Luxury" }
      ],
      host: { name: "Nature Resorts", isSuperhost: true, joinedDate: "2015-05-15", avatar: "https://i.pravatar.cc/150?u=nature" },
      bedrooms: 1, beds: 2, bathrooms: 2, max_guests: 4, pet_friendly: false, type_of_place: "Room", unavailableDates: [], tags: ["Nature", "Luxury"], status: "available"
    },
    {
      id: "kar-3",
      name: "The Tamarind Tree",
      description: "A heritage boutique hotel on the outskirts of Bangalore. With its antique furniture and serene atmosphere, it's a world away from the city.",
      type: "Boutique Resort",
      city: "Bangalore Rural",
      state: "Karnataka",
      address: "Kanakapura Road, Bangalore",
      coordinates: { lat: 12.8200, lng: 77.5400 },
      price: { amount: 15000, currency: "INR", period: "night" },
      rating: 4.8,
      reviewCount: 68,
      images: ["https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200"],
      gallery: {
        "Pavilions": [
          "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1551882547-ff40c0d588fa?auto=format&fit=crop&w=1200"
        ],
        "Gardens": [
          "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1583163773177-33a8712a20ca?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1595872245019-f002fd5035ae?auto=format&fit=crop&w=1200"
        ],
        "Suites": [
          "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1598928636135-d146006ff4be?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200"
        ]
      },
      amenities: [
        { id: "wifi", name: "High-speed WiFi", category: "Essential" },
        { id: "kitchen", name: "Kitchen", category: "Essential" }
      ],
      host: { name: "Ananth Hegde", isSuperhost: true, joinedDate: "2018-02-10", avatar: "https://i.pravatar.cc/150?u=ananth" },
      bedrooms: 2, beds: 2, bathrooms: 2, max_guests: 4, pet_friendly: true, type_of_place: "Entire home", unavailableDates: [], tags: ["Heritage", "Quiet"], status: "available"
    },

    // --- TAMIL NADU (3 Hotels) ---
    {
      id: "tn-1",
      name: "The Tamara Kodai",
      description: "Tucked away in the greenery of Kodaikanal, this resort offers breathtaking views and complete seclusion.",
      type: "Hill Resort",
      city: "Kodaikanal",
      state: "Tamil Nadu",
      address: "La Providence, Kodaikanal",
      coordinates: { lat: 10.2381, lng: 77.4892 },
      price: { amount: 18000, currency: "INR", period: "night" },
      rating: 4.85,
      reviewCount: 156,
      images: ["https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200"],
      gallery: {
        "Wood Huts": [
          "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1532708059644-5590ed51ce4c?auto=format&fit=crop&w=1200"
        ],
        "Mountain Deck": [
          "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200"
        ],
        "Inner Lounge": [
          "https://images.unsplash.com/photo-1556911227-4c177e172433?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1556911261-68743685f0f7?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200"
        ]
      },
      amenities: [
        { id: "wifi", name: "High-speed WiFi", category: "Essential" },
        { id: "pool", name: "Heated Pool", category: "Luxury" }
      ],
      host: { name: "Tamara Hotels", isRedactor: true, joinedDate: "2016-01-20", avatar: "https://i.pravatar.cc/150?u=tamara" },
      bedrooms: 1, beds: 2, bathrooms: 1, max_guests: 3, pet_friendly: false, type_of_place: "Room", unavailableDates: [], tags: ["Mountains", "Luxury"], status: "available"
    },
    {
      id: "tn-2",
      name: "Radisson Blu Resort Temple Bay",
      description: "Located on the shores of Mamallapuram, this resort is famous for its massive pool and proximity to the Shore Temple.",
      type: "Beach Resort",
      city: "Mahabalipuram",
      state: "Tamil Nadu",
      address: "Shore Temple Road, Mahabalipuram",
      coordinates: { lat: 12.6269, lng: 80.1927 },
      price: { amount: 14500, currency: "INR", period: "night" },
      rating: 4.75,
      reviewCount: 289,
      images: ["https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200"],
      gallery: {
        "Longest Pool": [
          "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1551882547-ff40c0d588fa?auto=format&fit=crop&w=1200"
        ],
        "Sea View Rooms": [
          "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1598928636135-d146006ff4be?auto=format&fit=crop&w=1200"
        ],
        "Beach Access": [
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200"
        ]
      },
      amenities: [
        { id: "wifi", name: "High-speed WiFi", category: "Essential" },
        { id: "pool", name: "Infinity Pool", category: "Luxury" }
      ],
      host: { name: "Radisson Blu", isSuperhost: true, joinedDate: "2015-08-30", avatar: "https://i.pravatar.cc/150?u=radisson" },
      bedrooms: 1, beds: 1, bathrooms: 1, max_guests: 2, pet_friendly: false, type_of_place: "Room", unavailableDates: [], tags: ["Beach", "Heritage"], status: "available"
    },
    {
      id: "tn-3",
      name: "Heritage Madurai",
      description: "A luxury resort that captures the essence of Madurai's rich heritage. Built by British architect Geoffrey Bawa.",
      type: "Heritage Resort",
      city: "Madurai",
      state: "Tamil Nadu",
      address: "Melakkal Road, Madurai",
      coordinates: { lat: 9.9252, lng: 78.1198 },
      price: { amount: 11000, currency: "INR", period: "night" },
      rating: 4.8,
      reviewCount: 94,
      images: ["https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200"],
      gallery: {
        "Bawa Architecture": [
          "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1551882547-ff40c0d588fa?auto=format&fit=crop&w=1200"
        ],
        "Private Pool Villas": [
          "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1551882547-ff40c0d588fa?auto=format&fit=crop&w=1200"
        ],
        "Dining Hall": [
          "https://images.unsplash.com/photo-1556911227-4c177e172433?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1556911261-68743685f0f7?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200"
        ]
      },
      amenities: [
        { id: "wifi", name: "High-speed WiFi", category: "Essential" },
        { id: "pool", name: "Sunken Pool", category: "Luxury" }
      ],
      host: { name: "Madurai Luxury", isSuperhost: true, joinedDate: "2018-04-12", avatar: "https://i.pravatar.cc/150?u=madurai" },
      bedrooms: 1, beds: 1, bathrooms: 1, max_guests: 2, pet_friendly: false, type_of_place: "Room", unavailableDates: [], tags: ["Heritage", "Art"], status: "available"
    },

    // --- UTTAR PRADESH (3 Hotels) ---
    {
      id: "up-1",
      name: "The Oberoi Amarvilas",
      description: "Located just 600 meters from the Taj Mahal, this luxury hotel offers breathtaking views of the monument from every room.",
      type: "Luxury Palace",
      city: "Agra",
      state: "Uttar Pradesh",
      address: "Taj East Gate Road, Agra",
      coordinates: { lat: 27.1685, lng: 78.0421 },
      price: { amount: 45000, currency: "INR", period: "night" },
      rating: 4.98,
      reviewCount: 412,
      images: ["https://images.unsplash.com/photo-1548013146-72479768bbaa?auto=format&fit=crop&w=1200"],
      gallery: {
        "Taj View Rooms": [
          "https://images.unsplash.com/photo-1548013146-72479768bbaa?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200"
        ],
        "Royal Grounds": [
          "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1551882547-ff40c0d588fa?auto=format&fit=crop&w=1200"
        ],
        "Pool & Spa": [
          "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1551882547-ff40c0d588fa?auto=format&fit=crop&w=1200"
        ]
      },
      amenities: [
        { id: "wifi", name: "High-speed WiFi", category: "Essential" },
        { id: "pool", name: "Infinity Pool", category: "Luxury" }
      ],
      host: { name: "Oberoi Agra", isSuperhost: true, joinedDate: "2014-06-18", avatar: "https://i.pravatar.cc/150?u=agra" },
      bedrooms: 1, beds: 1, bathrooms: 1, max_guests: 2, pet_friendly: false, type_of_place: "Room", unavailableDates: [], tags: ["Taj View", "Luxury"], status: "available"
    },
    {
      id: "up-2",
      name: "Brij Rama Palace",
      description: "A heritage hotel set in a 210-year-old palace on the banks of the Ganges. Experience the spiritual essence of Varanasi.",
      type: "Heritage Palace",
      city: "Varanasi",
      state: "Uttar Pradesh",
      address: "Darbhanga Ghat, Varanasi",
      coordinates: { lat: 25.3075, lng: 83.0110 },
      price: { amount: 18500, currency: "INR", period: "night" },
      rating: 4.88,
      reviewCount: 142,
      images: ["https://images.unsplash.com/photo-1561212044-bac5ef688a07?auto=format&fit=crop&w=1200"],
      gallery: {
        "Ganges View": [
          "https://images.unsplash.com/photo-1561212044-bac5ef688a07?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200"
        ],
        "Palace Interior": [
          "https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200"
        ],
        "Suites": [
          "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1591088398332-8a77d399e80c?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200"
        ]
      },
      amenities: [
        { id: "wifi", name: "High-speed WiFi", category: "Essential" },
        { id: "utensils", name: "Traditional Dining", category: "Essential" }
      ],
      host: { name: "Brij Hotels", isSuperhost: true, joinedDate: "2017-02-14", avatar: "https://i.pravatar.cc/150?u=brij" },
      bedrooms: 1, beds: 1, bathrooms: 1, max_guests: 2, pet_friendly: false, type_of_place: "Room", unavailableDates: [], tags: ["Ganges", "Spiritual"], status: "available"
    },
    {
      id: "up-3",
      name: "The Clarks Varanasi",
      description: "One of the oldest hotels in Varanasi, offering a blend of modern amenities and traditional charm.",
      type: "Classic Hotel",
      city: "Varanasi",
      state: "Uttar Pradesh",
      address: "The Mall Road, Varanasi",
      coordinates: { lat: 25.3340, lng: 82.9820 },
      price: { amount: 6500, currency: "INR", period: "night" },
      rating: 4.6,
      reviewCount: 88,
      images: ["https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200"],
      gallery: {
        "Rooms": [
          "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200"
        ],
        "Lobby": [
          "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1551882547-ff40c0d588fa?auto=format&fit=crop&w=1200"
        ],
        "Garden Area": [
          "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1583163773177-33a8712a20ca?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1595872245019-f002fd5035ae?auto=format&fit=crop&w=1200"
        ]
      },
      amenities: [
        { id: "wifi", name: "High-speed WiFi", category: "Essential" },
        { id: "pool", name: "Outdoor Pool", category: "Luxury" }
      ],
      host: { name: "Clarks Group", isSuperhost: false, joinedDate: "2015-09-12", avatar: "https://i.pravatar.cc/150?u=clarks" },
      bedrooms: 1, beds: 2, bathrooms: 1, max_guests: 3, pet_friendly: false, type_of_place: "Room", unavailableDates: [], tags: ["Classic", "Central"], status: "available"
    },

    // --- WEST BENGAL (3 Hotels) ---
    {
      id: "wb-1",
      name: "The Oberoi Grand",
      description: "Affectionately known as the 'Grand Dame of Chowringhee', this classic luxury hotel captures the essence of colonial Kolkata.",
      type: "Colonial Palace",
      city: "Kolkata",
      state: "West Bengal",
      address: "Jawaharlal Nehru Road, Kolkata",
      coordinates: { lat: 22.5600, lng: 88.3500 },
      price: { amount: 12500, currency: "INR", period: "night" },
      rating: 4.9,
      reviewCount: 312,
      images: ["https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200"],
      gallery: {
        "Classic Rooms": [
          "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1551882547-ff40c0d588fa?auto=format&fit=crop&w=1200"
        ],
        "Pool & Courtyard": [
          "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1551882547-ff40c0d588fa?auto=format&fit=crop&w=1200"
        ],
        "Grand Lobby": [
          "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1551882547-ff40c0d588fa?auto=format&fit=crop&w=1200"
        ]
      },
      amenities: [
        { id: "wifi", name: "High-speed WiFi", category: "Essential" },
        { id: "pool", name: "Luxury Pool", category: "Luxury" }
      ],
      host: { name: "Oberoi Kolkata", isSuperhost: true, joinedDate: "2013-05-10", avatar: "https://i.pravatar.cc/150?u=kolkata" },
      bedrooms: 1, beds: 1, bathrooms: 1, max_guests: 2, pet_friendly: false, type_of_place: "Room", unavailableDates: [], tags: ["Heritage", "City Center"], status: "available"
    },
    {
      id: "wb-2",
      name: "Mayfair Palm Beach Resort",
      description: "A luxury beach resort overlooking the Bay of Bengal. Famous for its white sand beach and lighthouse views.",
      type: "Beach Resort",
      city: "Gopalpur",
      state: "West Bengal",
      address: "Gopalpur-on-Sea",
      coordinates: { lat: 19.2600, lng: 84.9100 },
      price: { amount: 9500, currency: "INR", period: "night" },
      rating: 4.7,
      reviewCount: 96,
      images: ["https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200"],
      gallery: {
        "Beach Front": [
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200"
        ],
        "Suites": [
          "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1598928636135-d146006ff4be?auto=format&fit=crop&w=1200"
        ],
        "Palm Gardens": [
          "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1583163773177-33a8712a20ca?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1595872245019-f002fd5035ae?auto=format&fit=crop&w=1200"
        ]
      },
      amenities: [
        { id: "wifi", name: "High-speed WiFi", category: "Essential" },
        { id: "pool", name: "Infinity Pool", category: "Luxury" }
      ],
      host: { name: "Mayfair Hotels", isSuperhost: true, joinedDate: "2016-08-20", avatar: "https://i.pravatar.cc/150?u=mayfair" },
      bedrooms: 1, beds: 1, bathrooms: 1, max_guests: 2, pet_friendly: true, type_of_place: "Room", unavailableDates: [], tags: ["Beach", "Serene"], status: "available"
    },
    {
      id: "wb-3",
      name: "Glenburn Tea Estate",
      description: "A luxury plantation retreat in the foothills of the Himalayas. Experience the life of a colonial tea planter.",
      type: "Plantation Retreat",
      city: "Darjeeling",
      state: "West Bengal",
      address: "Darjeeling Tea Estate",
      coordinates: { lat: 27.0360, lng: 88.2627 },
      price: { amount: 24000, currency: "INR", period: "night" },
      rating: 4.95,
      reviewCount: 48,
      images: ["https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200"],
      gallery: {
        "Tea Fields": [
          "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1532708059644-5590ed51ce4c?auto=format&fit=crop&w=1200"
        ],
        "Bungalow Rooms": [
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1600210491866-e84dec78764b?auto=format&fit=crop&w=1200"
        ],
        "River Deck": [
          "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200"
        ]
      },
      amenities: [
        { id: "wifi", name: "High-speed WiFi", category: "Essential" },
        { id: "utensils", name: "Gourmet Dining", category: "Essential" }
      ],
      host: { name: "Glenburn Estate", isSuperhost: true, joinedDate: "2012-04-15", avatar: "https://i.pravatar.cc/150?u=glenburn" },
      bedrooms: 1, beds: 1, bathrooms: 1, max_guests: 2, pet_friendly: false, type_of_place: "Room", unavailableDates: [], tags: ["Tea", "Mountains"], status: "available"
    },

    // --- UTTARAKHAND (3 Hotels) ---
    {
      id: "uk-1",
      name: "Ananda in the Himalayas",
      description: "A world-renowned wellness retreat set in the former palace estate of the Maharaja of Tehri-Garhwal.",
      type: "Wellness Retreat",
      city: "Rishikesh",
      state: "Uttarakhand",
      address: "The Palace Estate, Narendra Nagar",
      coordinates: { lat: 30.1500, lng: 78.3300 },
      price: { amount: 38000, currency: "INR", period: "night" },
      rating: 4.96,
      reviewCount: 345,
      images: ["https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200"],
      gallery: {
        "Yoga Pavilion": [
          "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1524860769472-246b6afea403?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1512100356956-c122ddc5c246?auto=format&fit=crop&w=1200"
        ],
        "Spa Suites": [
          "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1551882547-ff40c0d588fa?auto=format&fit=crop&w=1200"
        ],
        "Royal Grounds": [
          "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1551882547-ff40c0d588fa?auto=format&fit=crop&w=1200"
        ]
      },
      amenities: [
        { id: "wifi", name: "High-speed WiFi", category: "Essential" },
        { id: "pool", name: "Infinity Pool", category: "Luxury" }
      ],
      host: { name: "Ananda Spa", isSuperhost: true, joinedDate: "2015-02-14", avatar: "https://i.pravatar.cc/150?u=ananda" },
      bedrooms: 1, beds: 1, bathrooms: 1, max_guests: 2, pet_friendly: false, type_of_place: "Room", unavailableDates: [], tags: ["Wellness", "Spiritual"], status: "available"
    },
    {
      id: "uk-2",
      name: "The Savoy, Mussoorie",
      description: "A historic luxury hotel in Mussoorie. With its high ceilings and grand arches, it's a testament to the town's colonial past.",
      type: "Heritage Hotel",
      city: "Mussoorie",
      state: "Uttarakhand",
      address: "Library Bazar, Mussoorie",
      coordinates: { lat: 30.4599, lng: 78.0664 },
      price: { amount: 14000, currency: "INR", period: "night" },
      rating: 4.8,
      reviewCount: 167,
      images: ["https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200"],
      gallery: {
        "Gothic Corridors": [
          "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1551882547-ff40c0d588fa?auto=format&fit=crop&w=1200"
        ],
        "Mountain Rooms": [
          "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200"
        ],
        "Fine Dining": [
          "https://images.unsplash.com/photo-1556911227-4c177e172433?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1556911261-68743685f0f7?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200"
        ]
      },
      amenities: [
        { id: "wifi", name: "High-speed WiFi", category: "Essential" },
        { id: "pool", name: "Classic Pool", category: "Luxury" }
      ],
      host: { name: "Savoy Hotels", isSuperhost: true, joinedDate: "2016-04-12", avatar: "https://i.pravatar.cc/150?u=savoy" },
      bedrooms: 1, beds: 1, bathrooms: 1, max_guests: 2, pet_friendly: false, type_of_place: "Room", unavailableDates: [], tags: ["History", "Mountains"], status: "available"
    },
    {
      id: "uk-3",
      name: "Jim's Jungle Retreat",
      description: "Located on the edge of the Jim Corbett National Park. A perfect blend of adventure and sustainable luxury.",
      type: "Jungle Lodge",
      city: "Jim Corbett",
      state: "Uttarakhand",
      address: "Marchula, Almora",
      coordinates: { lat: 29.5300, lng: 79.1200 },
      price: { amount: 16500, currency: "INR", period: "night" },
      rating: 4.85,
      reviewCount: 94,
      images: ["https://images.unsplash.com/photo-1505881502353-a1986add3732?auto=format&fit=crop&w=1200"],
      gallery: {
        "Safari Huts": [
          "https://images.unsplash.com/photo-1505881502353-a1986add3732?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1496102434273-049539308cc5?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200"
        ],
        "Wildlife Spotting": [
          "https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200"
        ],
        "Lounge Area": [
          "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200",
          "https://images.unsplash.com/photo-1551882547-ff40c0d588fa?auto=format&fit=crop&w=1200"
        ]
      },
      amenities: [
        { id: "wifi", name: "Limited WiFi", category: "Essential" },
        { id: "utensils", name: "Forest Dining", category: "Essential" }
      ],
      host: { name: "Jim Corbett Retreat", isSuperhost: true, joinedDate: "2018-01-10", avatar: "https://i.pravatar.cc/150?u=jim" },
      bedrooms: 2, beds: 2, bathrooms: 2, max_guests: 6, pet_friendly: true, type_of_place: "Entire home", unavailableDates: [], tags: ["Adventure", "Wildlife"], status: "available"
    },

    // --- ADDITIONAL GOA (3 More) ---
    {
      id: "goa-4",
      name: "Sol de Goa",
      description: "A boutique hotel designed by Tarun Tahiliani, offering a blend of Goan heritage and modern luxury overlooking the Nerul River.",
      type: "Boutique Hotel", city: "Candolim", state: "Goa", address: "Nerul, Candolim",
      coordinates: { lat: 15.5100, lng: 73.7800 },
      price: { amount: 8500, currency: "INR", period: "night" },
      rating: 4.7, reviewCount: 64,
      images: ["https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200"],
      gallery: {
        "River Front": ["https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1621293954908-907159247fc8?auto=format&fit=crop&w=1200"],
        "Rooms": ["https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200"],
        "Dining": ["https://images.unsplash.com/photo-1556911227-4c177e172433?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1556911261-68743685f0f7?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200"]
      },
      amenities: [{ id: "wifi", name: "High-speed WiFi", category: "Essential" }, { id: "pool", name: "River Pool", category: "Luxury" }],
      host: { name: "Sol Management", isSuperhost: true, joinedDate: "2019-03-12", avatar: "https://i.pravatar.cc/150?u=sol" },
      bedrooms: 1, beds: 1, bathrooms: 1, max_guests: 2, pet_friendly: false, type_of_place: "Room", unavailableDates: [], tags: ["River View", "Boutique"], status: "available"
    },
    {
      id: "goa-5",
      name: "Wildflower Villa",
      description: "A luxury estate tucked away on a 7-acre forest, offering complete seclusion and breathtaking views of the Arabian Sea.",
      type: "Eco Villa", city: "Candolim", state: "Goa", address: "Sinquerim, Goa",
      coordinates: { lat: 15.4900, lng: 73.7700 },
      price: { amount: 18000, currency: "INR", period: "night" },
      rating: 4.9, reviewCount: 32,
      images: ["https://images.unsplash.com/photo-1505881502353-a1986add3732?auto=format&fit=crop&w=1200"],
      gallery: {
        "Forest Walks": ["https://images.unsplash.com/photo-1505881502353-a1986add3732?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200"],
        "Infinity Pool": ["https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1551882547-ff40c0d588fa?auto=format&fit=crop&w=1200"],
        "Villa View": ["https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1595872245019-f002fd5035ae?auto=format&fit=crop&w=1200"]
      },
      amenities: [{ id: "wifi", name: "High-speed WiFi", category: "Essential" }, { id: "pool", name: "Infinity Pool", category: "Luxury" }],
      host: { name: "Forest Retreats", isSuperhost: true, joinedDate: "2018-05-20", avatar: "https://i.pravatar.cc/150?u=forest" },
      bedrooms: 3, beds: 3, bathrooms: 3, max_guests: 6, pet_friendly: true, type_of_place: "Entire home", unavailableDates: [], tags: ["Forest", "Private"], status: "available"
    },
    {
      id: "goa-6",
      name: "Tidal Waves Beach Resort",
      description: "A fun and vibrant resort right on Baga beach. Famous for its shacks and proximity to Goa's best nightlife.",
      type: "Resort", city: "Calangute", state: "Goa", address: "Baga Beach Road",
      coordinates: { lat: 15.5500, lng: 73.7500 },
      price: { amount: 5500, currency: "INR", period: "night" },
      rating: 4.5, reviewCount: 245,
      images: ["https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200"],
      gallery: {
        "Beach Front": ["https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200"],
        "Fun Zone": ["https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=1200"],
        "Rooms": ["https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200"]
      },
      amenities: [{ id: "wifi", name: "High-speed WiFi", category: "Essential" }, { id: "utensils", name: "Beach Shack", category: "Essential" }],
      host: { name: "Shack Brothers", isSuperhost: false, joinedDate: "2017-06-15", avatar: "https://i.pravatar.cc/150?u=shack" },
      bedrooms: 1, beds: 1, bathrooms: 1, max_guests: 2, pet_friendly: false, type_of_place: "Room", unavailableDates: [], tags: ["Party", "Beach"], status: "available"
    },

    // --- MAHARASHTRA (3 Hotels) ---
    {
      id: "mh-1",
      name: "The Taj Mahal Palace",
      description: "Iconic luxury hotel overlooking the Gateway of India. A symbol of resilience and timeless elegance in Mumbai.",
      type: "Landmark Hotel", city: "Mumbai", state: "Maharashtra", address: "Apollo Bandar, Colaba",
      coordinates: { lat: 18.9218, lng: 72.8333 },
      price: { amount: 28000, currency: "INR", period: "night" },
      rating: 4.95, reviewCount: 1240,
      images: ["https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200"],
      gallery: {
        "Palace Wing": ["https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1551882547-ff40c0d588fa?auto=format&fit=crop&w=1200"],
        "Harbour Views": ["https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1522708323590-d24dab6ae574?auto=format&fit=crop&w=1200"],
        "Presidential Suites": ["https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1591088398332-8a77d399e80c?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200"]
      },
      amenities: [{ id: "wifi", name: "High-speed WiFi", category: "Essential" }, { id: "pool", name: "Grand Pool", category: "Luxury" }],
      host: { name: "Taj Hotels", isSuperhost: true, joinedDate: "2010-01-01", avatar: "https://i.pravatar.cc/150?u=taj" },
      bedrooms: 1, beds: 1, bathrooms: 1, max_guests: 2, pet_friendly: false, type_of_place: "Room", unavailableDates: [], tags: ["Iconic", "Sea View"], status: "available"
    },
    {
      id: "mh-2",
      name: "The Machan",
      description: "An eco-friendly treehouse resort in Lonavala. Stay high above the canopy and reconnect with nature.",
      type: "Treehouse Resort", city: "Lonavala", state: "Maharashtra", address: "Ativan, Lonavala",
      coordinates: { lat: 18.7500, lng: 73.4000 },
      price: { amount: 14500, currency: "INR", period: "night" },
      rating: 4.8, reviewCount: 186,
      images: ["https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200"],
      gallery: {
        "Treehouses": ["https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1532708059644-5590ed51ce4c?auto=format&fit=crop&w=1200"],
        "Decks": ["https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200"],
        "Dining": ["https://images.unsplash.com/photo-1556911227-4c177e172433?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1556911261-68743685f0f7?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200"]
      },
      amenities: [{ id: "wifi", name: "High-speed WiFi", category: "Essential" }, { id: "utensils", name: "Gourmet Dining", category: "Essential" }],
      host: { name: "Machan Retreats", isSuperhost: true, joinedDate: "2016-11-20", avatar: "https://i.pravatar.cc/150?u=machan" },
      bedrooms: 2, beds: 2, bathrooms: 2, max_guests: 4, pet_friendly: false, type_of_place: "Entire home", unavailableDates: [], tags: ["Eco-friendly", "Nature"], status: "available"
    },
    {
      id: "mh-3",
      name: "Sohum Loft Mumbai",
      description: "A sleek, industrial-style loft in the heart of Mumbai's creative district. Perfect for digital nomads and artists.",
      type: "Apartment", city: "Mumbai", state: "Maharashtra", address: "Lower Parel, Mumbai",
      coordinates: { lat: 18.9900, lng: 72.8200 },
      price: { amount: 7500, currency: "INR", period: "night" },
      rating: 4.7, reviewCount: 42,
      images: ["https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200"],
      gallery: {
        "Living Space": ["https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200"],
        "Office": ["https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1531973576160-7125cd663d86?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1449156001437-3a16d1da9bc8?auto=format&fit=crop&w=1200"],
        "Bedroom Area": ["https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1522708323590-d24dab6ae574?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200"]
      },
      amenities: [{ id: "wifi", name: "High-speed WiFi", category: "Essential" }, { id: "tv", name: "Smart TV", category: "Entertainment" }],
      host: { name: "Sameer V.", isSuperhost: true, joinedDate: "2021-08-15", avatar: "https://i.pravatar.cc/150?u=sameer" },
      bedrooms: 1, beds: 1, bathrooms: 1, max_guests: 2, pet_friendly: true, type_of_place: "Entire home", unavailableDates: [], tags: ["Modern", "Work-friendly"], status: "available"
    },

    // --- DELHI (3 Hotels) ---
    {
      id: "dl-1",
      name: "The Lodhi",
      description: "An urban oasis in New Delhi. Modern architecture meets Indian heritage in this ultra-luxury city hotel.",
      type: "Modern Hotel", city: "New Delhi", state: "Delhi", address: "Lodhi Road, Pragati Vihar",
      coordinates: { lat: 28.5910, lng: 77.2340 },
      price: { amount: 22000, currency: "INR", period: "night" },
      rating: 4.9, reviewCount: 224,
      images: ["https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200"],
      gallery: {
        "Private Pool Rooms": ["https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1551882547-ff40c0d588fa?auto=format&fit=crop&w=1200"],
        "Dining Pavilions": ["https://images.unsplash.com/photo-1556911227-4c177e172433?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1556911261-68743685f0f7?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200"],
        "Terrace Views": ["https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1522708323590-d24dab6ae574?auto=format&fit=crop&w=1200"]
      },
      amenities: [{ id: "wifi", name: "High-speed WiFi", category: "Essential" }, { id: "pool", name: "Private Pool", category: "Luxury" }],
      host: { name: "Lodhi Management", isSuperhost: true, joinedDate: "2014-03-22", avatar: "https://i.pravatar.cc/150?u=lodhi" },
      bedrooms: 1, beds: 1, bathrooms: 1, max_guests: 2, pet_friendly: false, type_of_place: "Room", unavailableDates: [], tags: ["Modern", "Luxury"], status: "available"
    },
    {
      id: "dl-2",
      name: "The Imperial",
      description: "Built in 1931, The Imperial is New Delhi’s most storied hotel. Experience Art Deco splendor and colonial grandeur.",
      type: "Historic Hotel", city: "New Delhi", state: "Delhi", address: "Janpath, Connaught Place",
      coordinates: { lat: 28.6250, lng: 77.2200 },
      price: { amount: 18500, currency: "INR", period: "night" },
      rating: 4.8, reviewCount: 156,
      images: ["https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200"],
      gallery: {
        "Royal Ballroom": ["https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1551882547-ff40c0d588fa?auto=format&fit=crop&w=1200"],
        "Spice Route": ["https://images.unsplash.com/photo-1556911227-4c177e172433?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1556911261-68743685f0f7?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200"],
        "Palatial Suites": ["https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1591088398332-8a77d399e80c?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200"]
      },
      amenities: [{ id: "wifi", name: "High-speed WiFi", category: "Essential" }, { id: "pool", name: "Grand Pool", category: "Luxury" }],
      host: { name: "Imperial Group", isSuperhost: true, joinedDate: "2012-05-18", avatar: "https://i.pravatar.cc/150?u=imperial" },
      bedrooms: 1, beds: 1, bathrooms: 1, max_guests: 2, pet_friendly: false, type_of_place: "Room", unavailableDates: [], tags: ["History", "Art Deco"], status: "available"
    },
    {
      id: "dl-3",
      name: "The Roseate New Delhi",
      description: "A world-class luxury resort featuring 8 acres of water bodies and greenery. A architectural masterpiece on the city's edge.",
      type: "Luxury Resort", city: "New Delhi", state: "Delhi", address: "NH-8, Samalka",
      coordinates: { lat: 28.5200, lng: 77.1000 },
      price: { amount: 15500, currency: "INR", period: "night" },
      rating: 4.85, reviewCount: 92,
      images: ["https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200"],
      gallery: {
        "Water Bodies": ["https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1551882547-ff40c0d588fa?auto=format&fit=crop&w=1200"],
        "Modern Rooms": ["https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200"],
        "Nature Walks": ["https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1532708059644-5590ed51ce4c?auto=format&fit=crop&w=1200"]
      },
      amenities: [{ id: "wifi", name: "High-speed WiFi", category: "Essential" }, { id: "pool", name: "Infinity Pool", category: "Luxury" }],
      host: { name: "Roseate Resorts", isSuperhost: true, joinedDate: "2016-02-14", avatar: "https://i.pravatar.cc/150?u=roseate" },
      bedrooms: 1, beds: 1, bathrooms: 1, max_guests: 2, pet_friendly: false, type_of_place: "Room", unavailableDates: [], tags: ["Modern", "Quiet"], status: "available"
    },

    // --- JAMMU & KASHMIR (3 Hotels) ---
    {
      id: "jk-1",
      name: "The Khyber Himalayan Resort",
      description: "Located in Gulmarg, this premier luxury resort offers stunning views of the Affarwat peaks and easy access to the world's highest cable car.",
      type: "Mountain Resort", city: "Gulmarg", state: "Jammu & Kashmir", address: "Gulmarg, Baramulla",
      coordinates: { lat: 34.0500, lng: 74.3800 },
      price: { amount: 32000, currency: "INR", period: "night" },
      rating: 4.95, reviewCount: 456,
      images: ["https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200"],
      gallery: {
        "Peak Views": ["https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1532708059644-5590ed51ce4c?auto=format&fit=crop&w=1200"],
        "Heated Pool": ["https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1551882547-ff40c0d588fa?auto=format&fit=crop&w=1200"],
        "Luxury Cabins": ["https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1551882547-ff40c0d588fa?auto=format&fit=crop&w=1200"]
      },
      amenities: [{ id: "wifi", name: "High-speed WiFi", category: "Essential" }, { id: "pool", name: "Heated Pool", category: "Luxury" }],
      host: { name: "Khyber Group", isSuperhost: true, joinedDate: "2015-06-10", avatar: "https://i.pravatar.cc/150?u=khyber" },
      bedrooms: 1, beds: 1, bathrooms: 1, max_guests: 2, pet_friendly: false, type_of_place: "Room", unavailableDates: [], tags: ["Mountains", "Snow"], status: "available"
    },
    {
      id: "jk-2",
      name: "Vivanta Dal View",
      description: "Perched on Kralsangri Hill, this resort offers panoramic views of Dal Lake and the Zabarwan range.",
      type: "Hill Resort", city: "Srinagar", state: "Jammu & Kashmir", address: "Kralsangri, Srinagar",
      coordinates: { lat: 34.0884, lng: 74.8723 },
      price: { amount: 16500, currency: "INR", period: "night" },
      rating: 4.8, reviewCount: 134,
      images: ["https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200"],
      gallery: {
        "Lake Views": ["https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1522708323590-d24dab6ae574?auto=format&fit=crop&w=1200"],
        "Infinity Pool": ["https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1551882547-ff40c0d588fa?auto=format&fit=crop&w=1200"],
        "Gardens": ["https://images.unsplash.com/photo-1558036117-15d82a90b9b1?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1583163773177-33a8712a20ca?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1595872245019-f002fd5035ae?auto=format&fit=crop&w=1200"]
      },
      amenities: [{ id: "wifi", name: "High-speed WiFi", category: "Essential" }, { id: "pool", name: "Infinity Pool", category: "Luxury" }],
      host: { name: "Taj Vivanta", isSuperhost: true, joinedDate: "2017-04-15", avatar: "https://i.pravatar.cc/150?u=vivanta" },
      bedrooms: 1, beds: 2, bathrooms: 1, max_guests: 3, pet_friendly: false, type_of_place: "Room", unavailableDates: [], tags: ["Lake View", "Luxury"], status: "available"
    },
    {
      id: "jk-3",
      name: "Sukoon Houseboat",
      description: "A luxury houseboat on the quiet waters of Dal Lake. Experience the unique charm of Kashmir in high style.",
      type: "Houseboat", city: "Srinagar", state: "Jammu & Kashmir", address: "Dal Lake, Srinagar",
      coordinates: { lat: 34.0900, lng: 74.8800 },
      price: { amount: 12000, currency: "INR", period: "night" },
      rating: 4.9, reviewCount: 88,
      images: ["https://images.unsplash.com/photo-1512100356956-c122ddc5c246?auto=format&fit=crop&w=1200"],
      gallery: {
        "Sun Deck": ["https://images.unsplash.com/photo-1512100356956-c122ddc5c246?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1532708059644-5590ed51ce4c?auto=format&fit=crop&w=1200"],
        "Houseboat Interiors": ["https://images.unsplash.com/photo-1556911227-4c177e172433?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1556911261-68743685f0f7?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200"],
        "Lake Environs": ["https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200"]
      },
      amenities: [{ id: "wifi", name: "High-speed WiFi", category: "Essential" }, { id: "utensils", name: "Chef Choice", category: "Essential" }],
      host: { name: "Sukoon Management", isSuperhost: true, joinedDate: "2018-09-20", avatar: "https://i.pravatar.cc/150?u=sukoon" },
      bedrooms: 1, beds: 1, bathrooms: 1, max_guests: 2, pet_friendly: false, type_of_place: "Room", unavailableDates: [], tags: ["Houseboat", "Unique"], status: "available"
    },

    // --- ADDITIONAL RAJASTHAN (3 More) ---
    {
      id: "raj-4",
      name: "Raas Jodhpur",
      description: "Jodhpur’s first boutique hotel, a seamless blend of 18th-century heritage and modern design, with the best views of Mehrangarh Fort.",
      type: "Boutique Hotel", city: "Jodhpur", state: "Rajasthan", address: "Makrana Mohalla, Jodhpur",
      coordinates: { lat: 26.2970, lng: 73.0180 },
      price: { amount: 16000, currency: "INR", period: "night" },
      rating: 4.85, reviewCount: 86,
      images: ["https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?auto=format&fit=crop&w=1200"],
      gallery: {
        "Fort View": ["https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200"],
        "Terrace Dining": ["https://images.unsplash.com/photo-1556911227-4c177e172433?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1556911261-68743685f0f7?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200"],
        "Modern Suites": ["https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1591088398332-8a77d399e80c?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200"]
      },
      amenities: [{ id: "wifi", name: "High-speed WiFi", category: "Essential" }, { id: "pool", name: "Stepwell Pool", category: "Luxury" }],
      host: { name: "Raas Team", isSuperhost: true, joinedDate: "2018-02-14", avatar: "https://i.pravatar.cc/150?u=raas" },
      bedrooms: 1, beds: 1, bathrooms: 1, max_guests: 2, pet_friendly: false, type_of_place: "Room", unavailableDates: [], tags: ["Fort View", "Boutique"], status: "available"
    },
    {
      id: "raj-5",
      name: "Suryagarh Jaisalmer",
      description: "A luxury hotel that serves as a gateway to the Thar Desert. Experience traditional crafts, folk music, and legendary hospitality.",
      type: "Luxury Palace", city: "Jaisalmer", state: "Rajasthan", address: "Kahala Phata, Jaisalmer",
      coordinates: { lat: 26.9100, lng: 70.8000 },
      price: { amount: 22000, currency: "INR", period: "night" },
      rating: 4.9, reviewCount: 154,
      images: ["https://images.unsplash.com/photo-1505886617061-396561f5f3e9?auto=format&fit=crop&w=1200"],
      gallery: {
        "Desert Palace": ["https://images.unsplash.com/photo-1505886617061-396561f5f3e9?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1496102434273-049539308cc5?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200"],
        "Central Courtyard": ["https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1551882547-ff40c0d588fa?auto=format&fit=crop&w=1200"],
        "Royal Rooms": ["https://images.unsplash.com/photo-1595181829924-823fc67251fa?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1200"]
      },
      amenities: [{ id: "wifi", name: "High-speed WiFi", category: "Essential" }, { id: "pool", name: "Sunken Pool", category: "Luxury" }],
      host: { name: "Manvendra Singh", isSuperhost: true, joinedDate: "2016-05-10", avatar: "https://i.pravatar.cc/150?u=manvendra" },
      bedrooms: 1, beds: 1, bathrooms: 1, max_guests: 2, pet_friendly: false, type_of_place: "Room", unavailableDates: [], tags: ["Desert", "Luxury"], status: "available"
    },
    {
      id: "raj-6",
      name: "Lakshman Sagar",
      description: "A zero-waste eco-resort built around a man-made lake. Experience rural Rajasthan in a private mud-cottage with a personal pool.",
      type: "Eco Resort", city: "Pali", state: "Rajasthan", address: "Raipur, Dist. Pali",
      coordinates: { lat: 26.0400, lng: 73.9400 },
      price: { amount: 18500, currency: "INR", period: "night" },
      rating: 4.8, reviewCount: 42,
      images: ["https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200"],
      gallery: {
        "Mud Cottages": ["https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1532708059644-5590ed51ce4c?auto=format&fit=crop&w=1200"],
        "Lake Views": ["https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200"],
        "Natural Pool": ["https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1551882547-ff40c0d588fa?auto=format&fit=crop&w=1200"]
      },
      amenities: [{ id: "wifi", name: "High-speed WiFi", category: "Essential" }, { id: "pool", name: "Natural Pool", category: "Luxury" }],
      host: { name: "Eco Team", isSuperhost: true, joinedDate: "2019-11-20", avatar: "https://i.pravatar.cc/150?u=eco" },
      bedrooms: 1, beds: 1, bathrooms: 1, max_guests: 2, pet_friendly: true, type_of_place: "Room", unavailableDates: [], tags: ["Eco-friendly", "Lake"], status: "available"
    },

    // --- PUNJAB (3 Hotels) ---
    {
      id: "pb-1",
      name: "The Gateway by Taj",
      description: "A modern business hotel in the heart of Amritsar, just minutes away from the Golden Temple.",
      type: "City Hotel", city: "Amritsar", state: "Punjab", address: "Residency Road, Amritsar",
      coordinates: { lat: 31.6273, lng: 74.8765 },
      price: { amount: 6500, currency: "INR", period: "night" },
      rating: 4.7, reviewCount: 168,
      images: ["https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200"],
      gallery: {
        "Lobby Lounge": ["https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1551882547-ff40c0d588fa?auto=format&fit=crop&w=1200"],
        "Modern Rooms": ["https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200"],
        "Roof Top": ["https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1522708323590-d24dab6ae574?auto=format&fit=crop&w=1200"]
      },
      amenities: [{ id: "wifi", name: "High-speed WiFi", category: "Essential" }, { id: "pool", name: "Roof Pool", category: "Luxury" }],
      host: { name: "Taj Team Amritsar", isSuperhost: true, joinedDate: "2016-09-12", avatar: "https://i.pravatar.cc/150?u=tajamr" },
      bedrooms: 1, beds: 1, bathrooms: 1, max_guests: 2, pet_friendly: false, type_of_place: "Room", unavailableDates: [], tags: ["Temple Access", "Modern"], status: "available"
    },
    {
      id: "pb-2",
      name: "The Kikar Lodge",
      description: "India's first private forest reserve and spa. Nestled in the Kikar forest of Punjab, offering adventure and serenity.",
      type: "Forest Lodge", city: "Ropar", state: "Punjab", address: "Nurpur Bedi, Ropar",
      coordinates: { lat: 31.0600, lng: 76.5000 },
      price: { amount: 8500, currency: "INR", period: "night" },
      rating: 4.6, reviewCount: 94,
      images: ["https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200"],
      gallery: {
        "Forest Huts": ["https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1532708059644-5590ed51ce4c?auto=format&fit=crop&w=1200"],
        "Adventure Zone": ["https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200"],
        "Lodge Rooms": ["https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200"]
      },
      amenities: [{ id: "wifi", name: "High-speed WiFi", category: "Essential" }, { id: "pool", name: "Forest Pool", category: "Luxury" }],
      host: { name: "Kikar Management", isSuperhost: true, joinedDate: "2018-04-20", avatar: "https://i.pravatar.cc/150?u=kikar" },
      bedrooms: 2, beds: 2, bathrooms: 2, max_guests: 4, pet_friendly: true, type_of_place: "Entire home", unavailableDates: [], tags: ["Forest", "Adventure"], status: "available"
    },
    {
      id: "pb-3",
      name: "Fort Bharatgarh",
      description: "A heritage homestay in a 18th-century fort. Experience the authentic Punjabi rural lifestyle and warm hospitality.",
      type: "Heritage Home", city: "Bharatgarh", state: "Punjab", address: "Ropar-Manali Highway",
      coordinates: { lat: 31.0200, lng: 76.6200 },
      price: { amount: 9500, currency: "INR", period: "night" },
      rating: 4.8, reviewCount: 42,
      images: ["https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200"],
      gallery: {
        "Fort Exterior": ["https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1551882547-ff40c0d588fa?auto=format&fit=crop&w=1200"],
        "Royal Rooms": ["https://images.unsplash.com/photo-1595181829924-823fc67251fa?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1200"],
        "Traditional Kitchen": ["https://images.unsplash.com/photo-1556911227-4c177e172433?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1556911261-68743685f0f7?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200"]
      },
      amenities: [{ id: "wifi", name: "High-speed WiFi", category: "Essential" }, { id: "utensils", name: "Punjabi Meals", category: "Essential" }],
      host: { name: "Sardar Deep Singh", isSuperhost: true, joinedDate: "2019-06-15", avatar: "https://i.pravatar.cc/150?u=deep" },
      bedrooms: 1, beds: 1, bathrooms: 1, max_guests: 2, pet_friendly: true, type_of_place: "Room", unavailableDates: [], tags: ["Heritage", "Farm"], status: "available"
    },

    // --- ADDITIONAL KERALA (3 More) ---
    {
      id: "ker-4",
      name: "Brunton Boatyard",
      description: "A luxury hotel in Fort Kochi that captures the history of the spice trade. Built on the site of a 19th-century boatyard.",
      type: "Heritage Hotel", city: "Kochi", state: "Kerala", address: "Fort Kochi, Calvethy Road",
      coordinates: { lat: 9.9680, lng: 76.2440 },
      price: { amount: 14500, currency: "INR", period: "night" },
      rating: 4.8, reviewCount: 156,
      images: ["https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200"],
      gallery: {
        "Harbour View": ["https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1522708323590-d24dab6ae574?auto=format&fit=crop&w=1200"],
        "Colonial Suites": ["https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1551882547-ff40c0d588fa?auto=format&fit=crop&w=1200"],
        "Dining Hall": ["https://images.unsplash.com/photo-1556911227-4c177e172433?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1556911261-68743685f0f7?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200"]
      },
      amenities: [{ id: "wifi", name: "High-speed WiFi", category: "Essential" }, { id: "pool", name: "Harbour Pool", category: "Luxury" }],
      host: { name: "CGH Earth", isSuperhost: true, joinedDate: "2015-04-20", avatar: "https://i.pravatar.cc/150?u=cgh" },
      bedrooms: 1, beds: 1, bathrooms: 1, max_guests: 2, pet_friendly: false, type_of_place: "Room", unavailableDates: [], tags: ["History", "Sea View"], status: "available"
    },
    {
      id: "ker-5",
      name: "Spice Village",
      description: "A tribal village resort in Thekkady, offering a rustic but luxury experience in the Periyar forest.",
      type: "Eco Resort", city: "Thekkady", state: "Kerala", address: "Kumily, Periyar",
      coordinates: { lat: 9.6000, lng: 77.1600 },
      price: { amount: 12000, currency: "INR", period: "night" },
      rating: 4.75, reviewCount: 84,
      images: ["https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200"],
      gallery: {
        "Tribal Huts": ["https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1532708059644-5590ed51ce4c?auto=format&fit=crop&w=1200"],
        "Spice Gardens": ["https://images.unsplash.com/photo-1558036117-15d82a90b9b1?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1583163773177-33a8712a20ca?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1595872245019-f002fd5035ae?auto=format&fit=crop&w=1200"],
        "Quiet Corners": ["https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200"]
      },
      amenities: [{ id: "wifi", name: "High-speed WiFi", category: "Essential" }, { id: "utensils", name: "Tribal Food", category: "Essential" }],
      host: { name: "Village Team", isSuperhost: true, joinedDate: "2018-05-15", avatar: "https://i.pravatar.cc/150?u=village" },
      bedrooms: 1, beds: 1, bathrooms: 1, max_guests: 2, pet_friendly: true, type_of_place: "Room", unavailableDates: [], tags: ["Eco-friendly", "Forest"], status: "available"
    },
    {
      id: "ker-6",
      name: "The Malabar House",
      description: "A heritage boutique hotel in Fort Kochi combining traditional architecture with contemporary Indian art.",
      type: "Boutique Hotel", city: "Kochi", state: "Kerala", address: "1/268 Parade Road",
      coordinates: { lat: 9.9670, lng: 76.2430 },
      price: { amount: 11000, currency: "INR", period: "night" },
      rating: 4.85, reviewCount: 48,
      images: ["https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200"],
      gallery: {
        "Art Suites": ["https://images.unsplash.com/photo-1598928636135-d146006ff4be?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&w=1200"],
        "Courtyard Dining": ["https://images.unsplash.com/photo-1556911227-4c177e172433?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1556911261-68743685f0f7?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200"],
        "Interior Art": ["https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1551882547-ff40c0d588fa?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200"]
      },
      amenities: [{ id: "wifi", name: "High-speed WiFi", category: "Essential" }, { id: "pool", name: "Courtyard Pool", category: "Luxury" }],
      host: { name: "Malabar Team", isSuperhost: true, joinedDate: "2017-08-22", avatar: "https://i.pravatar.cc/150?u=malabar" },
      bedrooms: 1, beds: 1, bathrooms: 1, max_guests: 2, pet_friendly: false, type_of_place: "Room", unavailableDates: [], tags: ["Art", "Heritage"], status: "available"
    },

    // --- ADDITIONAL HIMACHAL PRADESH (3 More) ---
    {
      id: "hp-4",
      name: "Shivola Resorts",
      description: "A luxury resort in Shimla offering breathtaking panoramic views of the Himalayan range and top-tier spa services.",
      type: "Luxury Resort", city: "Shimla", state: "Himachal Pradesh", address: "The Ridge, Shimla",
      coordinates: { lat: 31.1000, lng: 77.1700 },
      price: { amount: 18500, currency: "INR", period: "night" },
      rating: 4.88, reviewCount: 165,
      images: ["https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200"],
      gallery: {
        "Himalayan Panorama": ["https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200"],
        "Luxury Suites": ["https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1591088398332-8a77d399e80c?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200"],
        "Dining Al Fresco": ["https://images.unsplash.com/photo-1556911227-4c177e172433?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1556911261-68743685f0f7?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200"]
      },
      amenities: [{ id: "wifi", name: "High-speed WiFi", category: "Essential" }, { id: "pool", name: "Infinity Pool", category: "Luxury" }],
      host: { name: "Shivola Team", isSuperhost: true, joinedDate: "2016-09-12", avatar: "https://i.pravatar.cc/150?u=shivala" },
      bedrooms: 1, beds: 1, bathrooms: 1, max_guests: 2, pet_friendly: false, type_of_place: "Room", unavailableDates: [], tags: ["Mountains", "Luxury"], status: "available"
    },
    {
      id: "hp-5",
      name: "The Gables Mashobra",
      description: "A heritage boutique hotel in Mashobra, providing a quiet and intimate mountain experience away from the crowds.",
      type: "Boutique Hotel", city: "Mashobra", state: "Himachal Pradesh", address: "Gables Road, Shimla Hills",
      coordinates: { lat: 31.1300, lng: 77.2300 },
      price: { amount: 12000, currency: "INR", period: "night" },
      rating: 4.75, reviewCount: 42,
      images: ["https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200"],
      gallery: {
        "Mountain Decks": ["https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1532708059644-5590ed51ce4c?auto=format&fit=crop&w=1200"],
        "Classic Interiors": ["https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1551882547-ff40c0d588fa?auto=format&fit=crop&w=1200"],
        "Cosy Rooms": ["https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200"]
      },
      amenities: [{ id: "wifi", name: "High-speed WiFi", category: "Essential" }, { id: "utensils", name: "Home Cooking", category: "Essential" }],
      host: { name: "Mashobra Team", isSuperhost: true, joinedDate: "2019-10-15", avatar: "https://i.pravatar.cc/150?u=mashobra" },
      bedrooms: 2, beds: 2, bathrooms: 2, max_guests: 4, pet_friendly: true, type_of_place: "Entire home", unavailableDates: [], tags: ["Mountains", "Quiet"], status: "available"
    },
    {
      id: "hp-6",
      name: "Camp Roxx",
      description: "An adventure camp in Kangroj, offering trekking, rock climbing, and bonfire nights in the great outdoors.",
      type: "Adventure Camp", city: "Kangroj", state: "Himachal Pradesh", address: "Village Kangroj, Sirmaur",
      coordinates: { lat: 30.6500, lng: 77.2900 },
      price: { amount: 3500, currency: "INR", period: "night" },
      rating: 4.6, reviewCount: 156,
      images: ["https://images.unsplash.com/photo-1496102434273-049539308cc5?auto=format&fit=crop&w=1200"],
      gallery: {
        "Alpine Tents": ["https://images.unsplash.com/photo-1496102434273-049539308cc5?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1486915307544-b1ae73221ae4?auto=format&fit=crop&w=1200"],
        "Bonfire Nights": ["https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200"],
        "Dining Deck": ["https://images.unsplash.com/photo-1556911227-4c177e172433?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1556911261-68743685f0f7?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200"]
      },
      amenities: [{ id: "wifi", name: "Limited WiFi", category: "Essential" }, { id: "utensils", name: "Camp Kitchen", category: "Essential" }],
      host: { name: "Roxx Management", isSuperhost: false, joinedDate: "2020-03-22", avatar: "https://i.pravatar.cc/150?u=roxx" },
      bedrooms: 1, beds: 2, bathrooms: 1, max_guests: 4, pet_friendly: true, type_of_place: "Room", unavailableDates: [], tags: ["Adventure", "Outdoors"], status: "available"
    },

    // --- GUJARAT (3 Hotels) ---
    {
      id: "gj-1",
      name: "Rann Riders",
      description: "An eco-resort in Dasarada, offering safaris to the Little Rann of Kutch to see the Indian Wild Ass.",
      type: "Eco Lodge", city: "Dasarada", state: "Gujarat", address: "Little Rann of Kutch",
      coordinates: { lat: 23.3000, lng: 71.7400 },
      price: { amount: 8500, currency: "INR", period: "night" },
      rating: 4.7, reviewCount: 124,
      images: ["https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200"],
      gallery: {
        "Desert Cottages": ["https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1532708059644-5590ed51ce4c?auto=format&fit=crop&w=1200"],
        "Kutch Safari": ["https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200"],
        "Traditional Dining": ["https://images.unsplash.com/photo-1556911227-4c177e172433?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1556911261-68743685f0f7?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200"]
      },
      amenities: [{ id: "wifi", name: "High-speed WiFi", category: "Essential" }, { id: "pool", name: "Desert Pool", category: "Luxury" }],
      host: { name: "Kutch Team", isSuperhost: true, joinedDate: "2017-06-18", avatar: "https://i.pravatar.cc/150?u=kutch" },
      bedrooms: 1, beds: 2, bathrooms: 1, max_guests: 4, pet_friendly: true, type_of_place: "Room", unavailableDates: [], tags: ["Wildlife", "Desert"], status: "available"
    },
    {
      id: "gj-2",
      name: "The Gateway Hotel Gir Forest",
      description: "A luxury hotel located right at the entrance of the Gir National Park, the only home of the Asiatic lion.",
      type: "Safari Resort", city: "Gir Somnath", state: "Gujarat", address: "Sasan Gir",
      coordinates: { lat: 21.1600, lng: 70.6000 },
      price: { amount: 15500, currency: "INR", period: "night" },
      rating: 4.85, reviewCount: 224,
      images: ["https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200"],
      gallery: {
        "Gir Safaris": ["https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200"],
        "Eco Suites": ["https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1591088398332-8a77d399e80c?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200"],
        "Jungle Pool": ["https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1551882547-ff40c0d588fa?auto=format&fit=crop&w=1200"]
      },
      amenities: [{ id: "wifi", name: "High-speed WiFi", category: "Essential" }, { id: "pool", name: "Jungle Pool", category: "Luxury" }],
      host: { name: "Gir Management", isSuperhost: true, joinedDate: "2016-11-20", avatar: "https://i.pravatar.cc/150?u=gir" },
      bedrooms: 1, beds: 1, bathrooms: 1, max_guests: 2, pet_friendly: false, type_of_place: "Room", unavailableDates: [], tags: ["Wildlife", "Safari"], status: "available"
    },
    {
      id: "gj-3",
      name: "Vijay Vilas Heritage",
      description: "A heritage stay in the Vijay Vilas Palace complex in Palitana, offering a glimpse into the lifestyle of Gujarati royalty.",
      type: "Heritage Home", city: "Bhuj", state: "Gujarat", address: "Vijay Vilas Palace, Mandvi",
      coordinates: { lat: 22.8200, lng: 69.3500 },
      price: { amount: 12000, currency: "INR", period: "night" },
      rating: 4.8, reviewCount: 48,
      images: ["https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200"],
      gallery: {
        "Palace Grounds": ["https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1551882547-ff40c0d588fa?auto=format&fit=crop&w=1200"],
        "Royal Interiors": ["https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200"],
        "Coastal View": ["https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200"]
      },
      amenities: [{ id: "wifi", name: "High-speed WiFi", category: "Essential" }, { id: "utensils", name: "Traditional Thali", category: "Essential" }],
      host: { name: "Palace Team", isSuperhost: true, joinedDate: "2019-02-14", avatar: "https://i.pravatar.cc/150?u=palace" },
      bedrooms: 1, beds: 1, bathrooms: 1, max_guests: 2, pet_friendly: false, type_of_place: "Room", unavailableDates: [], tags: ["Heritage", "Royal"], status: "available"
    },

    // --- MADHYA PRADESH (3 Hotels) ---
    {
      id: "mp-1",
      name: "The Taj Boutique Khajuraho",
      description: "A luxury hotel located just steps away from the UNESCO World Heritage site of Khajuraho temples.",
      type: "Modern Hotel", city: "Khajuraho", state: "Madhya Pradesh", address: "Temple Road, Khajuraho",
      coordinates: { lat: 24.8318, lng: 79.9199 },
      price: { amount: 7500, currency: "INR", period: "night" },
      rating: 4.8, reviewCount: 156,
      images: ["https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200"],
      gallery: {
        "Temple Views": ["https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200"],
        "Modern Rooms": ["https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200"],
        "Royal Dining": ["https://images.unsplash.com/photo-1556911227-4c177e172433?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1556911261-68743685f0f7?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200"]
      },
      amenities: [{ id: "wifi", name: "High-speed WiFi", category: "Essential" }, { id: "pool", name: "Temple Pool", category: "Luxury" }],
      host: { name: "Taj Management", isSuperhost: true, joinedDate: "2016-04-12", avatar: "https://i.pravatar.cc/150?u=tajmp" },
      bedrooms: 1, beds: 1, bathrooms: 1, max_guests: 2, pet_friendly: false, type_of_place: "Room", unavailableDates: [], tags: ["Temple View", "Culture"], status: "available"
    },
    {
      id: "mp-2",
      name: "Banjaar Tola, Kanha National Park",
      description: "A luxury safari camp featuring two intimate sets of nine tents, each with its own swimming pool and breathtaking views of the Banjaar River.",
      type: "Safari Lodge", city: "Kanha", state: "Madhya Pradesh", address: "Kanha Tiger Reserve",
      coordinates: { lat: 22.3300, lng: 80.6100 },
      price: { amount: 28000, currency: "INR", period: "night" },
      rating: 4.95, reviewCount: 84,
      images: ["https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200"],
      gallery: {
        "River Tents": ["https://images.unsplash.com/photo-1496102434273-049539308cc5?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1486915307544-b1ae73221ae4?auto=format&fit=crop&w=1200"],
        "Tiger Safaris": ["https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200"],
        "Plunge Pool": ["https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1551882547-ff40c0d588fa?auto=format&fit=crop&w=1200"]
      },
      amenities: [{ id: "wifi", name: "High-speed WiFi", category: "Essential" }, { id: "pool", name: "Private Pool", category: "Luxury" }],
      host: { name: "Taj Safaris", isSuperhost: true, joinedDate: "2015-08-20", avatar: "https://i.pravatar.cc/150?u=tajsafari" },
      bedrooms: 1, beds: 1, bathrooms: 1, max_guests: 2, pet_friendly: false, type_of_place: "Room", unavailableDates: [], tags: ["Wildlife", "River View"], status: "available"
    },
    {
      id: "mp-3",
      name: "Ahilya Fort, Maheshwar",
      description: "Stay in the 18th-century fort of the Holkar dynasty on the banks of the Narmada River. Experience authentic heritage and tranquility.",
      type: "Heritage Hotel", city: "Maheshwar", state: "Madhya Pradesh", address: "Ahilya Wada, Maheshwar",
      coordinates: { lat: 21.1700, lng: 75.5800 },
      price: { amount: 18500, currency: "INR", period: "night" },
      rating: 4.88, reviewCount: 42,
      images: ["https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200"],
      gallery: {
        "Narmada Ghat": ["https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1522708323590-d24dab6ae574?auto=format&fit=crop&w=1200"],
        "Fort Courtyard": ["https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1551882547-ff40c0d588fa?auto=format&fit=crop&w=1200"],
        "Royal Suites": ["https://images.unsplash.com/photo-1595181829924-823fc67251fa?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1200"]
      },
      amenities: [{ id: "wifi", name: "High-speed WiFi", category: "Essential" }, { id: "pool", name: "Fort Pool", category: "Luxury" }],
      host: { name: "Prince Richard Holkar", isSuperhost: true, joinedDate: "2014-06-25", avatar: "https://i.pravatar.cc/150?u=ahilya" },
      bedrooms: 1, beds: 1, bathrooms: 1, max_guests: 2, pet_friendly: false, type_of_place: "Room", unavailableDates: [], tags: ["Heritage", "River"], status: "available"
    },

    // --- ASSAM (3 Hotels) ---
    {
      id: "as-1",
      name: "Wild Grass Lodge, Kaziranga",
      description: "A rural luxury lodge nestled on the edge of Kaziranga National Park, offering jeep and elephant safaris to see the One-horned Rhino.",
      type: "Jungle Lodge", city: "Kaziranga", state: "Assam", address: "Kohora Range, Golaghat",
      coordinates: { lat: 26.5775, lng: 93.3989 },
      price: { amount: 6500, currency: "INR", period: "night" },
      rating: 4.7, reviewCount: 132,
      images: ["https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200"],
      gallery: {
        "Jungle Decks": ["https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1532708059644-5590ed51ce4c?auto=format&fit=crop&w=1200"],
        "Rhino Safaris": ["https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200"],
        "Lodge Rooms": ["https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200"]
      },
      amenities: [{ id: "wifi", name: "Limited WiFi", category: "Essential" }, { id: "utensils", name: "Assamese Meals", category: "Essential" }],
      host: { name: "Assam Wilderness", isSuperhost: true, joinedDate: "2018-03-22", avatar: "https://i.pravatar.cc/150?u=assam" },
      bedrooms: 1, beds: 2, bathrooms: 1, max_guests: 3, pet_friendly: true, type_of_place: "Room", unavailableDates: [], tags: ["Wildlife", "Rhino"], status: "available"
    },
    {
      id: "as-2",
      name: "Thengal Manor, Jorhat",
      description: "A heritage stay in an ancestral home of a tea planter. Experience the charm of colonial Assam and walk through vast tea gardens.",
      type: "Heritage Home", city: "Jorhat", state: "Assam", address: "Thengal, Jorhat",
      coordinates: { lat: 26.7500, lng: 94.2000 },
      price: { amount: 11000, currency: "INR", period: "night" },
      rating: 4.85, reviewCount: 56,
      images: ["https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200"],
      gallery: {
        "Tea Gardens": ["https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1532708059644-5590ed51ce4c?auto=format&fit=crop&w=1200"],
        "Planter Suites": ["https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1600210491866-e84dec78764b?auto=format&fit=crop&w=1200"],
        "Historic Manor": ["https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1551882547-ff40c0d588fa?auto=format&fit=crop&w=1200"]
      },
      amenities: [{ id: "wifi", name: "High-speed WiFi", category: "Essential" }, { id: "utensils", name: "Gourmet Dining", category: "Essential" }],
      host: { name: "Tea Heritage", isSuperhost: true, joinedDate: "2016-09-15", avatar: "https://i.pravatar.cc/150?u=teaassam" },
      bedrooms: 1, beds: 1, bathrooms: 1, max_guests: 2, pet_friendly: false, type_of_place: "Room", unavailableDates: [], tags: ["Tea", "History"], status: "available"
    },
    {
      id: "as-3",
      name: "Diphlu River Lodge",
      description: "Located on the banks of the Diphlu River, this eco-lodge offers a unique jungle experience with luxury cottages and river views.",
      type: "Eco Lodge", city: "Kaziranga", state: "Assam", address: "Bagori Range, Kaziranga",
      coordinates: { lat: 26.6000, lng: 93.3500 },
      price: { amount: 15500, currency: "INR", period: "night" },
      rating: 4.9, reviewCount: 72,
      images: ["https://images.unsplash.com/photo-1505881502353-a1986add3732?auto=format&fit=crop&w=1200"],
      gallery: {
        "River Cottages": ["https://images.unsplash.com/photo-1505881502353-a1986add3732?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200"],
        "River Safaris": ["https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200"],
        "Forest Lounge": ["https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=1200"]
      },
      amenities: [{ id: "wifi", name: "High-speed WiFi", category: "Essential" }, { id: "utensils", name: "Riverside Dining", category: "Essential" }],
      host: { name: "Diphlu Team", isSuperhost: true, joinedDate: "2017-02-20", avatar: "https://i.pravatar.cc/150?u=diphlu" },
      bedrooms: 1, beds: 1, bathrooms: 1, max_guests: 2, pet_friendly: true, type_of_place: "Room", unavailableDates: [], tags: ["Eco-friendly", "River View"], status: "available"
    },

    // --- ADDITIONAL UTTAR PRADESH (3 More) ---
    {
      id: "up-4",
      name: "The Taj Residency Lucknow",
      description: "A blend of old-world charm and modern luxury in the city of Nawabs. Set amidst 25 acres of landscaped gardens.",
      type: "Luxury Hotel", city: "Lucknow", state: "Uttar Pradesh", address: "Vipin Khand, Gomti Nagar",
      coordinates: { lat: 26.8500, lng: 80.9500 },
      price: { amount: 8500, currency: "INR", period: "night" },
      rating: 4.75, reviewCount: 184,
      images: ["https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200"],
      gallery: {
        "Nawabi Gardens": ["https://images.unsplash.com/photo-1558036117-15d82a90b9b1?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1583163773177-33a8712a20ca?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1595872245019-f002fd5035ae?auto=format&fit=crop&w=1200"],
        "Modern Suites": ["https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200"],
        "Royal Dining": ["https://images.unsplash.com/photo-1556911227-4c177e172433?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1556911261-68743685f0f7?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200"]
      },
      amenities: [{ id: "wifi", name: "High-speed WiFi", category: "Essential" }, { id: "pool", name: "Garden Pool", category: "Luxury" }],
      host: { name: "Taj Lucknow", isSuperhost: true, joinedDate: "2014-05-18", avatar: "https://i.pravatar.cc/150?u=tajlucknow" },
      bedrooms: 1, beds: 1, bathrooms: 1, max_guests: 2, pet_friendly: false, type_of_place: "Room", unavailableDates: [], tags: ["History", "Gardens"], status: "available"
    },
    {
      id: "up-5",
      name: "Radisson Blu Agra",
      description: "A stylish contemporary hotel located within walking distance of the Taj Mahal. Featuring a rooftop pool with Taj views.",
      type: "Modern Hotel", city: "Agra", state: "Uttar Pradesh", address: "Taj East Gate Road",
      coordinates: { lat: 27.1600, lng: 78.0500 },
      price: { amount: 6500, currency: "INR", period: "night" },
      rating: 4.6, reviewCount: 312,
      images: ["https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200"],
      gallery: {
        "Taj Rooftop": ["https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200"],
        "Modern Rooms": ["https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200"],
        "Lobby Bar": ["https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1551882547-ff40c0d588fa?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200"]
      },
      amenities: [{ id: "wifi", name: "High-speed WiFi", category: "Essential" }, { id: "pool", name: "Rooftop Pool", category: "Luxury" }],
      host: { name: "Radisson Team", isSuperhost: false, joinedDate: "2017-09-22", avatar: "https://i.pravatar.cc/150?u=radissonagra" },
      bedrooms: 1, beds: 1, bathrooms: 1, max_guests: 2, pet_friendly: false, type_of_place: "Room", unavailableDates: [], tags: ["Taj View", "Central"], status: "available"
    },
    {
      id: "up-6",
      name: "The Gateway Hotel Ganges",
      description: "Set in 40 acres of lush gardens, this hotel is an oasis of calm in the bustling city of Varanasi.",
      type: "Resort", city: "Varanasi", state: "Uttar Pradesh", address: "Nadesar Palace Grounds",
      coordinates: { lat: 25.3300, lng: 82.9800 },
      price: { amount: 10500, currency: "INR", period: "night" },
      rating: 4.8, reviewCount: 124,
      images: ["https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200"],
      gallery: {
        "Palatial Gardens": ["https://images.unsplash.com/photo-1558036117-15d82a90b9b1?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1583163773177-33a8712a20ca?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1595872245019-f002fd5035ae?auto=format&fit=crop&w=1200"],
        "Pool Side": ["https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1551882547-ff40c0d588fa?auto=format&fit=crop&w=1200"],
        "Quiet Rooms": ["https://images.unsplash.com/photo-1522708323590-d24dab6ae574?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200"]
      },
      amenities: [{ id: "wifi", name: "High-speed WiFi", category: "Essential" }, { id: "pool", name: "Large Pool", category: "Luxury" }],
      host: { name: "Taj Ganges", isSuperhost: true, joinedDate: "2015-11-20", avatar: "https://i.pravatar.cc/150?u=tajganges" },
      bedrooms: 1, beds: 1, bathrooms: 1, max_guests: 2, pet_friendly: false, type_of_place: "Room", unavailableDates: [], tags: ["Quiet", "Ganges"], status: "available"
    },

    // --- ADDITIONAL WEST BENGAL (3 More) ---
    {
      id: "wb-4",
      name: "The Westin Kolkata Rajarhat",
      description: "A sleek, five-star hotel in the modern business district of Kolkata, featuring a spectacular rooftop bar.",
      type: "Modern Hotel", city: "Kolkata", state: "West Bengal", address: "Plot No. CBD/2",
      coordinates: { lat: 22.5800, lng: 88.4700 },
      price: { amount: 9500, currency: "INR", period: "night" },
      rating: 4.8, reviewCount: 212,
      images: ["https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200"],
      gallery: {
        "Rooftop Bar": ["https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1522708323590-d24dab6ae574?auto=format&fit=crop&w=1200"],
        "Sleek Rooms": ["https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200"],
        "Infinity Pool": ["https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1551882547-ff40c0d588fa?auto=format&fit=crop&w=1200"]
      },
      amenities: [{ id: "wifi", name: "High-speed WiFi", category: "Essential" }, { id: "pool", name: "Infinity Pool", category: "Luxury" }],
      host: { name: "Westin Kolkata", isSuperhost: true, joinedDate: "2018-09-12", avatar: "https://i.pravatar.cc/150?u=westin" },
      bedrooms: 1, beds: 1, bathrooms: 1, max_guests: 2, pet_friendly: false, type_of_place: "Room", unavailableDates: [], tags: ["Modern", "Business"], status: "available"
    },
    {
      id: "wb-5",
      name: "Cedar Inn Darjeeling",
      description: "A heritage boutique hotel in the Himalayas, known for its warm wood interiors and stunning Kanchenjunga views.",
      type: "Heritage Hotel", city: "Darjeeling", state: "West Bengal", address: "Dr. Zakir Hussain Road",
      coordinates: { lat: 27.0400, lng: 88.2600 },
      price: { amount: 8500, currency: "INR", period: "night" },
      rating: 4.7, reviewCount: 84,
      images: ["https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200"],
      gallery: {
        "Mountain Peaks": ["https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1532708059644-5590ed51ce4c?auto=format&fit=crop&w=1200"],
        "Wood Interiors": ["https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200"],
        "Classic Dining": ["https://images.unsplash.com/photo-1556911227-4c177e172433?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1556911261-68743685f0f7?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200"]
      },
      amenities: [{ id: "wifi", name: "High-speed WiFi", category: "Essential" }, { id: "utensils", name: "Himalayan Food", category: "Essential" }],
      host: { name: "Cedar Team", isSuperhost: true, joinedDate: "2015-04-10", avatar: "https://i.pravatar.cc/150?u=cedar" },
      bedrooms: 1, beds: 1, bathrooms: 1, max_guests: 2, pet_friendly: false, type_of_place: "Room", unavailableDates: [], tags: ["Mountains", "Heritage"], status: "available"
    },
    {
      id: "wb-6",
      name: "Raajkutir, Kolkata",
      description: "A unique boutique hotel that recreates the life of a zamindar (landlord) in 19th-century Bengal.",
      type: "Boutique Hotel", city: "Kolkata", state: "West Bengal", address: "89 Swabhumi",
      coordinates: { lat: 22.5700, lng: 88.4000 },
      price: { amount: 7500, currency: "INR", period: "night" },
      rating: 4.75, reviewCount: 68,
      images: ["https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200"],
      gallery: {
        "Zamindar Courtyards": ["https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1551882547-ff40c0d588fa?auto=format&fit=crop&w=1200"],
        "Royal Rooms": ["https://images.unsplash.com/photo-1595181829924-823fc67251fa?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1200"],
        "Traditional Kitchen": ["https://images.unsplash.com/photo-1556911227-4c177e172433?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1556911261-68743685f0f7?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200"]
      },
      amenities: [{ id: "wifi", name: "High-speed WiFi", category: "Essential" }, { id: "utensils", name: "Bengali Dining", category: "Essential" }],
      host: { name: "Raajkutir Team", isSuperhost: true, joinedDate: "2019-03-22", avatar: "https://i.pravatar.cc/150?u=raajkutir" },
      bedrooms: 1, beds: 1, bathrooms: 1, max_guests: 2, pet_friendly: false, type_of_place: "Room", unavailableDates: [], tags: ["History", "Culture"], status: "available"
    },

    // --- ADDITIONAL UTTARAKHAND (3 More) ---
    {
      id: "uk-4",
      name: "The Roseate Ganges Rishikesh",
      description: "A luxury retreat on the banks of the Ganges. Architecture inspired by the river and the surrounding mountains.",
      type: "Modern Resort", city: "Rishikesh", state: "Uttarakhand", address: "Village Timli Kalthri",
      coordinates: { lat: 30.0800, lng: 78.4000 },
      price: { amount: 24000, currency: "INR", period: "night" },
      rating: 4.9, reviewCount: 92,
      images: ["https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200"],
      gallery: {
        "Ganges Terraces": ["https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1522708323590-d24dab6ae574?auto=format&fit=crop&w=1200"],
        "Modern Villas": ["https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200"],
        "Yoga Floor": ["https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1524860769472-246b6afea403?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1512100356956-c122ddc5c246?auto=format&fit=crop&w=1200"]
      },
      amenities: [{ id: "wifi", name: "High-speed WiFi", category: "Essential" }, { id: "pool", name: "Infinity Pool", category: "Luxury" }],
      host: { name: "Roseate Ganges", isSuperhost: true, joinedDate: "2018-05-18", avatar: "https://i.pravatar.cc/150?u=roseganges" },
      bedrooms: 1, beds: 1, bathrooms: 1, max_guests: 2, pet_friendly: false, type_of_place: "Room", unavailableDates: [], tags: ["Spiritual", "Luxury"], status: "available"
    },
    {
      id: "uk-5",
      name: "JW Marriott Mussoorie Resort",
      description: "A luxury resort in the foothills of the Himalayas, offering floor-to-ceiling windows with valley views.",
      type: "Modern Resort", city: "Mussoorie", state: "Uttarakhand", address: "Village Siya, Kempty Fall",
      coordinates: { lat: 30.4800, lng: 78.0200 },
      price: { amount: 26000, currency: "INR", period: "night" },
      rating: 4.95, reviewCount: 456,
      images: ["https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200"],
      gallery: {
        "Valley Panoramas": ["https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200"],
        "Luxury Suites": ["https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1591088398332-8a77d399e80c?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200"],
        "Heated Pool": ["https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1551882547-ff40c0d588fa?auto=format&fit=crop&w=1200"]
      },
      amenities: [{ id: "wifi", name: "High-speed WiFi", category: "Essential" }, { id: "pool", name: "Heated Pool", category: "Luxury" }],
      host: { name: "Marriott Mussoorie", isSuperhost: true, joinedDate: "2016-03-22", avatar: "https://i.pravatar.cc/150?u=marriottuk" },
      bedrooms: 1, beds: 1, bathrooms: 1, max_guests: 2, pet_friendly: false, type_of_place: "Room", unavailableDates: [], tags: ["Mountains", "Luxury"], status: "available"
    },
    {
      id: "uk-6",
      name: "The Kumaon, Almora",
      description: "A striking minimalist hotel on a ridge in the Kumaon Himalayas, with unparalleled views of Nanda Devi.",
      type: "Design Hotel", city: "Almora", state: "Uttarakhand", address: "Village Kasar Devi",
      coordinates: { lat: 29.6200, lng: 79.6800 },
      price: { amount: 18000, currency: "INR", period: "night" },
      rating: 4.88, reviewCount: 42,
      images: ["https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200"],
      gallery: {
        "Peak Views": ["https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200"],
        "Modern Cantilever": ["https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1551882547-ff40c0d588fa?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200"],
        "Glass Suites": ["https://images.unsplash.com/photo-1595181829924-823fc67251fa?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1200"]
      },
      amenities: [{ id: "wifi", name: "High-speed WiFi", category: "Essential" }, { id: "utensils", name: "Kumaoni Dining", category: "Essential" }],
      host: { name: "Kumaon Team", isSuperhost: true, joinedDate: "2019-11-20", avatar: "https://i.pravatar.cc/150?u=kumaon" },
      bedrooms: 1, beds: 1, bathrooms: 1, max_guests: 2, pet_friendly: false, type_of_place: "Room", unavailableDates: [], tags: ["Mountains", "Design"], status: "available"
    },

    // --- BIHAR (3 Hotels) ---
    {
      id: "br-1",
      name: "The Royal Residency",
      description: "A premier hotel in Bodh Gaya, designed to cater to international Buddhist pilgrims with serene surroundings and modern comforts.",
      type: "Modern Hotel", city: "Bodh Gaya", state: "Bihar", address: "Dumuhan Road",
      coordinates: { lat: 24.7000, lng: 84.9800 },
      price: { amount: 5500, currency: "INR", period: "night" },
      rating: 4.6, reviewCount: 132,
      images: ["https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200"],
      gallery: {
        "Zen Gardens": ["https://images.unsplash.com/photo-1558036117-15d82a90b9b1?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1583163773177-33a8712a20ca?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1595872245019-f002fd5035ae?auto=format&fit=crop&w=1200"],
        "Peaceful Rooms": ["https://images.unsplash.com/photo-1522708323590-d24dab6ae574?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200"],
        "Dining Hall": ["https://images.unsplash.com/photo-1556911227-4c177e172433?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1556911261-68743685f0f7?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200"]
      },
      amenities: [{ id: "wifi", name: "High-speed WiFi", category: "Essential" }, { id: "utensils", name: "Vegetarian Only", category: "Essential" }],
      host: { name: "Royal Team Bodh Gaya", isSuperhost: true, joinedDate: "2016-08-15", avatar: "https://i.pravatar.cc/150?u=royalbr" },
      bedrooms: 1, beds: 2, bathrooms: 1, max_guests: 3, pet_friendly: false, type_of_place: "Room", unavailableDates: [], tags: ["Buddhist", "Pilgrimage"], status: "available"
    },
    {
      id: "br-2",
      name: "Hotel Maurya, Patna",
      description: "Patna's first business hotel, offering a perfect blend of luxury and strategic location in the state capital.",
      type: "Business Hotel", city: "Patna", state: "Bihar", address: "South Gandhi Maidan",
      coordinates: { lat: 25.6100, lng: 85.1400 },
      price: { amount: 7500, currency: "INR", period: "night" },
      rating: 4.5, reviewCount: 245,
      images: ["https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200"],
      gallery: {
        "Executive Rooms": ["https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200"],
        "Conference Hall": ["https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200"],
        "Pool Side": ["https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1551882547-f40c0d588fa?auto=format&fit=crop&w=1200"]
      },
      amenities: [{ id: "wifi", name: "High-speed WiFi", category: "Essential" }, { id: "pool", name: "Outdoor Pool", category: "Luxury" }],
      host: { name: "Maurya Team", isSuperhost: false, joinedDate: "2015-05-18", avatar: "https://i.pravatar.cc/150?u=maurya" },
      bedrooms: 1, beds: 1, bathrooms: 1, max_guests: 2, pet_friendly: false, type_of_place: "Room", unavailableDates: [], tags: ["Business", "Central"], status: "available"
    },
    {
      id: "br-3",
      name: "Sambodhi Retreat",
      description: "A luxury resort in Bodh Gaya offering a large campus with multiple water bodies, meditation halls, and eco-friendly cottages.",
      type: "Eco Resort", city: "Bodh Gaya", state: "Bihar", address: "Hatiya, Bodh Gaya",
      coordinates: { lat: 24.6800, lng: 84.9500 },
      price: { amount: 6500, currency: "INR", period: "night" },
      rating: 4.7, reviewCount: 92,
      images: ["https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200"],
      gallery: {
        "Manmade Lakes": ["https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1551882547-ff40c0d588fa?auto=format&fit=crop&w=1200"],
        "Cottage Blocks": ["https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1532708059644-5590ed51ce4c?auto=format&fit=crop&w=1200"],
        "Meditation Cave": ["https://images.unsplash.com/photo-1524860769472-246b6afea403?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1512100356956-c122ddc5c246?auto=format&fit=crop&w=1200"]
      },
      amenities: [{ id: "wifi", name: "High-speed WiFi", category: "Essential" }, { id: "utensils", name: "Organic Dining", category: "Essential" }],
      host: { name: "Sambodhi Management", isSuperhost: true, joinedDate: "2018-02-22", avatar: "https://i.pravatar.cc/150?u=sambodhi" },
      bedrooms: 1, beds: 1, bathrooms: 1, max_guests: 2, pet_friendly: true, type_of_place: "Entire home", unavailableDates: [], tags: ["Zen", "Eco-friendly"], status: "available"
    },

    // --- ADDITIONAL GUJARAT (3 More) ---
    {
      id: "gj-4",
      name: "The Orchard Palace, Gondal",
      description: "A heritage stay in converted guesthouse of the Gondal royalty. Famous for its classic car collection and sprawling orchards.",
      type: "Heritage Hotel", city: "Gondal", state: "Gujarat", address: "Huzoor Palace, Gondal",
      coordinates: { lat: 21.9600, lng: 70.8000 },
      price: { amount: 6500, currency: "INR", period: "night" },
      rating: 4.6, reviewCount: 38,
      images: ["https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200"],
      gallery: {
        "Royal Orhcards": ["https://images.unsplash.com/photo-1558036117-15d82a90b9b1?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1583163773177-33a8712a20ca?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1595872245019-f002fd5035ae?auto=format&fit=crop&w=1200"],
        "Classic Rooms": ["https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1551882547-ff40c0d588fa?auto=format&fit=crop&w=1200"],
        "Car Collection": ["https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1522708323590-d24dab6ae574?auto=format&fit=crop&w=1200"]
      },
      amenities: [{ id: "wifi", name: "High-speed WiFi", category: "Essential" }, { id: "pool", name: "Classic Pool", category: "Luxury" }],
      host: { name: "Gondal Heritage", isSuperhost: true, joinedDate: "2017-04-12", avatar: "https://i.pravatar.cc/150?u=gondal" },
      bedrooms: 1, beds: 1, bathrooms: 1, max_guests: 2, pet_friendly: false, type_of_place: "Room", unavailableDates: [], tags: ["Heritage", "Classic Cars"], status: "available"
    },
    {
      id: "gj-5",
      name: "Woods at Sasan",
      description: "A luxury wellness retreat on the edge of the Gir forest, focused on mindful living and connection with nature.",
      type: "Wellness Resort", city: "Sasan Gir", state: "Gujarat", address: "Sasan Talala Highway",
      coordinates: { lat: 21.1800, lng: 70.5800 },
      price: { amount: 18500, currency: "INR", period: "night" },
      rating: 4.9, reviewCount: 84,
      images: ["https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200"],
      gallery: {
        "Forest Pods": ["https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1532708059644-5590ed51ce4c?auto=format&fit=crop&w=1200"],
        "Yoga Floor": ["https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1524860769472-246b6afea403?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1512100356956-c122ddc5c246?auto=format&fit=crop&w=1200"],
        "Organic Dining": ["https://images.unsplash.com/photo-1556911227-4c177e172433?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1556911261-68743685f0f7?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200"]
      },
      amenities: [{ id: "wifi", name: "High-speed WiFi", category: "Essential" }, { id: "pool", name: "Pool", category: "Luxury" }],
      host: { name: "Woods Team", isSuperhost: true, joinedDate: "2018-05-18", avatar: "https://i.pravatar.cc/150?u=woods" },
      bedrooms: 1, beds: 1, bathrooms: 1, max_guests: 2, pet_friendly: true, type_of_place: "Room", unavailableDates: [], tags: ["Wellness", "Nature"], status: "available"
    },
    {
      id: "gj-6",
      name: "Hyatt Regency Ahmedabad",
      description: "A luxury business hotel overlooking the Sabarmati Riverfront, offering modern amenities and refined luxury.",
      type: "Business Hotel", city: "Ahmedabad", state: "Gujarat", address: "Ashram Road, Usmanpura",
      coordinates: { lat: 23.0400, lng: 72.5700 },
      price: { amount: 8500, currency: "INR", period: "night" },
      rating: 4.8, reviewCount: 312,
      images: ["https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200"],
      gallery: {
        "River Views": ["https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1522708323590-d24dab6ae574?auto=format&fit=crop&w=1200"],
        "Regency Rooms": ["https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200"],
        "Pool Deck": ["https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1551882547-ff40c0d588fa?auto=format&fit=crop&w=1200"]
      },
      amenities: [{ id: "wifi", name: "High-speed WiFi", category: "Essential" }, { id: "pool", name: "Outdoor Pool", category: "Luxury" }],
      host: { name: "Hyatt Team", isSuperhost: true, joinedDate: "2015-11-20", avatar: "https://i.pravatar.cc/150?u=hyattgj" },
      bedrooms: 1, beds: 1, bathrooms: 1, max_guests: 2, pet_friendly: false, type_of_place: "Room", unavailableDates: [], tags: ["Modern", "Business"], status: "available"
    },

    // --- TAMIL NADU (6 Hotels) ---
    {
      id: "tn-7",
      name: "Taj Fisherman’s Cove Resort",
      description: "Built on the ramparts of an old Dutch Fort, this resort in Covelong offers a unique heritage beach experience.",
      type: "Beach Resort", city: "Chennai", state: "Tamil Nadu", address: "Covelong Beach, Kanchipuram",
      coordinates: { lat: 12.7800, lng: 80.2500 },
      price: { amount: 16500, currency: "INR", period: "night" },
      rating: 4.88, reviewCount: 456,
      images: ["https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200"],
      gallery: {
        "Beach Cottages": ["https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200"],
        "Fort Pool": ["https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1551882547-ff40c0d588fa?auto=format&fit=crop&w=1200"],
        "Sea Side Dining": ["https://images.unsplash.com/photo-1556911227-4c177e172433?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1556911261-68743685f0f7?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200"]
      },
      amenities: [{ id: "wifi", name: "High-speed WiFi", category: "Essential" }, { id: "pool", name: "Infinity Pool", category: "Luxury" }],
      host: { name: "Taj Chennai", isSuperhost: true, joinedDate: "2012-04-12", avatar: "https://i.pravatar.cc/150?u=tajtn" },
      bedrooms: 1, beds: 1, bathrooms: 1, max_guests: 2, pet_friendly: true, type_of_place: "Room", unavailableDates: [], tags: ["Beach", "Heritage"], status: "available"
    },
    {
      id: "tn-8",
      name: "The Savoy, Ooty",
      description: "A historic heritage hotel in the Blue Mountains. With its rambling English gardens and high ceilings, it captures the colonial charm of Ooty.",
      type: "Heritage Hotel", city: "Ooty", state: "Tamil Nadu", address: "Sylks Road, Ooty",
      coordinates: { lat: 11.4100, lng: 76.7000 },
      price: { amount: 12500, currency: "INR", period: "night" },
      rating: 4.75, reviewCount: 134,
      images: ["https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200"],
      gallery: {
        "English Gardens": ["https://images.unsplash.com/photo-1558036117-15d82a90b9b1?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1583163773177-33a8712a20ca?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1595872245019-f002fd5035ae?auto=format&fit=crop&w=1200"],
        "Classic Rooms": ["https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1551882547-ff40c0d588fa?auto=format&fit=crop&w=1200"],
        "Lounge Fireplace": ["https://images.unsplash.com/photo-1496102434273-049539308cc5?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1507133750040-4a8f57021571?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200"]
      },
      amenities: [{ id: "wifi", name: "High-speed WiFi", category: "Essential" }, { id: "utensils", name: "High Tea", category: "Essential" }],
      host: { name: "Savoy Ooty", isSuperhost: true, joinedDate: "2015-05-18", avatar: "https://i.pravatar.cc/150?u=savoyooty" },
      bedrooms: 1, beds: 1, bathrooms: 1, max_guests: 2, pet_friendly: false, type_of_place: "Room", unavailableDates: [], tags: ["Mountains", "Heritage"], status: "available"
    },
    {
      id: "tn-9",
      name: "Visalam, Chettinad",
      description: "A heritage mansion in Kanadukathan, offering an authentic Chettinad experience with its tile work, teak wood, and incredible cuisine.",
      type: "Heritage Home", city: "Karaikudi", state: "Tamil Nadu", address: "Local Library Road, Kanadukathan",
      coordinates: { lat: 10.1700, lng: 78.7800 },
      price: { amount: 14000, currency: "INR", period: "night" },
      rating: 4.92, reviewCount: 64,
      images: ["https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200"],
      gallery: {
        "Mansion Courtyard": ["https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1551882547-ff40c0d588fa?auto=format&fit=crop&w=1200"],
        "Regional Suites": ["https://images.unsplash.com/photo-1595181829924-823fc67251fa?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1200"],
        "Traditional Kitchen": ["https://images.unsplash.com/photo-1556911227-4c177e172433?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1556911261-68743685f0f7?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200"]
      },
      amenities: [{ id: "wifi", name: "High-speed WiFi", category: "Essential" }, { id: "pool", name: "Courtyard Pool", category: "Luxury" }],
      host: { name: "CGH Visalam", isSuperhost: true, joinedDate: "2016-11-20", avatar: "https://i.pravatar.cc/150?u=visalam" },
      bedrooms: 1, beds: 1, bathrooms: 1, max_guests: 2, pet_friendly: false, type_of_place: "Room", unavailableDates: [], tags: ["Heritage", "Culture"], status: "available"
    },
    {
      id: "tn-4",
      name: "The Gateway Hotel Madurai",
      description: "Set on Pasumalai Hill, this hotel offers some of the best views of the historic city of Madurai and the Meenakshi Temple.",
      type: "City Hotel", city: "Madurai", state: "Tamil Nadu", address: "Pasumalai, Madurai",
      coordinates: { lat: 9.9000, lng: 78.0800 },
      price: { amount: 8500, currency: "INR", period: "night" },
      rating: 4.7, reviewCount: 156,
      images: ["https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200"],
      gallery: {
        "Hill Views": ["https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1522708323590-d24dab6ae574?auto=format&fit=crop&w=1200"],
        "Modern Rooms": ["https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200"],
        "Peacock Gardens": ["https://images.unsplash.com/photo-1558036117-15d82a90b9b1?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1583163773177-33a8712a20ca?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1595872245019-f002fd5035ae?auto=format&fit=crop&w=1200"]
      },
      amenities: [{ id: "wifi", name: "High-speed WiFi", category: "Essential" }, { id: "pool", name: "Hill Pool", category: "Luxury" }],
      host: { name: "Taj Madurai", isSuperhost: true, joinedDate: "2014-06-15", avatar: "https://i.pravatar.cc/150?u=tajmadurai" },
      bedrooms: 1, beds: 1, bathrooms: 1, max_guests: 2, pet_friendly: false, type_of_place: "Room", unavailableDates: [], tags: ["Temple Access", "City View"], status: "available"
    },
    {
      id: "tn-5",
      name: "GRT Nature Trails Sky Roku",
      description: "A luxury resort in Yercaud featuring suites with floor-to-ceiling windows overlooking the valley.",
      type: "Modern Resort", city: "Yercaud", state: "Tamil Nadu", address: "Ondikadai, Yercaud",
      coordinates: { lat: 11.7700, lng: 78.2000 },
      price: { amount: 7500, currency: "INR", period: "night" },
      rating: 4.65, reviewCount: 92,
      images: ["https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200"],
      gallery: {
        "Valley Suites": ["https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200"],
        "Glass Balcony": ["https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1522708323590-d24dab6ae574?auto=format&fit=crop&w=1200"],
        "Infinity Pool": ["https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1551882547-ff40c0d588fa?auto=format&fit=crop&w=1200"]
      },
      amenities: [{ id: "wifi", name: "High-speed WiFi", category: "Essential" }, { id: "pool", name: "Infinity Pool", category: "Luxury" }],
      host: { name: "GRT Team", isSuperhost: true, joinedDate: "2017-02-18", avatar: "https://i.pravatar.cc/150?u=grt" },
      bedrooms: 1, beds: 1, bathrooms: 1, max_guests: 2, pet_friendly: false, type_of_place: "Room", unavailableDates: [], tags: ["Mountains", "Valley View"], status: "available"
    },
    {
      id: "tn-6",
      name: "The Promenade, Pondicherry",
      description: "A stylish boutique hotel right on the seafront in the heart of Pondicherry's French Quarter.",
      type: "Boutique Hotel", city: "Pondicherry", state: "Tamil Nadu", address: "Goubert Avenue",
      coordinates: { lat: 11.9300, lng: 79.8300 },
      price: { amount: 9500, currency: "INR", period: "night" },
      rating: 4.8, reviewCount: 156,
      images: ["https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200"],
      gallery: {
        "Sea Front": ["https://images.unsplash.com/photo-1512100356956-c122ddc5c246?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1532708059644-5590ed51ce4c?auto=format&fit=crop&w=1200"],
        "Sleek Interiors": ["https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200"],
        "Lighthouse View": ["https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1522708323590-d24dab6ae574?auto=format&fit=crop&w=1200"]
      },
      amenities: [{ id: "wifi", name: "High-speed WiFi", category: "Essential" }, { id: "pool", name: "Rooftop Pool", category: "Luxury" }],
      host: { name: "Promenade Team", isSuperhost: true, joinedDate: "2018-09-22", avatar: "https://i.pravatar.cc/150?u=promenade" },
      bedrooms: 1, beds: 1, bathrooms: 1, max_guests: 2, pet_friendly: false, type_of_place: "Room", unavailableDates: [], tags: ["Sea View", "French Quarter"], status: "available"
    },

    // --- ANDHRA PRADESH (3 Hotels) ---
    {
      id: "ap-1",
      name: "The Gateway Hotel Beach Road",
      description: "A luxury hotel in Visakhapatnam overlooking the Bay of Bengal, perfect for both business and leisure.",
      type: "City Hotel", city: "Visakhapatnam", state: "Andhra Pradesh", address: "V.M. Road, Visakhapatnam",
      coordinates: { lat: 17.7000, lng: 83.3100 },
      price: { amount: 6500, currency: "INR", period: "night" },
      rating: 4.7, reviewCount: 156,
      images: ["https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200"],
      gallery: {
        "Vizag Beach": ["https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200"],
        "Modern Rooms": ["https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200"],
        "Pool Side": ["https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1551882547-ff40c0d588fa?auto=format&fit=crop&w=1200"]
      },
      amenities: [{ id: "wifi", name: "High-speed WiFi", category: "Essential" }, { id: "pool", name: "Beach Pool", category: "Luxury" }],
      host: { name: "Taj Vizag", isSuperhost: true, joinedDate: "2015-04-12", avatar: "https://i.pravatar.cc/150?u=tajvizag" },
      bedrooms: 1, beds: 1, bathrooms: 1, max_guests: 2, pet_friendly: false, type_of_place: "Room", unavailableDates: [], tags: ["Sea View", "Business"], status: "available"
    },
    {
      id: "ap-2",
      name: "The Andhra Heritage, Tirupati",
      description: "A luxury boutique hotel located at the foothills of the Tirumala Hills, perfect for spiritual travelers.",
      type: "Modern Hotel", city: "Tirupati", state: "Andhra Pradesh", address: "Renigunta Road",
      coordinates: { lat: 13.6200, lng: 79.4100 },
      price: { amount: 5500, currency: "INR", period: "night" },
      rating: 4.8, reviewCount: 92,
      images: ["https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200"],
      gallery: {
        "Hill Views": ["https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200"],
        "Quiet Suites": ["https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200"],
        "Traditional Dining": ["https://images.unsplash.com/photo-1556911227-4c177e172433?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1556911261-68743685f0f7?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200"]
      },
      amenities: [{ id: "wifi", name: "High-speed WiFi", category: "Essential" }, { id: "utensils", name: "Traditional Meals", category: "Essential" }],
      host: { name: "Heritage Team", isSuperhost: true, joinedDate: "2017-06-18", avatar: "https://i.pravatar.cc/150?u=apheritage" },
      bedrooms: 1, beds: 1, bathrooms: 1, max_guests: 2, pet_friendly: false, type_of_place: "Room", unavailableDates: [], tags: ["Temple View", "Spiritual"], status: "available"
    },
    {
      id: "ap-3",
      name: "Haritha Berm Park",
      description: "A unique riverside resort on the banks of the Krishna River, offering boat rides and serene garden views.",
      type: "Riverside Resort", city: "Vijayawada", state: "Andhra Pradesh", address: "Bhavani Island Road",
      coordinates: { lat: 16.5100, lng: 80.6000 },
      price: { amount: 3500, currency: "INR", period: "night" },
      rating: 4.6, reviewCount: 48,
      images: ["https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200"],
      gallery: {
        "Krishna River": ["https://images.unsplash.com/photo-1510166089176-b33324d03247?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200"],
        "Garden Chalets": ["https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1532708059644-5590ed51ce4c?auto=format&fit=crop&w=1200"],
        "Boat Jetty": ["https://images.unsplash.com/photo-1521336575822-6da63fb45455?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1473186578172-c141e6798ee4?auto=format&fit=crop&w=1200"]
      },
      amenities: [{ id: "wifi", name: "High-speed WiFi", category: "Essential" }, { id: "utensils", name: "Riverside Food", category: "Essential" }],
      host: { name: "Haritha Resorts", isSuperhost: false, joinedDate: "2019-09-20", avatar: "https://i.pravatar.cc/150?u=haritha" },
      bedrooms: 1, beds: 2, bathrooms: 1, max_guests: 4, pet_friendly: true, type_of_place: "Room", unavailableDates: [], tags: ["River View", "Adventure"], status: "available"
    },

    // --- ODISHA (3 Hotels) ---
    {
      id: "or-1",
      name: "Mayfair Waves, Puri",
      description: "A luxury beach resort in Puri, combining classical decor with spectacular views of the Bay of Bengal.",
      type: "Beach Resort", city: "Puri", state: "Odisha", address: "Chakratirtha Road",
      coordinates: { lat: 19.8200, lng: 85.8300 },
      price: { amount: 10500, currency: "INR", period: "night" },
      rating: 4.85, reviewCount: 156,
      images: ["https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200"],
      gallery: {
        "Puri Beach": ["https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200"],
        "Classical Rooms": ["https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1551882547-ff40c0d588fa?auto=format&fit=crop&w=1200"],
        "Infinity Pool": ["https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1551882547-ff40c0d588fa?auto=format&fit=crop&w=1200"]
      },
      amenities: [{ id: "wifi", name: "High-speed WiFi", category: "Essential" }, { id: "pool", name: "Infinity Pool", category: "Luxury" }],
      host: { name: "Mayfair Odisha", isSuperhost: true, joinedDate: "2013-05-18", avatar: "https://i.pravatar.cc/150?u=mayfairor" },
      bedrooms: 1, beds: 1, bathrooms: 1, max_guests: 2, pet_friendly: true, type_of_place: "Room", unavailableDates: [], tags: ["Beach", "Temple Access"], status: "available"
    },
    {
      id: "or-2",
      name: "Trident Bhubaneswar",
      description: "Set in extensive gardens, this elegant hotel is a peaceful retreat in the Temple City of India.",
      type: "Modern Hotel", city: "Bhubaneswar", state: "Odisha", address: "C.B. Nayak Marg",
      coordinates: { lat: 20.3000, lng: 85.8200 },
      price: { amount: 8500, currency: "INR", period: "night" },
      rating: 4.75, reviewCount: 312,
      images: ["https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200"],
      gallery: {
        "Manicured Gardens": ["https://images.unsplash.com/photo-1558036117-15d82a90b9b1?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1583163773177-33a8712a20ca?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1595872245019-f002fd5035ae?auto=format&fit=crop&w=1200"],
        "Modern Suites": ["https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200"],
        "Classic Dining": ["https://images.unsplash.com/photo-1556911227-4c177e172433?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1556911261-68743685f0f7?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200"]
      },
      amenities: [{ id: "wifi", name: "High-speed WiFi", category: "Essential" }, { id: "pool", name: "Outdoor Pool", category: "Luxury" }],
      host: { name: "Trident Team", isSuperhost: true, joinedDate: "2015-11-20", avatar: "https://i.pravatar.cc/150?u=tridentor" },
      bedrooms: 1, beds: 1, bathrooms: 1, max_guests: 2, pet_friendly: false, type_of_place: "Room", unavailableDates: [], tags: ["City Center", "History"], status: "available"
    },
    {
      id: "or-3",
      name: "Swosti Chilika Resort",
      description: "A luxury resort on the banks of Chilika Lake, India's largest coastal lagoon. Experience world-class hospitality in a serene natural setting.",
      type: "Lake Resort", city: "Chilika", state: "Odisha", address: "Ganjam District",
      coordinates: { lat: 19.5000, lng: 85.1000 },
      price: { amount: 12500, currency: "INR", period: "night" },
      rating: 4.8, reviewCount: 88,
      images: ["https://images.unsplash.com/photo-1510166089176-b33324d03247?auto=format&fit=crop&w=1200"],
      gallery: {
        "Lake Front": ["https://images.unsplash.com/photo-1510166089176-b33324d03247?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200"],
        "Luxury Villas": ["https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200"],
        "Water Sports": ["https://images.unsplash.com/photo-1521336575822-6da63fb45455?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1473186578172-c141e6798ee4?auto=format&fit=crop&w=1200"]
      },
      amenities: [{ id: "wifi", name: "High-speed WiFi", category: "Essential" }, { id: "pool", name: "Lake Pool", category: "Luxury" }],
      host: { name: "Swosti Team", isSuperhost: true, joinedDate: "2018-09-22", avatar: "https://i.pravatar.cc/150?u=swosti" },
      bedrooms: 1, beds: 1, bathrooms: 1, max_guests: 2, pet_friendly: false, type_of_place: "Room", unavailableDates: [], tags: ["Lake View", "Nature"], status: "available"
    },

    // --- ADDITIONAL MADHYA PRADESH (3 More) ---
    {
      id: "mp-4",
      name: "Jehan Numa Palace Hotel",
      description: "A 19th-century palace hotel in Bhopal, offering a blend of British Colonial, Italian Renaissance, and Classical Greek architecture.",
      type: "Heritage Hotel", city: "Bhopal", state: "Madhya Pradesh", address: "Shamla Hills",
      coordinates: { lat: 23.2500, lng: 77.4000 },
      price: { amount: 8500, currency: "INR", period: "night" },
      rating: 4.75, reviewCount: 156,
      images: ["https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200"],
      gallery: {
        "Palace Corridors": ["https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1551882547-ff40c0d588fa?auto=format&fit=crop&w=1200"],
        "Royal Rooms": ["https://images.unsplash.com/photo-1595181829924-823fc67251fa?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1200"],
        "Riding Club": ["https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1522708323590-d24dab6ae574?auto=format&fit=crop&w=1200"]
      },
      amenities: [{ id: "wifi", name: "High-speed WiFi", category: "Essential" }, { id: "pool", name: "Classic Pool", category: "Luxury" }],
      host: { name: "Bhopal Heritage", isSuperhost: true, joinedDate: "2015-06-12", avatar: "https://i.pravatar.cc/150?u=jehan" },
      bedrooms: 1, beds: 1, bathrooms: 1, max_guests: 2, pet_friendly: false, type_of_place: "Room", unavailableDates: [], tags: ["Heritage", "City View"], status: "available"
    },
    {
      id: "mp-5",
      name: "Tuli Tiger Resort, Kanha",
      description: "A luxury safari resort in Kanha, designed like a village with mud-style cottages and modern luxurious interiors.",
      type: "Safari Resort", city: "Kanha", state: "Madhya Pradesh", address: "Mocha, Kanha Tiger Reserve",
      coordinates: { lat: 22.3500, lng: 80.6000 },
      price: { amount: 12500, currency: "INR", period: "night" },
      rating: 4.65, reviewCount: 92,
      images: ["https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200"],
      gallery: {
        "Jungle Huts": ["https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1532708059644-5590ed51ce4c?auto=format&fit=crop&w=1200"],
        "Wild Safaris": ["https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200"],
        "Pool Side": ["https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1551882547-ff40c0d588fa?auto=format&fit=crop&w=1200"]
      },
      amenities: [{ id: "wifi", name: "High-speed WiFi", category: "Essential" }, { id: "pool", name: "Nature Pool", category: "Luxury" }],
      host: { name: "Tuli Team", isSuperhost: true, joinedDate: "2017-08-18", avatar: "https://i.pravatar.cc/150?u=tuli" },
      bedrooms: 1, beds: 1, bathrooms: 1, max_guests: 2, pet_friendly: true, type_of_place: "Room", unavailableDates: [], tags: ["Wildlife", "Safari"], status: "available"
    },
    {
      id: "mp-6",
      name: "The Gwalior Heritage",
      description: "A luxury stay near the Gwalior Fort, offering a blend of Scindia royalty and contemporary comfort.",
      type: "Modern Hotel", city: "Gwalior", state: "Madhya Pradesh", address: "Tansen Road",
      coordinates: { lat: 26.2100, lng: 78.1800 },
      price: { amount: 6500, currency: "INR", period: "night" },
      rating: 4.7, reviewCount: 64,
      images: ["https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200"],
      gallery: {
        "Fort Gate": ["https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1522708323590-d24dab6ae574?auto=format&fit=crop&w=1200"],
        "Modern Suites": ["https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200"],
        "Terrace Dining": ["https://images.unsplash.com/photo-1556911227-4c177e172433?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1556911261-68743685f0f7?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200"]
      },
      amenities: [{ id: "wifi", name: "High-speed WiFi", category: "Essential" }, { id: "pool", name: "Rooftop Pool", category: "Luxury" }],
      host: { name: "Scindia Heritage", isSuperhost: true, joinedDate: "2016-04-15", avatar: "https://i.pravatar.cc/150?u=gwalior" },
      bedrooms: 1, beds: 1, bathrooms: 1, max_guests: 2, pet_friendly: false, type_of_place: "Room", unavailableDates: [], tags: ["Fort Access", "Modern"], status: "available"
    },

    // --- ADDITIONAL ASSAM (3 More) ---
    {
      id: "as-4",
      name: "Radisson Blu Guwahati",
      description: "A world-class business hotel with views of the Deepor Beel bird sanctuary, providing a touch of nature in the city.",
      type: "Modern Hotel", city: "Guwahati", state: "Assam", address: "NH-37, Gotanagar",
      coordinates: { lat: 26.1200, lng: 91.6800 },
      price: { amount: 8500, currency: "INR", period: "night" },
      rating: 4.8, reviewCount: 312,
      images: ["https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200"],
      gallery: {
        "Bird Sanctuary View": ["https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1522708323590-d24dab6ae574?auto=format&fit=crop&w=1200"],
        "Blu Rooms": ["https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200"],
        "Pool Deck": ["https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1551882547-ff40c0d588fa?auto=format&fit=crop&w=1200"]
      },
      amenities: [{ id: "wifi", name: "High-speed WiFi", category: "Essential" }, { id: "pool", name: "Grand Pool", category: "Luxury" }],
      host: { name: "Radisson Team", isSuperhost: true, joinedDate: "2015-11-20", avatar: "https://i.pravatar.cc/150?u=radissonas" },
      bedrooms: 1, beds: 1, bathrooms: 1, max_guests: 2, pet_friendly: false, type_of_place: "Room", unavailableDates: [], tags: ["Modern", "Business"], status: "available"
    },
    {
      id: "as-5",
      name: "Wild Mahseer",
      description: "A unique heritage stay in a restored tea planter's bungalow, named after the famous fish found in the Brahmaputra.",
      type: "Heritage Home", city: "Tezpur", state: "Assam", address: "Balipara Tea Estate",
      coordinates: { lat: 26.8300, lng: 92.8800 },
      price: { amount: 14500, currency: "INR", period: "night" },
      rating: 4.92, reviewCount: 42,
      images: ["https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200"],
      gallery: {
        "Manor House": ["https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1532708059644-5590ed51ce4c?auto=format&fit=crop&w=1200"],
        "Tea Walks": ["https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200"],
        "Classic Dining": ["https://images.unsplash.com/photo-1556911227-4c177e172433?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1556911261-68743685f0f7?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200"]
      },
      amenities: [{ id: "wifi", name: "High-speed WiFi", category: "Essential" }, { id: "utensils", name: "Estate Dining", category: "Essential" }],
      host: { name: "Mahseer Team", isSuperhost: true, joinedDate: "2018-02-14", avatar: "https://i.pravatar.cc/150?u=mahseer" },
      bedrooms: 1, beds: 1, bathrooms: 1, max_guests: 2, pet_friendly: false, type_of_place: "Room", unavailableDates: [], tags: ["Tea", "Heritage"], status: "available"
    },
    {
      id: "as-6",
      name: "Bonhabi Resort, Kaziranga",
      description: "A comfortable village-style resort in Kaziranga, offering budget-friendly adventure stays for wildlife enthusiasts.",
      type: "Resort", city: "Kaziranga", state: "Assam", address: "Kohora Range, Kaziranga",
      coordinates: { lat: 26.5800, lng: 93.4100 },
      price: { amount: 4500, currency: "INR", period: "night" },
      rating: 4.5, reviewCount: 142,
      images: ["https://images.unsplash.com/photo-1505881502353-a1986add3732?auto=format&fit=crop&w=1200"],
      gallery: {
        "Jungle Back": ["https://images.unsplash.com/photo-1505881502353-a1986add3732?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1496102434273-049539308cc5?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200"],
        "Standard Rooms": ["https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200"],
        "Dining Deck": ["https://images.unsplash.com/photo-1556911227-4c177e172433?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1556911261-68743685f0f7?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200"]
      },
      amenities: [{ id: "wifi", name: "Limited WiFi", category: "Essential" }, { id: "utensils", name: "Local Meals", category: "Essential" }],
      host: { name: "Bonhabi Management", isSuperhost: false, joinedDate: "2019-11-20", avatar: "https://i.pravatar.cc/150?u=bonhabi" },
      bedrooms: 1, beds: 2, bathrooms: 1, max_guests: 3, pet_friendly: true, type_of_place: "Room", unavailableDates: [], tags: ["Wildlife", "Budget"], status: "available"
    },

    // --- ADDITIONAL BIHAR (3 More) ---
    {
      id: "br-4",
      name: "Hotel Patliputra Nirvana",
      description: "A modern hotel in Patna, offering a touch of elegance and convenience for business travelers and tourists alike.",
      type: "Modern Hotel", city: "Patna", state: "Bihar", address: "Frazer Road",
      coordinates: { lat: 25.6110, lng: 85.1380 },
      price: { amount: 4500, currency: "INR", period: "night" },
      rating: 4.4, reviewCount: 165,
      images: ["https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200"],
      gallery: {
        "Executive Rooms": ["https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200"],
        "Lobby Lounge": ["https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1551882547-ff40c0d588fa?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200"],
        "Standard Kitchen": ["https://images.unsplash.com/photo-1556911227-4c177e172433?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1556911261-68743685f0f7?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200"]
      },
      amenities: [{ id: "wifi", name: "High-speed WiFi", category: "Essential" }, { id: "tv", name: "Smart TV", category: "Entertainment" }],
      host: { name: "Nirvana Team", isSuperhost: false, joinedDate: "2018-05-12", avatar: "https://i.pravatar.cc/150?u=nirvana" },
      bedrooms: 1, beds: 1, bathrooms: 1, max_guests: 2, pet_friendly: false, type_of_place: "Room", unavailableDates: [], tags: ["Central", "Business"], status: "available"
    },
    {
      id: "br-5",
      name: "Tathagat Residency",
      description: "Conveniently located near the Mahabodhi Temple in Bodh Gaya, this hotel offers simple and clean comfort for spiritual seekers.",
      type: "Modern Hotel", city: "Bodh Gaya", state: "Bihar", address: "Main Road, Bodh Gaya",
      coordinates: { lat: 24.6980, lng: 84.9900 },
      price: { amount: 3500, currency: "INR", period: "night" },
      rating: 4.3, reviewCount: 88,
      images: ["https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200"],
      gallery: {
        "Mahabodhi View": ["https://images.unsplash.com/photo-1558036117-15d82a90b9b1?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1583163773177-33a8712a20ca?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1595872245019-f002fd5035ae?auto=format&fit=crop&w=1200"],
        "Cosy Rooms": ["https://images.unsplash.com/photo-1522708323590-d24dab6ae574?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200"],
        "Dining Deck": ["https://images.unsplash.com/photo-1556911227-4c177e172433?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1556911261-68743685f0f7?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200"]
      },
      amenities: [{ id: "wifi", name: "High-speed WiFi", category: "Essential" }, { id: "utensils", name: "Standard Meals", category: "Essential" }],
      host: { name: "Tathagat Team", isSuperhost: false, joinedDate: "2017-09-20", avatar: "https://i.pravatar.cc/150?u=tathagat" },
      bedrooms: 1, beds: 2, bathrooms: 1, max_guests: 3, pet_friendly: false, type_of_place: "Room", unavailableDates: [], tags: ["Temple Access", "Budget"], status: "available"
    },
    {
      id: "br-6",
      name: "The Rajgir Heritage",
      description: "A unique stay in the historic city of Rajgir, known for its hot springs and ancient Buddhist structures.",
      type: "Heritage Hotel", city: "Rajgir", state: "Bihar", address: "Kund Area",
      coordinates: { lat: 25.0300, lng: 85.4200 },
      price: { amount: 5500, currency: "INR", period: "night" },
      rating: 4.5, reviewCount: 56,
      images: ["https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200"],
      gallery: {
        "Hill Terrains": ["https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1532708059644-5590ed51ce4c?auto=format&fit=crop&w=1200"],
        "Restored Rooms": ["https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1551882547-ff40c0d588fa?auto=format&fit=crop&w=1200"],
        "Traditional Dining": ["https://images.unsplash.com/photo-1556911227-4c177e172433?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1556911261-68743685f0f7?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200"]
      },
      amenities: [{ id: "wifi", name: "High-speed WiFi", category: "Essential" }, { id: "utensils", name: "Organic Dining", category: "Essential" }],
      host: { name: "Rajgir Management", isSuperhost: true, joinedDate: "2019-03-22", avatar: "https://i.pravatar.cc/150?u=rajgir" },
      bedrooms: 1, beds: 1, bathrooms: 1, max_guests: 2, pet_friendly: true, type_of_place: "Room", unavailableDates: [], tags: ["History", "Buddhist"], status: "available"
    },

    // --- ADDITIONAL ODISHA (3 More) ---
    {
      id: "or-4",
      name: "The Hans Coco Palms",
      description: "A luxury beach resort in Puri set within 5 acres of tropical gardens and coconut groves.",
      type: "Beach Resort", city: "Puri", state: "Odisha", address: "Swargadwar",
      coordinates: { lat: 19.8000, lng: 85.8100 },
      price: { amount: 8500, currency: "INR", period: "night" },
      rating: 4.7, reviewCount: 132,
      images: ["https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200"],
      gallery: {
        "Coconut Groves": ["https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200"],
        "Garden Suites": ["https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200"],
        "Beach Deck": ["https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1551882547-ff40c0d588fa?auto=format&fit=crop&w=1200"]
      },
      amenities: [{ id: "wifi", name: "High-speed WiFi", category: "Essential" }, { id: "pool", name: "Garden Pool", category: "Luxury" }],
      host: { name: "Hans Team", isSuperhost: true, joinedDate: "2016-08-15", avatar: "https://i.pravatar.cc/150?u=hans" },
      bedrooms: 1, beds: 1, bathrooms: 1, max_guests: 2, pet_friendly: true, type_of_place: "Room", unavailableDates: [], tags: ["Beach", "Nature"], status: "available"
    },
    {
      id: "or-5",
      name: "Hotel Swosti Grand",
      description: "A luxury city hotel in Bhubaneswar, known for its hospitality and extensive event facilities.",
      type: "Business Hotel", city: "Bhubaneswar", state: "Odisha", address: "Janpath",
      coordinates: { lat: 20.2800, lng: 85.8400 },
      price: { amount: 6500, currency: "INR", period: "night" },
      rating: 4.6, reviewCount: 245,
      images: ["https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200"],
      gallery: {
        "Executive Suites": ["https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200"],
        "Banquet Hall": ["https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200"],
        "Pantry Area": ["https://images.unsplash.com/photo-1556911227-4c177e172433?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1556911261-68743685f0f7?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200"]
      },
      amenities: [{ id: "wifi", name: "High-speed WiFi", category: "Essential" }, { id: "pool", name: "Leisure Pool", category: "Luxury" }],
      host: { name: "Swosti Team", isSuperhost: false, joinedDate: "2015-05-18", avatar: "https://i.pravatar.cc/150?u=swostigrand" },
      bedrooms: 1, beds: 1, bathrooms: 1, max_guests: 2, pet_friendly: false, type_of_place: "Room", unavailableDates: [], tags: ["Business", "Central"], status: "available"
    },
    {
      id: "or-6",
      name: "Toshali Sands, Puri",
      description: "An ethnic village resort located on the Puri-Konark Marine Drive, offering a touch of rural Odisha with luxury amenities.",
      type: "Resort", city: "Puri", state: "Odisha", address: "Marine Drive",
      coordinates: { lat: 19.8500, lng: 85.9500 },
      price: { amount: 5500, currency: "INR", period: "night" },
      rating: 4.5, reviewCount: 92,
      images: ["https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200"],
      gallery: {
        "Ethnic Cottages": ["https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1532708059644-5590ed51ce4c?auto=format&fit=crop&w=1200"],
        "Marine Drive": ["https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1522708323590-d24dab6ae574?auto=format&fit=crop&w=1200"],
        "Amphitheatre": ["https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1551882547-ff40c0d588fa?auto=format&fit=crop&w=1200"]
      },
      amenities: [{ id: "wifi", name: "High-speed WiFi", category: "Essential" }, { id: "pool", name: "Large Pool", category: "Luxury" }],
      host: { name: "Toshali Management", isSuperhost: true, joinedDate: "2018-09-22", avatar: "https://i.pravatar.cc/150?u=toshali" },
      bedrooms: 1, beds: 2, bathrooms: 1, max_guests: 4, pet_friendly: true, type_of_place: "Room", unavailableDates: [], tags: ["Resort", "Nature"], status: "available"
    },

    // --- ADDITIONAL ANDHRA PRADESH (3 More) ---
    {
      id: "ap-4",
      name: "Novotel Visakhapatnam Varun Beach",
      description: "A five-star luxury hotel on the beach, featuring an infinity pool and panoramic views of the ocean.",
      type: "Modern Hotel", city: "Visakhapatnam", state: "Andhra Pradesh", address: "Dr. NTR Beach Road",
      coordinates: { lat: 17.7100, lng: 83.3200 },
      price: { amount: 10500, currency: "INR", period: "night" },
      rating: 4.85, reviewCount: 456,
      images: ["https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200"],
      gallery: {
        "Vizag Coast": ["https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200"],
        "Infinity Pool": ["https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1551882547-ff40c0d588fa?auto=format&fit=crop&w=1200"],
        "Sleek Suites": ["https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200"]
      },
      amenities: [{ id: "wifi", name: "High-speed WiFi", category: "Essential" }, { id: "pool", name: "Infinity Pool", category: "Luxury" }],
      host: { name: "Novotel Team", isSuperhost: true, joinedDate: "2014-11-18", avatar: "https://i.pravatar.cc/150?u=novoteltn" },
      bedrooms: 1, beds: 1, bathrooms: 1, max_guests: 2, pet_friendly: false, type_of_place: "Room", unavailableDates: [], tags: ["Sea View", "Luxury"], status: "available"
    },
    {
      id: "ap-5",
      name: "The Gateway Hotel, Vijayawada",
      description: "A luxury city hotel in the heart of Vijayawada, offering a blend of corporate convenience and cultural charm.",
      type: "Business Hotel", city: "Vijayawada", state: "Andhra Pradesh", address: "MG Road",
      coordinates: { lat: 16.5100, lng: 80.6400 },
      price: { amount: 6500, currency: "INR", period: "night" },
      rating: 4.7, reviewCount: 156,
      images: ["https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200"],
      gallery: {
        "City Scapes": ["https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1522708323590-d24dab6ae574?auto=format&fit=crop&w=1200"],
        "Modern Rooms": ["https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200"],
        "Conference Centre": ["https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200"]
      },
      amenities: [{ id: "wifi", name: "High-speed WiFi", category: "Essential" }, { id: "pool", name: "Sky Pool", category: "Luxury" }],
      host: { name: "Taj Team", isSuperhost: true, joinedDate: "2015-04-12", avatar: "https://i.pravatar.cc/150?u=tajap" },
      bedrooms: 1, beds: 1, bathrooms: 1, max_guests: 2, pet_friendly: false, type_of_place: "Room", unavailableDates: [], tags: ["Business", "Central"], status: "available"
    },
    {
      id: "ap-6",
      name: "Fortune Murali Park",
      description: "A stylish and comfortable business hotel in Vijayawada, offering excellent service and dining options.",
      type: "Modern Hotel", city: "Vijayawada", state: "Andhra Pradesh", address: "MG Road",
      coordinates: { lat: 16.5120, lng: 80.6450 },
      price: { amount: 5500, currency: "INR", period: "night" },
      rating: 4.6, reviewCount: 88,
      images: ["https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200"],
      gallery: {
        "Executive Rooms": ["https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200"],
        "Lobby Lounge": ["https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1551882547-ff40c0d588fa?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200"],
        "Restaurant": ["https://images.unsplash.com/photo-1556911227-4c177e172433?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1556911261-68743685f0f7?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200"]
      },
      amenities: [{ id: "wifi", name: "High-speed WiFi", category: "Essential" }, { id: "utensils", name: "Multi-cuisine", category: "Essential" }],
      host: { name: "Fortune Team", isSuperhost: false, joinedDate: "2017-09-20", avatar: "https://i.pravatar.cc/150?u=fortune" },
      bedrooms: 1, beds: 1, bathrooms: 1, max_guests: 2, pet_friendly: false, type_of_place: "Room", unavailableDates: [], tags: ["Comfort", "Business"], status: "available"
    },

    // --- ADDITIONAL KARNATAKA (3 More) ---
    {
      id: "kar-4",
      name: "The Serai, Chikmagalur",
      description: "A luxury coffee resort nestled in the mountains of Chikmagalur, featuring private pool villas and coffee garden trails.",
      type: "Coffee Resort", city: "Chikmagalur", state: "Karnataka", address: "Mugthihalli, KM Road",
      coordinates: { lat: 13.3100, lng: 75.7700 },
      price: { amount: 18500, currency: "INR", period: "night" },
      rating: 4.88, reviewCount: 156,
      images: ["https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200"],
      gallery: {
        "Coffee Trails": ["https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1532708059644-5590ed51ce4c?auto=format&fit=crop&w=1200"],
        "Pool Villas": ["https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1551882547-ff40c0d588fa?auto=format&fit=crop&w=1200"],
        "Mountain Decks": ["https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200"]
      },
      amenities: [{ id: "wifi", name: "High-speed WiFi", category: "Essential" }, { id: "pool", name: "Private Pool", category: "Luxury" }],
      host: { name: "Serai Team", isSuperhost: true, joinedDate: "2016-08-15", avatar: "https://i.pravatar.cc/150?u=serai" },
      bedrooms: 1, beds: 1, bathrooms: 1, max_guests: 2, pet_friendly: true, type_of_place: "Entire home", unavailableDates: [], tags: ["Coffee", "Mountains"], status: "available"
    },
    {
      id: "kar-5",
      name: "The Gateway Hotel, Hubli",
      description: "A luxury business hotel in North Karnataka, offering modern amenities and a serene environment near Unkal Lake.",
      type: "Business Hotel", city: "Hubli", state: "Karnataka", address: "Unkal Lake, PB Road",
      coordinates: { lat: 15.3600, lng: 75.1200 },
      price: { amount: 7500, currency: "INR", period: "night" },
      rating: 4.7, reviewCount: 212,
      images: ["https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200"],
      gallery: {
        "Lake Front": ["https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1522708323590-d24dab6ae574?auto=format&fit=crop&w=1200"],
        "Modern Rooms": ["https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200"],
        "Pool Deck": ["https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1551882547-ff40c0d588fa?auto=format&fit=crop&w=1200"]
      },
      amenities: [{ id: "wifi", name: "High-speed WiFi", category: "Essential" }, { id: "pool", name: "Leisure Pool", category: "Luxury" }],
      host: { name: "Taj Hubli", isSuperhost: true, joinedDate: "2015-11-20", avatar: "https://i.pravatar.cc/150?u=tajhubli" },
      bedrooms: 1, beds: 1, bathrooms: 1, max_guests: 2, pet_friendly: false, type_of_place: "Room", unavailableDates: [], tags: ["Modern", "Business"], status: "available"
    },
    {
      id: "kar-6",
      name: "Heritage Resort, Hampi",
      description: "A luxury resort spread over 8 acres, built using Hampi's unique architecture style and surrounded by fields.",
      type: "Resort", city: "Hampi", state: "Karnataka", address: "Gunda Town Road",
      coordinates: { lat: 15.3300, lng: 76.4600 },
      price: { amount: 11000, currency: "INR", period: "night" },
      rating: 4.8, reviewCount: 132,
      images: ["https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200"],
      gallery: {
        "Hampi Stones": ["https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1551882547-ff40c0d588fa?auto=format&fit=crop&w=1200"],
        "Royal Chalets": ["https://images.unsplash.com/photo-1595181829924-823fc67251fa?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1200"],
        "Field Views": ["https://images.unsplash.com/photo-1510166089176-b33324d03247?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200"]
      },
      amenities: [{ id: "wifi", name: "High-speed WiFi", category: "Essential" }, { id: "pool", name: "Scenic Pool", category: "Luxury" }],
      host: { name: "Heritage Hampi", isSuperhost: true, joinedDate: "2018-09-22", avatar: "https://i.pravatar.cc/150?u=hampires" },
      bedrooms: 1, beds: 1, bathrooms: 1, max_guests: 2, pet_friendly: true, type_of_place: "Room", unavailableDates: [], tags: ["History", "Heritage"], status: "available"
    },

    // --- TELANGANA (3 Hotels) ---
    {
      id: "tel-1",
      name: "Taj Falaknuma Palace",
      description: "Once the residence of the Nizam, این palace in Hyderabad offers an unmatched royal experience with its grand staircase and world-famous dining table.",
      type: "Heritage Palace", city: "Hyderabad", state: "Telangana", address: "Engine Bowli, Falaknuma",
      coordinates: { lat: 17.3300, lng: 78.4700 },
      price: { amount: 45000, currency: "INR", period: "night" },
      rating: 4.98, reviewCount: 524,
      images: ["https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200"],
      gallery: {
        "Palace Grandeur": ["https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200"],
        "Royal Suites": ["https://images.unsplash.com/photo-1595181829924-823fc67251fa?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1200"],
        "Celestial Dining": ["https://images.unsplash.com/photo-1556911227-4c177e172433?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1556911261-68743685f0f7?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200"]
      },
      amenities: [{ id: "wifi", name: "High-speed WiFi", category: "Essential" }, { id: "pool", name: "Royal Pool", category: "Luxury" }],
      host: { name: "Taj Palaces", isSuperhost: true, joinedDate: "2010-09-12", avatar: "https://i.pravatar.cc/150?u=falaknuma" },
      bedrooms: 1, beds: 1, bathrooms: 1, max_guests: 2, pet_friendly: false, type_of_place: "Room", unavailableDates: [], tags: ["Palace", "Royal"], status: "available"
    },
    {
      id: "tel-2",
      name: "The Park Hyderabad",
      description: "A flagship property known for its cutting-edge design, local craftsmanship, and spectacular views of the Hussain Sagar Lake.",
      type: "Design Hotel", city: "Hyderabad", state: "Telangana", address: "Raj Bhavan Road, Somajiguda",
      coordinates: { lat: 17.4200, lng: 78.4600 },
      price: { amount: 9500, currency: "INR", period: "night" },
      rating: 4.7, reviewCount: 245,
      images: ["https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200"],
      gallery: {
        "Lake Views": ["https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1522708323590-d24dab6ae574?auto=format&fit=crop&w=1200"],
        "Modernist Rooms": ["https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200"],
        "Infinity Pool": ["https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1551882547-ff40c0d588fa?auto=format&fit=crop&w=1200"]
      },
      amenities: [{ id: "wifi", name: "High-speed WiFi", category: "Essential" }, { id: "pool", name: "Infinity Pool", category: "Luxury" }],
      host: { name: "Park Hotels", isSuperhost: true, joinedDate: "2015-04-10", avatar: "https://i.pravatar.cc/150?u=parkhyd" },
      bedrooms: 1, beds: 1, bathrooms: 1, max_guests: 2, pet_friendly: true, type_of_place: "Room", unavailableDates: [], tags: ["Modern", "Lake View"], status: "available"
    },
    {
      id: "tel-3",
      name: "Haritha Ghat Road, Srisailam",
      description: "A comfortable riverside stay for pilgrims visiting the Mallikarjuna Jyotirlinga temple, with views of the Krishna River.",
      type: "Riverside Hotel", city: "Srisailam", state: "Telangana", address: "Temple Road",
      coordinates: { lat: 16.0700, lng: 78.8600 },
      price: { amount: 3500, currency: "INR", period: "night" },
      rating: 4.4, reviewCount: 68,
      images: ["https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200"],
      gallery: {
        "River Ghats": ["https://images.unsplash.com/photo-1510166089176-b33324d03247?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200"],
        "Cosy Rooms": ["https://images.unsplash.com/photo-1522708323590-d24dab6ae574?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200"],
        "Temple Views": ["https://images.unsplash.com/photo-1558036117-15d82a90b9b1?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1583163773177-33a8712a20ca?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1595872245019-f002fd5035ae?auto=format&fit=crop&w=1200"]
      },
      amenities: [{ id: "wifi", name: "High-speed WiFi", category: "Essential" }, { id: "utensils", name: "Pilgrim Meals", category: "Essential" }],
      host: { name: "Telangana Tourism", isSuperhost: false, joinedDate: "2018-09-22", avatar: "https://i.pravatar.cc/150?u=telang" },
      bedrooms: 1, beds: 2, bathrooms: 1, max_guests: 4, pet_friendly: false, type_of_place: "Room", unavailableDates: [], tags: ["Temple View", "Riverside"], status: "available"
    },

    // --- SIKKIM (3 Hotels) ---
    {
      id: "sk-1",
      name: "The Elgin Nor-Khill, Gangtok",
      description: "A heritage hotel built by the King of Sikkim in Gangtok, offering a royal Sikkimese experience with traditional art and warm hospitality.",
      type: "Heritage Hotel", city: "Gangtok", state: "Sikkim", address: "Paljor Stadium Road",
      coordinates: { lat: 27.3300, lng: 88.6100 },
      price: { amount: 11500, currency: "INR", period: "night" },
      rating: 4.88, reviewCount: 156,
      images: ["https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200"],
      gallery: {
        "Royal Gardens": ["https://images.unsplash.com/photo-1558036117-15d82a90b9b1?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1583163773177-33a8712a20ca?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1595872245019-f002fd5035ae?auto=format&fit=crop&w=1200"],
        "Sikkimese Rooms": ["https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1551882547-ff40c0d588fa?auto=format&fit=crop&w=1200"],
        "Mountain Peaks": ["https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200"]
      },
      amenities: [{ id: "wifi", name: "High-speed WiFi", category: "Essential" }, { id: "utensils", name: "Tibetan Food", category: "Essential" }],
      host: { name: "Elgin Hotels", isSuperhost: true, joinedDate: "2012-05-18", avatar: "https://i.pravatar.cc/150?u=elgin" },
      bedrooms: 1, beds: 1, bathrooms: 1, max_guests: 2, pet_friendly: false, type_of_place: "Room", unavailableDates: [], tags: ["Heritage", "Mountains"], status: "available"
    },
    {
      id: "sk-2",
      name: "Summit Golden Crescent Resort",
      description: "A luxury resort in Gangtok featuring floor-to-ceiling windows with breathtaking views of the Kanchenjunga range.",
      type: "Modern Resort", city: "Gangtok", state: "Sikkim", address: "Upper Sichey Road",
      coordinates: { lat: 27.3400, lng: 88.6200 },
      price: { amount: 7500, currency: "INR", period: "night" },
      rating: 4.7, reviewCount: 134,
      images: ["https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200"],
      gallery: {
        "Mountain Views": ["https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1532708059644-5590ed51ce4c?auto=format&fit=crop&w=1200"],
        "Cosy Lounge": ["https://images.unsplash.com/photo-1522708323590-d24dab6ae574?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200"],
        "Terrace Deck": ["https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1551882547-ff40c0d588fa?auto=format&fit=crop&w=1200"]
      },
      amenities: [{ id: "wifi", name: "High-speed WiFi", category: "Essential" }, { id: "pool", name: "Leisure Pool", category: "Luxury" }],
      host: { name: "Summit Hotels", isSuperhost: true, joinedDate: "2016-11-20", avatar: "https://i.pravatar.cc/150?u=summit" },
      bedrooms: 1, beds: 1, bathrooms: 1, max_guests: 2, pet_friendly: true, type_of_place: "Room", unavailableDates: [], tags: ["Mountains", "Modern"], status: "available"
    },
    {
      id: "sk-3",
      name: "Tashi Niwa Boutique Hotel",
      description: "A charming boutique stay in Lachung, providing easy access to the Yumthang Valley and snow-capped peaks.",
      type: "Boutique Hotel", city: "Lachung", state: "Sikkim", address: "Main Road, Lachung",
      coordinates: { lat: 27.6900, lng: 88.7400 },
      price: { amount: 5500, currency: "INR", period: "night" },
      rating: 4.6, reviewCount: 42,
      images: ["https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200"],
      gallery: {
        "Snow Peaks": ["https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1532708059644-5590ed51ce4c?auto=format&fit=crop&w=1200"],
        "Wooden Rooms": ["https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200"],
        "Local Kitchen": ["https://images.unsplash.com/photo-1556911227-4c177e172433?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1556911261-68743685f0f7?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200"]
      },
      amenities: [{ id: "wifi", name: "Limited WiFi", category: "Essential" }, { id: "utensils", name: "Sikkimese Dining", category: "Essential" }],
      host: { name: "Tashi Niwa", isSuperhost: false, joinedDate: "2019-02-14", avatar: "https://i.pravatar.cc/150?u=tashiniwa" },
      bedrooms: 1, beds: 2, bathrooms: 1, max_guests: 3, pet_friendly: false, type_of_place: "Room", unavailableDates: [], tags: ["Mountains", "Snow"], status: "available"
    },

    // --- MEGHALAYA (3 Hotels) ---
    {
      id: "meg-1",
      name: "Ri Kynjai, Shillong",
      description: "Meaning 'Serenity by the Lake', this eco-resort overlooks the Umiam Lake and is inspired by traditional Khasi architecture.",
      type: "Eco Resort", city: "Shillong", state: "Meghalaya", address: "Umiam Lake",
      coordinates: { lat: 25.6400, lng: 91.8900 },
      price: { amount: 16500, currency: "INR", period: "night" },
      rating: 4.95, reviewCount: 84,
      images: ["https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200"],
      gallery: {
        "Lake Front": ["https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200"],
        "Pine Cottages": ["https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1532708059644-5590ed51ce4c?auto=format&fit=crop&w=1200"],
        "Spa Pavilion": ["https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1551882547-ff40c0d588fa?auto=format&fit=crop&w=1200"]
      },
      amenities: [{ id: "wifi", name: "High-speed WiFi", category: "Essential" }, { id: "pool", name: "Lake Pool", category: "Luxury" }],
      host: { name: "Ri Kynjai Team", isSuperhost: true, joinedDate: "2013-04-12", avatar: "https://i.pravatar.cc/150?u=rikynjai" },
      bedrooms: 1, beds: 1, bathrooms: 1, max_guests: 2, pet_friendly: true, type_of_place: "Entire home", unavailableDates: [], tags: ["Lake View", "Nature"], status: "available"
    },
    {
      id: "meg-2",
      name: "Dew Drop In, Shillong",
      description: "A cozy boutique stay in the heart of Shillong, known for its warm hospitality and proximity to local markets and cafes.",
      type: "Boutique Hotel", city: "Shillong", state: "Meghalaya", address: "Police Bazar",
      coordinates: { lat: 25.5700, lng: 91.8800 },
      price: { amount: 5500, currency: "INR", period: "night" },
      rating: 4.7, reviewCount: 64,
      images: ["https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200"],
      gallery: {
        "City Scapes": ["https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1522708323590-d24dab6ae574?auto=format&fit=crop&w=1200"],
        "Cosy Rooms": ["https://images.unsplash.com/photo-1522708323590-d24dab6ae574?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200"],
        "Morning Mist": ["https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200"]
      },
      amenities: [{ id: "wifi", name: "High-speed WiFi", category: "Essential" }, { id: "utensils", name: "Home Breakfast", category: "Essential" }],
      host: { name: "Shillong Locals", isSuperhost: true, joinedDate: "2017-06-25", avatar: "https://i.pravatar.cc/150?u=dewdrop" },
      bedrooms: 1, beds: 1, bathrooms: 1, max_guests: 2, pet_friendly: false, type_of_place: "Room", unavailableDates: [], tags: ["Central", "Cozy"], status: "available"
    },
    {
      id: "meg-3",
      name: "Polo Orchid Resort, Cherrapunji",
      description: "A luxury resort in the rainiest place on earth, offering spectacular views of the Seven Sisters Waterfalls.",
      type: "Modern Resort", city: "Cherrapunji", state: "Meghalaya", address: "Mawsmai-Nongthymmai",
      coordinates: { lat: 25.2600, lng: 91.7300 },
      price: { amount: 12500, currency: "INR", period: "night" },
      rating: 4.8, reviewCount: 156,
      images: ["https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200"],
      gallery: {
        "Waterfall View": ["https://images.unsplash.com/photo-1510166089176-b33324d03247?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200"],
        "Infinity Pool": ["https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1551882547-ff40c0d588fa?auto=format&fit=crop&w=1200"],
        "Mist Suites": ["https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200"]
      },
      amenities: [{ id: "wifi", name: "High-speed WiFi", category: "Essential" }, { id: "pool", name: "Infinity Pool", category: "Luxury" }],
      host: { name: "Polo Team", isSuperhost: true, joinedDate: "2015-08-22", avatar: "https://i.pravatar.cc/150?u=polo" },
      bedrooms: 1, beds: 1, bathrooms: 1, max_guests: 2, pet_friendly: false, type_of_place: "Room", unavailableDates: [], tags: ["Waterfall View", "Luxury"], status: "available"
    },

    // --- ADDITIONAL TELANGANA (3 More) ---
    {
      id: "tel-4",
      name: "Trident Hyderabad",
      description: "A sleek, contemporary hotel located in the heart of the HITECH city, perfect for business travelers with refined tastes.",
      type: "Business Hotel", city: "Hyderabad", state: "Telangana", address: "HITECH City",
      coordinates: { lat: 17.4500, lng: 78.3800 },
      price: { amount: 8500, currency: "INR", period: "night" },
      rating: 4.8, reviewCount: 312,
      images: ["https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200"],
      gallery: {
        "Executive Rooms": ["https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200"],
        "Business Center": ["https://images.unsplash.com/photo-1431540015161-0bf868a2d407?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200"],
        "Infinity Pool": ["https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1551882547-ff40c0d588fa?auto=format&fit=crop&w=1200"]
      },
      amenities: [{ id: "wifi", name: "High-speed WiFi", category: "Essential" }, { id: "pool", name: "Rooftop Pool", category: "Luxury" }],
      host: { name: "Trident Team", isSuperhost: true, joinedDate: "2015-11-20", avatar: "https://i.pravatar.cc/150?u=tridenthyd" },
      bedrooms: 1, beds: 1, bathrooms: 1, max_guests: 2, pet_friendly: false, type_of_place: "Room", unavailableDates: [], tags: ["Modern", "Business"], status: "available"
    },
    {
      id: "tel-5",
      name: "Golconda Resorts & Spa",
      description: "A luxury resort located on the outskirts of Hyderabad, set on 13 acres of lush greenery overlooking the Osman Sagar Lake.",
      type: "Modern Resort", city: "Hyderabad", state: "Telangana", address: "Gandinpet",
      coordinates: { lat: 17.3800, lng: 78.3000 },
      price: { amount: 12500, currency: "INR", period: "night" },
      rating: 4.7, reviewCount: 156,
      images: ["https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200"],
      gallery: {
        "Lake Front": ["https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1522708323590-d24dab6ae574?auto=format&fit=crop&w=1200"],
        "Garden Villas": ["https://images.unsplash.com/photo-1558036117-15d82a90b9b1?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1583163773177-33a8712a20ca?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1595872245019-f002fd5035ae?auto=format&fit=crop&w=1200"],
        "Sunset Deck": ["https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1473186578172-c141e6798ee4?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1521336575822-6da63fb45455?auto=format&fit=crop&w=1200"]
      },
      amenities: [{ id: "wifi", name: "High-speed WiFi", category: "Essential" }, { id: "pool", name: "Large Pool", category: "Luxury" }],
      host: { name: "Golconda Team", isSuperhost: true, joinedDate: "2016-08-15", avatar: "https://i.pravatar.cc/150?u=golconda" },
      bedrooms: 1, beds: 1, bathrooms: 1, max_guests: 2, pet_friendly: true, type_of_place: "Room", unavailableDates: [], tags: ["Resort", "Lake View"], status: "available"
    },
    {
      id: "tel-6",
      name: "The Gateway Hotel, Warangal",
      description: "A comfortable business hotel in the historic city of Warangal, providing a perfect base to explore the Thousand Pillar Temple.",
      type: "City Hotel", city: "Warangal", state: "Telangana", address: "Hanamkonda",
      coordinates: { lat: 18.0000, lng: 79.5800 },
      price: { amount: 4500, currency: "INR", period: "night" },
      rating: 4.5, reviewCount: 92,
      images: ["https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200"],
      gallery: {
        "Thousand Pillars": ["https://images.unsplash.com/photo-1558036117-15d82a90b9b1?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1583163773177-33a8712a20ca?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1595872245019-f002fd5035ae?auto=format&fit=crop&w=1200"],
        "Modern Rooms": ["https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200"],
        "Dine In": ["https://images.unsplash.com/photo-1556911227-4c177e172433?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1556911261-68743685f0f7?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200"]
      },
      amenities: [{ id: "wifi", name: "High-speed WiFi", category: "Essential" }, { id: "utensils", name: "Local Meals", category: "Essential" }],
      host: { name: "Taj Warangal", isSuperhost: false, joinedDate: "2017-09-20", avatar: "https://i.pravatar.cc/150?u=tajwar" },
      bedrooms: 1, beds: 1, bathrooms: 1, max_guests: 2, pet_friendly: false, type_of_place: "Room", unavailableDates: [], tags: ["History", "Central"], status: "available"
    },

    // --- JHARKHAND (3 Hotels) ---
    {
      id: "jh-1",
      name: "Radisson Blu Ranchi",
      description: "Conveniently located in the city center, این contemporary hotel is the premier choice for business travelers in Ranchi.",
      type: "Modern Hotel", city: "Ranchi", state: "Jharkhand", address: "Main Road, Kadru Diversion",
      coordinates: { lat: 23.3400, lng: 85.3100 },
      price: { amount: 7500, currency: "INR", period: "night" },
      rating: 4.7, reviewCount: 412,
      images: ["https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200"],
      gallery: {
        "Blu Rooms": ["https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200"],
        "Executive Lounge": ["https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1551882547-ff40c0d588fa?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200"],
        "Rooftop Pool": ["https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1551882547-ff40c0d588fa?auto=format&fit=crop&w=1200"]
      },
      amenities: [{ id: "wifi", name: "High-speed WiFi", category: "Essential" }, { id: "pool", name: "Rooftop Pool", category: "Luxury" }],
      host: { name: "Radisson Team", isSuperhost: true, joinedDate: "2015-08-22", avatar: "https://i.pravatar.cc/150?u=radranchi" },
      bedrooms: 1, beds: 1, bathrooms: 1, max_guests: 2, pet_friendly: false, type_of_place: "Room", unavailableDates: [], tags: ["Modern", "Business"], status: "available"
    },
    {
      id: "jh-2",
      name: "The Sonnet, Jamshedpur",
      description: "A luxury business hotel in the Steel City, offering refined comfort and world-class hospitality.",
      type: "Modern Hotel", city: "Jamshedpur", state: "Jharkhand", address: "Inner Circle Road",
      coordinates: { lat: 22.8000, lng: 86.1900 },
      price: { amount: 5500, currency: "INR", period: "night" },
      rating: 4.6, reviewCount: 156,
      images: ["https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200"],
      gallery: {
        "City Scapes": ["https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1522708323590-d24dab6ae574?auto=format&fit=crop&w=1200"],
        "Sleek Rooms": ["https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200"],
        "Fine Dining": ["https://images.unsplash.com/photo-1556911227-4c177e172433?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1556911261-68743685f0f7?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200"]
      },
      amenities: [{ id: "wifi", name: "High-speed WiFi", category: "Essential" }, { id: "utensils", name: "Gourmet Dining", category: "Essential" }],
      host: { name: "Sonnet Team", isSuperhost: true, joinedDate: "2016-04-15", avatar: "https://i.pravatar.cc/150?u=sonnet" },
      bedrooms: 1, beds: 1, bathrooms: 1, max_guests: 2, pet_friendly: false, type_of_place: "Room", unavailableDates: [], tags: ["Modern", "Comfort"], status: "available"
    },
    {
      id: "jh-3",
      name: "Hotel Chanakya BNR",
      description: "A heritage hotel in Ranchi, originally built by the Bengal Nagpur Railway, offering a touch of colonial charm.",
      type: "Heritage Hotel", city: "Ranchi", state: "Jharkhand", address: "Station Road",
      coordinates: { lat: 23.3500, lng: 85.3200 },
      price: { amount: 4500, currency: "INR", period: "night" },
      rating: 4.5, reviewCount: 88,
      images: ["https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200"],
      gallery: {
        "Colonial Corridors": ["https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1551882547-ff40c0d588fa?auto=format&fit=crop&w=1200"],
        "Restored Suites": ["https://images.unsplash.com/photo-1595181829924-823fc67251fa?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1200"],
        "Lush Lawns": ["https://images.unsplash.com/photo-1558036117-15d82a90b9b1?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1583163773177-33a8712a20ca?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1595872245019-f002fd5035ae?auto=format&fit=crop&w=1200"]
      },
      amenities: [{ id: "wifi", name: "High-speed WiFi", category: "Essential" }, { id: "utensils", name: "Traditional Thali", category: "Essential" }],
      host: { name: "Chanakya Team", isSuperhost: false, joinedDate: "2014-06-12", avatar: "https://i.pravatar.cc/150?u=chanakya" },
      bedrooms: 1, beds: 2, bathrooms: 1, max_guests: 3, pet_friendly: true, type_of_place: "Room", unavailableDates: [], tags: ["Heritage", "Railway History"], status: "available"
    },

    // --- ADDITIONAL JHARKHAND (3 More) ---
    {
      id: "jh-4",
      name: "Chanakya BNR Hotel, Puri Side",
      description: "A sister property of the famous BNR Ranchi, bringing heritage hospitality to the gateway of Jharkhand's scenic regions.",
      type: "Heritage Hotel", city: "Ranchi", state: "Jharkhand", address: "Main Road",
      coordinates: { lat: 23.3450, lng: 85.3150 },
      price: { amount: 5500, currency: "INR", period: "night" },
      rating: 4.6, reviewCount: 124,
      images: ["https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200"],
      gallery: {
        "Railway Heritage": ["https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200"],
        "Classic Rooms": ["https://images.unsplash.com/photo-1595181829924-823fc67251fa?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1200"],
        "Garden Walks": ["https://images.unsplash.com/photo-1558036117-15d82a90b9b1?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1583163773177-33a8712a20ca?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1595872245019-f002fd5035ae?auto=format&fit=crop&w=1200"]
      },
      amenities: [{ id: "wifi", name: "High-speed WiFi", category: "Essential" }, { id: "utensils", name: "Heritage Dining", category: "Essential" }],
      host: { name: "BNR Management", isSuperhost: true, joinedDate: "2015-11-20", avatar: "https://i.pravatar.cc/150?u=bnrman" },
      bedrooms: 1, beds: 1, bathrooms: 1, max_guests: 2, pet_friendly: false, type_of_place: "Room", unavailableDates: [], tags: ["Heritage", "Classic"], status: "available"
    },
    {
      id: "jh-5",
      name: "The Wave International",
      description: "A luxury resort in Jamshedpur set amidst the Dalma Hills, offering a serene escape with modern amenities.",
      type: "Modern Resort", city: "Jamshedpur", state: "Jharkhand", address: "NH-33, Tata-Ranchi Highway",
      coordinates: { lat: 22.8600, lng: 86.1500 },
      price: { amount: 6500, currency: "INR", period: "night" },
      rating: 4.7, reviewCount: 92,
      images: ["https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200"],
      gallery: {
        "Hill Views": ["https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1532708059644-5590ed51ce4c?auto=format&fit=crop&w=1200"],
        "Infinity Pool": ["https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1551882547-ff40c0d588fa?auto=format&fit=crop&w=1200"],
        "Cosy Chalets": ["https://images.unsplash.com/photo-1522708323590-d24dab6ae574?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200"]
      },
      amenities: [{ id: "wifi", name: "High-speed WiFi", category: "Essential" }, { id: "pool", name: "Infinity Pool", category: "Luxury" }],
      host: { name: "Wave Team", isSuperhost: true, joinedDate: "2016-12-10", avatar: "https://i.pravatar.cc/150?u=wave" },
      bedrooms: 1, beds: 1, bathrooms: 1, max_guests: 2, pet_friendly: true, type_of_place: "Room", unavailableDates: [], tags: ["Resort", "Nature"], status: "available"
    },
    {
      id: "jh-6",
      name: "Hotel Ginger Jamshedpur",
      description: "A smart, budget-friendly choice for the modern traveler, offering clean and functional rooms in a central location.",
      type: "Modern Hotel", city: "Jamshedpur", state: "Jharkhand", address: "Bistupur",
      coordinates: { lat: 22.7980, lng: 86.1850 },
      price: { amount: 3500, currency: "INR", period: "night" },
      rating: 4.4, reviewCount: 215,
      images: ["https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200"],
      gallery: {
        "Smart Rooms": ["https://images.unsplash.com/photo-1522708323590-d24dab6ae574?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200"],
        "Communal Deck": ["https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1551882547-ff40c0d588fa?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200"],
        "Urban Eatery": ["https://images.unsplash.com/photo-1556911227-4c177e172433?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1556911261-68743685f0f7?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200"]
      },
      amenities: [{ id: "wifi", name: "High-speed WiFi", category: "Essential" }, { id: "tv", name: "LED TV", category: "Entertainment" }],
      host: { name: "Ginger Team", isSuperhost: false, joinedDate: "2018-05-18", avatar: "https://i.pravatar.cc/150?u=ginger" },
      bedrooms: 1, beds: 1, bathrooms: 1, max_guests: 2, pet_friendly: false, type_of_place: "Room", unavailableDates: [], tags: ["Modern", "Budget"], status: "available"
    },

    // --- CHHATTISGARH (3 Hotels) ---
    {
      id: "ch-1",
      name: "Courtyard by Marriott Raipur",
      description: "A luxury lifestyle hotel in Raipur, providing an urban oasis for business and leisure travelers alike.",
      type: "Modern Hotel", city: "Raipur", state: "Chhattisgarh", address: "Labhandi, GE Road",
      coordinates: { lat: 21.2500, lng: 81.6300 },
      price: { amount: 8500, currency: "INR", period: "night" },
      rating: 4.8, reviewCount: 312,
      images: ["https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200"],
      gallery: {
        "Executive Suites": ["https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200"],
        "Modernist Lobby": ["https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1551882547-ff40c0d588fa?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200"],
        "Sleek Pool": ["https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1551882547-ff40c0d588fa?auto=format&fit=crop&w=1200"]
      },
      amenities: [{ id: "wifi", name: "High-speed WiFi", category: "Essential" }, { id: "pool", name: "Outdoor Pool", category: "Luxury" }],
      host: { name: "Marriott Raipur", isSuperhost: true, joinedDate: "2015-11-20", avatar: "https://i.pravatar.cc/150?u=marraipur" },
      bedrooms: 1, beds: 1, bathrooms: 1, max_guests: 2, pet_friendly: false, type_of_place: "Room", unavailableDates: [], tags: ["Modern", "Business"], status: "available"
    },
    {
      id: "ch-2",
      name: "Sayaji Hotel Raipur",
      description: "A luxury city hotel known for its grand buffet and elegant event spaces in the heart of Chhattisgarh.",
      type: "Modern Hotel", city: "Raipur", state: "Chhattisgarh", address: "GE Road",
      coordinates: { lat: 21.2550, lng: 81.6350 },
      price: { amount: 6500, currency: "INR", period: "night" },
      rating: 4.7, reviewCount: 215,
      images: ["https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200"],
      gallery: {
        "Grand Suites": ["https://images.unsplash.com/photo-1595181829924-823fc67251fa?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1200"],
        "Banquet Hall": ["https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200"],
        "Buffet Area": ["https://images.unsplash.com/photo-1556911227-4c177e172433?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1556911261-68743685f0f7?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200"]
      },
      amenities: [{ id: "wifi", name: "High-speed WiFi", category: "Essential" }, { id: "utensils", name: "Luxury Buffet", category: "Essential" }],
      host: { name: "Sayaji Team", isSuperhost: true, joinedDate: "2016-04-10", avatar: "https://i.pravatar.cc/150?u=sayaji" },
      bedrooms: 1, beds: 1, bathrooms: 1, max_guests: 2, pet_friendly: false, type_of_place: "Room", unavailableDates: [], tags: ["Modern", "Foodie"], status: "available"
    },
    {
      id: "ch-3",
      name: "Bastar Tribal Homestay",
      description: "A unique, eco-friendly stay in the heart of Bastar, offering a deep dive into tribal culture and the scenic Chitrakote Falls.",
      type: "Eco Lodge", city: "Jagdalpur", state: "Chhattisgarh", address: "Chitrakote Road",
      coordinates: { lat: 19.0700, lng: 82.0200 },
      price: { amount: 2500, currency: "INR", period: "night" },
      rating: 4.9, reviewCount: 42,
      images: ["https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200"],
      gallery: {
        "Tribal Huts": ["https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1532708059644-5590ed51ce4c?auto=format&fit=crop&w=1200"],
        "Chitrakote Falls": ["https://images.unsplash.com/photo-1510166089176-b33324d03247?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200"],
        "Village Dining": ["https://images.unsplash.com/photo-1556911227-4c177e172433?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1556911261-68743685f0f7?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200"]
      },
      amenities: [{ id: "wifi", name: "Limited WiFi", category: "Essential" }, { id: "utensils", name: "Tribetal Food", category: "Essential" }],
      host: { name: "Bastar Locals", isSuperhost: true, joinedDate: "2019-08-22", avatar: "https://i.pravatar.cc/150?u=bastar" },
      bedrooms: 1, beds: 2, bathrooms: 1, max_guests: 4, pet_friendly: true, type_of_place: "Entire home", unavailableDates: [], tags: ["Culture", "Nature"], status: "available"
    },

    // --- HARYANA (3 Hotels) ---
    {
      id: "har-1",
      name: "The Oberoi, Gurgaon",
      description: "A luxury city hotel featuring an urban forest, reflecting pools, and world-class fine dining, redefining modern luxury in Haryana.",
      type: "Modern Hotel", city: "Gurgaon", state: "Haryana", address: "Udyog Vihar",
      coordinates: { lat: 28.5000, lng: 77.0800 },
      price: { amount: 25000, currency: "INR", period: "night" },
      rating: 4.96, reviewCount: 842,
      images: ["https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200"],
      gallery: {
        "Reflection Pools": ["https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1551882547-ff40c0d588fa?auto=format&fit=crop&w=1200"],
        "Urban Views": ["https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1522708323590-d24dab6ae574?auto=format&fit=crop&w=1200"],
        "Luxe Suites": ["https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200"]
      },
      amenities: [{ id: "wifi", name: "High-speed WiFi", category: "Essential" }, { id: "pool", name: "Forest Pool", category: "Luxury" }],
      host: { name: "Oberoi Team", isSuperhost: true, joinedDate: "2010-04-12", avatar: "https://i.pravatar.cc/150?u=oberoig" },
      bedrooms: 1, beds: 1, bathrooms: 1, max_guests: 2, pet_friendly: false, type_of_place: "Room", unavailableDates: [], tags: ["Modern", "Urban Oasis"], status: "available"
    },
    {
      id: "har-2",
      name: "Hyatt Regency Gurgaon",
      description: "One of the largest convention hotels in the region, offering extensive conference facilities and contemporary comfort.",
      type: "Modern Hotel", city: "Gurgaon", state: "Haryana", address: "NH-8, Sector 83",
      coordinates: { lat: 28.3800, lng: 76.9500 },
      price: { amount: 8500, currency: "INR", period: "night" },
      rating: 4.7, reviewCount: 456,
      images: ["https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200"],
      gallery: {
        "Event Spaces": ["https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200"],
        "Modern Rooms": ["https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200"],
        "Leisure Deck": ["https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1551882547-ff40c0d588fa?auto=format&fit=crop&w=1200"]
      },
      amenities: [{ id: "wifi", name: "High-speed WiFi", category: "Essential" }, { id: "pool", name: "Urban Pool", category: "Luxury" }],
      host: { name: "Hyatt Team", isSuperhost: true, joinedDate: "2015-08-22", avatar: "https://i.pravatar.cc/150?u=hyattres" },
      bedrooms: 1, beds: 1, bathrooms: 1, max_guests: 2, pet_friendly: false, type_of_place: "Room", unavailableDates: [], tags: ["Modern", "Business"], status: "available"
    },
    {
      id: "har-3",
      name: "Tikyee Resort, Damdama Lake",
      description: "A fun-filled resort near Damdama Lake, offering adventure activities and comfortable lake-view rooms for a quick getaway.",
      type: "Modern Resort", city: "Sohna", state: "Haryana", address: "Damdama Lake",
      coordinates: { lat: 28.3200, lng: 77.0600 },
      price: { amount: 5500, currency: "INR", period: "night" },
      rating: 4.5, reviewCount: 132,
      images: ["https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200"],
      gallery: {
        "Lake Activities": ["https://images.unsplash.com/photo-1510166089176-b33324d03247?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200"],
        "Cosy Rooms": ["https://images.unsplash.com/photo-1522708323590-d24dab6ae574?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200"],
        "Dining Deck": ["https://images.unsplash.com/photo-1556911227-4c177e172433?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1556911261-68743685f0f7?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200"]
      },
      amenities: [{ id: "wifi", name: "High-speed WiFi", category: "Essential" }, { id: "pool", name: "Fun Pool", category: "Luxury" }],
      host: { name: "Tikyee Management", isSuperhost: false, joinedDate: "2018-09-22", avatar: "https://i.pravatar.cc/150?u=tikyee" },
      bedrooms: 1, beds: 2, bathrooms: 1, max_guests: 4, pet_friendly: true, type_of_place: "Room", unavailableDates: [], tags: ["Adventure", "Lake View"], status: "available"
    },

    // --- ADDITIONAL CHHATTISGARH (3 More) ---
    {
      id: "ch-4",
      name: "Hyatt Raipur",
      description: "A luxury lifestyle hotel in Raipur, known for its extensive facilities and contemporary comfort in the city center.",
      type: "Modern Hotel", city: "Raipur", state: "Chhattisgarh", address: "Magneto The Mall",
      coordinates: { lat: 21.2500, lng: 81.6500 },
      price: { amount: 7500, currency: "INR", period: "night" },
      rating: 4.75, reviewCount: 156,
      images: ["https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200"],
      gallery: {
        "Regency Rooms": ["https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200"],
        "Mall Access": ["https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1551882547-ff40c0d588fa?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200"],
        "Pool Deck": ["https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1551882547-ff40c0d588fa?auto=format&fit=crop&w=1200"]
      },
      amenities: [{ id: "wifi", name: "High-speed WiFi", category: "Essential" }, { id: "pool", name: "Leisure Pool", category: "Luxury" }],
      host: { name: "Hyatt Team", isSuperhost: true, joinedDate: "2016-08-15", avatar: "https://i.pravatar.cc/150?u=hyattrai" },
      bedrooms: 1, beds: 1, bathrooms: 1, max_guests: 2, pet_friendly: false, type_of_place: "Room", unavailableDates: [], tags: ["Modern", "Business"], status: "available"
    },
    {
      id: "ch-5",
      name: "The Gateway Hotel, Raipur",
      description: "A luxury city hotel offering a blend of corporate convenience and cultural charm in Raipur.",
      type: "Modern Hotel", city: "Raipur", state: "Chhattisgarh", address: "GE Road",
      coordinates: { lat: 21.2600, lng: 81.6400 },
      price: { amount: 6500, currency: "INR", period: "night" },
      rating: 4.7, reviewCount: 124,
      images: ["https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200"],
      gallery: {
        "Executive Suites": ["https://images.unsplash.com/photo-1595181829924-823fc67251fa?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1200"],
        "Modernist Lobby": ["https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1551882547-ff40c0d588fa?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200"],
        "Garden Area": ["https://images.unsplash.com/photo-1558036117-15d82a90b9b1?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1583163773177-33a8712a20ca?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1595872245019-f002fd5035ae?auto=format&fit=crop&w=1200"]
      },
      amenities: [{ id: "wifi", name: "High-speed WiFi", category: "Essential" }, { id: "pool", name: "Sky Pool", category: "Luxury" }],
      host: { name: "Taj Raipur", isSuperhost: true, joinedDate: "2015-11-20", avatar: "https://i.pravatar.cc/150?u=tajrai" },
      bedrooms: 1, beds: 1, bathrooms: 1, max_guests: 2, pet_friendly: false, type_of_place: "Room", unavailableDates: [], tags: ["Modern", "Business"], status: "available"
    },
    {
      id: "ch-6",
      name: "Hotel Babylon International",
      description: "A premier luxury hotel in Raipur, known for its extensive event facilities and fine dining options.",
      type: "Modern Hotel", city: "Raipur", state: "Chhattisgarh", address: "VIP Road",
      coordinates: { lat: 21.2300, lng: 81.6800 },
      price: { amount: 5500, currency: "INR", period: "night" },
      rating: 4.6, reviewCount: 88,
      images: ["https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200"],
      gallery: {
        "Executive Rooms": ["https://images.unsplash.com/photo-1522708323590-d24dab6ae574?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200"],
        "Banquets": ["https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200"],
        "Fine Dining": ["https://images.unsplash.com/photo-1556911227-4c177e172433?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1556911261-68743685f0f7?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200"]
      },
      amenities: [{ id: "wifi", name: "High-speed WiFi", category: "Essential" }, { id: "utensils", name: "Multi-cuisine", category: "Essential" }],
      host: { name: "Babylon Team", isSuperhost: false, joinedDate: "2018-09-22", avatar: "https://i.pravatar.cc/150?u=babylon" },
      bedrooms: 1, beds: 1, bathrooms: 1, max_guests: 2, pet_friendly: false, type_of_place: "Room", unavailableDates: [], tags: ["Modern", "Business"], status: "available"
    },

    // --- ADDITIONAL HARYANA (3 More) ---
    {
      id: "har-4",
      name: "The Westin Gurgaon",
      description: "A luxury city hotel in the heart of the business district, providing a haven of wellness and contemporary design.",
      type: "Modern Hotel", city: "Gurgaon", state: "Haryana", address: "MG Road Sector 29",
      coordinates: { lat: 28.4700, lng: 77.0700 },
      price: { amount: 14500, currency: "INR", period: "night" },
      rating: 4.88, reviewCount: 512,
      images: ["https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200"],
      gallery: {
        "Wellness Suites": ["https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200"],
        "Sleek Lobby": ["https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1551882547-ff40c0d588fa?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200"],
        "Pool Deck": ["https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1551882547-ff40c0d588fa?auto=format&fit=crop&w=1200"]
      },
      amenities: [{ id: "wifi", name: "High-speed WiFi", category: "Essential" }, { id: "pool", name: "Leisure Pool", category: "Luxury" }],
      host: { name: "Westin Team", isSuperhost: true, joinedDate: "2014-11-18", avatar: "https://i.pravatar.cc/150?u=westingur" },
      bedrooms: 1, beds: 1, bathrooms: 1, max_guests: 2, pet_friendly: false, type_of_place: "Room", unavailableDates: [], tags: ["Modern", "Business"], status: "available"
    },
    {
      id: "har-5",
      name: "Lemon Tree Premier, Leisure Valley",
      description: "A stylish and comfortable business hotel in Gurgaon, offering excellent service and dining options.",
      type: "Modern Hotel", city: "Gurgaon", state: "Haryana", address: "Sector 29",
      coordinates: { lat: 28.4680, lng: 77.0680 },
      price: { amount: 6500, currency: "INR", period: "night" },
      rating: 4.6, reviewCount: 245,
      images: ["https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200"],
      gallery: {
        "Executive Rooms": ["https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200"],
        "Citrus Cafe": ["https://images.unsplash.com/photo-1556911227-4c177e172433?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1556911261-68743685f0f7?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200"],
        "Terrace Pool": ["https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1551882547-ff40c0d588fa?auto=format&fit=crop&w=1200"]
      },
      amenities: [{ id: "wifi", name: "High-speed WiFi", category: "Essential" }, { id: "pool", name: "Sky Pool", category: "Luxury" }],
      host: { name: "Lemon Tree Team", isSuperhost: false, joinedDate: "2017-09-20", avatar: "https://i.pravatar.cc/150?u=lemontree" },
      bedrooms: 1, beds: 1, bathrooms: 1, max_guests: 2, pet_friendly: false, type_of_place: "Room", unavailableDates: [], tags: ["Modern", "Comfort"], status: "available"
    },
    {
      id: "har-6",
      name: "Suryagarh Jaisalmer, Side",
      description: "A heritage stay experience on the outskirts of Delhi and Gurgaon, bringing Rajasthani luxury to the national capital region.",
      type: "Heritage Hotel", city: "Manesar", state: "Haryana", address: "Manesar Industrial Area",
      coordinates: { lat: 28.3500, lng: 76.9200 },
      price: { amount: 18500, currency: "INR", period: "night" },
      rating: 4.85, reviewCount: 156,
      images: ["https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200"],
      gallery: {
        "Palace Corridors": ["https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1551882547-ff40c0d588fa?auto=format&fit=crop&w=1200"],
        "Royal Suites": ["https://images.unsplash.com/photo-1595181829924-823fc67251fa?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1200"],
        "Desert Dinners": ["https://images.unsplash.com/photo-1556911227-4c177e172433?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1556911261-68743685f0f7?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200"]
      },
      amenities: [{ id: "wifi", name: "High-speed WiFi", category: "Essential" }, { id: "pool", name: "Classic Pool", category: "Luxury" }],
      host: { name: "Heritage Team", isSuperhost: true, joinedDate: "2018-09-22", avatar: "https://i.pravatar.cc/150?u=herihar" },
      bedrooms: 1, beds: 1, bathrooms: 1, max_guests: 2, pet_friendly: true, type_of_place: "Room", unavailableDates: [], tags: ["Heritage", "Luxury"], status: "available"
    },

    // --- ADDITIONAL SIKKIM (3 More) ---
    {
      id: "sk-4",
      name: "Mayfair Spa Resort & Casino, Gangtok",
      description: "A luxury resort in Gangtok featuring a world-class spa, casino, and stunning views of the surrounding hills.",
      type: "Modern Resort", city: "Gangtok", state: "Sikkim", address: "Lower Samdur Block",
      coordinates: { lat: 27.3000, lng: 88.6000 },
      price: { amount: 14500, currency: "INR", period: "night" },
      rating: 4.9, reviewCount: 312,
      images: ["https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200"],
      gallery: {
        "Casino Floor": ["https://images.unsplash.com/photo-1596838132731-3301c3fd4317?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1510511459019-5dee997dd0ef?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1518173946687-a4c8a3b74dbf?auto=format&fit=crop&w=1200"],
        "Luxe Rooms": ["https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=1200"],
        "Spa Pavilion": ["https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1551882547-ff40c0d588fa?auto=format&fit=crop&w=1200"]
      },
      amenities: [{ id: "wifi", name: "High-speed WiFi", category: "Essential" }, { id: "pool", name: "Scenic Pool", category: "Luxury" }],
      host: { name: "Mayfair Team", isSuperhost: true, joinedDate: "2012-05-18", avatar: "https://i.pravatar.cc/150?u=mayfair" },
      bedrooms: 1, beds: 1, bathrooms: 1, max_guests: 2, pet_friendly: false, type_of_place: "Room", unavailableDates: [], tags: ["Resort", "Casino"], status: "available"
    },
    {
      id: "sk-5",
      name: "Summit Namnang Courtyard & Spa",
      description: "A luxury boutique hotel in Gangtok offering breathtaking views of the Kanchenjunga range and a serene environment.",
      type: "Modern Hotel", city: "Gangtok", state: "Sikkim", address: "Namnang Road",
      coordinates: { lat: 27.3200, lng: 88.6150 },
      price: { amount: 8500, currency: "INR", period: "night" },
      rating: 4.75, reviewCount: 156,
      images: ["https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200"],
      gallery: {
        "Mountain Peaks": ["https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200"],
        "Sleek Suites": ["https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200"],
        "Terrace Deck": ["https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1551882547-ff40c0d588fa?auto=format&fit=crop&w=1200"]
      },
      amenities: [{ id: "wifi", name: "High-speed WiFi", category: "Essential" }, { id: "pool", name: "Sky Pool", category: "Luxury" }],
      host: { name: "Summit Team", isSuperhost: true, joinedDate: "2015-11-20", avatar: "https://i.pravatar.cc/150?u=summitsk" },
      bedrooms: 1, beds: 1, bathrooms: 1, max_guests: 2, pet_friendly: true, type_of_place: "Room", unavailableDates: [], tags: ["Modern", "Mountain View"], status: "available"
    },
    {
      id: "sk-6",
      name: "Tashi Niwa Boutique, Pelling",
      description: "A sister property in Pelling, providing the same boutique charm with unique views of the Rabdentse Ruins.",
      type: "Boutique Hotel", city: "Pelling", state: "Sikkim", address: "Upper Pelling",
      coordinates: { lat: 27.3000, lng: 88.2300 },
      price: { amount: 6500, currency: "INR", period: "night" },
      rating: 4.8, reviewCount: 88,
      images: ["https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200"],
      gallery: {
        "Ruins View": ["https://images.unsplash.com/photo-1558036117-15d82a90b9b1?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1583163773177-33a8712a20ca?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1595872245019-f002fd5035ae?auto=format&fit=crop&w=1200"],
        "Cosy Rooms": ["https://images.unsplash.com/photo-1522708323590-d24dab6ae574?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200"],
        "Mountain Dining": ["https://images.unsplash.com/photo-1556911227-4c177e172433?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1556911261-68743685f0f7?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200"]
      },
      amenities: [{ id: "wifi", name: "High-speed WiFi", category: "Essential" }, { id: "utensils", name: "Local Meals", category: "Essential" }],
      host: { name: "Tashi Management", isSuperhost: true, joinedDate: "2018-09-22", avatar: "https://i.pravatar.cc/150?u=tashipel" },
      bedrooms: 1, beds: 1, bathrooms: 1, max_guests: 2, pet_friendly: false, type_of_place: "Room", unavailableDates: [], tags: ["History", "Mountains"], status: "available"
    },

    // --- ADDITIONAL MEGHALAYA (3 More) ---
    {
      id: "meg-4",
      name: "Vivanta Meghalaya, Shillong",
      description: "A luxury city hotel in Shillong, offering contemporary design and warm hospitality in the Scotland of the East.",
      type: "Modern Hotel", city: "Shillong", state: "Meghalaya", address: "Police Bazar",
      coordinates: { lat: 25.5750, lng: 91.8850 },
      price: { amount: 9500, currency: "INR", period: "night" },
      rating: 4.85, reviewCount: 245,
      images: ["https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200"],
      gallery: {
        "Urban Suites": ["https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200"],
        "Sleek Lobby": ["https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1551882547-ff40c0d588fa?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200"],
        "City View Deck": ["https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1522708323590-d24dab6ae574?auto=format&fit=crop&w=1200"]
      },
      amenities: [{ id: "wifi", name: "High-speed WiFi", category: "Essential" }, { id: "pool", name: "Indoor Pool", category: "Luxury" }],
      host: { name: "Taj Team", isSuperhost: true, joinedDate: "2015-04-12", avatar: "https://i.pravatar.cc/150?u=tajmeg" },
      bedrooms: 1, beds: 1, bathrooms: 1, max_guests: 2, pet_friendly: false, type_of_place: "Room", unavailableDates: [], tags: ["Modern", "Business"], status: "available"
    },
    {
      id: "meg-5",
      name: "Aerodene Cottage, Shillong",
      description: "A heritage boutique stay in a restored Assam-style cottage, offering a peaceful retreat amidst pine trees.",
      type: "Heritage Home", city: "Shillong", state: "Meghalaya", address: "Laitumkhrah",
      coordinates: { lat: 25.5600, lng: 91.9000 },
      price: { amount: 6500, currency: "INR", period: "night" },
      rating: 4.8, reviewCount: 132,
      images: ["https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200"],
      gallery: {
        "Pine Gardens": ["https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1532708059644-5590ed51ce4c?auto=format&fit=crop&w=1200"],
        "Heritage Rooms": ["https://images.unsplash.com/photo-1595181829924-823fc67251fa?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1200"],
        "Cozy Verandas": ["https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200"]
      },
      amenities: [{ id: "wifi", name: "High-speed WiFi", category: "Essential" }, { id: "utensils", name: "Home Cooking", category: "Essential" }],
      host: { name: "Shillong Heritage", isSuperhost: true, joinedDate: "2016-08-15", avatar: "https://i.pravatar.cc/150?u=aero" },
      bedrooms: 1, beds: 1, bathrooms: 1, max_guests: 2, pet_friendly: true, type_of_place: "Entire home", unavailableDates: [], tags: ["Heritage", "Nature"], status: "available"
    },
    {
      id: "meg-6",
      name: "Cherrapunjee Holiday Resort",
      description: "A cozy family-run resort in the heart of Cherrapunji, providing a warm base for exploring the living root bridges.",
      type: "Modern Resort", city: "Cherrapunji", state: "Meghalaya", address: "Laitkynsew Village",
      coordinates: { lat: 25.2200, lng: 91.6800 },
      price: { amount: 5500, currency: "INR", period: "night" },
      rating: 4.7, reviewCount: 92,
      images: ["https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200"],
      gallery: {
        "Root Bridges": ["https://images.unsplash.com/photo-1510166089176-b33324d03247?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200"],
        "Cosy Rooms": ["https://images.unsplash.com/photo-1522708323590-d24dab6ae574?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200"],
        "Local Dining": ["https://images.unsplash.com/photo-1556911227-4c177e172433?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1556911261-68743685f0f7?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200"]
      },
      amenities: [{ id: "wifi", name: "High-speed WiFi", category: "Essential" }, { id: "utensils", name: "Khasi Meals", category: "Essential" }],
      host: { name: "Cherra Team", isSuperhost: false, joinedDate: "2018-09-22", avatar: "https://i.pravatar.cc/150?u=cherra" },
      bedrooms: 1, beds: 2, bathrooms: 1, max_guests: 4, pet_friendly: true, type_of_place: "Room", unavailableDates: [], tags: ["Adventure", "Nature"], status: "available"
    },

    // --- ADDITIONAL ARUNACHAL PRADESH (3 More) ---
    {
      id: "arp-4",
      name: "Tawang River Camp",
      description: "An adventure-focused stay by the Tawang River, perfect for those looking for a rustic yet comfortable experience in the lap of nature.",
      type: "Eco Lodge", city: "Tawang", state: "Arunachal Pradesh", address: "River Bank Road",
      coordinates: { lat: 27.5900, lng: 91.8700 },
      price: { amount: 4500, currency: "INR", period: "night" },
      rating: 4.6, reviewCount: 64,
      images: ["https://images.unsplash.com/photo-1510166089176-b33324d03247?auto=format&fit=crop&w=1200"],
      gallery: {
        "River Front": ["https://images.unsplash.com/photo-1510166089176-b33324d03247?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200"],
        "Safari Tents": ["https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1537225228614-51dc37da1de2?auto=format&fit=crop&w=1200"],
        "Village Dining": ["https://images.unsplash.com/photo-1556911227-4c177e172433?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1556911261-68743685f0f7?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200"]
      },
      amenities: [{ id: "wifi", name: "Limited WiFi", category: "Essential" }, { id: "utensils", name: "Local Thali", category: "Essential" }],
      host: { name: "Arunachal Campers", isSuperhost: false, joinedDate: "2019-10-22", avatar: "https://i.pravatar.cc/150?u=arcamp" },
      bedrooms: 1, beds: 2, bathrooms: 1, max_guests: 4, pet_friendly: true, type_of_place: "Entire home", unavailableDates: [], tags: ["River", "Nature"], status: "available"
    },
    {
      id: "arp-5",
      name: "Hotel Pemaling, Dirang",
      description: "A comfortable mountain hotel in the Dirang Valley, offering panoramic views of the Kameng River and the surrounding apple orchards.",
      type: "Modern Hotel", city: "Dirang", state: "Arunachal Pradesh", address: "Main Highway",
      coordinates: { lat: 27.3500, lng: 92.2400 },
      price: { amount: 5500, currency: "INR", period: "night" },
      rating: 4.7, reviewCount: 132,
      images: ["https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200"],
      gallery: {
        "Valley Views": ["https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200"],
        "Cosy Rooms": ["https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200"],
        "Dining Deck": ["https://images.unsplash.com/photo-1551882547-ff40c0d588fa?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200"]
      },
      amenities: [{ id: "wifi", name: "High-speed WiFi", category: "Essential" }, { id: "utensils", name: "Dirang Meals", category: "Essential" }],
      host: { name: "Pemaling Team", isSuperhost: true, joinedDate: "2016-08-15", avatar: "https://i.pravatar.cc/150?u=pemaling" },
      bedrooms: 1, beds: 1, bathrooms: 1, max_guests: 2, pet_friendly: false, type_of_place: "Room", unavailableDates: [], tags: ["Valley", "Mountains"], status: "available"
    },
    {
      id: "arp-6",
      name: "Ziro Valley Homestay",
      description: "A traditional homestay in the picturesque Ziro Valley, known for the unique culture of the Apatani tribe and scenic paddy fields.",
      type: "Eco Lodge", city: "Ziro", state: "Arunachal Pradesh", address: "Paddy Field Side",
      coordinates: { lat: 27.5900, lng: 93.8500 },
      price: { amount: 3500, currency: "INR", period: "night" },
      rating: 4.9, reviewCount: 42,
      images: ["https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200"],
      gallery: {
        "Paddy Fields": ["https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1532708059644-5590ed51ce4c?auto=format&fit=crop&w=1200"],
        "Tribal Huts": ["https://images.unsplash.com/photo-1505881502353-a1986add3732?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1496102434273-049539308cc5?auto=format&fit=crop&w=1200"],
        "Local Kitchen": ["https://images.unsplash.com/photo-1556911227-4c177e172433?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1556911261-68743685f0f7?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200"]
      },
      amenities: [{ id: "wifi", name: "Limited WiFi", category: "Essential" }, { id: "utensils", name: "Tribetal Food", category: "Essential" }],
      host: { name: "Ziro Locals", isSuperhost: true, joinedDate: "2018-09-22", avatar: "https://i.pravatar.cc/150?u=ziro" },
      bedrooms: 1, beds: 2, bathrooms: 1, max_guests: 4, pet_friendly: true, type_of_place: "Entire home", unavailableDates: [], tags: ["Culture", "Nature"], status: "available"
    },

    // --- TRIPURA (3 Hotels) ---
    {
      id: "tri-1",
      name: "Hotel Ginger Agartala",
      description: "A smart, budget-friendly choice for travelers visiting Agartala, providing clean and functional rooms in a central location.",
      type: "Modern Hotel", city: "Agartala", state: "Tripura", address: "Khejur Bagan",
      coordinates: { lat: 23.8300, lng: 91.2800 },
      price: { amount: 3500, currency: "INR", period: "night" },
      rating: 4.4, reviewCount: 165,
      images: ["https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200"],
      gallery: {
        "Smart Rooms": ["https://images.unsplash.com/photo-1522708323590-d24dab6ae574?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200"],
        "Urban Lobby": ["https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1551882547-ff40c0d588fa?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200"],
        "Dining Deck": ["https://images.unsplash.com/photo-1556911227-4c177e172433?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1556911261-68743685f0f7?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200"]
      },
      amenities: [{ id: "wifi", name: "High-speed WiFi", category: "Essential" }, { id: "tv", name: "Smart TV", category: "Entertainment" }],
      host: { name: "Ginger Agartala", isSuperhost: false, joinedDate: "2018-05-12", avatar: "https://i.pravatar.cc/150?u=gingerag" },
      bedrooms: 1, beds: 1, bathrooms: 1, max_guests: 2, pet_friendly: false, type_of_place: "Room", unavailableDates: [], tags: ["Modern", "Budget"], status: "available"
    },
    {
      id: "tri-2",
      name: "Hotel Sonar Tori",
      description: "A luxury city hotel in Agartala, offering refined comfort and world-class hospitality in the capital city of Tripura.",
      type: "Modern Hotel", city: "Agartala", state: "Tripura", address: "Ronaldsay Road",
      coordinates: { lat: 23.8350, lng: 91.2750 },
      price: { amount: 5500, currency: "INR", period: "night" },
      rating: 4.6, reviewCount: 132,
      images: ["https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200"],
      gallery: {
        "Executive Suites": ["https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200"],
        "Modern Lobby": ["https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1551882547-ff40c0d588fa?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200"],
        "Terrace Dining": ["https://images.unsplash.com/photo-1556911227-4c177e172433?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1556911261-68743685f0f7?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200"]
      },
      amenities: [{ id: "wifi", name: "High-speed WiFi", category: "Essential" }, { id: "pool", name: "Sky Pool", category: "Luxury" }],
      host: { name: "Sonar Tori Team", isSuperhost: true, joinedDate: "2017-06-25", avatar: "https://i.pravatar.cc/150?u=sonartori" },
      bedrooms: 1, beds: 1, bathrooms: 1, max_guests: 2, pet_friendly: false, type_of_place: "Room", unavailableDates: [], tags: ["Modern", "Comfort"], status: "available"
    },
    {
      id: "tri-3",
      name: "Tikyee Heritage Homestay",
      description: "A unique heritage stay experience in the hills of Tripura, offering a blend of traditional tribal life and modern comfort.",
      type: "Eco Lodge", city: "Udaipur", state: "Tripura", address: "Hill Side Road",
      coordinates: { lat: 23.5300, lng: 91.4800 },
      price: { amount: 2500, currency: "INR", period: "night" },
      rating: 4.8, reviewCount: 42,
      images: ["https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200"],
      gallery: {
        "Hill Terrains": ["https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1532708059644-5590ed51ce4c?auto=format&fit=crop&w=1200"],
        "Tribal Huts": ["https://images.unsplash.com/photo-1505881502353-a1986add3732?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1496102434273-049539308cc5?auto=format&fit=crop&w=1200"],
        "Local Kitchen": ["https://images.unsplash.com/photo-1556911227-4c177e172433?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1556911261-68743685f0f7?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200"]
      },
      amenities: [{ id: "wifi", name: "Limited WiFi", category: "Essential" }, { id: "utensils", name: "Tribetal Food", category: "Essential" }],
      host: { name: "Tripura Locals", isSuperhost: true, joinedDate: "2019-02-14", avatar: "https://i.pravatar.cc/150?u=triploc" },
      bedrooms: 1, beds: 2, bathrooms: 1, max_guests: 4, pet_friendly: true, type_of_place: "Entire home", unavailableDates: [], tags: ["Culture", "Nature"], status: "available"
    },

    // --- MANIPUR (3 Hotels) ---
    {
      id: "man-1",
      name: "The Classic Hotel, Imphal",
      description: "A premier luxury hotel in Imphal, providing contemporary design and warm hospitality in the heart of Manipur.",
      type: "Modern Hotel", city: "Imphal", state: "Manipur", address: "North AOC",
      coordinates: { lat: 24.8170, lng: 93.9360 },
      price: { amount: 6500, currency: "INR", period: "night" },
      rating: 4.75, reviewCount: 215,
      images: ["https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200"],
      gallery: {
        "Executive Rooms": ["https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200"],
        "Modern Lobby": ["https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1551882547-ff40c0d588fa?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200"],
        "Pool Side": ["https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1551882547-ff40c0d588fa?auto=format&fit=crop&w=1200"]
      },
      amenities: [{ id: "wifi", name: "High-speed WiFi", category: "Essential" }, { id: "pool", name: "Leisure Pool", category: "Luxury" }],
      host: { name: "Classic Team", isSuperhost: true, joinedDate: "2015-11-20", avatar: "https://i.pravatar.cc/150?u=classicman" },
      bedrooms: 1, beds: 1, bathrooms: 1, max_guests: 2, pet_friendly: false, type_of_place: "Room", unavailableDates: [], tags: ["Modern", "Business"], status: "available"
    },
    {
      id: "man-2",
      name: "Sangai Continental",
      description: "A stylish and comfortable business hotel in Imphal, offering excellent service and dining options.",
      type: "Modern Hotel", city: "Imphal", state: "Manipur", address: "MG Avenue",
      coordinates: { lat: 24.8080, lng: 93.9380 },
      price: { amount: 5500, currency: "INR", period: "night" },
      rating: 4.6, reviewCount: 156,
      images: ["https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200"],
      gallery: {
        "Sleek Suites": ["https://images.unsplash.com/photo-1522708323590-d24dab6ae574?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200"],
        "Urban Dining": ["https://images.unsplash.com/photo-1556911227-4c177e172433?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1556911261-68743685f0f7?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200"],
        "Morning Mist": ["https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200"]
      },
      amenities: [{ id: "wifi", name: "High-speed WiFi", category: "Essential" }, { id: "utensils", name: "Local Meals", category: "Essential" }],
      host: { name: "Sangai Team", isSuperhost: false, joinedDate: "2017-09-20", avatar: "https://i.pravatar.cc/150?u=sangai" },
      bedrooms: 1, beds: 1, bathrooms: 1, max_guests: 2, pet_friendly: false, type_of_place: "Room", unavailableDates: [], tags: ["Modern", "Comfort"], status: "available"
    },
    {
      id: "man-3",
      name: "Loktak Lake Floating Homestay",
      description: "A unique experience staying on a floating 'phumdi' on Loktak Lake, the largest freshwater lake in Northeast India.",
      type: "Eco Lodge", city: "Moirang", state: "Manipur", address: "Loktak Lake",
      coordinates: { lat: 24.5500, lng: 93.8000 },
      price: { amount: 3500, currency: "INR", period: "night" },
      rating: 4.9, reviewCount: 88,
      images: ["https://images.unsplash.com/photo-1510166089176-b33324d03247?auto=format&fit=crop&w=1200"],
      gallery: {
        "Phumdi Views": ["https://images.unsplash.com/photo-1510166089176-b33324d03247?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200"],
        "Lake Cabins": ["https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1532708059644-5590ed51ce4c?auto=format&fit=crop&w=1200"],
        "Fisherman Dining": ["https://images.unsplash.com/photo-1556911227-4c177e172433?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1556911261-68743685f0f7?auto=format&fit=crop&w=1200", "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200"]
      },
      amenities: [{ id: "wifi", name: "Limited WiFi", category: "Essential" }, { id: "utensils", name: "Fresh Water Fish", category: "Essential" }],
      host: { name: "Loktak Locals", isSuperhost: true, joinedDate: "2018-09-22", avatar: "https://i.pravatar.cc/150?u=loktak" },
      bedrooms: 1, beds: 2, bathrooms: 1, max_guests: 4, pet_friendly: true, type_of_place: "Entire home", unavailableDates: [], tags: ["Eco", "Nature"], status: "available"
    }
  ];

  return NextResponse.json(recommendedHotels);
}
