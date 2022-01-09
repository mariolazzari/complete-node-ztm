const fs = require("fs");
const https = require("https");
const path = require("path");
const express = require("express");
const helmet = require("helmet");
const passport = require("passport");
const { Strategy } = require("passport-google-oauth20");

require("dotenv").config();
const { PORT, CLIENT_ID, CLIENT_SECRET } = process.env;
const AUTH_OPTIONS = {
  clientID: CLIENT_ID,
  clientSecret: CLIENT_SECRET,
  callbackURL: "/auth/google/callback",
};

const verifyCallback = (accessToken, refreshToken, profile, done) => {
  console.log("Google profile: ", profile);
  done(null, profile);
};

passport.use(new Strategy(AUTH_OPTIONS, verifyCallback));

const app = express();
app.use(helmet());
app.use(passport.initialize());

// auth
const checkUser = (req, res, next) => {
  let isLogged = true;
  if (!isLogged) {
    return res.status(401).send("Unauthorized");
  }
  next();
};

app.get("/", (req, res) => {
  const index = path.join(__dirname, "public", "index.html");
  res.sendFile(index);
});

app.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["email"],
  })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/failure",
    successRedirect: "/",
    session: true,
  }),
  (req, res) => {
    console.log("Google called us back!");
  }
);

app.get("/auth/logout", (req, res) => {});

app.get("/secret", checkUser, (req, res) => {
  res.send("Your personale secret value is 42");
});

app.get("/failure", (req, res) => {
  res.send("Login failed");
});

/*
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
*/

// openssl req -x509 -newkey rsa:4096 -nodes -keyout key.pem -out cert.pem -days 365
const key = fs.readFileSync(path.join("cert", "key.pem"));
const cert = fs.readFileSync(path.join("cert", "cert.pem"));

https.createServer({ key, cert }, app).listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
