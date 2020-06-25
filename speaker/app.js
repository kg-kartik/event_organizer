const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const passport = require("passport");
const avatar = require("./routes/api/avatar");
const talk = require("./routes/api/talk");
const speaker = require("./routes/api/speaker");
const speakerProfile = require("./routes/api/speakerProfile");
const cors = require("cors");

// Initialze app
const app = express();

// using bodyParser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

// establish database conenction
const db = require("./config/keys").mongoURI;
mongoose
  .connect(
    db,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("Database connected successfully!");
  })
  .catch(error => {
    console.log(error);
  });

app.use(cors());

// Use Route
app.use("/api/avatar", avatar);
app.use("/api/talk", talk);
app.use("/api/speaker", speaker);
app.use("/api/speakerProfile", speakerProfile);

//Adding passport middleware
app.use(passport.initialize());

//Passport Config strategy eg: Local strategy, google stragtegy, JWT strategy etc
require("./config/passport")(passport);

const port = process.env.PORT || 4003;
app.listen(port, () => {
  console.log(`Listening at port ${port}`);
});
