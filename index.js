import connectToMongo from './Database/db.js';
import express from 'express';
import auth from './routes/auth.js'
import products from './routes/product.js'
import stripeRoute from './routes/Payment.js'
import cors from 'cors'

connectToMongo();
const app = express()
const port = 4000

app.use(express.json())
app.use(cors({ origin: "*" }));

//* Available routes
app.use('/api/auth', auth)
app.use('/api/products', products)
app.use('/api/payment', stripeRoute)

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
})
