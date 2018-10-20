const basePath = `${process.env.PUBLIC_PATH}:${process.env.PORT}`;

const getSpaceships = () => [{
  id: 'spaceship1',
  name: 'Spaceship 1',
  price: 1000,
  url: `${basePath}/assets/darth-vader.jpg`
}, {
  id: 'spaceship2',
  name: 'Spaceship 2',
  price: 2000,
  url: `${basePath}/assets/darth-vader.jpg`
}, {
  id: 'spaceship3',
  name: 'Spaceship 3',
  price: 3000,
  url: `${basePath}/assets/darth-vader.jpg`
}, {
  id: 'spaceship4',
  name: 'Spaceship 4',
  price: 4000,
  url: `${basePath}/assets/darth-vader.jpg`
}, {
  id: 'spaceship5',
  name: 'Spaceship 5',
  price: 5000,
  url: `${basePath}/assets/darth-vader.jpg`
}, {
  id: 'spaceship6',
  name: 'Spaceship 6',
  price: 6000,
  url: `${basePath}/assets/darth-vader.jpg`
}];

export default getSpaceships;
