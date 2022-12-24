import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

import {Container} from "react-bootstrap";
import HomeScreen from "./components/screens/HomeScreen";

import {Routes, Route} from "react-router-dom";
import ProductScreen from "./components/screens/ProductScreen";


function App() {
  return (
    <div className="App">
      <Header />
      <main className="py-3">
          <Container>
              <Routes>
                  <Route path="/" element={<HomeScreen />} />
                  <Route path="/product/:id" element={<ProductScreen />} />
              </Routes>
          </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
