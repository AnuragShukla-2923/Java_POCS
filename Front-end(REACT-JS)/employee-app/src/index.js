import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import SkillsTable, { SKillsTable } from "./components/Tables/SKillsTable";
import FiletoBase64 from "./components/FiletoBase64";
import FiletoBase64Applicaion from "./components/FiletoBase64Application";
import Profile_Pic from "./components/Profile_Pic";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <App />
    {/* <Profile_Pic /> */}
    {/* <FiletoBase64Applicaion /> */}

    {/* <SKillsTable /> */}
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
