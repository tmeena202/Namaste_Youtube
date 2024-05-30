import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import Head from "./components/Head";
import Body from "./components/Body";
import store from "./utils/store";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Head />
        <Body />

        {/*
         * Head
         * Body
         *   SideBar
         *     Menuitems
         * MainContainer
         *   ButtonList
         *   ListContainer
         *     VideoCard
         *
         */}
      </div>
    </Provider>
  );
}

export default App;
