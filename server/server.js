require('dotenv').config()

const express = require('express')
const app = express()

app.use(express.json())

const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY)

const storeItems = new Map([
    [1, { priceInCents: 10000, name: 'necktie' }],
    [2, {priceInCents: 20000, name: 'learn server.js' }],
])

app.listen(3001)