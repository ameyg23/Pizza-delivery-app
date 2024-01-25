1. Introduction to the course

2. Install devlopment tools
    1. Install Editor(Vs Code)
    2. Install MogoDB compass
    3. Install Postman

3. Create Angular App
    1. Create  project's folder
    2. Install @angular/cli
    3. Create App as frontend

4. Add Header
    1. Generate component
    2. Add Html
    3. Add CSS
    
5. List Foods
    1. Create Food Model
    2. Create data.ts
        1. Add sample foods
    3. Add images to assets
    4. Create Food Service
    5. Create Home component
        1. Add ts
        2. Add html
        3. Add css

6. Search
    1. Add method to Food service
    2. Add search route
    3. show search result in Home component
    4. Generate search component
        1. Add to home component
        2. Add ts
        3. Add html
        4. Add css

7. Tags Bar
    1. Create Tag model
    2. Add Sample tags to data.ts
    3. Food service
        1. Add get all tags method
        2. Add get all foods by tag method
    4. Add tags route
    5. show tag result in home component
    6. Generate Tags component
        1. Add to home component 
        2. Add ts
        3. Add html
        4. Add css

8. Food Page
    1. Add method to find food service
    2. Generate food Page component
        1. Add route
        2. Add ts
        3. Add html
        4. Add css

9. Cart Page
    1. Create CartItem Model
    2. Create Cart Model
    3. Generate Cart Model
    4. Add to cart button in food page
    5. Generate Cart page component
        1. Add route
        2. Add ts
        3. Add html
        4. Add css

10. Not Found
    1. Genrate Component
        1. Add ts
        2. Add html
        3. Add css
    2. Add To Page
        1. Home page
        2. Food Page
        3. Cart Page

11. Connect To Backend
    1. Create backend folder
    2. npm init
    3. npm install typescript
    4. Create tsconfig.json
    5. Create .gitignore
    6. Copy data.ts to backend/src
    7. npm install express cors
    8. Create server.ts
        1. install @types
        2. Add Apis
    9. npm install nodemon ts-node --save-dev
    10. Add urs.ts to fronted
    11. Add  HttpClient module
    12. update food service

12. Login Page
    1. Generate Component
        1. Add to routes
        2. Add ts
        3. Add html
            1. Import Reactive Forms Module
        4. Add css
    2. Add Login Api
        1. Use Json
        2. Add jsonwebtoken
        3. Test using Postman
    3. Generate User Service
        1. Generate User Model
        2. Add user subject
        3. Add Login Method
            1. Import Module
            2. Import BrowserAnimationsModule
            3. Add style in angular json
        4. Add to header
      1. Add Local Storage methods
      2. Add Logout method
        1. Add to header

13. Make Components for Login page
    1. Input container
    2. Input Validation
    3. Text Input
    4. Default Button

14. Connect Login API TO MongoDB Atlas
    1. Moving Apis into routers
    2. Create MongoDB Atlas
    3. Create .env file
    4. Install
        1. Mongoose
        2. dotenv
        3. bcryptjs
        4. jsonwebtoken
        5. express-async-handler
    5. Connect to MongoDB Atlas
    6. Use MongoDb instead of data.ts in apis

15. Register User
    1. Add Register API
    2. Add Register service method
    3. Add Register Link
    4. Add Register Component

16. Loading
    1. Add Image
    2. Add Component
    3. Add Service
    4. Add Interceptor

17. CheckOut Page
    1. Create Order Model
    2. Create Checkout Page Component
        1. Add To router
    3. Add user to user Service
    4. Add Cart to Cart Service
    5. Create order Item List Component
    6.  Adding Map To The Checkout Page
        1.  Add Leaflet npm package
            1.  Add @types/leaflet
            2.  Add Css to angular.json
        2.  Add AddressLatLng to Order Model
        3.  Create Map component
            1.  Add to checkout page
            2.  Add TS
                1.  Change app-map selector to map
            3.  Add Html
            4.  Add CSS
        4.  Add Auth Guard

    7. Save Order
        1. Add Order Model
        2. Add Order Status Enum
        3. Add Auth Middleware
        4. Add Order Router
            1. Add Create API
        5. Add Order Urls to Urls.ts
        6. Add Order Service
            1. Add Create Model
        7. Add Auth Interceptor

18. Payment Page
    1. Generate Component
    2. Add getOrderForCurrentUser api
    3. Add Order Service method
    4. Connect component to Service
    5. Make the Map component readonly

19. Adding Paypal
    1. Generate component
        1. Add to payment page
    2. Get paypal client Id
    3. Add Paypal JS to index.html
    4. Set up paypal button
    5. Add pay api to order router
    6. Get Paypal sandbox account

20. Order Track page
    1. Generate Component
        1. Add to route
    2. Add API
        1. Add to urls.ts
    3. Add method or Order.service
    4. Add Html
    5. Add css
