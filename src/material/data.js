import assets from './assets';

const wines = [
  {
    title: 'Robertson Ruby Cabernet',
    price: 'R50',
    tags: 'AU | Bottle',
  },
  {
    title: 'Protea Cabernet Sauvignon',
    price: 'R75',
    tags: 'AU | Bottle',
  },
  {
    title: 'Chateaul Libertas Red',
    price: 'R61',
    tags: 'FR | 750 ml',
  },
  {
    title: 'Rhino Pale Ale',
    price: 'R31',
    tags: 'CA | 750 ml',
  },
  {
    title: 'Irish Guinness',
    price: 'R46',
    tags: 'IE | 750 ml',
  },
];

const cocktails = [
  {
    title: 'Cucumber Gimlet',
    price: 'R22',
    tags: 'Lime juice | Simple syrup| Gin or cucumber vodka | 30 ml',
  },
  {
    title: 'Lemon Drop',
    price: 'R13',
    tags: 'Lemon juice | Ginger beer | Slice of lime',
  },
  {
    title: 'Salty Dog',
    price: 'R11',
    tags: 'Gin | Grapefruit juice | Salt for the rim | Lime wedge',
  },
  {
    title: 'Old Fashioned',
    price: 'R31',
    tags: 'Bourbon | Brown sugar | Bitters',
  },
  {
    title: 'Berry Vodka Smash',
    price: 'R26',
    tags: 'Refined sugar free | Natural Sweet Vermouth | Orange garnish',
  },
];

const awards = [
  {
    imgUrl: assets.award,
    title: 'Game Changer Award',
    subtitle: 'Rest on your Laurels, Man of honour.',
  },
  {
    imgUrl: assets.award1,
    title: 'Rising Star',
    subtitle: 'Rest on your Laurels, Man of honour.',
  },
  {
    imgUrl: assets.award2,
    title: 'Community Spirit Award',
    subtitle: 'Rest on your Laurels, Man of honour.',
  },
  {
    imgUrl: assets.award3,
    title: 'Outstanding Chef',
    subtitle: 'Rest on your Laurels, Man of honour.',
  },
];

export default { wines, cocktails, awards };
