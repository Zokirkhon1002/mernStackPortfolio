/* eslint-disable arrow-body-style */
/* eslint-disable quotes */
import React from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import PostDetails from "./components/PostDetails/PostDetails";
import CreatorOrTag from "./components/CreatorOrTag/CreatorOrTag";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Help from "./components/Help/Help";
import Error from "./components/404/Error";

const App = () => {
  const user = JSON.parse(localStorage.getItem("profile"));
  return (
    <BrowserRouter>
      <Container maxWidth="xl">
        <Navbar />
        <Switch>
          <Route path="/" exact component={() => <Redirect to="/posts" />} />
          <Route path="/posts" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/help" exact component={Help} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/posts/search" exact component={Home} />
          <Route path="/posts/:id" exact component={PostDetails} />
          <Route
            path={["/creators/:name", "/tags/:name"]}
            exact
            component={CreatorOrTag}
          />
          <Route
            path="/auth"
            exact
            component={() => (!user ? <Auth /> : <Redirect to="/posts" />)}
          />
          <Route path="*">
            <Error />
          </Route>
        </Switch>
        <Footer />
      </Container>
    </BrowserRouter>
  );
};

export default App;
