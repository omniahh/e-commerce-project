


//Setup Express web server
const express= require("express");
const cors= require("cors");
const cookieSession = require("cookie-session");
const dbConfig= require("./config/db.config");
const app = express();


require('express-async-errors');

// var corsOptions = {
//   origin: "http://localhost:8081"
// };
app.use(cors());

// parse requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cookieSession({
    name: "omnia-session",
    secret: "COOKIE_SECRET",                         //  use as secret environment variable
    httpOnly: true
  })
);
app.use('/api/products',require('./routes/product.routes'))
app.use('/api/orders',require('./routes/order.routes'))
app.use('/api/users',require('./routes/user.routes'))

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to e-commerce application." });
});

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});


//

// const app = express();
// app.use(...);
const db = require("./models");
const { mongoose } = require("./models");

const Role = db.role;
const username = "omniah";
const password = "omnia1234";
const cluster = "cluster0.9fhmt";
const dbname = "e-commerce";

// db.mongoose.connect(
//   `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`, 
//   {    useNewUrlParser: true,
  
//     useUnifiedTopology: true
//   })
//   .then(() => {
//     console.log("Successfully connect to MongoDB.");
//     initial();
//   })
//   .catch(err => {
//     console.error("Connection error", err);
//     process.exit();
//   });

mongoose.connect("mongodb+srv://omnia:omnia@cluster0.5a1yo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")

  //

  function initial() {
    Role.estimatedDocumentCount((err, count) => {
      if (!err && count === 0) {
        new Role({
          name: "user"
        }).save(err => {
          if (err) {
            console.log("error", err);
          }
          console.log("added 'user' to roles collection");
        });
      
        new Role({
            name: "admin"
          }).save(err => {
            if (err) {
              console.log("error", err);
            }
            console.log("added 'admin' to roles collection");
          });
        }
      });
    }

    //
    // const app = express();
    require('./routes/auth.routes')(app);
    // require('./routes/user.routes')(app);