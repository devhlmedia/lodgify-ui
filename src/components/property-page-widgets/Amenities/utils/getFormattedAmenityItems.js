import { AND } from 'utils/default-strings';

/**
 * @param  {string[]} items
 * @return {string[]}
 */
export const getFormattedAmenityItems = items =>
  items.map((item, index) => {
    // Is penultimate item in array
    if (index === items.length - 2) {
      return `${item} ${AND} `;
    }
    // Is last item in array
    if (index === items.length - 1) {
      return item;
    }

    return `${item}, `;
  });
