const express = require('express');
const getconnection = require('./db')
const cors = require('cors');
const app = express();
const dotenv = require("dotenv");
dotenv.config();

const port = 5000 || process.env.PORT;

getconnection();

app.use(cors({
  origin: 'http://localhost:3000',
  methods: "GET , POST , PUT , DELETE",
  credentials: true
}))

// app.use("/api/auth", authRoutes)
app.use(express.json());

app.use('/api/auth', require('./Routes/Authentication'))
app.use('/api/product', require('./Routes/Product'))
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Server is running  on port http://localhost:${port}`)
})

