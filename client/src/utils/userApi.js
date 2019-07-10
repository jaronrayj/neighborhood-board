import axios from "axios";

export default {

// Gets all Market Items
signUpUser: function () {
    return axios.get("/api/auth/signup");
},

// Gets the market item with the given id
getMarketItemId: function (id) {
    return axios.get("/api/markets/" + id);
},

// Saves a market item to the database
saveMarketItem: function (savedMarketItems) {
    return axios.post("/api/markets", savedMarketItems);
},

// Deletes the market item with the given id
deleteMarketItem: function (id) {
    return axios.delete("/api/markets/" + id);
}

}