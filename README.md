## How I worked on this project

My goal was to build an online marketplace for used items. This would include a single-page web application and a mobile application for iOS and Android platforms.

- I used React and React Native for the frontends of web and mobile apps respectively.
- And I used Node.js, Express.js and MongoDB for the backend
- I also used Stripe to manage payments

## How to navigate this project

### Frontend

- Some stateful logic: [link to stateful logic]
- Example CSS: [link to css from homepage]
- Product component: [link]
- Shopping Cart component: [link]
  The application fetched data from a backend API that I built as part of the project.
- Requests to API for authentication: [link]
- Requests to API for video content: [link]

- Integration tests using React Testing Library [link to example test]

### Backend

- Express.js middleware: [link]
- API entry routes: [link to routes]
- Server-side logic to handle CRUD operations
- Product model with Mongoose: [link]
- Application logic to retrieve data from the MongoDB database: [link]
- I tested this API's CRUD operations using Postman

## Why I built the project this way

### Frontend

- I used React as the major frontend library because its virtual DOM feature provides a smooth user experience whereby only necessary parts of each component are updated when state changes.
- I didn't use a state management library like Redux on purpose. For this app simple `useState` hook is sufficient. In fact, for now there's no complex logic that needs to be shared among many different components.

### Backend

- I choose Node.js due to it does a great job at handling concurrent requests due to its asynchronous event-driven IO. A backend that is fast at processing requests and providing responses without blocking incoming requests was critical for a marketplace service.
- I also used Express.js due to its popularity at managing middleware needed to manipulate the request and response objects during a request-response cycle. With express, I was able to build a fast RESTful API with all CRUD operations linking to the database.
- MongoDB was used because I needed some flexibility in type of data to store for each product, as well as scalability as the system grow.

Testing is an essential part of production applications. Testing Library is the go-to library in the React community. I covered the essential features of the app with tests.

## During my extra time, I intend to improve the following:

- Complete the frontend to have a fully-responsive UI based on some cool Figma designs
- Set up continuous integration to run the tests
- Add end-to-end tests with Cypress

## Available Scripts

### Frontend

- `npm start` to run the application
- `npm test` to run tests

### Backend

- `npm start` to run the application, as it's still in dev stage
- Ensure MongoDB is up and running on port 27017
