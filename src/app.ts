import express, { Express } from "express"
import mongoose from "mongoose"
import cors from "cors"
import deliveryRoutes from "./routes"
import Delivery from "./models/delivery"
import User from "./models/user"

require('dotenv').config()

const app: Express = express()

const PORT: string | number = process.env.PORT || 4000

app.use(cors())
app.use(deliveryRoutes)

mongoose.connect(process.env.MONGO_URI)
  .then(() =>{
  console.log('Database connected..')
  })

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}...`)
})
