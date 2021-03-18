# App Name: Feed ME
### General flow of the app

* login service and make an order
![1](https://user-images.githubusercontent.com/54572005/111583677-01bf3480-877a-11eb-8026-1c5f91cc4b4b.gif)
* Restaurants receive the order and preparing it
![2](https://user-images.githubusercontent.com/54572005/111583688-0388f800-877a-11eb-8e10-136f87148c1d.gif)
* Couriers pick up the order and delivery it
![3](https://user-images.githubusercontent.com/54572005/111583697-0552bb80-877a-11eb-8d0d-96b403fbe7e1.gif)

### Both front-end and back-end work has been depployed on Heroku
- Frontend url: https://quiet-thicket-01896.herokuapp.com/login
- Backend url: https://morning-bastion-48964.herokuapp.com/restauran

### General Functions
The food delivery service is designed and implemented to simulate the following real-world
user cases:
* It supports basic operations for customers, restaurants and couriers;
* From a customer’s perspective:
  * The front-end website should display available restaurants info by default;
  * Customer has the ability to sign up, login and log out;
  * Customer has the ability to select meals;
  * Customer has the ability to check out and place an order;
  * Customer has the ability to track the status of the order;
* From a courier’s perspective:
  * Courier has the ability to sign up, login and log out;
  * Courier has the ability to pick up an order based on the orderId;
  * Courier has the ability to deliver an order based on the orderId;
* From a restaurant’s perspective:
  * The restaurant has the ability to sign up, login and log out;
  * The restaurant needs to ability to change the status of an order

### It contains the following pages with the listed implemented functionalities:
#### Boarding Page
The boarding page supports the following functionalities:
* User Login: On the login page, users can log into their existing account.
* User Register: For new users, they are directed to the registration page for
registering a new account for this web application.
* User Filtering: Register and route three types of users: Users who claim a
customer, or a restaurant, or a courier will register through different channels and
route to different pages.6.2. Menu Page
#### The menu page supports the following functionalities:
* Select Restaurant: The info and links of the restaurants are listed in an upper
sidebar. Right now, there are only three restaurants listed on our web. In the future, it
can be expanded with more restaurants.
* Check Menu: Once the user chooses a restaurant, the menu of the selected
restaurant will be listed on a scrolling page.
* Add Meals to Shopping Cart: The user can add her/his favorite meals into the cart
through an "add" button. This function supports customers adding meals from
different restaurants.
* Remove Meals from the Shopping Cart: Since the shopping cart is floating in the
right part of the page, it is easy to add and remove the meals from the cart, as well as
check the order's cost clearly and conveniently.
* Place An Order: Once the meals are added to the cart, the general cost, along with
the delivery fee, tips, packing fees will be adjusted according to the price of the meals
in your cart. Once you complete with shopping, you can make an order with one
click.
#### Order Status Tracking Page
The order info page supports the following functionalities:
* The Restaurant Prepares the Order: Once the order being made by the customer,
the order number generated. The restaurant users can get the order by searching the
order number in their system, and then change the order status to “preparing”. Once
the food is ready, the restaurant users can change the order status to “ready”.
* The Courier Picks Up the Order: Once the order status has changed to “ready”, the
courier user can search the order through its order ID in the courier system, and then
pick up the order by changing the order status into “delivering”. The order status can
be changed to "delivered" once the courier delivers the order.
* Customer can Track the Order Status: Customers can get as nearly real-time
updates of orders on the order page.
