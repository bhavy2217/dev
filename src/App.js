import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; import Home from './components/Home';
import Nav from './components/Nav';
import Design from './components/Design';
import About from './components/About';
import Contact from './components/Contact';
import Last from './components/Last';

const App = () => {
  return (
    <Router>
      <Nav />
      <div>
        <Routes> {/* Use "Routes" component instead of "Switch" */}
          <Route path="/" element={<Home />} />
          <Route path="/design" element={<Design />} ></Route>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Last />
    </Router>
  );
};

export default App;

// {*
// <Router>
//   <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
//   <Alert alert={alert} />
//   <div className="container my-3">
//     <Routes>
//       <Route exact path="/about" element={<About />}>
//       </Route>
//     </Routes>
//     <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />
//     {/* <About /> */}
//   </div>
// </Router>