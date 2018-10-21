const incrementSpaceshipQuantity = spaceship => ({
  ...spaceship,
  quantity: spaceship.quantity + 1
});

export default incrementSpaceshipQuantity;
