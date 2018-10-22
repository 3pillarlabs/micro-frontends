import fetch from 'node-fetch';

const getSpaceships = fetch(`${process.env.SKELETON_URL}/api/v1/spaceships`)
  .then(res => res.json());

export default getSpaceships;
