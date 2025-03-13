import React from "react";
import ReactDOM from "react-dom/client";

/*const parent = React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"child1"},[
        React.createElement("h1",{},"i am an h1 tag"),
        React.createElement("h2",{},"i am an h2 tag"),
    ]),
    React.createElement("div",{id:"child2"},[
        React.createElement("h1",{},"i am an h1 tag"),
        React.createElement("h2",{},"i am an h2 tag"),
    ]),
]);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);*/

/*const heading = React.createElement("h1", {id: "heading", xyz: "abc"}, "hello world from react");
const root = ReactDOM.createRoot(document.getElementById("root"));
//react element
const Title = () =>(<h1 className="head">
    hello world from jsx1
    </h1>);

//react functional component
const HeadingComponent = () => {
    return <div>
        <h1>hello world from jsx</h1>
        <Title />
    </div>
};

//console.log(heading);
//console.log(jsxHeading);
root.render(<HeadingComponent/>);*/
 
const Header =()=>{
    return(
        <div className="header">
            <div className="logo-container">
                <img  className="logo"src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?size=2"/>
            </div>
            <div className="nav-items">
                <ul className="items">
                    <li>Home</li>
                    <li>Contact</li>
                    <li>About</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}
 const resList = [
    {
      "type": "restaurant",
      "info": {
        "resId": 19026140,
        "name": "McDonald's",
        "image": {
          "url": "https://b.zmtcdn.com/data/pictures/0/19026140/2469f5027c5c2241be45878f75039896_o2_featured_v2.jpg"
        },
        "o2FeaturedImage": {
          "url": "https://b.zmtcdn.com/data/pictures/0/19026140/2469f5027c5c2241be45878f75039896_o2_featured_v2.jpg"
        },
        "rating": {
          "has_fake_reviews": 0,
          "aggregate_rating": "4.0",
          "rating_text": "4.0",
          "rating_subtitle": "Very Good",
          "rating_color": "5BA829",
          "votes": "12.2K",
          "subtext": "REVIEWS",
          "is_new": false
        },
        "ratingNew": {
          "newlyOpenedObj": null,
          "suspiciousReviewObj": null,
          "ratings": {
            "DINING": {
              "rating_type": "DINING",
              "rating": "4.0",
              "reviewCount": "231",
              "reviewTextSmall": "231 Reviews",
              "subtext": "231 Dining Reviews",
              "color": "#1C1C1C",
              "ratingV2": "4.0",
              "subtitle": "DINING",
              "sideSubTitle": "Dining Ratings",
              "bgColorV2": {
                "type": "green",
                "tint": "700"
              },
              "newOnDining": false
            },
            "DELIVERY": {
              "rating_type": "DELIVERY",
              "rating": "4.0",
              "reviewCount": "12K",
              "reviewTextSmall": "12K Reviews",
              "subtext": "12K Delivery Reviews",
              "color": "#E23744",
              "ratingV2": "4.0",
              "subtitle": "DELIVERY",
              "sideSubTitle": "Delivery Ratings",
              "bgColorV2": {
                "type": "green",
                "tint": "700"
              },
              "newOnDelivery": false
            }
          }
        },
        "cft": {
          "text": "₹500 for two"
        },
        "cfo": {
          "text": "₹200 for one"
        },
        "locality": {
          "name": "Road 36, Jubilee Hills, Hyderabad",
          "address": "Plot 471, Road 36, Near Jubilee Hills Police Station, Jubilee Hills, Hyderabad",
          "localityUrl": "hyderabad/restaurants/in/road-36-jubilee-hills"
        },
        "timing": {
          "text": "",
          "color": ""
        },
        "cuisine": [
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTY4XCJdfSJd",
            "url": "https://www.zomato.com/hyderabad/restaurants/burger/",
            "name": "Burger"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
            "url": "https://www.zomato.com/hyderabad/restaurants/beverages/",
            "name": "Beverages"
          }
        ],
        "should_ban_ugc": false,
        "costText": {
          "text": "₹200 for one"
        }
      },
      "order": {
        "deliveryTime": "27 min",
        "isServiceable": true,
        "hasOnlineOrdering": true,
        "actionInfo": {
          "text": "Order Now",
          "clickUrl": "/hyderabad/mcdonalds-1-jubilee-hills/order"
        }
      },
      "gold": [],
      "takeaway": [],
      "cardAction": {
        "text": "",
        "clickUrl": "/hyderabad/mcdonalds-1-jubilee-hills/order",
        "clickActionDeeplink": ""
      },
      "distance": "201 m",
      "isPromoted": false,
      "promotedText": "",
      "trackingData": [
        {
          "table_name": "zsearch_events_log",
          "payload": "{\"search_id\":\"cc18cd90-ec7b-45fd-b8ad-27f3e748a6c6\",\"location_type\":\"delivery_cell\",\"location_id\":\"4308697137140465664\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"19026140\",\"element_type\":\"listing\",\"rank\":1}",
          "event_names": {
            "tap": "{\"action\":\"tap\"}",
            "impression": "{\"action\":\"impression\"}"
          }
        }
      ],
      "allCTA": [],
      "promoOffer": "",
      "checkBulkOffers": true,
      "bulkOffers": [
        {
          "text": "₹175 OFF",
          "color": {
            "tint": "500",
            "type": "blue"
          }
        }
      ],
      "isDisabled": false,
      "bottomContainers": []
    },
    {
      "type": "restaurant",
      "info": {
        "resId": 90195,
        "name": "KFC",
        "image": {
          "url": "https://b.zmtcdn.com/data/pictures/chains/5/90195/27a0c6e70b3754d9cfb14d6eccb44bd0_o2_featured_v2.jpg"
        },
        "o2FeaturedImage": {
          "url": "https://b.zmtcdn.com/data/pictures/chains/5/90195/27a0c6e70b3754d9cfb14d6eccb44bd0_o2_featured_v2.jpg"
        },
        "rating": {
          "has_fake_reviews": 0,
          "aggregate_rating": "3.7",
          "rating_text": "3.7",
          "rating_subtitle": "Good",
          "rating_color": "9ACD32",
          "votes": "6,897",
          "subtext": "REVIEWS",
          "is_new": false
        },
        "ratingNew": {
          "newlyOpenedObj": null,
          "suspiciousReviewObj": null,
          "ratings": {
            "DINING": {
              "rating_type": "DINING",
              "rating": "3.6",
              "reviewCount": "689",
              "reviewTextSmall": "689 Reviews",
              "subtext": "689 Dining Reviews",
              "color": "#1C1C1C",
              "ratingV2": "3.6",
              "subtitle": "DINING",
              "sideSubTitle": "Dining Ratings",
              "bgColorV2": {
                "type": "green",
                "tint": "500"
              },
              "newOnDining": false
            },
            "DELIVERY": {
              "rating_type": "DELIVERY",
              "rating": "3.7",
              "reviewCount": "6,208",
              "reviewTextSmall": "6,208 Reviews",
              "subtext": "6,208 Delivery Reviews",
              "color": "#E23744",
              "ratingV2": "3.7",
              "subtitle": "DELIVERY",
              "sideSubTitle": "Delivery Ratings",
              "bgColorV2": {
                "type": "green",
                "tint": "500"
              },
              "newOnDelivery": false
            }
          }
        },
        "cft": {
          "text": "₹500 for two"
        },
        "cfo": {
          "text": "₹200 for one"
        },
        "locality": {
          "name": "Inorbit Mall, Hitech City, Hyderabad",
          "address": "F&B 14/B, 2nd Floor, Survey 64, Inorbit Floor, Cyberabad, Madhapur, Hyderabad",
          "localityUrl": "hyderabad/restaurants/in/inorbit-mall-hitech-city"
        },
        "timing": {
          "text": "",
          "color": ""
        },
        "cuisine": [
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTY4XCJdfSJd",
            "url": "https://www.zomato.com/hyderabad/restaurants/burger/",
            "name": "Burger"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA3M1wiXX0iXQ%3D%3D",
            "url": "https://www.zomato.com/hyderabad/restaurants/grilled-chicken/",
            "name": "Grilled Chicken"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAyM1wiXX0iXQ%3D%3D",
            "url": "https://www.zomato.com/hyderabad/restaurants/rolls/",
            "name": "Rolls"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
            "url": "https://www.zomato.com/hyderabad/restaurants/fast-food/",
            "name": "Fast Food"
          }
        ],
        "should_ban_ugc": false,
        "costText": {
          "text": "₹200 for one"
        }
      },
      "order": {
        "deliveryTime": "36 min",
        "isServiceable": true,
        "hasOnlineOrdering": true,
        "actionInfo": {
          "text": "Order Now",
          "clickUrl": "/hyderabad/kfc-1-madhapur/order"
        }
      },
      "gold": [],
      "takeaway": [],
      "cardAction": {
        "text": "",
        "clickUrl": "/hyderabad/kfc-1-madhapur/order",
        "clickActionDeeplink": ""
      },
      "distance": "2.3 km",
      "isPromoted": false,
      "promotedText": "",
      "trackingData": [
        {
          "table_name": "zsearch_events_log",
          "payload": "{\"search_id\":\"cc18cd90-ec7b-45fd-b8ad-27f3e748a6c6\",\"location_type\":\"delivery_cell\",\"location_id\":\"4308697137140465664\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"90195\",\"element_type\":\"listing\",\"rank\":2}",
          "event_names": {
            "tap": "{\"action\":\"tap\"}",
            "impression": "{\"action\":\"impression\"}"
          }
        }
      ],
      "allCTA": [],
      "promoOffer": "",
      "checkBulkOffers": true,
      "bulkOffers": [],
      "isDisabled": false,
      "bottomContainers": []
    },
    {
      "type": "restaurant",
      "info": {
        "resId": 19308872,
        "name": "Raju Gari Biryani",
        "image": {
          "url": "https://b.zmtcdn.com/data/pictures/2/19308872/b2c91bfeaa9bf133eb01214dbe987505_o2_featured_v2.jpg"
        },
        "o2FeaturedImage": {
          "url": "https://b.zmtcdn.com/data/pictures/2/19308872/b2c91bfeaa9bf133eb01214dbe987505_o2_featured_v2.jpg"
        },
        "rating": {
          "has_fake_reviews": 0,
          "aggregate_rating": "3.8",
          "rating_text": "3.8",
          "rating_subtitle": "Good",
          "rating_color": "9ACD32",
          "votes": "127.9K",
          "subtext": "REVIEWS",
          "is_new": false
        },
        "ratingNew": {
          "newlyOpenedObj": null,
          "suspiciousReviewObj": null,
          "ratings": {
            "DINING": {
              "rating_type": "DINING",
              "rating": "",
              "reviewCount": "0",
              "reviewTextSmall": "0 Reviews",
              "subtext": "Does not offer Dining",
              "color": "",
              "ratingV2": "-",
              "subtitle": "DINING",
              "sideSubTitle": "Dining Ratings",
              "bgColorV2": {
                "type": "green",
                "tint": "100"
              },
              "textColorV2": {
                "type": "green",
                "tint": "500"
              },
              "newOnDining": false
            },
            "DELIVERY": {
              "rating_type": "DELIVERY",
              "rating": "3.8",
              "reviewCount": "127.9K",
              "reviewTextSmall": "127.9K Reviews",
              "subtext": "127.9K Delivery Reviews",
              "color": "#E23744",
              "ratingV2": "3.8",
              "subtitle": "DELIVERY",
              "sideSubTitle": "Delivery Ratings",
              "bgColorV2": {
                "type": "green",
                "tint": "600"
              },
              "newOnDelivery": false
            }
          }
        },
        "cft": {
          "text": "₹300 for two"
        },
        "cfo": {
          "text": "₹150 for one"
        },
        "locality": {
          "name": "Madhapur, Hyderabad",
          "address": "Plot 84, Survey 11, Khanamet Village, Ayyapa Society Road, Madhapur, Hyderabad",
          "localityUrl": "hyderabad/madhapur-restaurants"
        },
        "timing": {
          "text": "",
          "color": ""
        },
        "cuisine": [
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
            "url": "https://www.zomato.com/hyderabad/restaurants/biryani/",
            "name": "Biryani"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
            "url": "https://www.zomato.com/hyderabad/restaurants/chinese/",
            "name": "Chinese"
          }
        ],
        "should_ban_ugc": false,
        "costText": {
          "text": "₹150 for one"
        }
      },
      "order": {
        "deliveryTime": "19 min",
        "isServiceable": true,
        "hasOnlineOrdering": true,
        "actionInfo": {
          "text": "Order Now",
          "clickUrl": "/hyderabad/raju-gari-biryani-1-madhapur/order"
        }
      },
      "gold": [],
      "takeaway": [],
      "cardAction": {
        "text": "",
        "clickUrl": "/hyderabad/raju-gari-biryani-1-madhapur/order",
        "clickActionDeeplink": ""
      },
      "distance": "2.3 km",
      "isPromoted": false,
      "promotedText": "",
      "trackingData": [
        {
          "table_name": "zsearch_events_log",
          "payload": "{\"search_id\":\"cc18cd90-ec7b-45fd-b8ad-27f3e748a6c6\",\"location_type\":\"delivery_cell\",\"location_id\":\"4308697137140465664\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"19308872\",\"element_type\":\"listing\",\"rank\":3}",
          "event_names": {
            "tap": "{\"action\":\"tap\"}",
            "impression": "{\"action\":\"impression\"}"
          }
        }
      ],
      "allCTA": [],
      "promoOffer": "",
      "checkBulkOffers": true,
      "bulkOffers": [
        {
          "text": "50% OFF",
          "color": {
            "tint": "500",
            "type": "blue"
          }
        }
      ],
      "isDisabled": false,
      "bottomContainers": []
    },
    {
      "type": "restaurant",
      "info": {
        "resId": 18472046,
        "name": "Pista House",
        "image": {
          "url": "https://b.zmtcdn.com/data/pictures/chains/9/91999/b31e747a127c264a5366c861e61b1df0_o2_featured_v2.jpg"
        },
        "o2FeaturedImage": {
          "url": "https://b.zmtcdn.com/data/pictures/chains/9/91999/b31e747a127c264a5366c861e61b1df0_o2_featured_v2.jpg"
        },
        "rating": {
          "has_fake_reviews": 0,
          "aggregate_rating": "4.0",
          "rating_text": "4.0",
          "rating_subtitle": "Very Good",
          "rating_color": "5BA829",
          "votes": "41.8K",
          "subtext": "REVIEWS",
          "is_new": false
        },
        "ratingNew": {
          "newlyOpenedObj": null,
          "suspiciousReviewObj": null,
          "ratings": {
            "DINING": {
              "rating_type": "DINING",
              "rating": "3.9",
              "reviewCount": "1,090",
              "reviewTextSmall": "1,090 Reviews",
              "subtext": "1,090 Dining Reviews",
              "color": "#1C1C1C",
              "ratingV2": "3.9",
              "subtitle": "DINING",
              "sideSubTitle": "Dining Ratings",
              "bgColorV2": {
                "type": "green",
                "tint": "600"
              },
              "newOnDining": false
            },
            "DELIVERY": {
              "rating_type": "DELIVERY",
              "rating": "4.1",
              "reviewCount": "40.7K",
              "reviewTextSmall": "40.7K Reviews",
              "subtext": "40.7K Delivery Reviews",
              "color": "#E23744",
              "ratingV2": "4.1",
              "subtitle": "DELIVERY",
              "sideSubTitle": "Delivery Ratings",
              "bgColorV2": {
                "type": "green",
                "tint": "700"
              },
              "newOnDelivery": false
            }
          }
        },
        "cft": {
          "text": "₹1,000 for two"
        },
        "cfo": {
          "text": "₹400 for one"
        },
        "locality": {
          "name": "Gachibowli, Hyderabad",
          "address": "2-48, Plot 424, Opposite Care Hospital, Gachibowli, Hyderabad",
          "localityUrl": "hyderabad/gachibowli-restaurants"
        },
        "timing": {
          "text": "",
          "color": ""
        },
        "cuisine": [
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
            "url": "https://www.zomato.com/hyderabad/restaurants/biryani/",
            "name": "Biryani"
          }
        ],
        "should_ban_ugc": false,
        "costText": {
          "text": "₹400 for one"
        }
      },
      "order": {
        "deliveryTime": "31 min",
        "isServiceable": true,
        "hasOnlineOrdering": true,
        "actionInfo": {
          "text": "Order Now",
          "clickUrl": "/hyderabad/pista-house-2-gachibowli/order"
        }
      },
      "gold": [],
      "takeaway": [],
      "cardAction": {
        "text": "",
        "clickUrl": "/hyderabad/pista-house-2-gachibowli/order",
        "clickActionDeeplink": ""
      },
      "distance": "3.7 km",
      "isPromoted": false,
      "promotedText": "",
      "trackingData": [
        {
          "table_name": "zsearch_events_log",
          "payload": "{\"search_id\":\"cc18cd90-ec7b-45fd-b8ad-27f3e748a6c6\",\"location_type\":\"delivery_cell\",\"location_id\":\"4308697137140465664\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"18472046\",\"element_type\":\"listing\",\"rank\":4}",
          "event_names": {
            "tap": "{\"action\":\"tap\"}",
            "impression": "{\"action\":\"impression\"}"
          }
        }
      ],
      "allCTA": [],
      "promoOffer": "",
      "checkBulkOffers": true,
      "bulkOffers": [
        {
          "text": "50% OFF",
          "color": {
            "tint": "500",
            "type": "blue"
          }
        }
      ],
      "isDisabled": false,
      "bottomContainers": []
    },
    {
      "type": "restaurant",
      "info": {
        "resId": 19081649,
        "name": "Bikanervala",
        "image": {
          "url": "https://b.zmtcdn.com/data/pictures/9/19081649/8f6a2eed60763850da052340e4695bfa_o2_featured_v2.jpg"
        },
        "o2FeaturedImage": {
          "url": "https://b.zmtcdn.com/data/pictures/9/19081649/8f6a2eed60763850da052340e4695bfa_o2_featured_v2.jpg"
        },
        "rating": {
          "has_fake_reviews": 0,
          "aggregate_rating": "3.7",
          "rating_text": "3.7",
          "rating_subtitle": "Good",
          "rating_color": "9ACD32",
          "votes": "10.1K",
          "subtext": "REVIEWS",
          "is_new": false
        },
        "ratingNew": {
          "newlyOpenedObj": null,
          "suspiciousReviewObj": null,
          "ratings": {
            "DINING": {
              "rating_type": "DINING",
              "rating": "3.1",
              "reviewCount": "318",
              "reviewTextSmall": "318 Reviews",
              "subtext": "318 Dining Reviews",
              "color": "#1C1C1C",
              "ratingV2": "3.1",
              "subtitle": "DINING",
              "sideSubTitle": "Dining Ratings",
              "bgColorV2": {
                "type": "yellow",
                "tint": "400"
              },
              "newOnDining": false
            },
            "DELIVERY": {
              "rating_type": "DELIVERY",
              "rating": "4.2",
              "reviewCount": "9,759",
              "reviewTextSmall": "9,759 Reviews",
              "subtext": "9,759 Delivery Reviews",
              "color": "#E23744",
              "ratingV2": "4.2",
              "subtitle": "DELIVERY",
              "sideSubTitle": "Delivery Ratings",
              "bgColorV2": {
                "type": "green",
                "tint": "700"
              },
              "newOnDelivery": false
            }
          }
        },
        "cft": {
          "text": "₹950 for two"
        },
        "cfo": {
          "text": "₹400 for one"
        },
        "locality": {
          "name": "Kothaguda, Hyderabad",
          "address": "1-118, Ground Floor, Survey 13, Western Pearl, Kothaguda, Hyderabad",
          "localityUrl": "hyderabad/kothaguda-restaurants"
        },
        "timing": {
          "text": "",
          "color": ""
        },
        "cuisine": [
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
            "url": "https://www.zomato.com/hyderabad/restaurants/north-indian/",
            "name": "North Indian"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODVcIl19Il0%3D",
            "url": "https://www.zomato.com/hyderabad/restaurants/south-indian/",
            "name": "South Indian"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
            "url": "https://www.zomato.com/hyderabad/restaurants/chinese/",
            "name": "Chinese"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTBcIl19Il0%3D",
            "url": "https://www.zomato.com/hyderabad/restaurants/street-food/",
            "name": "Street Food"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
            "url": "https://www.zomato.com/hyderabad/restaurants/fast-food/",
            "name": "Fast Food"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNVwiXX0iXQ%3D%3D",
            "url": "https://www.zomato.com/hyderabad/restaurants/bakery/",
            "name": "Bakery"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
            "url": "https://www.zomato.com/hyderabad/restaurants/desserts/",
            "name": "Desserts"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
            "url": "https://www.zomato.com/hyderabad/restaurants/beverages/",
            "name": "Beverages"
          }
        ],
        "should_ban_ugc": false,
        "costText": {
          "text": "₹400 for one"
        }
      },
      "order": {
        "deliveryTime": "33 min",
        "isServiceable": true,
        "hasOnlineOrdering": true,
        "actionInfo": {
          "text": "Order Now",
          "clickUrl": "/hyderabad/bikanervala-kothaguda/order"
        }
      },
      "gold": [],
      "takeaway": [],
      "cardAction": {
        "text": "",
        "clickUrl": "/hyderabad/bikanervala-kothaguda/order",
        "clickActionDeeplink": ""
      },
      "distance": "4.7 km",
      "isPromoted": false,
      "promotedText": "",
      "trackingData": [
        {
          "table_name": "zsearch_events_log",
          "payload": "{\"search_id\":\"cc18cd90-ec7b-45fd-b8ad-27f3e748a6c6\",\"location_type\":\"delivery_cell\",\"location_id\":\"4308697137140465664\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"19081649\",\"element_type\":\"listing\",\"rank\":5}",
          "event_names": {
            "tap": "{\"action\":\"tap\"}",
            "impression": "{\"action\":\"impression\"}"
          }
        }
      ],
      "allCTA": [],
      "promoOffer": "",
      "checkBulkOffers": true,
      "bulkOffers": [
        {
          "text": "50% OFF",
          "color": {
            "tint": "500",
            "type": "blue"
          }
        }
      ],
      "isDisabled": false,
      "bottomContainers": []
    },
    {
      "type": "restaurant",
      "info": {
        "resId": 19721316,
        "name": "Pizza Hut",
        "image": {
          "url": "https://b.zmtcdn.com/data/pictures/6/19721316/f82aa457be7e8c6d6091682e563f78cf_o2_featured_v2.jpg"
        },
        "o2FeaturedImage": {
          "url": "https://b.zmtcdn.com/data/pictures/6/19721316/f82aa457be7e8c6d6091682e563f78cf_o2_featured_v2.jpg"
        },
        "rating": {
          "has_fake_reviews": 0,
          "aggregate_rating": "3.9",
          "rating_text": "3.9",
          "rating_subtitle": "Good",
          "rating_color": "9ACD32",
          "votes": "3,981",
          "subtext": "REVIEWS",
          "is_new": false
        },
        "ratingNew": {
          "newlyOpenedObj": null,
          "suspiciousReviewObj": null,
          "ratings": {
            "DINING": {
              "rating_type": "DINING",
              "rating": "3.5",
              "reviewCount": "30",
              "reviewTextSmall": "30 Reviews",
              "subtext": "30 Dining Reviews",
              "color": "#1C1C1C",
              "ratingV2": "3.5",
              "subtitle": "DINING",
              "sideSubTitle": "Dining Ratings",
              "bgColorV2": {
                "type": "green",
                "tint": "500"
              },
              "newOnDining": false
            },
            "DELIVERY": {
              "rating_type": "DELIVERY",
              "rating": "4.2",
              "reviewCount": "3,951",
              "reviewTextSmall": "3,951 Reviews",
              "subtext": "3,951 Delivery Reviews",
              "color": "#E23744",
              "ratingV2": "4.2",
              "subtitle": "DELIVERY",
              "sideSubTitle": "Delivery Ratings",
              "bgColorV2": {
                "type": "green",
                "tint": "700"
              },
              "newOnDelivery": false
            }
          }
        },
        "cft": {
          "text": "₹500 for two"
        },
        "cfo": {
          "text": "₹200 for one"
        },
        "locality": {
          "name": "Jubilee Hills, Hyderabad",
          "address": "Plot 23, Ground Floor, Divya Sai Enclave, Road 5, Jubilee Hills, Hyderabad",
          "localityUrl": "hyderabad/jubilee-hills-restaurants"
        },
        "timing": {
          "text": "",
          "color": ""
        },
        "cuisine": [
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
            "url": "https://www.zomato.com/hyderabad/restaurants/pizza/",
            "name": "Pizza"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2NFwiXX0iXQ%3D%3D",
            "url": "https://www.zomato.com/hyderabad/restaurants/pasta/",
            "name": "Pasta"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTVcIl19Il0%3D",
            "url": "https://www.zomato.com/hyderabad/restaurants/italian/",
            "name": "Italian"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
            "url": "https://www.zomato.com/hyderabad/restaurants/desserts/",
            "name": "Desserts"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
            "url": "https://www.zomato.com/hyderabad/restaurants/beverages/",
            "name": "Beverages"
          }
        ],
        "should_ban_ugc": false,
        "costText": {
          "text": "₹200 for one"
        }
      },
      "order": {
        "deliveryTime": "40 min",
        "isServiceable": true,
        "hasOnlineOrdering": true,
        "actionInfo": {
          "text": "Order Now",
          "clickUrl": "/hyderabad/pizza-hut-jubilee-hills/order"
        }
      },
      "gold": [],
      "takeaway": [],
      "cardAction": {
        "text": "",
        "clickUrl": "/hyderabad/pizza-hut-jubilee-hills/order",
        "clickActionDeeplink": ""
      },
      "distance": "1.4 km",
      "isPromoted": false,
      "promotedText": "",
      "trackingData": [
        {
          "table_name": "zsearch_events_log",
          "payload": "{\"search_id\":\"cc18cd90-ec7b-45fd-b8ad-27f3e748a6c6\",\"location_type\":\"delivery_cell\",\"location_id\":\"4308697137140465664\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"19721316\",\"element_type\":\"listing\",\"rank\":6}",
          "event_names": {
            "tap": "{\"action\":\"tap\"}",
            "impression": "{\"action\":\"impression\"}"
          }
        }
      ],
      "allCTA": [],
      "promoOffer": "",
      "checkBulkOffers": true,
      "bulkOffers": [
        {
          "text": "20% OFF",
          "color": {
            "tint": "500",
            "type": "blue"
          }
        }
      ],
      "isDisabled": false,
      "bottomContainers": []
    },
    {
      "type": "restaurant",
      "info": {
        "resId": 18207447,
        "name": "Shah Ghouse Hotel & Restaurant",
        "image": {
          "url": "https://b.zmtcdn.com/data/pictures/7/18207447/b528bc20e96d2d397d6ddae556c4b4ee_o2_featured_v2.jpg"
        },
        "o2FeaturedImage": {
          "url": "https://b.zmtcdn.com/data/pictures/7/18207447/b528bc20e96d2d397d6ddae556c4b4ee_o2_featured_v2.jpg"
        },
        "rating": {
          "has_fake_reviews": 0,
          "aggregate_rating": "4.0",
          "rating_text": "4.0",
          "rating_subtitle": "Very Good",
          "rating_color": "5BA829",
          "votes": "229.7K",
          "subtext": "REVIEWS",
          "is_new": false
        },
        "ratingNew": {
          "newlyOpenedObj": null,
          "suspiciousReviewObj": null,
          "ratings": {
            "DINING": {
              "rating_type": "DINING",
              "rating": "3.9",
              "reviewCount": "5,793",
              "reviewTextSmall": "5,793 Reviews",
              "subtext": "5,793 Dining Reviews",
              "color": "#1C1C1C",
              "ratingV2": "3.9",
              "subtitle": "DINING",
              "sideSubTitle": "Dining Ratings",
              "bgColorV2": {
                "type": "green",
                "tint": "600"
              },
              "newOnDining": false
            },
            "DELIVERY": {
              "rating_type": "DELIVERY",
              "rating": "4.1",
              "reviewCount": "223.9K",
              "reviewTextSmall": "223.9K Reviews",
              "subtext": "223.9K Delivery Reviews",
              "color": "#E23744",
              "ratingV2": "4.1",
              "subtitle": "DELIVERY",
              "sideSubTitle": "Delivery Ratings",
              "bgColorV2": {
                "type": "green",
                "tint": "700"
              },
              "newOnDelivery": false
            }
          }
        },
        "cft": {
          "text": "₹1,000 for two"
        },
        "cfo": {
          "text": "₹400 for one"
        },
        "locality": {
          "name": "Gachibowli, Hyderabad",
          "address": "8-191/15, Raidurgam, Gachibowli Main Road, Opposite Bio Diversity Park, Gachibowli, Hyderabad",
          "localityUrl": "hyderabad/gachibowli-restaurants"
        },
        "timing": {
          "text": "",
          "color": ""
        },
        "cuisine": [
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
            "url": "https://www.zomato.com/hyderabad/restaurants/north-indian/",
            "name": "North Indian"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
            "url": "https://www.zomato.com/hyderabad/restaurants/chinese/",
            "name": "Chinese"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNzVcIl19Il0%3D",
            "url": "https://www.zomato.com/hyderabad/restaurants/mughlai/",
            "name": "Mughlai"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTk2XCJdfSJd",
            "url": "https://www.zomato.com/hyderabad/restaurants/mandi/",
            "name": "Mandi"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
            "url": "https://www.zomato.com/hyderabad/restaurants/biryani/",
            "name": "Biryani"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTc4XCJdfSJd",
            "url": "https://www.zomato.com/hyderabad/restaurants/kebab/",
            "name": "Kebab"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODNcIl19Il0%3D",
            "url": "https://www.zomato.com/hyderabad/restaurants/sea-food/",
            "name": "Seafood"
          }
        ],
        "should_ban_ugc": false,
        "costText": {
          "text": "₹400 for one"
        }
      },
      "order": {
        "deliveryTime": "35 min",
        "isServiceable": true,
        "hasOnlineOrdering": true,
        "actionInfo": {
          "text": "Order Now",
          "clickUrl": "/hyderabad/shah-ghouse-hotel-restaurant-gachibowli/order"
        }
      },
      "gold": [],
      "takeaway": [],
      "cardAction": {
        "text": "",
        "clickUrl": "/hyderabad/shah-ghouse-hotel-restaurant-gachibowli/order",
        "clickActionDeeplink": ""
      },
      "distance": "3.4 km",
      "isPromoted": false,
      "promotedText": "",
      "trackingData": [
        {
          "table_name": "zsearch_events_log",
          "payload": "{\"search_id\":\"cc18cd90-ec7b-45fd-b8ad-27f3e748a6c6\",\"location_type\":\"delivery_cell\",\"location_id\":\"4308697137140465664\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"18207447\",\"element_type\":\"listing\",\"rank\":7}",
          "event_names": {
            "tap": "{\"action\":\"tap\"}",
            "impression": "{\"action\":\"impression\"}"
          }
        }
      ],
      "allCTA": [],
      "promoOffer": "",
      "checkBulkOffers": true,
      "bulkOffers": [
        {
          "text": "50% OFF",
          "color": {
            "tint": "500",
            "type": "blue"
          }
        }
      ],
      "isDisabled": false,
      "bottomContainers": []
    },
    {
      "type": "restaurant",
      "info": {
        "resId": 19654506,
        "name": "Lucky Restaurant",
        "image": {
          "url": "https://b.zmtcdn.com/data/pictures/6/19654506/7a0936ad9b363e336d1ad1605f9abeab_o2_featured_v2.jpg"
        },
        "o2FeaturedImage": {
          "url": "https://b.zmtcdn.com/data/pictures/6/19654506/7a0936ad9b363e336d1ad1605f9abeab_o2_featured_v2.jpg"
        },
        "rating": {
          "has_fake_reviews": 0,
          "aggregate_rating": "3.6",
          "rating_text": "3.6",
          "rating_subtitle": "Good",
          "rating_color": "9ACD32",
          "votes": "25.6K",
          "subtext": "REVIEWS",
          "is_new": false
        },
        "ratingNew": {
          "newlyOpenedObj": null,
          "suspiciousReviewObj": null,
          "ratings": {
            "DINING": {
              "rating_type": "DINING",
              "rating": "3.2",
              "reviewCount": "49",
              "reviewTextSmall": "49 Reviews",
              "subtext": "49 Dining Reviews",
              "color": "#1C1C1C",
              "ratingV2": "3.2",
              "subtitle": "DINING",
              "sideSubTitle": "Dining Ratings",
              "bgColorV2": {
                "type": "yellow",
                "tint": "400"
              },
              "newOnDining": false
            },
            "DELIVERY": {
              "rating_type": "DELIVERY",
              "rating": "3.9",
              "reviewCount": "25.6K",
              "reviewTextSmall": "25.6K Reviews",
              "subtext": "25.6K Delivery Reviews",
              "color": "#E23744",
              "ratingV2": "3.9",
              "subtitle": "DELIVERY",
              "sideSubTitle": "Delivery Ratings",
              "bgColorV2": {
                "type": "green",
                "tint": "600"
              },
              "newOnDelivery": false
            }
          }
        },
        "cft": {
          "text": "₹1,100 for two"
        },
        "cfo": {
          "text": "₹450 for one"
        },
        "locality": {
          "name": "Yousufguda, Hyderabad",
          "address": "House 8-3-231/1/2, AKL Towers, Sri Krishna Nagar, Yousufguda, Hyderabad",
          "localityUrl": "hyderabad/yousufguda-restaurants"
        },
        "timing": {
          "text": "",
          "color": ""
        },
        "cuisine": [
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
            "url": "https://www.zomato.com/hyderabad/restaurants/north-indian/",
            "name": "North Indian"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNFwiXX0iXQ%3D%3D",
            "url": "https://www.zomato.com/hyderabad/restaurants/arabian/",
            "name": "Arabian"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
            "url": "https://www.zomato.com/hyderabad/restaurants/biryani/",
            "name": "Biryani"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
            "url": "https://www.zomato.com/hyderabad/restaurants/chinese/",
            "name": "Chinese"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODNcIl19Il0%3D",
            "url": "https://www.zomato.com/hyderabad/restaurants/sea-food/",
            "name": "Seafood"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNzVcIl19Il0%3D",
            "url": "https://www.zomato.com/hyderabad/restaurants/mughlai/",
            "name": "Mughlai"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
            "url": "https://www.zomato.com/hyderabad/restaurants/desserts/",
            "name": "Desserts"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
            "url": "https://www.zomato.com/hyderabad/restaurants/beverages/",
            "name": "Beverages"
          }
        ],
        "should_ban_ugc": false,
        "costText": {
          "text": "₹450 for one"
        }
      },
      "order": {
        "deliveryTime": "37 min",
        "isServiceable": true,
        "hasOnlineOrdering": true,
        "actionInfo": {
          "text": "Order Now",
          "clickUrl": "/hyderabad/lucky-restaurant-yousufguda/order"
        }
      },
      "gold": [],
      "takeaway": [],
      "cardAction": {
        "text": "",
        "clickUrl": "/hyderabad/lucky-restaurant-yousufguda/order",
        "clickActionDeeplink": ""
      },
      "distance": "1.9 km",
      "isPromoted": false,
      "promotedText": "",
      "trackingData": [
        {
          "table_name": "zsearch_events_log",
          "payload": "{\"search_id\":\"cc18cd90-ec7b-45fd-b8ad-27f3e748a6c6\",\"location_type\":\"delivery_cell\",\"location_id\":\"4308697137140465664\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"19654506\",\"element_type\":\"listing\",\"rank\":8}",
          "event_names": {
            "tap": "{\"action\":\"tap\"}",
            "impression": "{\"action\":\"impression\"}"
          }
        }
      ],
      "allCTA": [],
      "promoOffer": "",
      "checkBulkOffers": true,
      "bulkOffers": [
        {
          "text": "50% OFF",
          "color": {
            "tint": "500",
            "type": "blue"
          }
        }
      ],
      "isDisabled": false,
      "bottomContainers": []
    },
    {
      "type": "restaurant",
      "info": {
        "resId": 20485518,
        "name": "Pista House Bakery",
        "image": {
          "url": "https://b.zmtcdn.com/data/pictures/chains/8/19937288/b8f98cd0239c1792920ffd087a83f9fa_o2_featured_v2.jpg"
        },
        "o2FeaturedImage": {
          "url": "https://b.zmtcdn.com/data/pictures/chains/8/19937288/b8f98cd0239c1792920ffd087a83f9fa_o2_featured_v2.jpg"
        },
        "rating": {
          "has_fake_reviews": 0,
          "aggregate_rating": "4.0",
          "rating_text": "4.0",
          "rating_subtitle": "Very Good",
          "rating_color": "5BA829",
          "votes": "3,057",
          "subtext": "REVIEWS",
          "is_new": false
        },
        "ratingNew": {
          "newlyOpenedObj": null,
          "suspiciousReviewObj": null,
          "ratings": {
            "DINING": {
              "rating_type": "DINING",
              "rating": "",
              "reviewCount": "0",
              "reviewTextSmall": "0 Reviews",
              "subtext": "Does not offer Dining",
              "color": "",
              "ratingV2": "-",
              "subtitle": "DINING",
              "sideSubTitle": "Dining Ratings",
              "bgColorV2": {
                "type": "green",
                "tint": "100"
              },
              "textColorV2": {
                "type": "green",
                "tint": "500"
              },
              "newOnDining": false
            },
            "DELIVERY": {
              "rating_type": "DELIVERY",
              "rating": "4.0",
              "reviewCount": "3,057",
              "reviewTextSmall": "3,057 Reviews",
              "subtext": "3,057 Delivery Reviews",
              "color": "#E23744",
              "ratingV2": "4.0",
              "subtitle": "DELIVERY",
              "sideSubTitle": "Delivery Ratings",
              "bgColorV2": {
                "type": "green",
                "tint": "700"
              },
              "newOnDelivery": false
            }
          }
        },
        "cft": {
          "text": "₹800 for two"
        },
        "cfo": {
          "text": "₹350 for one"
        },
        "locality": {
          "name": "Gachibowli, Hyderabad",
          "address": "First Floor, From Service Staircase, Preston Prime Mall, Gachibowli, Hyderabad",
          "localityUrl": "hyderabad/gachibowli-restaurants"
        },
        "timing": {
          "text": "",
          "color": ""
        },
        "cuisine": [
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNVwiXX0iXQ%3D%3D",
            "url": "https://www.zomato.com/hyderabad/restaurants/bakery/",
            "name": "Bakery"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
            "url": "https://www.zomato.com/hyderabad/restaurants/desserts/",
            "name": "Desserts"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzA0XCJdfSJd",
            "url": "https://www.zomato.com/hyderabad/restaurants/sandwich/",
            "name": "Sandwich"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
            "url": "https://www.zomato.com/hyderabad/restaurants/pizza/",
            "name": "Pizza"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
            "url": "https://www.zomato.com/hyderabad/restaurants/fast-food/",
            "name": "Fast Food"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTk4XCJdfSJd",
            "url": "https://www.zomato.com/hyderabad/restaurants/salad/",
            "name": "Salad"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
            "url": "https://www.zomato.com/hyderabad/restaurants/beverages/",
            "name": "Beverages"
          }
        ],
        "should_ban_ugc": false,
        "costText": {
          "text": "₹350 for one"
        }
      },
      "order": {
        "deliveryTime": "34 min",
        "isServiceable": true,
        "hasOnlineOrdering": true,
        "actionInfo": {
          "text": "Order Now",
          "clickUrl": "/hyderabad/pista-house-bakery-1-gachibowli/order"
        }
      },
      "gold": [],
      "takeaway": [],
      "cardAction": {
        "text": "",
        "clickUrl": "/hyderabad/pista-house-bakery-1-gachibowli/order",
        "clickActionDeeplink": ""
      },
      "distance": "3.7 km",
      "isPromoted": false,
      "promotedText": "",
      "trackingData": [
        {
          "table_name": "zsearch_events_log",
          "payload": "{\"search_id\":\"cc18cd90-ec7b-45fd-b8ad-27f3e748a6c6\",\"location_type\":\"delivery_cell\",\"location_id\":\"4308697137140465664\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"20485518\",\"element_type\":\"listing\",\"rank\":9}",
          "event_names": {
            "tap": "{\"action\":\"tap\"}",
            "impression": "{\"action\":\"impression\"}"
          }
        }
      ],
      "allCTA": [],
      "promoOffer": "",
      "checkBulkOffers": true,
      "bulkOffers": [
        {
          "text": "50% OFF",
          "color": {
            "tint": "500",
            "type": "blue"
          }
        }
      ],
      "isDisabled": false,
      "bottomContainers": []
    },
    {
      "type": "restaurant",
      "info": {
        "resId": 19683393,
        "name": "KS Bakers",
        "image": {
          "url": "https://b.zmtcdn.com/data/pictures/3/19683393/71e4d61a3e05d032b9f7b306eccf60b3_o2_featured_v2.jpg"
        },
        "o2FeaturedImage": {
          "url": "https://b.zmtcdn.com/data/pictures/3/19683393/71e4d61a3e05d032b9f7b306eccf60b3_o2_featured_v2.jpg"
        },
        "rating": {
          "has_fake_reviews": 0,
          "aggregate_rating": "3.6",
          "rating_text": "3.6",
          "rating_subtitle": "Good",
          "rating_color": "9ACD32",
          "votes": "2,937",
          "subtext": "REVIEWS",
          "is_new": false
        },
        "ratingNew": {
          "newlyOpenedObj": null,
          "suspiciousReviewObj": null,
          "ratings": {
            "DINING": {
              "rating_type": "DINING",
              "rating": "3.0",
              "reviewCount": "5",
              "reviewTextSmall": "5 Reviews",
              "subtext": "5 Dining Reviews",
              "color": "#1C1C1C",
              "ratingV2": "3.0",
              "subtitle": "DINING",
              "sideSubTitle": "Dining Ratings",
              "bgColorV2": {
                "type": "yellow",
                "tint": "400"
              },
              "newOnDining": false
            },
            "DELIVERY": {
              "rating_type": "DELIVERY",
              "rating": "4.2",
              "reviewCount": "2,932",
              "reviewTextSmall": "2,932 Reviews",
              "subtext": "2,932 Delivery Reviews",
              "color": "#E23744",
              "ratingV2": "4.2",
              "subtitle": "DELIVERY",
              "sideSubTitle": "Delivery Ratings",
              "bgColorV2": {
                "type": "green",
                "tint": "700"
              },
              "newOnDelivery": false
            }
          }
        },
        "cft": {
          "text": "₹1,000 for two"
        },
        "cfo": {
          "text": "₹400 for one"
        },
        "locality": {
          "name": "Manikonda, Hyderabad",
          "address": "Plot 35 - 36, Lanco Hills, Near Harivillu Apartments, Manikonda, Hyderabad",
          "localityUrl": "hyderabad/manikonda-restaurants"
        },
        "timing": {
          "text": "",
          "color": ""
        },
        "cuisine": [
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNVwiXX0iXQ%3D%3D",
            "url": "https://www.zomato.com/hyderabad/restaurants/bakery/",
            "name": "Bakery"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
            "url": "https://www.zomato.com/hyderabad/restaurants/desserts/",
            "name": "Desserts"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
            "url": "https://www.zomato.com/hyderabad/restaurants/pizza/",
            "name": "Pizza"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTY4XCJdfSJd",
            "url": "https://www.zomato.com/hyderabad/restaurants/burger/",
            "name": "Burger"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzA0XCJdfSJd",
            "url": "https://www.zomato.com/hyderabad/restaurants/sandwich/",
            "name": "Sandwich"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAyM1wiXX0iXQ%3D%3D",
            "url": "https://www.zomato.com/hyderabad/restaurants/rolls/",
            "name": "Rolls"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
            "url": "https://www.zomato.com/hyderabad/restaurants/fast-food/",
            "name": "Fast Food"
          }
        ],
        "should_ban_ugc": false,
        "costText": {
          "text": "₹400 for one"
        }
      },
      "order": {
        "deliveryTime": "31 min",
        "isServiceable": true,
        "hasOnlineOrdering": true,
        "actionInfo": {
          "text": "Order Now",
          "clickUrl": "/hyderabad/ks-bakers-manikonda/order"
        }
      },
      "gold": [],
      "takeaway": [],
      "cardAction": {
        "text": "",
        "clickUrl": "/hyderabad/ks-bakers-manikonda/order",
        "clickActionDeeplink": ""
      },
      "distance": "3.8 km",
      "isPromoted": false,
      "promotedText": "",
      "trackingData": [
        {
          "table_name": "zsearch_events_log",
          "payload": "{\"search_id\":\"cc18cd90-ec7b-45fd-b8ad-27f3e748a6c6\",\"location_type\":\"delivery_cell\",\"location_id\":\"4308697137140465664\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"19683393\",\"element_type\":\"listing\",\"rank\":10}",
          "event_names": {
            "tap": "{\"action\":\"tap\"}",
            "impression": "{\"action\":\"impression\"}"
          }
        }
      ],
      "allCTA": [],
      "promoOffer": "",
      "checkBulkOffers": true,
      "bulkOffers": [
        {
          "text": "50% OFF",
          "color": {
            "tint": "500",
            "type": "blue"
          }
        }
      ],
      "isDisabled": false,
      "bottomContainers": []
    },
    {
      "type": "restaurant",
      "info": {
        "resId": 20444100,
        "name": "Red Bucket Biryani",
        "image": {
          "url": "https://b.zmtcdn.com/data/pictures/0/20444100/b9d23c95876ec95a98d1f25c4a2e161f_o2_featured_v2.jpg"
        },
        "o2FeaturedImage": {
          "url": "https://b.zmtcdn.com/data/pictures/0/20444100/b9d23c95876ec95a98d1f25c4a2e161f_o2_featured_v2.jpg"
        },
        "rating": {
          "has_fake_reviews": 0,
          "aggregate_rating": "3.3",
          "rating_text": "3.3",
          "rating_subtitle": "Average",
          "rating_color": "CDD614",
          "votes": "7,127",
          "subtext": "REVIEWS",
          "is_new": false
        },
        "ratingNew": {
          "newlyOpenedObj": null,
          "suspiciousReviewObj": null,
          "ratings": {
            "DINING": {
              "rating_type": "DINING",
              "rating": "2.8",
              "reviewCount": "16",
              "reviewTextSmall": "16 Reviews",
              "subtext": "16 Dining Reviews",
              "color": "#1C1C1C",
              "ratingV2": "2.8",
              "subtitle": "DINING",
              "sideSubTitle": "Dining Ratings",
              "bgColorV2": {
                "type": "yellow",
                "tint": "400"
              },
              "newOnDining": false
            },
            "DELIVERY": {
              "rating_type": "DELIVERY",
              "rating": "3.8",
              "reviewCount": "7,111",
              "reviewTextSmall": "7,111 Reviews",
              "subtext": "7,111 Delivery Reviews",
              "color": "#E23744",
              "ratingV2": "3.8",
              "subtitle": "DELIVERY",
              "sideSubTitle": "Delivery Ratings",
              "bgColorV2": {
                "type": "green",
                "tint": "600"
              },
              "newOnDelivery": false
            }
          }
        },
        "cft": {
          "text": "₹500 for two"
        },
        "cfo": {
          "text": "₹200 for one"
        },
        "locality": {
          "name": "Madhapur, Hyderabad",
          "address": "Shop 5, Plot 816-817-818, Platinum Heights, Sri Swamy Ayyappa Society, 100 Feet Road, Near YSR Statue, Madhapur, Hyderabad",
          "localityUrl": "hyderabad/madhapur-restaurants"
        },
        "timing": {
          "text": "",
          "color": ""
        },
        "cuisine": [
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
            "url": "https://www.zomato.com/hyderabad/restaurants/biryani/",
            "name": "Biryani"
          }
        ],
        "should_ban_ugc": false,
        "costText": {
          "text": "₹200 for one"
        }
      },
      "order": {
        "deliveryTime": "18 min",
        "isServiceable": true,
        "hasOnlineOrdering": true,
        "actionInfo": {
          "text": "Order Now",
          "clickUrl": "/hyderabad/red-bucket-biryani-madhapur/order"
        }
      },
      "gold": [],
      "takeaway": [],
      "cardAction": {
        "text": "",
        "clickUrl": "/hyderabad/red-bucket-biryani-madhapur/order",
        "clickActionDeeplink": ""
      },
      "distance": "2.7 km",
      "isPromoted": false,
      "promotedText": "",
      "trackingData": [
        {
          "table_name": "zsearch_events_log",
          "payload": "{\"search_id\":\"cc18cd90-ec7b-45fd-b8ad-27f3e748a6c6\",\"location_type\":\"delivery_cell\",\"location_id\":\"4308697137140465664\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"20444100\",\"element_type\":\"listing\",\"rank\":11}",
          "event_names": {
            "tap": "{\"action\":\"tap\"}",
            "impression": "{\"action\":\"impression\"}"
          }
        }
      ],
      "allCTA": [],
      "promoOffer": "",
      "checkBulkOffers": true,
      "bulkOffers": [
        {
          "text": "50% OFF",
          "color": {
            "tint": "500",
            "type": "blue"
          }
        }
      ],
      "isDisabled": false,
      "bottomContainers": []
    },
    {
      "type": "restaurant",
      "info": {
        "resId": 19197028,
        "name": "Karachi Bakery",
        "image": {
          "url": "https://b.zmtcdn.com/data/pictures/chains/2/90862/90f47520b438f72535642c06f352c2ea_o2_featured_v2.jpg"
        },
        "o2FeaturedImage": {
          "url": "https://b.zmtcdn.com/data/pictures/chains/2/90862/90f47520b438f72535642c06f352c2ea_o2_featured_v2.jpg"
        },
        "rating": {
          "has_fake_reviews": 0,
          "aggregate_rating": "4.1",
          "rating_text": "4.1",
          "rating_subtitle": "Very Good",
          "rating_color": "5BA829",
          "votes": "3,604",
          "subtext": "REVIEWS",
          "is_new": false
        },
        "ratingNew": {
          "newlyOpenedObj": null,
          "suspiciousReviewObj": null,
          "ratings": {
            "DINING": {
              "rating_type": "DINING",
              "rating": "3.8",
              "reviewCount": "32",
              "reviewTextSmall": "32 Reviews",
              "subtext": "32 Dining Reviews",
              "color": "#1C1C1C",
              "ratingV2": "3.8",
              "subtitle": "DINING",
              "sideSubTitle": "Dining Ratings",
              "bgColorV2": {
                "type": "green",
                "tint": "600"
              },
              "newOnDining": false
            },
            "DELIVERY": {
              "rating_type": "DELIVERY",
              "rating": "4.3",
              "reviewCount": "3,572",
              "reviewTextSmall": "3,572 Reviews",
              "subtext": "3,572 Delivery Reviews",
              "color": "#E23744",
              "ratingV2": "4.3",
              "subtitle": "DELIVERY",
              "sideSubTitle": "Delivery Ratings",
              "bgColorV2": {
                "type": "green",
                "tint": "700"
              },
              "newOnDelivery": false
            }
          }
        },
        "cft": {
          "text": "₹400 for two"
        },
        "cfo": {
          "text": "₹200 for one"
        },
        "locality": {
          "name": "Tolichowki, Hyderabad",
          "address": "8-1-301, 8-1-30121, 8-1-303, Shaikpet, Near Tolichowki, Hyderabad",
          "localityUrl": "hyderabad/tolichowki-restaurants"
        },
        "timing": {
          "text": "",
          "color": ""
        },
        "cuisine": [
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNVwiXX0iXQ%3D%3D",
            "url": "https://www.zomato.com/hyderabad/restaurants/bakery/",
            "name": "Bakery"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
            "url": "https://www.zomato.com/hyderabad/restaurants/chinese/",
            "name": "Chinese"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
            "url": "https://www.zomato.com/hyderabad/restaurants/pizza/",
            "name": "Pizza"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzA0XCJdfSJd",
            "url": "https://www.zomato.com/hyderabad/restaurants/sandwich/",
            "name": "Sandwich"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTVcIl19Il0%3D",
            "url": "https://www.zomato.com/hyderabad/restaurants/italian/",
            "name": "Italian"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAyNFwiXX0iXQ%3D%3D",
            "url": "https://www.zomato.com/hyderabad/restaurants/wraps/",
            "name": "Wraps"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTBcIl19Il0%3D",
            "url": "https://www.zomato.com/hyderabad/restaurants/street-food/",
            "name": "Street Food"
          },
          {
            "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
            "url": "https://www.zomato.com/hyderabad/restaurants/fast-food/",
            "name": "Fast Food"
          }
        ],
        "should_ban_ugc": false,
        "costText": {
          "text": "₹200 for one"
        }
      },
      "order": {
        "deliveryTime": "34 min",
        "isServiceable": true,
        "hasOnlineOrdering": true,
        "actionInfo": {
          "text": "Order Now",
          "clickUrl": "/hyderabad/karachi-bakery-1-tolichowki/order"
        }
      },
      "gold": [],
      "takeaway": [],
      "cardAction": {
        "text": "",
        "clickUrl": "/hyderabad/karachi-bakery-1-tolichowki/order",
        "clickActionDeeplink": ""
      },
      "distance": "2.9 km",
      "isPromoted": false,
      "promotedText": "",
      "trackingData": [
        {
          "table_name": "zsearch_events_log",
          "payload": "{\"search_id\":\"cc18cd90-ec7b-45fd-b8ad-27f3e748a6c6\",\"location_type\":\"delivery_cell\",\"location_id\":\"4308697137140465664\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"19197028\",\"element_type\":\"listing\",\"rank\":12}",
          "event_names": {
            "tap": "{\"action\":\"tap\"}",
            "impression": "{\"action\":\"impression\"}"
          }
        }
      ],
      "allCTA": [],
      "promoOffer": "",
      "checkBulkOffers": true,
      "bulkOffers": [
        {
          "text": "50% OFF",
          "color": {
            "tint": "500",
            "type": "blue"
          }
        }
      ],
      "isDisabled": false,
      "bottomContainers": []
    }
  ]
 const RestaurantCard = (props) =>{ //or ({resName,cuisine})
    const{resData} = props;
    const {name,cft,rating,cfo,} = resData?.info
    const{deliveryTime}=resData?.order
    return(
        <div className = "res-card" style={{backgroundColor: "#f0f0f0"}}>
            <img className="res-logo" src={resData.info.image.url}/>
            <h3>{name}</h3>
            <h4>{deliveryTime}</h4>
            <h4>{cft.text}</h4>
            <h4>{rating.rating_text} stars</h4>
            <h4>{cfo.text}</h4>
        </div>
    );
 };
 const Body = () => {
    return(
        <div className = "body">
            <div className="search">search</div>
            <div className="res-container">
               {resList.map((restaurant)=> (
                <RestaurantCard key = {restaurant.info.resId}resData={restaurant} />
               ))}
            </div>
        </div>
    )
 }


const AppLayout = () =>{
    return(
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
 }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);