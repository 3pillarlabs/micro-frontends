import { getPayload, isBuySpaceship } from './core/BuySpaceshipEvent';
import { addToFleet, getFleet } from './core/Fleet';
import isValidSpaceship from './core/isValidSpaceship';
import createFleetUpdatedEvent from './core/createFleetUpdatedEvent';

const onMessage = (event) => {
  if (isBuySpaceship(event)) {
    const maybeSpaceship = getPayload(event);

    if (isValidSpaceship(maybeSpaceship)) {
      addToFleet(maybeSpaceship);

      window.postMessage(
        createFleetUpdatedEvent(getFleet()),
        process.env.SKELETON_URL
      );
    }
  }
};

window.addEventListener('message', onMessage.bind(this));
