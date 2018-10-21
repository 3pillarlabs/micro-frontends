import { getPayload, isBuySpaceship } from './core/events/BuySpaceshipEvent';
import { addSpaceship, getFleet } from './core/Fleet';
import isValidSpaceship from './core/isValidSpaceship';
import createFleetUpdatedEvent from './core/events/createFleetUpdatedEvent';
import createBudgetExceededEvent from './core/events/createBudgetExceededEvent';

const onMessage = (event) => {
  if (isBuySpaceship(event)) {
    const spaceship = getPayload(event);

    if (isValidSpaceship(spaceship)) {
      try {
        addSpaceship(spaceship);

        window.postMessage(
          createFleetUpdatedEvent(getFleet()),
          process.env.SKELETON_URL
        );
      } catch {
        window.postMessage(
          createBudgetExceededEvent(),
          process.env.SKELETON_URL
        );
      }
    }
  }
};

window.addEventListener('message', onMessage.bind(this));
