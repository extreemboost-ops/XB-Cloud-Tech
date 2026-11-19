import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import App from "./App"
import "./index.css"

// Seamless migration: If a visitor or search bot opens an old hash URL (e.g. xbcloudtech.com/#/industries/retail-wholesale),
// immediately normalize it to the clean, canonical HTML5 pushState address (xbcloudtech.com/industries/retail-wholesale)
if (
  typeof window !== "undefined" &&
  window.location.hash &&
  window.location.hash.startsWith("#/")
) {
  const cleanPath = window.location.hash.replace(/^#/, "")
  window.history.replaceState(null, "", cleanPath)
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
