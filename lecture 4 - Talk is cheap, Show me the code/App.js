/*************************
 * Header
 *      -Logo
 *      -Nav Items
 *      -Cart
 * Body
 *      -search Bar
 *      -RestaurentList
 *             -RestaurentCard
 *                  -Image
 *                  -Name
 *                  -Rating
 *                  -Cusines
 * Footer
 *      -Links
 *      -Copyright
 *************************/



import React from "react"
import  ReactDOM  from "react-dom/client"


const Title = () => {
    return (
        <a href="/">
        <img alt="logo" className="logo" src="https://images.unsplash.com/photo-1516876437184-593fda40c7ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80" />
        </a>
    )
}

const styleObj = {
    backgroundColor: 'yellow'
}

const HeadingComponent = () => {
    return (
        <div className="header" style={styleObj}>
            <Title />
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}


const burgerKing = {
  name: 'Burger King',
  image : "https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbGlmZW9mcGl4MDAwMDEtaW1hZ2VfMS1renhsdXhhei5qcGc.jpg?s=gayymr-MoZkhATCpk4H6JF11q8zWqNV8pVstYoefMiE",
  cusines: ["Burger" , "American"],
  rating: '4.2'
}





//https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.29844139999999&lng=77.99313599999999&page_type=DESKTOP_WEB_LISTING
const RestaurentList=[
    {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "149292",
          "name": "Mughal Darbar",
          "uuid": "03067471-cac0-45a0-bce2-4b0a53c75887",
          "city": "22",
          "area": "Subhash Nagar",
          "totalRatingsString": "1000+ ratings",
          "cloudinaryImageId": "ssz46edn5w8z4xpxbfxv",
          "cuisines": [
            "North Indian",
            "Biryani",
            "Beverages"
          ],
          "tags": [],
          "costForTwo": 25000,
          "costForTwoString": "₹250 FOR TWO",
          "deliveryTime": 24,
          "minDeliveryTime": 24,
          "maxDeliveryTime": 24,
          "slaString": "24 MINS",
          "lastMileTravel": 1.2000000476837158,
          "slugs": {
            "restaurant": "mughal-darbar-subhash-nagar-subhash-nagar",
            "city": "dehradun"
          },
          "cityState": "22",
          "address": "opposite hotel paradise,near shimla byepass,dehradun",
          "locality": "Sewla Kalan",
          "parentId": 8892,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [],
          "aggregatedDiscountInfo": {
            "header": "40% off",
            "shortDescriptionList": [
              {
                "meta": "40% off | Use TRYNEW",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "40% off up to ₹80 | Use code TRYNEW",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "aggregatedDiscountInfoV2": {
            "header": "40% OFF",
            "shortDescriptionList": [
              {
                "meta": "Use TRYNEW",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "40% off up to ₹80 | Use code TRYNEW",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "chain": [],
          "feeDetails": {
            "fees": [],
            "totalFees": 0,
            "message": "",
            "title": "",
            "amount": "",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
            "imageBased": [],
            "textBased": [],
            "textExtendedBadges": []
          },
          "lastMileTravelString": "1.2 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "149292",
            "deliveryTime": 24,
            "minDeliveryTime": 24,
            "maxDeliveryTime": 24,
            "lastMileTravel": 1.2000000476837158,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "3.4",
          "totalRatings": 1000,
          "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "542132",
          "name": "Domnik Pizza",
          "uuid": "ab1eca36-d82b-4fa5-ab48-a7dd35b9ace9",
          "city": "22",
          "area": "Majra",
          "totalRatingsString": "50+ ratings",
          "cloudinaryImageId": "sboh9oor0cvp6ztsyhvj",
          "cuisines": [
            "Pizzas",
            "Italian",
            "Fast Food",
            "Snacks",
            "Beverages"
          ],
          "tags": [],
          "costForTwo": 30000,
          "costForTwoString": "₹300 FOR TWO",
          "deliveryTime": 27,
          "minDeliveryTime": 27,
          "maxDeliveryTime": 27,
          "slaString": "27 MINS",
          "lastMileTravel": 0.6000000238418579,
          "slugs": {
            "restaurant": "domnik-pizza-patel-nagar-patel-nagar-2",
            "city": "dehradun"
          },
          "cityState": "22",
          "address": "28/3 Sewala Chandravani Road, Arcedia Grant, Dehradun Rural, Dehradun, Uttarakhand",
          "locality": "PNB Enclave",
          "parentId": 22321,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [],
          "aggregatedDiscountInfo": {
            "header": "50% off",
            "shortDescriptionList": [
              {
                "meta": "50% off | Use WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "50% off up to ₹100 | Use code WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "aggregatedDiscountInfoV2": {
            "header": "50% OFF",
            "shortDescriptionList": [
              {
                "meta": "Use WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "50% off up to ₹100 | Use code WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "chain": [],
          "feeDetails": {
            "fees": [],
            "totalFees": 0,
            "message": "",
            "title": "",
            "amount": "",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
            "imageBased": [],
            "textBased": [],
            "textExtendedBadges": []
          },
          "lastMileTravelString": "0.6 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "542132",
            "deliveryTime": 27,
            "minDeliveryTime": 27,
            "maxDeliveryTime": 27,
            "lastMileTravel": 0.6000000238418579,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "3.7",
          "totalRatings": 50,
          "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "656638",
          "name": "Subway",
          "uuid": "0cae41c3-ccdf-4dbb-b480-534889888c53",
          "city": "22",
          "area": "Patel Nagar",
          "totalRatingsString": "50+ ratings",
          "cloudinaryImageId": "b39915c98bbe6c6e2b142de0d6e264fe",
          "cuisines": [
            "Salads",
            "Snacks",
            "Desserts",
            "Beverages"
          ],
          "tags": [],
          "costForTwo": 35000,
          "costForTwoString": "₹350 FOR TWO",
          "deliveryTime": 22,
          "minDeliveryTime": 22,
          "maxDeliveryTime": 22,
          "slaString": "22 MINS",
          "lastMileTravel": 1.7000000476837158,
          "slugs": {
            "restaurant": "subway-saharanpur-road-deh_patel-nagar",
            "city": "dehradun"
          },
          "cityState": "22",
          "address": "Subway at Ground Floor, MK Tower, KhasraNo- 159 G, Main Saharanpur Road, Majra,Dehradun, Dehradun Nagar Nigam,Dehradun, Uttarakhand-248171",
          "locality": "Saharanpur Road",
          "parentId": 2,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [],
          "aggregatedDiscountInfo": {
            "header": "20% off",
            "shortDescriptionList": [
              {
                "meta": "20% off | Use TRYNEW",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "20% off up to ₹50 | Use code TRYNEW",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "aggregatedDiscountInfoV2": {
            "header": "20% OFF",
            "shortDescriptionList": [
              {
                "meta": "Use TRYNEW",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "20% off up to ₹50 | Use code TRYNEW",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "ribbon": [
            {
              "type": "PROMOTED"
            }
          ],
          "chain": [],
          "feeDetails": {
            "fees": [],
            "totalFees": 0,
            "message": "",
            "title": "",
            "amount": "",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "cid=5847907~p=4~eid=00000186-4eff-3829-016e-5b2000eb0436",
          "badges": {
            "imageBased": [],
            "textBased": [],
            "textExtendedBadges": []
          },
          "lastMileTravelString": "1.7 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "656638",
            "deliveryTime": 22,
            "minDeliveryTime": 22,
            "maxDeliveryTime": 22,
            "lastMileTravel": 1.7000000476837158,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": true,
          "avgRating": "3.5",
          "totalRatings": 50,
          "new": true
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "599133",
          "name": "Doon Darbar",
          "uuid": "d1f64332-a228-4448-bc5e-ecf48216dec4",
          "city": "22",
          "area": "Majra",
          "totalRatingsString": "100+ ratings",
          "cloudinaryImageId": "lzacctllikcgp8xpvzla",
          "cuisines": [
            "North Indian",
            "Chinese"
          ],
          "tags": [],
          "costForTwo": 30000,
          "costForTwoString": "₹300 FOR TWO",
          "deliveryTime": 22,
          "minDeliveryTime": 22,
          "maxDeliveryTime": 22,
          "slaString": "22 MINS",
          "lastMileTravel": 1.600000023841858,
          "slugs": {
            "restaurant": "doon-darbar-deh_patel-nagar-deh_patel-nagar",
            "city": "dehradun"
          },
          "cityState": "22",
          "address": "PRADHAN JI WALI GALI MAJRA NEAR BASIT HARDWARE, DEHRADUN Uttarakhand - 248001",
          "locality": "Shimla Bypass Chowk",
          "parentId": 13207,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [],
          "aggregatedDiscountInfo": {
            "header": "60% off",
            "shortDescriptionList": [
              {
                "meta": "60% off | Use TRYNEW",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "60% off up to ₹120 | Use code TRYNEW",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "aggregatedDiscountInfoV2": {
            "header": "60% OFF",
            "shortDescriptionList": [
              {
                "meta": "Use TRYNEW",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "60% off up to ₹120 | Use code TRYNEW",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "chain": [],
          "feeDetails": {
            "fees": [],
            "totalFees": 0,
            "message": "",
            "title": "",
            "amount": "",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
            "imageBased": [],
            "textBased": [],
            "textExtendedBadges": []
          },
          "lastMileTravelString": "1.6 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "599133",
            "deliveryTime": 22,
            "minDeliveryTime": 22,
            "maxDeliveryTime": 22,
            "lastMileTravel": 1.600000023841858,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "3.5",
          "totalRatings": 100,
          "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "551710",
          "name": "LITTLE OVEN",
          "uuid": "28bbe984-f78f-4f44-ab9f-f00eff66c18d",
          "city": "22",
          "area": "Majra",
          "totalRatingsString": "Too Few Ratings",
          "cloudinaryImageId": "hmzsr0thnmi6xoo07ghk",
          "cuisines": [
            "Italian",
            "Fast Food",
            "Chinese"
          ],
          "tags": [],
          "costForTwo": 20000,
          "costForTwoString": "₹200 FOR TWO",
          "deliveryTime": 27,
          "minDeliveryTime": 27,
          "maxDeliveryTime": 27,
          "slaString": "27 MINS",
          "lastMileTravel": 0.4000000059604645,
          "slugs": {
            "restaurant": "little-oven-subhash-nagar-subhash-nagar",
            "city": "dehradun"
          },
          "cityState": "22",
          "address": "1 A INDRAPRASHT MARG MAJRA DEHRADUN",
          "locality": "Indraprasth Enclave",
          "parentId": 125528,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [],
          "aggregatedDiscountInfo": {
            "header": "50% off",
            "shortDescriptionList": [
              {
                "meta": "50% off | Use WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "50% off up to ₹100 | Use code WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "aggregatedDiscountInfoV2": {
            "header": "50% OFF",
            "shortDescriptionList": [
              {
                "meta": "Use WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "50% off up to ₹100 | Use code WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "chain": [],
          "feeDetails": {
            "fees": [],
            "totalFees": 0,
            "message": "",
            "title": "",
            "amount": "",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
            "imageBased": [],
            "textBased": [],
            "textExtendedBadges": []
          },
          "lastMileTravelString": "0.4 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "551710",
            "deliveryTime": 27,
            "minDeliveryTime": 27,
            "maxDeliveryTime": 27,
            "lastMileTravel": 0.4000000059604645,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "--",
          "totalRatings": 0,
          "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "532213",
          "name": "Chilli'Z Restro",
          "uuid": "c63c08f6-73c1-4a3a-86da-39dc6bd2c25a",
          "city": "22",
          "area": "Kaonli",
          "totalRatingsString": "1000+ ratings",
          "cloudinaryImageId": "mzsuzzznrww2mpzwk27d",
          "cuisines": [
            "North Indian",
            "Chinese",
            "Snacks",
            "Beverages"
          ],
          "tags": [],
          "costForTwo": 30000,
          "costForTwoString": "₹300 FOR TWO",
          "deliveryTime": 25,
          "minDeliveryTime": 25,
          "maxDeliveryTime": 25,
          "slaString": "25 MINS",
          "lastMileTravel": 3.5999999046325684,
          "slugs": {
            "restaurant": "chilliz-restro-(patel-nagar)-patel-nagar-patel-nagar",
            "city": "dehradun"
          },
          "cityState": "22",
          "address": "75/4,arya tower,patel nagar,Dehradun 248001",
          "locality": "Saharanpur Road",
          "parentId": 13645,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [],
          "aggregatedDiscountInfo": {
            "header": "60% off",
            "shortDescriptionList": [
              {
                "meta": "60% off | Use TRYNEW",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "60% off up to ₹120 | Use code TRYNEW",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "aggregatedDiscountInfoV2": {
            "header": "60% OFF",
            "shortDescriptionList": [
              {
                "meta": "Use TRYNEW",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "60% off up to ₹120 | Use code TRYNEW",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "ribbon": [
            {
              "type": "PROMOTED"
            }
          ],
          "chain": [],
          "feeDetails": {
            "fees": [],
            "totalFees": 0,
            "message": "",
            "title": "",
            "amount": "",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "cid=5807516~p=7~eid=00000186-4eff-3829-016e-5b2100eb0728",
          "badges": {
            "imageBased": [],
            "textBased": [],
            "textExtendedBadges": []
          },
          "lastMileTravelString": "3.5 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "532213",
            "deliveryTime": 25,
            "minDeliveryTime": 25,
            "maxDeliveryTime": 25,
            "lastMileTravel": 3.5999999046325684,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": true,
          "avgRating": "3.9",
          "totalRatings": 1000,
          "new": false
        },
        "subtype": "basic"
    },
]


/**Restraunt card*/
const RestrauntCard = ({name , cuisines , cloudinaryImageId , lastMileTravelString}) => {

  // const {name , cuisines , cloudinaryImageId , lastMileTravelString} = restaurant.data

    return (
        // <div className="card">
        //     <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + props?.restaurant.data?.cloudinaryImageId} />
        //     <h2>{props.restaurant.data?.name}</h2>
        //     <h3>{props.restaurant.data?.cuisines.join(" , ") }</h3>
        //     <h4>{props.restaurant.data?.lastMileTravelString} minutes</h4>
        // </div>
        <div className="card">
            <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + cloudinaryImageId} />
            <h2>{name}</h2>
            <h3>{cuisines.join(" , ") }</h3>
            <h4>{lastMileTravelString} minutes</h4>
        </div>
    )
}



const Body = () =>{
    return(
        <div className="restraunt-list">

          {
            RestaurentList.map(restaurant => {

              return <RestrauntCard {...restaurant.data} key={restaurant.data.id}/>
            })
          }
            {/* {RestrauntCard(RestaurentList[6])} */}
        </div>
      
    )
}
const Footer = () =>{
    return(
        <h4>Footer</h4>
    )
}


const AppLayout = () => {
    return(
        <>
        <HeadingComponent />
        <Body />
        <Footer />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

// root.render(<HeadingComponent />)
root.render(<AppLayout />)
