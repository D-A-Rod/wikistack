const express = require("express");
const morgan = require("morgan");
const app = express();
const staticMiddleware = express.static((__dirname, "public"));
const pg = require("pg");
const { db, Page, User } = require("./models");
const { addPage } = require("./views")
const wikiRouter = require("./routes/wiki");
const userRouter = require("./routes/user");

app.use("/wiki", wikiRouter);
//app.use("/user", userRouter);

// checking the above  route
db.authenticate().then(() => {
  console.log("connected to the database");
});



app.use(staticMiddleware);
app.use(morgan("dev"));
console.log("HELOO DAN");

app.get("/", (req, res, next) => {
  res.send("Heloo Josh and Dan!! This is your server ");
});

app.get('/add', (req, res, next) => {
  res.send(addPage())
})




const PORT = 3000;
const init = async () => {
  try {
    await db.sync();
    app.listen(PORT, () => {
      console.log(`Server is listning on port ${PORT}! http://localhost:3000`);
      //   console.log('hello');
    });
  } catch (err) {
    console.error(err);
  }
};

init();

// app.listen(PORT, () => {
//     console.log(`App listening in port ${PORT} http://localhost:3000`);

// });
