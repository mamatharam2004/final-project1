import productImg01 from "../Images/poetry1.jpg";
import productImg02 from "../Images/poetry2.jpg";
import productImg03 from "../Images/poetry3.jpg";

import productImg04 from "../Images/poetry4.jpg";
import productImg05 from "../Images/poetry5.jpg";
import productImg06 from "../Images/poetry6.jpg";
import productImg07 from "../Images/poetry7.jpg";

import productImg11 from "../Images/novel4.jpg";
import productImg08 from "../Images/Novel1.jpg";
import productImg09 from "../Images/novel2.jpg";
import productImg10 from "../Images/novel3.jpg";

import phone01 from "../Images/f1.jpg";
import phone02 from "../Images/f2.jpg";
import phone03 from "../Images/f3.jpg";
import phone04 from "../Images/f4.jpg";
import phone05 from "../Images/f5.jpg";
import phone06 from "../Images/f6.jpg";
import phone08 from "../Images/f7.jpg";

import watch01 from "../Images/his.jpg";
import watch02 from "../Images/his2.jpg";
import watch03 from "../Images/his3.jpg";
import watch04 from "../Images/his4.jpg";

import wireless01 from "../Images/str1.jpg";
import wireless02 from "../Images/str2.jpg";
import wireless03 from "../Images/str3.jpg";
import wireless04 from "../Images/str4.jpg";

import book1Slide from "../Images/top1.jpg";
import book2Slide from "../Images/top2.jpg";
import book3Slide from "../Images/Novel1.jpg"
export const SliderData = [
  {
      id: 1,
      title: "Buy your Books for Best Price",
      desc: "Life is a Book and There are Thousand Pages I have  not yet read.",
      cover: book1Slide,
  },
  {
      id: 2,
      title: "Buy your Books  for Best Price",
      desc: "Life is a Book and There are Thousand Pages I have  not yet read.",
      cover: book2Slide,
  },
  {
      id: 3,
      title: "Buy your Books for Best Price",
      desc: "Life is a Book and There are Thousand Pages I have  not yet read.",
      cover: book3Slide,
  },
  {
      id: 4,
      title: "Buy your Books  for Best Price",
      desc: "Life is a Book and There are Thousand Pages I have  not yet read.",
      cover: book2Slide,
  },
];

export const serviceData = [
  {
    icon: <ion-icon name="car"></ion-icon>,
    title: "Free Shipping",
    subtitle: "This perk can enhance cost saving and convenience.",
    bg: "#fdefe6",
  },
  {
    icon: <ion-icon name="home"></ion-icon>,
    title: "Dedicated help center",
    subtitle: "call us +91 9212349875",
    bg: "#ceebe9",
  },
  {
    icon: <ion-icon name="shield-half-outline"></ion-icon>,
    title: " Safe and Secure Payment",
    subtitle: "Pay using Secure payment methods",
    bg: "#e2f2b2",
  },
  // {
  //   icon: <ion-icon name="headset"></ion-icon>,
  //   title: " Back Guarantee",
  //   subtitle: "Lorem ipsum dolor sit amet.",
  //   bg: "#d6e5fb",
  // },
];

export const discoutProducts = [
  {
    id: "01",
    productName: "Milk and Honey",
    
    imgUrl: productImg01,
    category: "Poetry",
    price: 5,
    discount:30,
    shortDesc:"Rupi Kaur, 2015 </br> Published by Andrews McMeel",
    description:"The book is divided into four chapters, and each chapter serves a different purpose. Deals with a different pain. Heals a different heartache. milk and honey takes readers through a journey of the most bitter moments in life and finds sweetness in them because there is sweetness everywhere if you are just willing to look.",
    reviews: [
      {
        rating: 4.7,
        text: "Rupi Kaur, 2015.",
      },
    ],
    avgRating: 4.5,
  },
  {
    id: "02",
    productName: "AByss of Bliss ",
    imgUrl: productImg02,
    category: "Poetry",
    price: 3,
    discount:20,
    shortDesc:"Nerissamarie",
    description: "Abyss of Bliss is a poetry book exploring the purpose of life. This spellbinding poetry, goes beyond emotion, beyond form, beyond belief and explores the resounding truth of peace, love and wellbeing hidden in the heart. Beautiful soul healing love poems that reach into the depths of the self.Seek the beauty behind the veil. When the mind is silent, we discover divine love, our true nature. We are nothing more than beams of light floating through consciousness, projecting desires into the abyss. All the while forgetting we are pure, simple, humble, manifestations of bliss.",
    reviews: [
      {
        rating: 4.8,
        text: " Author:NerissaMarie.",
      },
      // {
      //   rating: 4.8,
      //   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      // },
    ],
    avgRating: 4.7,
  },
  {
    id: "08",
    productName: "Learning How to Fly",
    imgUrl: productImg08,
    category: "Novel",
    price: 6,
    discount:15,
    shortDesc:
      "Author:A P J Abdul Kalam",
    description:
      "In Learning How to Fly some of his nearly 2, 000 lectures have been compiled. These lectures were addressed to teachers and students in school and beyond. In each one of them he has spoken about preparing oneself best for life, to identify and overcome challenges and how to bring out the best within each individual",
    reviews: [
      {
        rating: 4.6,
        text: "Author:A P J Abdul Kalam.",
      },
      // {
      //   rating: 4.9,
      //   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      // },
    ],
    avgRating: 4.7,
  },
  {
    id: "09",
    productName: "A Story of Struggle",
    imgUrl: productImg09,
    category: "Novel",
    price: 10,
    discount:35,
    shortDesc:
      "Author:Ashok Kumawat.",
    description:
      "A 17-year-old boy belongs to a poor family and falls in love with a beautiful girl. But the girl's father wants her to marry a rich boy. Therefore, the boy leaves his village and goes to the city to become rich and this is where his struggle starts",
    reviews: [
      {
        rating: 4.6,
        text: "Author:Ashok Kumawat..",
      },
      // {
      //   rating: 4.9,
      //   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      // },
    ],
    avgRating: 4.7,
  },
  {
    id: "12",
    productName: "The Search for Treasure",
    imgUrl: phone03,
    category: "Fantasy",
    price: 6,
    discount:10,
    shortDesc:
      "Author:Geronimo Stilton",
    description:
      "Once again Geronimo Stilton is pulled into the Kingdom of Fantasy, where he is needed to fulfill the ancient Gemstone Prophecy, and prevent Scorcher, the evil Empress of Witches, from obtaining the Royal Sapphire which will give her immense power. Original Publisher: New York, NY, Scholastic Inc",
    reviews: [
      {
        rating: 4.8,
        text: "Author:Geronimo Stilton.",
      },
      // {
      //   rating: 4.9,
      //   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      // },
    ],
    avgRating: 4.8,
  },
  {
    id: "13",
    productName: " The Oath of the Vayuputras",
    imgUrl: phone04,
    category: "Fantasy",
    price: 12,
    discount:5,
    shortDesc:
      "Author:Amish Tripathi",
    description:
      "The Oath of the Vayuputras is the third book of Amish Tripathi, third book of Amishverse, and also the third book of Shiva Trilogy. The book was released on 27 February 2013, through Westland Press and completes the mythical story about an imaginary land Meluha and how its inhabitants were saved by a barbarian named Shiva",
    reviews: [
      {
        rating: 4.8,
        text: "Author:Amish Tripathi.",
      },
      // {
      //   rating: 4.9,
      //   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      // },
    ],
    avgRating: 4.8,
  },

]

export const products = [
  {
    id: "01",
    productName: "Milk and Honey",
    imgUrl: productImg01,
    category: "Poetry",
    price: 5,
    shortDesc: " Author:Rupi Kaur, 2015   Published by Andrews McMeel",
    description: "The book is divided into four chapters, and each chapter serves a different purpose. Deals with a different pain. Heals a different heartache. milk and honey takes readers through a journey of the most bitter moments in life and finds sweetness in them because there is sweetness everywhere if you are just willing to look.",
    reviews: [
      {
        rating: 4.7,
        text: "Rupi Kaur, 2015.",
      },
    ],
    avgRating: 4.5,
  },

  {
    id: "02",
    productName: "AByss of Bliss ",
    imgUrl: productImg02,
    category: "Poetry",
    price: 3,
    shortDesc:
      " Author:Nerissamarie",
    description:
      "Abyss of Bliss is a poetry book exploring the purpose of life. This spellbinding poetry, goes beyond emotion, beyond form, beyond belief and explores the resounding truth of peace, love and wellbeing hidden in the heart. Beautiful soul healing love poems that reach into the depths of the self.Seek the beauty behind the veil. When the mind is silent, we discover divine love, our true nature. We are nothing more than beams of light floating through consciousness, projecting desires into the abyss. All the while forgetting we are pure, simple, humble, manifestations of bliss.",
    reviews: [
      {
        rating: 4.8,
        text: " Author:NerissaMarie.",
      },
      // {
      //   rating: 4.8,
      //   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      // },
    ],
    avgRating: 4.7,
  },

  {
    id: "03",
    productName: "Trough the Heart's Eyes",
    imgUrl: productImg03,
    category: "Poetry",
    price: 5,
    shortDesc:
      "Author:Alexandra Vasiliu",
    description:
      "Run away with me to a faraway place where we will always have roomto grow and thrive, yet time will never leave wrinkles upon our heart.",
    reviews: [
      {
        rating: 4.6,
        text: "Author:Alexandra Vasiliu.",
      },
      // {
      //   rating: 4.9,
      //   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      // },
    ],
    avgRating: 4.7,
  },
  {
    id: "26",
    productName: " AByss of Bliss",
    imgUrl: productImg02,
    category: "Portry",
    price: 3,
    shortDesc:
      "Author:Nerissamarie",
    description:
      "Abyss of Bliss is a poetry book exploring the purpose of life. This spellbinding poetry, goes beyond emotion, beyond form, beyond belief and explores the resounding truth of peace, love and wellbeing hidden in the heart. Beautiful soul healing love poems that reach into the depths of the self.Seek the beauty behind the veil. When the mind is silent, we discover divine love, our true nature. We are nothing more than beams of light floating through consciousness, projecting desires into the abyss. All the while forgetting we are pure, simple, humble, manifestations of bliss",
    reviews: [
      {
        rating: 4.8,
        text: "Author:Nerissamarie.",
      },
      // {
      //   rating: 4.8,
      //   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      // },
    ],
    avgRating: 4.7,
  },
  {
    id: "04",
    productName: "Leaves You Full",
    imgUrl: productImg04,
    category: "Poetry",
    price: 8,
    shortDesc:
      "Author:Vanessa Mahan.",
    description:
      "Whenever we see around us we see so many beautiful colours of nature and when we see them there is some peace and calm which we feel deep within. Taking that beautiful irreplaceable feeling in our hearts and minds, today we are going to discuss the wonderful poem “We see leaves' ' which is nicely written by Nikki Reddy. This poem will take our minds and heart closer to the beauty of nature and make us feel peaceful and connected to nature.",
    reviews: [
      {
        rating: 4.6,
        text: "Author:Vanessa Mahan.",
      },
      // {
      //   rating: 4.9,
      //   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      // },
    ],
    avgRating: 4.7,
  },

  {
    id: "05",
    productName: "Chinese Love Story:",
    imgUrl: productImg05,
    category: "poetry",
    price: 9,
    shortDesc:
      "Author:Jane Portal",
    description:
      " Selection of classical and modern Chinese love poems, illustrated with brushwork calligraphy and scenes from rarely exhibited paintings and prints in the collection of the British Museum.",
    reviews: [
      {
        rating: 4.6,
        text: "Author:Jane Portal.",
      },
      // {
      //   rating: 4.9,
      //   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      // },
    ],
    avgRating: 4.7,
  },

  {
    id: "06",
    productName: "Indian Love Poetry",
    imgUrl: productImg06,
    category: "poetry",
    price: 8,
    shortDesc:
      "Author:A.L Dallapiccola.",
    description:
      "Indian love poems are also often unhesitatingly sensual and describe women's ideal physical form (ample, spherical breasts; broad hips, the 'triple fold', and the narrowest of waists) repeatedly, and in great detail. The description of the ideal male physical form, however, is far less frequent.",
    reviews: [
      {
        rating: 4.6,
        text: "Author:A.L Dallapiccola.",
      },
      // {
      //   rating: 4.9,
      //   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      // },
    ],
    avgRating: 4.7,
  },
  {
    id: "07",
    productName: "Bright Star",
    imgUrl: productImg07,
    category: "Poetry",
    price: 7,
    shortDesc:
      "Author:Elizabeth Floyd.",
    description:
      "“Bright Star” is a sonnet by the British Romantic poet John Keats. Written in 1818 or 1819, the poem is a passionate declaration of undying, constant love. The speaker wants to be “stedfast”—constant and unchanging—like the “bright star” described in the poem's first eight lines.",
    reviews: [
      {
        rating: 4.6,
        text: "Author:Elizabeth Floyd.",
      },
      // {
      //   rating: 4.9,
      //   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      // },
    ],
    avgRating: 4.7,
  },

  {
    id: "27",
    productName: "You are Born to BLOSSOM",
    imgUrl: productImg11,
    category: "Novel",
    price: 8,
    shortDesc:
      "Author:A P J Abdul Kalam",
    description:
      "This book is an account of how Dr. Kalam visualizes information and Communication technology mining the rural talent. Here, Dr. Kalam presents his dream of schools in India at 2020 as symbiotic nerve centres connecting teachers, students and community; personifying knowledge that exists in the world.",
    reviews: [
      {
        rating: 4.6,
        text: "Author:A P J Abdul Kalam.",
      },
      // {
      //   rating: 4.9,
      //   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      // },
    ],
    avgRating: 4.7,
  },

  {
    id: "08",
    productName: "Learning How to Fly",
    imgUrl: productImg08,
    category: "Novel",
    price: 6,
    shortDesc:
      "Author:A P J Abdul Kalam.",
    description:
      "In Learning How to Fly some of his nearly 2, 000 lectures have been compiled. These lectures were addressed to teachers and students in school and beyond. In each one of them he has spoken about preparing oneself best for life, to identify and overcome challenges and how to bring out the best within each individual.",
    reviews: [
      {
        rating: 4.6,
        text: "Author:A P J Abdul Kalam..",
      },
      // {
      //   rating: 4.9,
      //   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      // },
    ],
    avgRating: 4.7,
  },

  {
    id: "09",
    productName: "A Story of Struggle",
    imgUrl: productImg09,
    category: "Novel",
    price: 10,
    shortDesc:
      "Author:Ashok Kumawat.",
    description:
      "A 17-year-old boy belongs to a poor family and falls in love with a beautiful girl. But the girl's father wants her to marry a rich boy. Therefore, the boy leaves his village and goes to the city to become rich and this is where his struggle starts",
    reviews: [
      {
        rating: 4.6,
        text: "Author:Ashok Kumawat.",
      },
      // {
      //   rating: 4.9,
      //   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      // },
    ],
    avgRating: 4.7,
  },

  {
    id: "10",
    productName: " Children of Time",
    imgUrl: phone01,
    category: "Fantasy",
    price: 7,
    shortDesc:
      "Author:Adrian Tchaikovsky",
    description:
      "Adrian Tchaikovksy's award-winning novel Children of Time, is the epic story of humanity's battle for survival on a terraformed planet. Who will inherit this new Earth? The last remnants of the human race left a dying Earth, desperate to find a new home among the stars.",
    reviews: [
      {
        rating: 4.8,
        text: "Author:Adrian Tchaikovsky.",
      },
      // {
      //   rating: 4.9,
      //   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      // },
    ],
    avgRating: 4.8,
  },
  {
    id: "25",
    productName: "Belive in YourSelf",
    imgUrl: productImg10,
    category: "Novel",
    price: 9,
    shortDesc:
      "Author:Dr Joseph Murphy.",
    description:
      "In Believe in Yourself, Dr. Murphy stresses about having faith in ones abilities, believing in the inner self and in having the courage to chase your dream, come what may. The book was first published in 1955 but remains as popular as it was then.",
    reviews: [
      {
        rating: 4.6,
        text: "Author:Dr Joseph Murphy.",
      },
      // {
      //   rating: 4.9,
      //   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      // },
    ],
    avgRating: 4.7,
  },
  {
    id: "11",
    productName: " The House in the Cerulean Sea",
    imgUrl: phone02,
    category: "Fantasy",
    price: 7,
    shortDesc:
      "Author:T.J. Klune",
    description:
      "Linus Baker leads a quiet, solitary life. At forty, he lives in a tiny house with a devious cat and his old records. As a Case Worker at the Department in Charge Of Magical Youth, he spends his days overseeing the well-being of children in government-sanctioned orphanages.When Linus is unexpectedly summoned by Extremely Upper Management he's given a curious and highly classified assignment: travel to Marsyas Island Orphanage, where six dangerous children reside: a gnome, a sprite, a wyvern, an unidentifiable green blob, a were-Pomeranian, and the Antichrist. Linus must set aside his fears and determine whether or not they’re likely to bring about the end of days.",
    reviews: [
      {
        rating: 4.8,
        text: "Author:T.J. Klune.",
      },
      // {
      //   rating: 4.9,
      //   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      // },
    ],
    avgRating: 4.8,
  },

  {
    id: "12",
    productName: "The Search for Treasure",
    imgUrl: phone03,
    category: "Fantasy",
    price: 6,
    shortDesc:
      "Author:Geronimo Stilton.",
    description:
      "Once again Geronimo Stilton is pulled into the Kingdom of Fantasy, where he is needed to fulfill the ancient Gemstone Prophecy, and prevent Scorcher, the evil Empress of Witches, from obtaining the Royal Sapphire which will give her immense power. Original Publisher: New York, NY, Scholastic Inc.",
    reviews: [
      {
        rating: 4.8,
        text: "Author:Geronimo Stilton.",
      },
      // {
      //   rating: 4.9,
      //   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      // },
    ],
    avgRating: 4.8,
  },

  {
    id: "13",
    productName: "The Oath of the Vayuputras",
    imgUrl: phone04,
    category: "Fantasy",
    price: 12,
    shortDesc:
      "Author:Amish Tripathi.",
    description:
      "The Oath of the Vayuputras is the third book of Amish Tripathi, third book of Amishverse, and also the third book of Shiva Trilogy. The book was released on 27 February 2013, through Westland Press and completes the mythical story about an imaginary land Meluha and how its inhabitants were saved by a barbarian named Shiva",
    reviews: [
      {
        rating: 4.8,
        text: "Author:Amish Tripathi.",
      },
      // {
      //   rating: 4.9,
      //   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      // },
    ],
    avgRating: 4.8,
  },

  {
    id: "14",
    productName: "The Rise of Sivagami",
    imgUrl: phone05,
    category: "Fantasy",
    price: 10,
    shortDesc:
      "Author:Anand Neelakantan.",
    description:
      "The Rise of Sivagami is an Indian historical fiction novel written by Anand Neelakantan.[1] It acts as a prequel to the film Baahubali: The Beginning.[2] It was originally released in English on 7 March 2017, with Telugu, Malayalam, Hindi and Tamil versions released in April 2017.[3][4]The story revolves around Sivagami, a character of Baahubali. The novel is intended to extrapolate the Baahubali films.[5] It also tells the readers more about Kattappa, another important character of the story.[6]",
    reviews: [
      {
        rating: 4.8,
        text: "Author:Anand Neelakantan.",
      },
      // {
      //   rating: 4.9,
      //   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      // },
    ],
    avgRating: 4.8,
  },

  {
    id: "15",
    productName: "Ignite Me",
    imgUrl: phone06,
    category: "Fantasy",
    price: 11,
    shortDesc:
      "Author:Tahereh Mafi.",
    description:
      "With Omega Point destroyed, Juliette doesn’t know if the rebels, her friends, or even Adam are alive. But that won’t keep her from trying to take down The Reestablishment once and for all. Now she must rely on Warner, the handsome commander of Sector 45. The one person she never thought she could trust. The same person who saved her life. He promises to help Juliette master her powers and save their dying world . . . but that’s not all he wants with her.",
    reviews: [
      {
        rating: 4.8,
        text: "Author:Tahereh Mafi.",
      },
      // {
      //   rating: 4.9,
      //   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      // },
    ],
    avgRating: 4.8,
  },

  {
    id: "16",
    productName: "Complete History of The World",
    imgUrl: watch01,
    category: "Historical",
    price: 8,
    shortDesc:
      "Author:Richard Overy",
    description:
      "From cavemen to the Cold War, from Alexander the Great to global warming, from warfare through the ages to the great voyages of exploration, The Times Complete History of the World is the book that has all the answers. This is the most comprehensive, authoritative and accessible work on world history available today.",
    reviews: [
      {
        rating: 4.8,
        text: "Author:Richard Overy.",
      },
      // {
      //   rating: 4.9,
      //   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      // },
    ],
    avgRating: 4.8,
  },

  {
    id: "17",
    productName: "Why I Am an Atheist",
    imgUrl: watch02,
    category: "Historical",
    price: 7,
    shortDesc:
      "Author:KUNAL KAUSHIK",
    description:
      "The book “Why I Am An Atheist” is actually an essay by the legendary Bhagat Singh (the fortunate, yet the most unfortunate revolutionary)",
    reviews: [
      {
        rating: 4.8,
        text: "Author:KUNAL KAUSHIK.",
      },
      // {
      //   rating: 4.9,
      //   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      // },
    ],
    avgRating: 4.8,
  },

  {
    id: "18",
    productName: "The Complete Novels Of Sherlock Homles",
    imgUrl: watch03,
    category: "Historical",
    price: 8,
    shortDesc:
      "Author:Arthur Conan Doyle",
    description:
      "Was Sherlock Holmes a real person? Sherlock Holmes is a fictional character created by the Scottish writer Arthur Conan Doyle. However, Conan Doyle did model Holmes's methods and mannerisms on those of Dr. Joseph Bell, who had been his professor at the University of Edinburgh Medical School",
    reviews: [
      {
        rating: 4.8,
        text: "Author:Arthur Conan Doyle.",
      },
      // {
      //   rating: 4.9,
      //   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      // },
    ],
    avgRating: 4.8,
  },

  {
    id: "19",
    productName: "Relativity",
    imgUrl: watch04,
    category: "Historical",
    price: 8,
    shortDesc:
      "Author: Albert Einstein",
    description:
      "Relativity: The Special and General Theory Author: Albert Einstein, 1879–1955 First published: 1920 The original book is in the public domain in the United States.",
    reviews: [
      {
        rating: 4.8,
        text: "Author: Albert Einstein.",
      },
      // {
      //   rating: 4.9,
      //   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      // },
    ],
    avgRating: 4.8,
  },

  {
    id: "20",
    productName: "The Magic Of The Lost Temple",
    imgUrl: wireless01,
    category: "Fairy Tale",
    price: 6,
    shortDesc:
      "Author:Sudha Murthy",
    description:
      "“The Magic of the Lost Temple” is a story of Nooni, a young girl, who gets enchanted and fascinated by the story of an old stepwell told to her by her grandparents. This stepwell, which was apparently created by a “celestial architect” was used by “celestial maidens”, and now is lost to the village forever.",
    reviews: [
      {
        rating: 4.8,
        text: "Author:Sudha Murthy.",
      },
      // {
      //   rating: 4.9,
      //   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      // },
    ],
    avgRating: 4.8,
  },

  {
    id: "21",
    productName: "Hansel and Gretel",
    imgUrl: wireless03,
    category: "Fairy Tale",
    price: 8,
    shortDesc:
      "Author:  Eloise Wilkin",
    description:
      "Hansel and Gretel is a German fairy tale collected by the Brothers Grimm and published in 1812 as part of Grimm's Fairy Tales (KHM 15). It is also known as Little Step Brother and Little Step Sister",
    reviews: [
      {
        rating: 4.8,
        text: "Author:  Eloise Wilkin.",
      },
      // {
      //   rating: 4.9,
      //   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      // },
    ],
    avgRating: 4.8,
  },
  {
    id: "22",
    productName: "The Secret of Garden",
    imgUrl: wireless02,
    category: "Fairy Tale",
    price: 6,
    shortDesc:
      "Author: Frances Hodgson Burnett",
    description:
      "Phyllis Bixler Koppes writes that The Secret Garden makes use of the fairy tale, the exemplum, and the pastoral literary genres, which lends the novel a deeper thematic development and symbolic resonance than Burnett's earlier children's novels which only used elements from the first two traditions.",
    reviews: [
      {
        rating: 4.8,
        text: "Author: Frances Hodgson Burnett.",
      },
      // {
      //   rating: 4.9,
      //   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      // },
    ],
    avgRating: 4.8,
  },
  {
    id: "23",
    productName: "Beauty and The Beast",
    imgUrl: wireless04,
    category: "Fairy Tale",
    price: 8,
    shortDesc:
      "Author:Bill Condon",
    description:
      "Beauty and the Beast is a 2017 American musical romantic fantasy film directed by Bill Condon and produced by David Hoberman and Todd Lieberman, from the screenplay by Stephen Chbosky and Evan Spiliotopoulos.",
    reviews: [
      {
        rating: 4.8,
        text: "Author:Bill Condon.",
      },
      // {
      //   rating: 4.9,
      //   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      // },
    ],
    avgRating: 4.8,
  },

];
