import { createRoot } from "react-dom/client"
import { App } from "./app.jsx"
import "./index.css"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const rootElement = document.querySelector('[data-js="root"]')
const root = createRoot(rootElement)

root.render(<App />)
