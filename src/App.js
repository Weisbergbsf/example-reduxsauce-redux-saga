import React from "react";
import { Provider } from "react-redux";

import UserForm from "./views/Users/UserForm";

import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <UserForm />
    </Provider>
  );
}

export default App;
