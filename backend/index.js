require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const authRoute = require('./routes/AuthRoute');
const HoldingModel = require('./models/HoldingModel');
const OrderModel = require('./models/OrdersModel');
const PositionModel = require('./models/PositionModel');
const {userVerification} =require("./middlewares/AuthMiddleware")
const {getCurrentUser} =require("./controllers/UserController")
const app = express();
const PORT = process.env.PORT || 8080;
const uri = process.env.MONGO_URL;

const corsOptions = {
  origin: ["http://localhost:5173", "http://localhost:5174"],
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.json());

mongoose.connect(uri).then(() => {
  console.log('Db connection successful');
}).catch((err) => {
  console.error(err);
});

app.use('/', authRoute);
app.get('/currentUser', getCurrentUser, (req, res) => {
  const user = req.user;
  console.log(user)
  res.json({ status: true, user: user.username });
});

app.get('/addHoldings', async (req, res) => {
  const holdings = [
    // your holdings data
  ];
  await HoldingModel.insertMany(holdings);
  res.send('Holdings added');
});

app.get('/allHoldings', async (req, res) => {
  const holdings = await HoldingModel.find({});
  res.json(holdings);
});

app.get('/allOrders', async (req, res) => {
  const orders = await OrderModel.find({});
  res.json(orders);
});

app.get('/addPosition', async (req, res) => {
  const position = new PositionModel({
    product: "CNC",
    name: "JUBLFOOD",
    qty: 1,
    avg: 3124.75,
    price: 3082.65,
    net: "+10.04%",
    day: "-1.35%",
    isLoss: true,
  });
  await position.save();
  res.send('Position added');
});

app.get('/allPositions', async (req, res) => {
  const positions = await PositionModel.find({});
  res.json(positions);
});

app.get('/deleteHoldings', async (req, res) => {
  const result = await HoldingModel.deleteMany({});
  res.status(200).send(`Deleted ${result.deletedCount} holdings`);
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
