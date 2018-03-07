import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"

import Layout from "./components/Layout"
import storage from "./storage"

const app = document.getElementById('app')

ReactDOM.render(<Provider store={storage}>
  <Layout />
</Provider>, app);
