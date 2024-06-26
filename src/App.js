// App.js
import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import Head from "./components/Head";
import Body from "./components/Body";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import ResultPage from "./components/ResultPage.js/ResultPage";
import Demo from "./components/Demo";
import Demo2 from "./components/Demo2";
import ShortsContainer from "./components/Shorts/ShortsContainer";
import ShortsWatchPage from "./components/Shorts/ShortsWatchPage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
      {
        path: "result/:searchResult",
        element: <ResultPage />,
      },
      {
        path: "shorts",
        element: <ShortsContainer />,
      },
      {
        path: "shorts/:shortsId",
        element: <ShortsWatchPage />,
      },
      {
        path: "demo",
        element: (
          <>
            <Demo />
            <Demo2 />
          </>
        ),
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <div>
        <Head />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
