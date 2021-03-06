import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <BrowserRouter basename='/'>
      <div>
        <Navbar />
        <Wrapper>
          <Switch>
            <Route exact path="/" component={Search} />
            <Route exact path="/about" component={Search} />
            <Route exact path="/saved" component={Saved} />
          </Switch>
        </Wrapper>
      </div>
    </BrowserRouter>
  );
}

export default App;