/** @jsx jsx */
import { Component } from "react";
import { jsx } from "theme-ui";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import Header from "app/components/Header";
import Wrapper from "app/components/Wrapper";
import Home from "app/components/Home";
import Search from "app/containers/Search";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header title="Zizoo Boats" />
        <Wrapper>
          <Switch>
            <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home} />
            <Route path="/Search" component={Search} />
          </Switch>
        </Wrapper>
      </BrowserRouter>
    );
  }
}

export default App;
