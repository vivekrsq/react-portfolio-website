import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes
} from "react-router-dom";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Client from "./pages/Client";
import Team from "./pages/Team";
function App() {
  return (<>
    <Router>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path='/service' element={<Service />} />
        <Route exact path='/client' element={<Client/>} />
        <Route exact path='/team' element={<Team/>} />
      </Routes>
      <Footer />
    </Router>
  </>
  );
}

export default App;
