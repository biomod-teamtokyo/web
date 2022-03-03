import { Route, Routes} from 'react-router-dom';
import classes from "./App.module.css";

import Header from './js/Header.js'
import Navigation from './js/Navigation.js'
import Home from './js/Home.js'
import Biomod from './js/Biomod'
import Project from './js/Project'
import Laboratory from './js/Laboratory'
import Contact from './js/Contact'
import Donation from './js/Donation'
import Footer from './js/Footer'

function App() {
  return (
    <div className = {classes.Content}>
      <Header />
      <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/biomod" element={<Biomod />} />
          <Route path="/project" element={<Project />} />
          <Route path="/laboratory" element={<Laboratory />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/donation" element={<Donation />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
