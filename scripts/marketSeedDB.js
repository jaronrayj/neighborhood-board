const mongoose = require("mongoose");
const db = require("../models");

// This file will empty the marketplace data and insert new marketplace below

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/marketplace"
);

const marketSeed = [
    {
        title: "72-inch Samsung Smart TV",
        description: "I am selling this perfectly good Samsung Smart TV. It works great and has a great picture. Contact me if you are interested.",
        price: 500.00,
        img: "https://images.samsung.com/is/image/samsung/au_UA70KU6000WXXY_008_Front_black?$PD_GALLERY_L_JPG$",
        contactPhone: "801-888-5326",
        contactEmail: "myemail@email.com"
    },
    {
        title: "Leather Love Seat",
        description: "Lightly used brown leather love seat. Take it off my hands so I don't have to haul it to D.I.",
        price: 100.00,
        img: "https://ashleyfurniture.scene7.com/is/image/AshleyFurniture/1200035-10x8-CROP?$AFHS-Grid-1X$$",
        contactPhone: "801-888-5326",
        contactEmail: "myemail@email.com"
    },
    {
        title: "Splatoon 2 Nintendo Switch Game",
        description: "For Sale! Nintendo Switch Splatoon 2. Works fine. We just don't play it anymore as we are playing Splatoon 3!",
        price: 20.00,
        img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6297/6297914cv2d.jpg",
        contactPhone: "801-888-5326",
        contactEmail: "myemail@email.com"
    },
    {
        title: "Minky Couture Blanket",
        description: "I happened to buy 2 of these beautiful, soft, cozy blankets. I only need one.",
        price: 50.00,
        img: "https://media.rainpos.com/386/gold_fuscia_floral_with_white_flat.jpg",
        contactPhone: "801-888-5326",
        contactEmail: "myemail@email.com"
    }
];

db.Market 
    .remove({})
    .then(() => db.Market.Collection.insertMany(marketSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
      })
      .catch(err => {
        console.error(err);
        process.exit(1);
      });