import { Trend, Tweet } from '../interfaces/twtr.interface';

export const TRENDS: Trend[] = [
  { id: 1, name: 'Arya' },
  { id: 2, name: 'Rafael Nadal' },
  { id: 3, name: '#GameofThrones' },
  { id: 4, name: '#CincoDeMayo' },
  { id: 5, name: 'Hamas' },
  { id: 6, name: '#Arsenal' },
  { id: 7, name: 'Ben Simmons' },
  { id: 8, name: '#SundayThoughts' },
  { id: 9, name: 'Happy Cinco de Mayo' },
  { id: 10, name: 'Federer' }
];

export const FOOTER_DATA = [
  ['© 2019 Twitter'],
  ['About'],
  ['Help Center'],
  ['Terms'],
  ['Privacy policy'],
  ['Cookies'],
  ['Ads Info'],
  ['Brand'],
  ['Blog'],
  ['Status'],
  ['Apps'],
  ['Jobs'],
  ['Marketing'],
  ['Businesses'],
  ['Developers']
];

// tslint:disable: max-line-length
export const TWEETS: Tweet[] = [
  {
    id: 1,
    user: 'Rafa Nadal',
    userTag: '@RafaelNadal',
    profImg: 'assets/rn.jpg',
    ts: 'May 2',
    tweet:
      'Mañana estaré con mis amigos de @MAPFRE en su espacio de innovación. 10 años ya acompañándome. Muchas gracias 🙏 #MAPFREpreguntaRafa'
  },
  {
    id: 4,
    user: 'Serena Williams',
    userTag: '@serenawilliams',
    profImg: 'assets/sw.jpg',
    ts: 'Apr 23',
    tweet:
      'When @OlympiaOhanian sleeps it’s down to me Chip and Laura. My 4 legged besties. Always by my side'
  },
  {
    id: 5,
    user: 'Roger Federed',
    userTag: '@rogerfederer',
    profImg: 'assets/rf.jpg',
    ts: 'Mar 16',
    tweet:
      'Sad we couldn’t face off in another epic matchup, but hopefully we have a few more to come. Get better soon Rafa @RafaelNadal. #Fedal'
  },
  {
    id: 2,
    user: 'USA Volleyball',
    userTag: '@usavolleyball',
    profImg: 'assets/usav.jpg',
    ts: 'Apr 25',
    tweet:
      'A chance to qualify for #Tokyo2020 is on the line... be there when it happens 🇺🇸 looks; to; punch; their; 🎟️ to; the; #Olympics! ➡️ https:://go.usav.org/42519WNT'
  },
  {
    id: 9,
    user: 'Novak Djokovic',
    userTag: '@DjokerNole',
    profImg: 'assets/nd.jpg',
    ts: 'Apr 28',
    tweet:
      'Hristos Voskrese. Srećan Uskrs svima koji ga danas slave. Želim vam puno ljubavi i mira 😃🐰❤️'
  },
  {
    id: 19,
    user: 'Roland-Garros',
    userTag: '@rolandgarros',
    profImg: 'assets/rg.jpg',
    ts: 'Apr 28',
    tweet:
      '3 personalities / 3 former champions. One goal: to win Stars Set and Match in doubles at Roland-Garros ... Discover the portrait of @Cam_Lacourt who takes up the challenge! 🎾 See you at #RG19 !🙌'
  },
  {
    id: 3,
    user: 'US Open Tennis',
    userTag: '@usopen',
    profImg: 'assets/uso.jpg',
    ts: '9h',
    tweet:
      'Under the Lights: Sizzling stuff from Delpo...Are you looking forward to seeing him in action in Madrid this week? 🔥🎥: 2018 US Open'
  },
  {
    id: 3,
    user: 'NCAA Volleyball',
    userTag: '@NCAAVolleyball',
    profImg: 'assets/ncaav.png',
    ts: '3h',
    tweet:
      'CALL EM THE BACK-TO-BACK BRUINS! 🏆🏆 @uclabeachvb does not drop a single set and sweeps rival USC, 3-0, in the National Championship Dual! #NCAABeachVB'
  },
  {
    id: 13,
    user: 'Wimbledon',
    userTag: '@Wimbledon',
    profImg: 'assets/wim.jpeg',
    ts: 'Apr 30',
    tweet:
      'Sustainability is a key focus for us, and we are committed to being as green as possible 🌱'
  }
];
