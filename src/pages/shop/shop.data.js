import flowers from "../../assets/images/flowers.jpg";
import lilyofthevalley from "../../assets/images/lily-of-the-valley.jpg";
import impatiens from "../../assets/images/impatiens.jpg";
import bletilla from "../../assets/images/bletilla.jpg";
import torenia from "../../assets/images/torenia.jpg";
import succulents from "../../assets/images/succulents.jpg";
import aloevera from "../../assets/images/aloe-vera.jpg";
import jade from "../../assets/images/jade.jpg";
import zebracactus from "../../assets/images/zebra-cactus.jpg";
import burrostail from "../../assets/images/burros-tail.jpg";
import fruits from "../../assets/images/fruits.jpg";
import raspberries from "../../assets/images/raspberries.jpg";
import blueberries from "../../assets/images/blueberries.jpg";
import elderberries from "../../assets/images/elderberries.jpg";
import currants from "../../assets/images/currants.jpg";
import greens from "../../assets/images/greens.jpg";
import swisschard from "../../assets/images/swiss-chard.jpg";
import kale from "../../assets/images/kale.jpg";
import spinach from "../../assets/images/spinach.jpg";
import lettuce from "../../assets/images/lettuce.jpg";
import herbs from "../../assets/images/herbs.jpg";
import arugula from "../../assets/images/arugula.jpg";
import cilantro from "../../assets/images/cilantro.jpg";
import parsley from "../../assets/images/parsley.jpg";
import thyme from "../../assets/images/thyme.jpg";

const SHOP_DATA = [
  {
    title: "flowers",
    id: 1,
    routeName: "flowers",
    items: [
      {
        id: 100,
        name: "lily of the valley",
        imageUrl: lilyofthevalley,
        price: 10,
      },
      {
        id: 101,
        name: "impatiens",
        imageUrl: impatiens,
        price: 8,
      },
      {
        id: 102,
        name: "bletilla",
        imageUrl: bletilla,
        price: 12,
      },
      {
        id: 103,
        name: "torenia",
        imageUrl: torenia,
        price: 6,
      },
    ],
  },
  {
    title: "succulents",
    id: 2,
    routeName: "",
    items: [
      {
        id: 200,
        name: "aloe vera",
        imageUrl: aloevera,
        price: 10,
      },
      {
        id: 201,
        name: "jade",
        imageUrl: jade,
        price: 8,
      },
      {
        id: 202,
        name: "zebra cactus",
        imageUrl: zebracactus,
        price: 12,
      },
      {
        id: 203,
        name: "burro's tail",
        imageUrl: burrostail,
        price: 6,
      },
    ],
  },
  {
    title: "fruits",
    id: 3,
    routeName: "",
    items: [
      {
        id: 300,
        name: "raspberries",
        imageUrl: raspberries,
        price: 6,
      },
      {
        id: 301,
        name: "blueberries",
        imageUrl: blueberries,
        price: 5,
      },
      {
        id: 302,
        name: "elderberries",
        imageUrl: elderberries,
        price: 4,
      },
      {
        id: 303,
        name: "currants",
        imageUrl: currants,
        price: 3,
      },
    ],
  },
  {
    title: "greens",
    size: "large",
    id: 4,
    routeName: "",
    items: [
      {
        id: 400,
        name: "swiss chard",
        imageUrl: swisschard,
        price: 6,
      },
      {
        id: 401,
        name: "spinach",
        imageUrl: spinach,
        price: 5,
      },
      {
        id: 402,
        name: "kale",
        imageUrl: kale,
        price: 7,
      },
      {
        id: 403,
        name: "lettuce",
        imageUrl: lettuce,
        price: 4,
      },
    ],
  },
  {
    title: "herbs",
    size: "large",
    id: 5,
    routeName: "",
    items: [
      {
        id: 500,
        name: "arugula",
        imageUrl: arugula,
        price: 6,
      },
      {
        id: 501,
        name: "parsley",
        imageUrl: parsley,
        price: 5,
      },
      {
        id: 502,
        name: "cilantro",
        imageUrl: cilantro,
        price: 7,
      },
      {
        id: 503,
        name: "thyme",
        imageUrl: thyme,
        price: 4,
      },
    ],
  },
];

export default SHOP_DATA;
