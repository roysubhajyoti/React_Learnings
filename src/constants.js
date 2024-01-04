export let IMG_Cdn_LINK =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"; //swiggy image common link

export const swiggy_API =
  "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING";

export const GET_RESTAURANT_MENU =
  "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId=74644";

// export const resturantList = [
//   {
//     info: {
//       id: "26723",
//       name: "KFC",
//       cloudinaryImageId: "56c9ab92bd79745fd152a30fa2525426",
//       locality: "Sector 3",
//       areaName: "Rohini",
//       costForTwo: "₹400 for two",
//       cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
//       avgRating: 4.2,
//       parentId: "547",
//       avgRatingString: "4.2",
//       totalRatingsString: "5K+",
//       sla: {
//         deliveryTime: 18,
//         lastMileTravel: 2,
//         serviceability: "SERVICEABLE",
//         slaString: "18 mins",
//         lastMileTravelString: "2.0 km",
//         iconType: "ICON_TYPE_EMPTY",
//       },
//       availability: {
//         nextCloseTime: "2023-12-31 01:00:00",
//         opened: true,
//       },
//       badges: {},
//       isOpen: true,
//       type: "F",
//       badgesV2: {
//         entityBadges: {
//           imageBased: {},
//           textBased: {},
//           textExtendedBadges: {},
//         },
//       },
//       aggregatedDiscountInfoV3: {
//         header: "50% OFF",
//         subHeader: "UPTO ₹100",
//       },
//       orderabilityCommunication: {
//         title: {},
//         subTitle: {},
//         message: {},
//         customIcon: {},
//       },
//       differentiatedUi: {
//         displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         differentiatedUiMediaDetails: {
//           mediaType: "ADS_MEDIA_ENUM_IMAGE",
//           lottie: {},
//           video: {},
//         },
//       },
//       reviewsSummary: {},
//       displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       restaurantOfferPresentationInfo: {},
//     },
//     analytics: {
//       context: "seo-data-e52be943-4872-43cc-bfa6-a5c7a4560277",
//     },
//     cta: {
//       link: "https://www.swiggy.com/restaurants/kfc-sector-3-rohini-delhi-26723",
//       text: "RESTAURANT_MENU",
//       type: "WEBLINK",
//     },
//     widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
//   },
//   {
//     info: {
//       id: "498382",
//       name: "Burger King",
//       cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
//       locality: "M2K Mall",
//       areaName: "Rohini",
//       costForTwo: "₹350 for two",
//       cuisines: ["Burgers", "American"],
//       avgRating: 4.4,
//       parentId: "166",
//       avgRatingString: "4.4",
//       totalRatingsString: "1K+",
//       sla: {
//         deliveryTime: 21,
//         lastMileTravel: 2,
//         serviceability: "SERVICEABLE",
//         slaString: "21 mins",
//         lastMileTravelString: "2.0 km",
//         iconType: "ICON_TYPE_EMPTY",
//       },
//       availability: {
//         nextCloseTime: "2023-12-31 03:00:00",
//         opened: true,
//       },
//       badges: {},
//       isOpen: true,
//       type: "F",
//       badgesV2: {
//         entityBadges: {
//           imageBased: {},
//           textBased: {},
//           textExtendedBadges: {},
//         },
//       },
//       aggregatedDiscountInfoV3: {
//         header: "60% OFF",
//         subHeader: "UPTO ₹120",
//       },
//       orderabilityCommunication: {
//         title: {},
//         subTitle: {},
//         message: {},
//         customIcon: {},
//       },
//       differentiatedUi: {
//         displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         differentiatedUiMediaDetails: {
//           mediaType: "ADS_MEDIA_ENUM_IMAGE",
//           lottie: {},
//           video: {},
//         },
//       },
//       reviewsSummary: {},
//       displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       restaurantOfferPresentationInfo: {},
//     },
//     analytics: {
//       context: "seo-data-e52be943-4872-43cc-bfa6-a5c7a4560277",
//     },
//     cta: {
//       link: "https://www.swiggy.com/restaurants/burger-king-m2k-mall-rohini-delhi-498382",
//       text: "RESTAURANT_MENU",
//       type: "WEBLINK",
//     },
//     widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
//   },
//   {
//     info: {
//       id: "253731",
//       name: "McDonald's",
//       cloudinaryImageId: "6dc3ed2ca21d71acff7c2a51dfe4c720",
//       locality: "Sector 3",
//       areaName: "Rohini",
//       costForTwo: "₹400 for two",
//       cuisines: ["American"],
//       avgRating: 4.4,
//       parentId: "630",
//       avgRatingString: "4.4",
//       totalRatingsString: "5K+",
//       sla: {
//         deliveryTime: 19,
//         lastMileTravel: 2,
//         serviceability: "SERVICEABLE",
//         slaString: "19 mins",
//         lastMileTravelString: "2.0 km",
//         iconType: "ICON_TYPE_EMPTY",
//       },
//       availability: {
//         nextCloseTime: "2023-12-30 23:45:00",
//         opened: true,
//       },
//       badges: {},
//       isOpen: true,
//       aggregatedDiscountInfoV2: {},
//       type: "F",
//       badgesV2: {
//         entityBadges: {
//           imageBased: {},
//           textBased: {},
//           textExtendedBadges: {},
//         },
//       },
//       orderabilityCommunication: {
//         title: {},
//         subTitle: {},
//         message: {},
//         customIcon: {},
//       },
//       differentiatedUi: {
//         displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         differentiatedUiMediaDetails: {
//           mediaType: "ADS_MEDIA_ENUM_IMAGE",
//           lottie: {},
//           video: {},
//         },
//       },
//       reviewsSummary: {},
//       displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       restaurantOfferPresentationInfo: {},
//     },
//     analytics: {
//       context: "seo-data-e52be943-4872-43cc-bfa6-a5c7a4560277",
//     },
//     cta: {
//       link: "https://www.swiggy.com/restaurants/mcdonalds-sector-3-rohini-delhi-253731",
//       text: "RESTAURANT_MENU",
//       type: "WEBLINK",
//     },
//     widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
//   },
//   {
//     info: {
//       id: "622616",
//       name: "Domino's Pizza",
//       cloudinaryImageId: "hsb5yt3qhechxockrbut",
//       locality: "3rd Sector",
//       areaName: "Rohini",
//       costForTwo: "₹400 for two",
//       cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
//       avgRating: 4.4,
//       parentId: "2456",
//       avgRatingString: "4.4",
//       totalRatingsString: "500+",
//       sla: {
//         deliveryTime: 20,
//         serviceability: "SERVICEABLE",
//         slaString: "20 mins",
//         iconType: "ICON_TYPE_EMPTY",
//       },
//       availability: {
//         nextCloseTime: "2023-12-31 00:59:00",
//         opened: true,
//       },
//       badges: {},
//       isOpen: true,
//       type: "F",
//       badgesV2: {
//         entityBadges: {
//           imageBased: {},
//           textBased: {},
//           textExtendedBadges: {},
//         },
//       },
//       aggregatedDiscountInfoV3: {
//         header: "₹150 OFF",
//         subHeader: "ABOVE ₹299",
//         discountTag: "FLAT DEAL",
//       },
//       orderabilityCommunication: {
//         title: {},
//         subTitle: {},
//         message: {},
//         customIcon: {},
//       },
//       differentiatedUi: {
//         displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         differentiatedUiMediaDetails: {
//           mediaType: "ADS_MEDIA_ENUM_IMAGE",
//           lottie: {},
//           video: {},
//         },
//       },
//       reviewsSummary: {},
//       displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       restaurantOfferPresentationInfo: {},
//     },
//     analytics: {
//       context: "seo-data-e52be943-4872-43cc-bfa6-a5c7a4560277",
//     },
//     cta: {
//       link: "https://www.swiggy.com/restaurants/dominos-pizza-3rd-sector-rohini-delhi-622616",
//       text: "RESTAURANT_MENU",
//       type: "WEBLINK",
//     },
//     widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
//   },
//   {
//     info: {
//       id: "326440",
//       name: "Punjabi Angithi (Vegorama Group)",
//       cloudinaryImageId: "g2pklvjnapzfoc4ackou",
//       locality: "Paschim Vihar",
//       areaName: "Paschim Vihar",
//       costForTwo: "₹400 for two",
//       cuisines: ["North Indian", "Chinese", "Punjabi", "Kebabs", "Tandoor"],
//       avgRating: 4.3,
//       veg: true,
//       parentId: "465050",
//       avgRatingString: "4.3",
//       totalRatingsString: "10K+",
//       sla: {
//         deliveryTime: 36,
//         lastMileTravel: 5,
//         serviceability: "SERVICEABLE",
//         slaString: "36 mins",
//         lastMileTravelString: "5.0 km",
//         iconType: "ICON_TYPE_EMPTY",
//       },
//       availability: {
//         nextCloseTime: "2023-12-30 23:00:00",
//         opened: true,
//       },
//       badges: {
//         imageBadges: [
//           {
//             imageId: "v1695133679/badges/Pure_Veg111.png",
//             description: "pureveg",
//           },
//         ],
//         textExtendedBadges: [
//           {
//             iconId: "guiltfree/GF_Logo_android_3x",
//             shortDescription: "options available",
//             fontColor: "#7E808C",
//           },
//         ],
//       },
//       isOpen: true,
//       type: "F",
//       badgesV2: {
//         entityBadges: {
//           imageBased: {
//             badgeObject: [
//               {
//                 attributes: {
//                   description: "pureveg",
//                   imageId: "v1695133679/badges/Pure_Veg111.png",
//                 },
//               },
//             ],
//           },
//           textBased: {},
//           textExtendedBadges: {
//             badgeObject: [
//               {
//                 attributes: {
//                   description: "",
//                   fontColor: "#7E808C",
//                   iconId: "guiltfree/GF_Logo_android_3x",
//                   shortDescription: "options available",
//                 },
//               },
//             ],
//           },
//         },
//       },
//       aggregatedDiscountInfoV3: {
//         header: "₹125 OFF",
//         subHeader: "ABOVE ₹249",
//         discountTag: "FLAT DEAL",
//       },
//       orderabilityCommunication: {
//         title: {},
//         subTitle: {},
//         message: {},
//         customIcon: {},
//       },
//       differentiatedUi: {
//         displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         differentiatedUiMediaDetails: {
//           mediaType: "ADS_MEDIA_ENUM_IMAGE",
//           lottie: {},
//           video: {},
//         },
//       },
//       reviewsSummary: {},
//       displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       restaurantOfferPresentationInfo: {},
//     },
//     analytics: {
//       context: "seo-data-e52be943-4872-43cc-bfa6-a5c7a4560277",
//     },
//     cta: {
//       link: "https://www.swiggy.com/restaurants/punjabi-angithi-vegorama-group-paschim-vihar-delhi-326440",
//       text: "RESTAURANT_MENU",
//       type: "WEBLINK",
//     },
//     widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
//   },
//   {
//     info: {
//       id: "341033",
//       name: "Bakingo",
//       cloudinaryImageId: "0c53fd8f62e3d25ba56d1b4cfe572cef",
//       locality: "Rithala",
//       areaName: "Rohini",
//       costForTwo: "₹300 for two",
//       cuisines: ["Bakery", "Desserts", "Beverages", "Snacks"],
//       avgRating: 4.4,
//       parentId: "3818",
//       avgRatingString: "4.4",
//       totalRatingsString: "1K+",
//       sla: {
//         deliveryTime: 23,
//         lastMileTravel: 3,
//         serviceability: "SERVICEABLE",
//         slaString: "23 mins",
//         lastMileTravelString: "3.0 km",
//         iconType: "ICON_TYPE_EMPTY",
//       },
//       availability: {
//         nextCloseTime: "2023-12-31 00:00:00",
//         opened: true,
//       },
//       badges: {},
//       isOpen: true,
//       type: "F",
//       badgesV2: {
//         entityBadges: {
//           imageBased: {},
//           textBased: {},
//           textExtendedBadges: {},
//         },
//       },
//       aggregatedDiscountInfoV3: {
//         header: "₹175 OFF",
//         subHeader: "ABOVE ₹999",
//         discountTag: "FLAT DEAL",
//       },
//       orderabilityCommunication: {
//         title: {},
//         subTitle: {},
//         message: {},
//         customIcon: {},
//       },
//       differentiatedUi: {
//         displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         differentiatedUiMediaDetails: {
//           mediaType: "ADS_MEDIA_ENUM_IMAGE",
//           lottie: {},
//           video: {},
//         },
//       },
//       reviewsSummary: {},
//       displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       restaurantOfferPresentationInfo: {},
//     },
//     analytics: {
//       context: "seo-data-e52be943-4872-43cc-bfa6-a5c7a4560277",
//     },
//     cta: {
//       link: "https://www.swiggy.com/restaurants/bakingo-rithala-rohini-delhi-341033",
//       text: "RESTAURANT_MENU",
//       type: "WEBLINK",
//     },
//     widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
//   },
//   {
//     info: {
//       id: "336053",
//       name: "Wendy's Burgers",
//       cloudinaryImageId: "a2ec5418246b622ec4baa3bd051ef6ab",
//       locality: "Sector 8",
//       areaName: "Pushpanjali",
//       costForTwo: "₹200 for two",
//       cuisines: ["Burgers", "American", "Fast Food", "Snacks", "Beverages"],
//       avgRating: 4.3,
//       parentId: "972",
//       avgRatingString: "4.3",
//       totalRatingsString: "5K+",
//       sla: {
//         deliveryTime: 25,
//         lastMileTravel: 2.7,
//         serviceability: "SERVICEABLE",
//         slaString: "25 mins",
//         lastMileTravelString: "2.7 km",
//         iconType: "ICON_TYPE_EMPTY",
//       },
//       availability: {
//         nextCloseTime: "2023-12-30 23:59:00",
//         opened: true,
//       },
//       badges: {
//         textExtendedBadges: [
//           {
//             iconId: "guiltfree/GF_Logo_android_3x",
//             shortDescription: "options available",
//             fontColor: "#7E808C",
//           },
//         ],
//       },
//       isOpen: true,
//       type: "F",
//       badgesV2: {
//         entityBadges: {
//           imageBased: {},
//           textBased: {},
//           textExtendedBadges: {
//             badgeObject: [
//               {
//                 attributes: {
//                   description: "",
//                   fontColor: "#7E808C",
//                   iconId: "guiltfree/GF_Logo_android_3x",
//                   shortDescription: "options available",
//                 },
//               },
//             ],
//           },
//         },
//       },
//       aggregatedDiscountInfoV3: {
//         header: "₹175 OFF",
//         subHeader: "ABOVE ₹699",
//         discountTag: "FLAT DEAL",
//       },
//       orderabilityCommunication: {
//         title: {},
//         subTitle: {},
//         message: {},
//         customIcon: {},
//       },
//       differentiatedUi: {
//         displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         differentiatedUiMediaDetails: {
//           mediaType: "ADS_MEDIA_ENUM_IMAGE",
//           lottie: {},
//           video: {},
//         },
//       },
//       reviewsSummary: {},
//       displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       restaurantOfferPresentationInfo: {},
//     },
//     analytics: {
//       context: "seo-data-e52be943-4872-43cc-bfa6-a5c7a4560277",
//     },
//     cta: {
//       link: "https://www.swiggy.com/restaurants/wendys-burgers-sector-8-pushpanjali-delhi-336053",
//       text: "RESTAURANT_MENU",
//       type: "WEBLINK",
//     },
//     widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
//   },
//   {
//     info: {
//       id: "602137",
//       name: "Big Bowl",
//       cloudinaryImageId: "c99751d54e4e1847186c62b3309c1327",
//       locality: "Sector 7",
//       areaName: "Rohini",
//       costForTwo: "₹250 for two",
//       cuisines: ["North Indian", "Chinese", "Tibetan", "Desserts"],
//       avgRating: 3.9,
//       parentId: "434792",
//       avgRatingString: "3.9",
//       totalRatingsString: "100+",
//       sla: {
//         deliveryTime: 26,
//         lastMileTravel: 3,
//         serviceability: "SERVICEABLE",
//         slaString: "26 mins",
//         lastMileTravelString: "3.0 km",
//         iconType: "ICON_TYPE_EMPTY",
//       },
//       availability: {
//         nextCloseTime: "2023-12-30 23:00:00",
//         opened: true,
//       },
//       badges: {},
//       isOpen: true,
//       type: "F",
//       badgesV2: {
//         entityBadges: {
//           imageBased: {},
//           textBased: {},
//           textExtendedBadges: {},
//         },
//       },
//       aggregatedDiscountInfoV3: {
//         header: "ITEMS",
//         subHeader: "AT ₹169",
//       },
//       orderabilityCommunication: {
//         title: {},
//         subTitle: {},
//         message: {},
//         customIcon: {},
//       },
//       differentiatedUi: {
//         displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//         differentiatedUiMediaDetails: {
//           mediaType: "ADS_MEDIA_ENUM_IMAGE",
//           lottie: {},
//           video: {},
//         },
//       },
//       reviewsSummary: {},
//       displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//       restaurantOfferPresentationInfo: {},
//     },
//     analytics: {
//       context: "seo-data-e52be943-4872-43cc-bfa6-a5c7a4560277",
//     },
//     cta: {
//       link: "https://www.swiggy.com/restaurants/big-bowl-sector-7-rohini-delhi-602137",
//       text: "RESTAURANT_MENU",
//       type: "WEBLINK",
//     },
//     widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
//   },
//   // {
//   //   info: {
//   //     id: "767725",
//   //     name: "Love Poori Wala",
//   //     cloudinaryImageId: "e554c893e09e1bb60f6c52e8373e0e08",
//   //     locality: "Sector 2",
//   //     areaName: "Rohini",
//   //     costForTwo: "₹150 for two",
//   //     cuisines: ["Indian", "Beverages"],
//   //     avgRating: 4.4,
//   //     veg: true,
//   //     parentId: "13819",
//   //     avgRatingString: "4.4",
//   //     totalRatingsString: "50+",
//   //     sla: {
//   //       deliveryTime: 22,
//   //       lastMileTravel: 0.5,
//   //       serviceability: "SERVICEABLE",
//   //       slaString: "22 mins",
//   //       lastMileTravelString: "0.5 km",
//   //       iconType: "ICON_TYPE_EMPTY",
//   //     },
//   //     availability: {
//   //       nextCloseTime: "2023-12-30 23:50:00",
//   //       opened: true,
//   //     },
//   //     badges: {},
//   //     isOpen: true,
//   //     type: "F",
//   //     badgesV2: {
//   //       entityBadges: {
//   //         imageBased: {},
//   //         textBased: {},
//   //         textExtendedBadges: {},
//   //       },
//   //     },
//   //     aggregatedDiscountInfoV3: {
//   //       header: "20% OFF",
//   //       subHeader: "UPTO ₹50",
//   //     },
//   //     orderabilityCommunication: {
//   //       title: {},
//   //       subTitle: {},
//   //       message: {},
//   //       customIcon: {},
//   //     },
//   //     differentiatedUi: {
//   //       displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//   //       differentiatedUiMediaDetails: {
//   //         mediaType: "ADS_MEDIA_ENUM_IMAGE",
//   //         lottie: {},
//   //         video: {},
//   //       },
//   //     },
//   //     reviewsSummary: {},
//   //     displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//   //     isNewlyOnboarded: true,
//   //     restaurantOfferPresentationInfo: {},
//   //   },
//   //   analytics: {
//   //     context: "seo-data-e52be943-4872-43cc-bfa6-a5c7a4560277",
//   //   },
//   //   cta: {
//   //     link: "https://www.swiggy.com/restaurants/love-poori-wala-sector-2-rohini-delhi-767725",
//   //     text: "RESTAURANT_MENU",
//   //     type: "WEBLINK",
//   //   },
//   //   widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
//   // },
// ];
