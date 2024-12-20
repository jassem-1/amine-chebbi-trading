import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  
  discordBlack,
  facebook,
  
  file02,
  
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  
  
  plusSquare,
  
  
  recording01,
  recording03,

  searchMd,
  sliders04,
  telegram,
  twitter,
  yourlogo,
  learn,
  transparency,
  netowrking,
  forex,
  cyber,
  bitc,
  coinss,
  wallet,
vid
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "navigation.about",
    url: "#about",
  },
  {
    id: "1",
    title: "navigation.services",
    url: "#services",
  },
  {
    id: "2",
    title: "navigation.join_vip",
    url: "#join",
  },
  {
    id: "3",
    title: "navigation.tutorials",
    url: "#roadmap",
  },
  {
    id: "4",
    title: "navigation.faqs",
    url: "#faqs",
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Live Trading Demonstrations",
    text: "Showcase live trading sessions where real trades are executed in real-time, providing clear insights into strategies and decision-making processes.",
    date: "May 2023",
    status: "done",
    videoUrl: vid, // replace with actual video URL
    colorful: true,
  },
  {
    id: "1",
    title: "Community Engagement",
    text: "Build a platform for the community to share insights, discuss strategies, and learn from one another, fostering an environment of collaboration and support.",
    date: "May 2023",
    status: "progress",
    videoUrl: vid, // replace with actual video URL
    colorful: true,

  },
  {
    id: "2",
    title: "Educational Tutorials",
    text: "Provide step-by-step video tutorials on trading strategies, tools, and market analysis techniques to help traders of all levels improve their skills.",
    date: "May 2023",
    status: "done",
    videoUrl: vid, // replace with actual video URL
    colorful: true,

  },
  {
    id: "3",
    title: "Market Analysis Tools",
    text: "Introduce advanced market analysis tools that help traders make informed decisions based on real-time data, trends, and technical indicators.",
    date: "May 2023",
    status: "progress",
    videoUrl: vid, // replace with actual video URL
    colorful: true,

  },
];



export const collabText =
  "Chebbi Trading: Empowering Success with Trust, Transparency, and Innovation";

export const collabContent = [
  {
    id: "0",
    title: "We provide: Expert strategies and proven techniques for success in global financial markets.",
  },
  {
    id: "1",
    title: "Transparent and documented performance, ensuring trust and clarity in all our dealings",
  },
  {
    id: "2",
    title: "T Comprehensive educational resources and mentorship to empower your trading journey.",
  },
  {
    id: "3",
    title: " Support and opportunities to uplift the Arab and Tunisian communities in the financial sector",
  },
  {
    id: "4",
    title: "Access to cutting-edge tools and platforms for efficient and innovative trading.",
  },
  {
    id: "5",
    title: "A secure and trustworthy environment to protect your investments and interests",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: learn,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: transparency,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: netowrking,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: cyber,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: bitc,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: forex,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Figma",
    icon: coinss,
    width: 26,
    height: 36,
  },
  {
    id: "7",
    title: "Figma",
    icon: wallet,
    width: 26,
    height: 36,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Ask anything",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Improve everyday",
    text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Connect everywhere",
    text: "Connect with the AI chatbot from anywhere, on any device, making it more accessible and convenient.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Fast responding",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Ask anything",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Improve everyday",
    text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
