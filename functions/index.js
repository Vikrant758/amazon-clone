const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require('stripe')('sk_test_51IvTMySJHm59a7wpdl1wmkkj3uAIYN4XEBKuZO0ezF3vKR2dubLbzOEDLjCug6wtULBK2mUsPWjJLol0NfMw67A000kWGNbvkb');

//API


// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get('/', (req, res) => {
    res.status(200).send('hello world');
})

app.post("/payments/create", async (req, res) => {
    const total = req.query.total;

    console.log('Payment has been received !!! for this amount >>> ', total);

    const paymentIntent = await stripe.paymentIntents.create({
        payment_method_types: ['card'],
        amount: total,  //This is in sub units
        currency: "inr",
    });

    res.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })

})
// - Listen Command
exports.api = functions.https.onRequest(app);


// http://localhost:5001/app-eea29/us-central1/api