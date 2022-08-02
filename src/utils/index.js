import SlideOne from '../assets/images/slide1.jpg'
import SlideTwo from '../assets/images/slide2.jpg'
import SlideThree from '../assets/images/slide3.jpg'
import SlideFour from '../assets/images/slide4.jpg'
import SlideFive from '../assets/images/slide5.jpg'
import SlideSix from '../assets/images/slide6.jpg'
import currency from "currency.js"


// export const API_URL = 'https://magandabet.com/api/v1/';
export const API_URL = 'http://127.0.0.1:8080/api/v1/';
export const SSE_URL = 'http://127.0.0.1:8080/api/sse/v1';


export const sliderItems = [
  {
      name: "Color Prediction",
      title:  "Recharge and Cashout Now",
      description:  "There are 3 colours in the game Red, Green, Violet.",
      url: SlideOne,
      alt: "Color Prediction"
  },

    {
      name: "Asia Baccarat",
      title:  "This is a card game played at casinos",
      description:  " Each baccarat coup has three possible outcomes; the player, banker and tie",
      url: SlideTwo,
      alt: "Asia Baccarat"
  },

    {
      name: "Pai Gow",
      title:  "Pai Gow is another ancient Chinese game",
      description:  "To win the hand both of your hands must outrank the two hands of the dealer.",
      url: SlideThree,
      alt:"Pai Gow",
  },

    {
      name: "Pachinko",
      title:  "This game is a mix of both pinball and a slot machine",
      description:  "It originated in Japan and uses small metal balls inside to play the game.",
      url: SlideFour,
      alt:"Pachinko",
  },

    {
      name: "Sic Bo",
      title:  "Sic Bo is from the ancient Chinese culture. ",
      description:  "The game has been played for thousands of years; and it is based on pure luck",
      url: SlideFive,
      alt: "Sic Bo",
  },

    {
      name: "Pai Gow Poker",
      title:  "TIt was invented in 1985 by Sam Torosian",
      description:  "The idea of the game is to create two poker hands out of the seven cards that you’re dealt.",
      url: SlideSix,
      alt:"Pai Gow Poker",
  },

]

export const methods = [
  {
    value: 'GCash',
    label: 'GCash',
  },
  {
    value: 'PayMaya',
    label: 'PayMaya',
  },
  {
    value: 'CoinPH',
    label: 'CoinPH',
  },

  {
    value: 'Bank Transfer',
    label: 'Bank Transfer',
  },
];


export const roles = [
  {
    value: 'Admin',
    label: 'Admin',
  },
  {
    value: 'Staff',
    label: 'Staff',
  },
  {
    value: 'Agent',
    label: 'Agent',
  },
  {
    value: 'Player',
    label: 'Player',
  },
];

const getCurrencyByLocale = (locale) => {
    let currency = "";
    if (locale === "fil-PH") {
        currency ='PHP';
    }
    return currency
}


export const formatMoney = (amount, locale='fil-PH') => {
    const formattedAmount = new Intl.NumberFormat(
      locale, 
      { style: 'currency', currency: getCurrencyByLocale(locale)}
    ).format(currency(amount));
    return formattedAmount
}


export const formatDate = (date, locale='fil-PH') => {
  const dateTime = new Date(date);
  return new Intl.DateTimeFormat(
  locale, { dateStyle: 'short', timeStyle: 'short' }
  ).format(dateTime);
}

export const getRole = (isAdmin, isStaff, isAgent) => {
  let role = ""
  if(isAdmin) {
    role = "Admin"
  } else if (isStaff) {
    role = "Staff"
  }else if (isAgent) {
    role = "Agent"
  }else {
    role = "Player"
  }
  return role
}