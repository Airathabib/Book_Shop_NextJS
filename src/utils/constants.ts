export const banners = [
  {
    src: "/banner_01.png",
    alt: "first banner",
  },
  {
    src: "/banner_02.png",
    alt: "second banner",
  },
  {
    src: "/banner_03.png",
    alt: "third banner",
  },
];

export const menuItems = [
  "Architecture",
  "Art & Fashion",
  "Biography",
  "Business",
  "Crafts & Hobbies",
  "Drama",
  "Fiction",
  "Food & Drink",
  "Health & Wellbeing",
  "History & Politics",
  "Humor",
  "Poetry",
  "Psychology",
  "Science",
  "Technology",
  "Travel & Maps",
];

export const books = [
  {
    id: "1da21333ss",
    name: "The Alchemist",
    img: "/promo_01.png",
    rating: 4.5,
    author: "Paulo Coelho",
    description:
      "The Alchemist is a novel by Brazilian author Paulo Coelho that was first published in 1988. Originally written in Portuguese, it became a widely translated international bestseller.",
    price: 12.99,
  },
  {
    id: "1da21333ssfdd",
    name: "The Alchemist2",
    img: "/promo_02.png",
    rating: 2.1,
    author: "Paulo Coelho",
    description:
      "The Alchemist is a novel by Brazilian author Paulo Coelho that was first published in 1988. Originally written in Portuguese, it became a widely translated international bestseller.",
    price: 12.99,
  },
  {
    id: "1da21333ss222ddd",
    name: "The Alchemist3",
    img: "/promo_01.png",
    rating: 1,
    author: "Paulo Coelho",
    description:
      "The Alchemist is a novel by Brazilian author Paulo Coelho that was first published in 1988. Originally written in Portuguese, it became a widely translated international bestseller.",
    price: 12.99,
  },
  {
    id: "1da21333ss222ddd2233",
    name: "The Alchemis4",
    img: "/promo_01.png",
    rating: 4,
    author: "Paulo Coelho",
    description:
      "The Alchemist is a novel by Brazilian author Paulo Coelho that was first published in 1988. Originally written in Portuguese, it became a widely translated international bestseller.",
    price: 12.99,
  },
];

export const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export const URL = `https://www.googleapis.com/books/v1/volumes?q="subject:Architecture"&key=${API_KEY}&printType=books&startIndex=0&maxResults=6&langRestrict=en`
