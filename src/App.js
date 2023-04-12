import { BrowserRouter, Routes, Route } from "react-router-dom"
import NotFound from "./NotFound";
import Header from "./Header"
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"

const App = () => (
  <BrowserRouter>
    <Header />
      <Routes>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Routes>
 </BrowserRouter>
)

export default App