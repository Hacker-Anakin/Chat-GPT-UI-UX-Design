import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Header from "./containers/header/Header";
import Brand from "./components/brand/Brand";
import WhatAPT3 from "./containers/whatAPT3/whatapt3";
import Features from "./containers/features/Features";
import Possibility from "./containers/possibility/Possibility";
import CTA from "./components/cta/CTA";
import Blog from "./containers/blog/Blog";
import Footer from "./containers/footer/Footer";

function App() {
  return (
    <div className="App">
      <div className="gradient-bg">
        <Navbar></Navbar>
        <Header></Header>
      </div>
      <div>
        <Brand></Brand>
        <WhatAPT3></WhatAPT3>
        <Features></Features>
        <Possibility></Possibility>
        <CTA></CTA>
        <Blog></Blog>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
