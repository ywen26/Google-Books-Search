import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Search from "./pages/Search";
// import Staff from "./pages/Staff";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <BrowserRouter basename='/'>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={Search} />
          <Route exact path="/about" component={Search} />
          {/* <Route exact path="/staff" component={Saved} /> */}
        </Wrapper>
      </div>
    </BrowserRouter>
  );
}

export default App;