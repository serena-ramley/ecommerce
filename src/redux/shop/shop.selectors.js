import memoize from "lodash.memoize";
import { createSelector } from "reselect";

// const COLLECTION_ID_MAP = {
//   flowers: 1,
//   succulents: 2,
//   fruits: 3,
//   greens: 4,
//   herbs: 5,
// };

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollection = memoize((collectionUrlParam) =>
  //   createSelector([selectCollections], (collections) =>
  //     collections.find(
  //       (collection) => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
  //     )
  //   )

  createSelector(
    [selectCollections],
    (collections) => collections[collectionUrlParam]
  )
);
