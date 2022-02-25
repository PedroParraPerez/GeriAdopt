import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";

import { Footer } from "./component/footer.js";
import { Adopter } from "./pages/adopter";
import { Navbar } from "./component/navbar";
import { AllDogsList } from "./pages/alldogslist";
import { DetailDog } from "./pages/detaildog";
import { FormRegisterUser } from "./pages/formRegisterUser.js";
import { Login } from "./pages/login";
import { FormRegisterProte } from "./pages/formRegisterProte";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/adopter">
              <Adopter />
            </Route>
            <Route exact path="/alldogslist">
              <AllDogsList />
            </Route>
            <Route exact path="/demo">
              <Demo />
            </Route>
            <Route exact path="/detaildog">
              <DetailDog />
            </Route>
            <Route exact path="/formregisteruser">
              <FormRegisterUser />
            </Route>
            <Route exact path="/formregisterprote">
              <FormRegisterProte />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/single/:theid">
              <Single />
            </Route>
            <Route>
              <h1>Not found!</h1>
            </Route>
          </Switch>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
