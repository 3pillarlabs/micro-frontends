const basePath = `${process.env.PUBLIC_PATH}:${process.env.PORT}`;

const getSpaceships = () => [{
  id: 'sonJet',
  name: 'Son Jet',
  price: 1000,
  url: `${basePath}/assets/sonJet.jpg`
}, {
  id: 'riddickCarrier',
  name: 'Riddick Carrier',
  price: 2000,
  url: `${basePath}/assets/riddickCarrier.jpg`
}, {
  id: 'interceptor',
  name: 'Interceptor',
  price: 3000,
  url: `${basePath}/assets/interceptor.png`
}, {
  id: 'realSteal',
  name: 'Real Steal',
  price: 4000,
  url: `${basePath}/assets/realSteal.jpg`
}, {
  id: 'romanoffDestroyer',
  name: 'Romanoff Destroyer',
  price: 5000,
  url: `${basePath}/assets/romanoffDestroyer.jpg`
}, {
  id: 'bigBertha',
  name: 'Big Bertha',
  price: 6000,
  url: `${basePath}/assets/bigBertha.png`
}];

export default getSpaceships;
