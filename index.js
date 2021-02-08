const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

const data = require("./data.json");
app.get("/", (req, res) => {
    res.json(data);
});

app.all("*", (req, res) => {
    res.send("Page not found");
});

// Heroku va nous fournir une variable process.env.PORT
// if (process.env.PORT) {
//   app.listen(process.env.PORT, () => {
//     console.log("Server started");
//   });
// } else {
//   app.listen(3100, () => {
//     console.log("Server started");
//   });
// }

app.listen(process.env.PORT || 3100, () => {
    console.log("Server started");
});
