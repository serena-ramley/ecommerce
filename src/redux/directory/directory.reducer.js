import flowers from "../../assets/images/flowers.jpg";
import succulents from "../../assets/images/succulents.jpg";
import fruits from "../../assets/images/fruits.jpg";
import greens from "../../assets/images/greens.jpg";
import herbs from "../../assets/images/herbs.jpg";

const INITIAL_STATE = {
  sections: [
    {
      title: "flowers",
      imageUrl: flowers,
      id: 1,
      linkUrl: "shop/flowers",
    },
    {
      title: "succulents",
      imageUrl: succulents,
      id: 2,
      linkUrl: "shop/succulents",
    },
    {
      title: "fruits",
      imageUrl: fruits,
      id: 3,
      linkUrl: "shop/fruits",
    },
    {
      title: "greens",
      imageUrl: greens,
      size: "large",
      id: 4,
      linkUrl: "shop/greens",
    },
    {
      title: "herbs",
      imageUrl: herbs,
      size: "large",
      id: 5,
      linkUrl: "shop/herbs",
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
