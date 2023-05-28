import { atom } from 'jotai';

export const PropertyFilterAtom = atom({
  category: 'rooms',
  type: 'all',
  priceRange: [10, 950]
});
