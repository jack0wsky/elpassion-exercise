import React from "react";
import { Provider } from "react-redux";
import { QueryClientProvider } from "react-query";
import { HelmetProvider } from "react-helmet-async";
import { queryClient } from "./clients/react-query-client";
import { Route, Routes } from "react-router-dom";
import { Home } from "./views/Home";
import { User } from "./views/User";
import { store } from "./store/store";

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <HelmetProvider>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user/:user" element={<User />} />
          </Routes>
        </div>
      </HelmetProvider>
    </Provider>
  </QueryClientProvider>
);

export default App;
