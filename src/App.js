import React from 'react';
import { AboutUs, Chef, Find, Footer, Gallery, Header, Introduction, Laurels, Menu } from './container';
import './app.css';
import Navbar from './components/Navbar/Navbar';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <Menu />
    <Chef />
    <Introduction />
    <Laurels />
    <Gallery />
    <Find />
    <Footer />
  </div>
);

export default App;
