import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
// import { UserProvider } from './contexts/user.context';
// import { CategoriesProvider } from './contexts/categories.context';
// import { CartProvider } from './contexts/cart.context';

import { Provider } from "react-redux";
import { persistor, store } from "./store/store";

import "./index.scss";
import { PersistGate } from "redux-persist/integration/react";
import { stripePromise } from "./utils/stripe/stripe.utils";
import { Elements } from "@stripe/react-stripe-js";

const rootElement = document.getElementById("root");

render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          {/* <UserProvider> */}
          {/* <CategoriesProvider> */}
          {/* <CartProvider> */}
          <Elements stripe={stripePromise}>
            <App />
          </Elements>
          {/* </CartProvider> */}
          {/* </CategoriesProvider> */}
          {/* </UserProvider> */}
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  rootElement
);
