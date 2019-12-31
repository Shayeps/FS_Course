//prod.js - production keys here
module.exports = {
    googleClientID: process.env.GOOGLE_CLIENT_ID,
    googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
    faceBookClientID: "",
    faceBookClientSecret: "",
    mongoURI: process.env.MONGO_URI,
    cookieKey: process.env.COOKIE_KEY, //can be any string I want
   };

   alert(process.env.GOOGLE_CLIENT_ID)