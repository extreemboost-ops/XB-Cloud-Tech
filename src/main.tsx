import React from "react"
import ReactDOM from "react-dom/client"
import { HashRouter } from "react-router-dom"
import App from "./App"
import "./index.css"

// Seamless bridge: If accessed via direct clean path (e.g. /admin/login or /admin) without hash,
// seamlessly adapt to hash route so HashRouter mounts the target route instantly.
if (
  typeof window !== "undefined" &&
  window.location.pathname &&
  window.location.pathname !== "/" &&
  (!window.location.hash ||
    window.location.hash === "#/" ||
    window.location.hash === "#")
) {
  const directPath = window.location.pathname
  const directSearch = window.location.search
  window.history.replaceState(null, "", "/#" + directPath + directSearch)
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
)
