const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

// const MongoClient = require("mongodb").MongoClient;
const uri = process.env.mongodb;
// const client = new MongoClient(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// client.connect((err) => {
//   if (err) {
//     console.error(err);
//     return;
//   }

//   const collection = client.db("test").collection("images");
//   const image = {
//     name: req.file.originalname,
//     data: req.file.buffer,
//     contentType: req.file.mimetype,
//   };

//   collection.insertOne(image, (err, result) => {
//     if (err) {
//       console.error(err);
//       return;
//     }

//     console.log(result);
//     res.send("File uploaded!");
//   });
// });

const connect = async () => {
  try {
    await mongoose.connect(uri);
    console.log("database is successfully connected");
  } catch (error) {
    console.log(error);
  }
};
module.exports = connect;
