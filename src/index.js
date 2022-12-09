import React from "react";
import ReactDOM from "react-dom/client";
import { Route, Link, Routes, BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import User from "./user";
import NotFound from "./notfound";
import reportWebVitals from "./reportWebVitals";
const routing = (
  <Router>
    {/* Code inside DIV will be available in all pages */}
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/user">User</Link>
        </li>
      </ul>
    </div>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/user" element={<User />} />
      <Route path="*" element={<NotFound />} />
      {/* if anyone types any wrong route, will be directed to the above one */}
    </Routes>
  </Router>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(routing);

// ORIGINAL CODE BELOW
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
