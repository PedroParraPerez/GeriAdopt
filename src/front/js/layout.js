import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { BlogSection } from "./pages/blogsection.js";
import { Demo } from "./pages/demo";
import { QuienesSomos } from "./pages/QuienesSomos.js";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";

import { Footer } from "./component/footer.js";
import { Adopter } from "./pages/adopter";
import { Navbar } from "./component/navbar";
import { AllDogsList } from "./pages/alldogslist";
import { DetailDog } from "./pages/detaildog";
import { ShelterAnimals } from "./pages/shelterAnimals.js";
import { AllShelterList } from "./pages/allShelters.js";
import { FormRegisterUser } from "./pages/formRegisterUser.js";
import { Login } from "./pages/login";
import { FormRegisterProte } from "./pages/formRegisterProte";

import { BlogArt } from "./pages/blogart.js";
import { BlogNoticias } from "./pages/blognoticias.js";
import { PerfilProtectora } from "./pages/PerfilProtectora";

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
            <Route exact path="/blogsection">
              <BlogSection />
            </Route>
            <Route exact path="/blogart">
              <BlogArt />
            </Route>
            <Route exact path="/blognoticias">
              <BlogNoticias />
            </Route>
            <Route exact path="/quienes-somos">
              <QuienesSomos />
            </Route>
            <Route exact path="/demo">
              <Demo />
            </Route>
            <Route exact path="/detailanimal/:id">
              <DetailDog />
            </Route>
            <Route exact path="/allshelters">
              <AllShelterList />
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
            <Route exact path="/perfil-protectora">
              <PerfilProtectora />
            </Route>
            <Route exact path="/shelteranimals">
              <ShelterAnimals />
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
