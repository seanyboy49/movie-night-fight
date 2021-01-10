import { categories as lightBoxCategories } from '../../../components/LightBox'

/**
 * A hook that returns two functions for managing NUX
 */

const useNuxSwipe = () => {
  /**
   * A function that calls a callback to trigger the NUX based on whether or not
   * the user has already completed the NUX and how great their xOffset is
   *
   * @param {Function} onClick - The callback to trigger the NUX
   * @param {Number} xMovment - the amount of xOffset from the center
   * @param {Boolean} isDown - is the user pressing down
   * @param {Number} xDir - the direction the user is gesturing. 1 is right, -1 is left
   * @param {Boolean} isSwipeLeftComplete
   * @param {Boolean} isSwipeRightComplete
   *
   */
  function applyNUX({
    onClick,
    xMovement,
    isDown,
    xDir,
    isSwipeLeftComplete,
    isSwipeRightComplete,
  }) {
    if (!onClick && !Math.abs(xMovement) >= 20) return
    if (!isDown) return onClick(undefined)

    if (!isSwipeRightComplete && xDir === 1) {
      onClick(lightBoxCategories.nuxSwipeRight)
    } else if (!isSwipeLeftComplete && xDir === -1) {
      onClick(lightBoxCategories.nuxSwipeLeft)
    }
  }

  /**
   * @param {Function} onRelease - The callback to update local storage when the user releases
   * @param {Set} swipedCards - The cards that have been swiped
   * @param {Number} cardIndex - The current card's index
   * @param {Number} cardIndex - The current card's index
   * @param {Number} xDir - the direction the user is gesturing. 1 is right, -1 is left
   * @param {Boolean} isSwipeLeftComplete
   * @param {Boolean} isSwipeRightComplete
   *
   */

  function updateStorage({
    swipedCards,
    cardIndex,
    xDir,
    isSwipeLeftComplete,
    isSwipeRightComplete,
    onRelease,
  }) {
    if (!swipedCards.has(cardIndex)) return

    // The if above checks if the user hasn't swiped the card away.
    // If they have, then we can update local storage
    if (xDir === 1 && !isSwipeRightComplete) {
      onRelease('isSwipeRightComplete', true)
    } else if (xDir === -1 && !isSwipeLeftComplete) {
      onRelease('isSwipeLeftComplete', true)
    }
  }

  return { applyNUX, updateStorage }
}

export default useNuxSwipe
