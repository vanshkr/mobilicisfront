# React Redux Query App

This is a sample application that demonstrates how to use Redux Query with React to fetch data from an API and display it in tables.

## Getting Started

To run this application locally, you will need to follow these steps:

1. Clone the repository.

2. Install dependencies.

3. Start the development server.

4. Open (http://localhost:3000) in your browser.

## Dependencies

This application is built using the following dependencies:

- React
- Redux Toolkit
- React Redux
- React Router DOM
- Redux Query

## HOSTED ON 'https://mobilicis-sample.netlify.app/'

## Index.js

This is a JavaScript code that renders a React application to the DOM using ReactDOM.

The code imports the following modules:

- React: This is the core module of the React library.
- ReactDOM: This module provides the methods for rendering React components to the DOM.
- App: This is a React component that represents the main application.
- BrowserRouter: This is a React Router component that enables client-side routing.
- Provider: This is a Redux component that makes the Redux store available to the React component hierarchy.
- store: This is the Redux store that holds the state of the application.

The code then uses the ReactDOM.createRoot() method to create a root for the React application and render it to the DOM. This method returns a ReactDOMRoot object that represents the root of the React tree. The render() method is called on this object, and it takes a single argument which is a JSX expression that represents the React component hierarchy.

The JSX expression in this case consists of the following components:

- React.StrictMode: This is a component that enables additional checks and warnings during development mode.
- Provider: This component wraps the entire application and provides access to the Redux store.
- Router: This component provides client-side routing functionality to the application.
- App: This is the main application component that contains all the other components.

Finally, the code uses the curly braces syntax to pass the store object as a prop to the Provider component, and the entire JSX expression is enclosed in parentheses.

## Redux Services

This is a JavaScript code that uses the Redux Toolkit's `createApi` function to create an API slice for making HTTP requests to a backend server.

The `createApi` function takes an object with the following properties:

- `reducerPath`: This is the name of the slice that will be added to the Redux store.
- `baseQuery`: This is a function that returns a base HTTP client that will be used to make requests to the server.
- `endpoints`: This is an object that defines the API endpoints and their corresponding query functions.

The `baseQuery` function in this code uses `fetchBaseQuery` from the Redux Toolkit's `query` module to create a base HTTP client with a specified base URL.

The `endpoints` object contains five query functions, each of which uses the `builder.query` method to define a query endpoint:

- `getBMWOrMercedesOwnersWithLowIncome`: This endpoint retrieves data on BMW or Mercedes owners with low income.
- `getMaleUsersWithExpensivePhones`: This endpoint retrieves data on male users with expensive phones.
- `getUsersWithLastNameAndQuoteRequirements`: This endpoint retrieves data on users with specific requirements for getting a quote.
- `getLuxuryCarOwnersWithNoDigitsInEmail`: This endpoint retrieves data on luxury car owners with no digits in their email addresses.
- `getTopCitiesByUserCountAndIncome`: This endpoint retrieves data on the top cities based on user count and income.

Each query function returns a `builder.query` object that defines the endpoint's parameters and response data.

Finally, the code exports the query functions using the `use` prefix, which allows them to be used as React hooks in the components of the application. This enables the components to retrieve data from the server and render it on the screen.

## Home.js

This is a React functional component called "Home" that renders a list of queries with links to corresponding tables.

The component uses the React Router's `Link` component to create links to the different tables that display data returned from various API endpoints. Each query has a brief description of the filter criteria followed by a "View Table" link that takes the user to the corresponding table.

The styles for the component are defined using inline CSS. The `displayStyle` sets the display property to flex and the direction to column, while the `linkStyle` sets the background color, text color, and text decoration properties of the link. The `queryStyle` sets the font size and float properties.

Overall, this component serves as a menu for the user to select and navigate to the different data tables.

## LowIncome.js

This component is using the `useGetBMWOrMercedesOwnersWithLowIncomeQuery` hook from the `backendApi` service to fetch and display data related to users with low income who own a BMW or Mercedes car.

In the `render` method, the component is checking whether `data` is available or not. If `data` is available, it displays a table with columns for Index, Full Name, Income, and Car Brand. It then maps through the `data` array to populate the table rows with the respective information.

The `className` property is used to apply alternating background colors to the rows, based on whether the row is odd or even.

If `data` is not available, the component displays a message that says "waiting for connection".

## Rest is same
