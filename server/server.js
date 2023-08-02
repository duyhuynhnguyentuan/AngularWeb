const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");

const app = express();
app.use(express.static("public"));
// body-parser is a middleware used to parse the incoming request body in different formats (e.g., JSON, URL-encoded, text) and make it accessible in the req.body
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(cors({ origin: true, credentials: true }));
//use secret key
const stripe = require("stripe")(
  "sk_test_51N8nwdC1pGhMPsxh4mG4giSxcK2DfIG48yTJwjeD5HuNJzoG1TMX968sKvYZ59wCoruQ3URUeMwd29Vuv988HCeF00BV3urcoV"
);

app.post("/checkout", async (req, res, next) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      shipping_address_collection: {
        allowed_countries: ["US", "VN"],
      },
      shipping_options: [
        {
          shipping_rate_data: {
            type: "fixed_amount",
            fixed_amount: {
              amount: 0,
              currency: "VND",
            },
            display_name: "Free shipping",
            // Delivers between 5-7 business days
            delivery_estimate: {
              minimum: {
                unit: "business_day",
                value: 3,
              },
              maximum: {
                unit: "business_day",
                value: 5,
              },
            },
          },
        },
        {
          shipping_rate_data: {
            type: "fixed_amount",
            fixed_amount: {
              amount: 30000,
              currency: "VND",
            },
            display_name: "Next day air",
            // Delivers in exactly 1 business day
            delivery_estimate: {
              minimum: {
                unit: "business_day",
                value: 1,
              },
              maximum: {
                unit: "business_day",
                value: 1,
              },
            },
          },
        },
      ],
      line_items: req.body.items.map((item) => ({
        price_data: {
          currency: "VND",
          product_data: {
            name: item.name,
            images: [item.product],
          },
          unit_amount: item.price,
        },
        quantity: item.quantity,
      })),
      mode: "payment",
      success_url: "http://localhost:4242/success.html",
      cancel_url: "http://localhost:4242/cancel.html",
    });
    res.status(200).json(session);
  } catch (error) {
    next(error);
  }
});
app.listen(4242, () => console.log('app is running on port 4242'));
