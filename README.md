AngularJS Shopping App with Stripe Payment
This is an AngularJS shopping app that allows users to browse and purchase products. The app displays various product categories, provides a cart function to add and manage selected items, and facilitates secure checkout using the Stripe payment gateway.
![image](https://github.com/duyhuynhnguyentuan/AngularWeb/assets/124075895/24432e3f-0a9d-4027-a99b-4f255564d886)
Technologies Used
AngularJS: The front-end of the application is built using AngularJS, a popular JavaScript framework for creating dynamic web applications.
MockAPI: The app fetches product data from MockAPI, a service that provides a RESTful API for creating mock data.
Express and Node.js: The back-end of the app is built using Express, a Node.js web application framework. It handles payment processing using the Stripe API.
Stripe: The Stripe payment gateway is integrated into the app to securely process payments and facilitate the checkout process.
Tailwind CSS: The app uses Tailwind CSS for styling and designing the user interface. Tailwind CSS is a utility-first CSS framework.
Features
Product Listing: The app displays a wide range of products, organized into different categories, making it easy for users to find what they need.
Product Details: Users can view detailed information about each product, including product name, price, category, and a product image.
![image](https://github.com/duyhuynhnguyentuan/AngularWeb/assets/124075895/92d0ef21-b2fe-46da-9ea1-4426497026f7)
Cart Functionality: Users can add products to their cart and manage the quantities of each item. The cart also displays the total cost of the selected items.
![image](https://github.com/duyhuynhnguyentuan/AngularWeb/assets/124075895/0c53a50b-1a45-4ed0-b017-510c21e3ce28)
Secure Checkout: The app integrates with the Stripe payment gateway to provide a secure and seamless checkout process for users.
![image](https://github.com/duyhuynhnguyentuan/AngularWeb/assets/124075895/04da3cd3-4bf2-4e36-83ec-2253271a8a0d)


Getting Started
Clone the repository to your local machine.
Install the required dependencies using npm install.
Run the AngularJS app using npm start.
The app will be accessible at http://localhost:4200.
Backend Setup
Set up a backend server using Express and Node.js to handle payment processing and Stripe integration.
Implement the necessary API endpoints for Stripe payment handling, such as creating a payment intent and handling webhook events.
Credits
Stripe API Documentation
MockAPI
AngularJS Documentation
License
This project is licensed under the MIT License - see the LICENSE file for details.
