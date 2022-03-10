import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Home } from "./pages/home";
import { BlogSection } from "./pages/blogsection.js";
import { QuienesSomos } from "./pages/QuienesSomos.js";
import injectContext, { Context } from "./store/appContext";
import { Footer } from "./component/footer.js";
import { PerfilAdopter } from "./pages/PerfilAdopter";
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
import { useContext } from "react";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";
  const { store, actions } = useContext(Context);

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/profile"
              element={
                // store.isShelter ? <PerfilProtectora /> :
                <PerfilAdopter />
              }
            />
            <Route path="/alldogslist" element={<AllDogsList />} />
            <Route path="/blogsection" element={<BlogSection />} />
            <Route path="/blogart" element={<BlogArt />} />
            <Route path="/blognoticias" element={<BlogNoticias />} />
            <Route path="/quienes-somos" element={<QuienesSomos />} />
            <Route path="/detailanimal/:id" element={<DetailDog />} />
            <Route path="/allshelters" element={<AllShelterList />} />
            <Route path="/formregisteruser" element={<FormRegisterUser />} />
            <Route path="/formregisterprote" element={<FormRegisterProte />} />
            <Route path="/shelteranimals" element={<ShelterAnimals />} />
            <Route path="/shelteranimals" element={<ShelterAnimals />} />
            <Route path="*" element={<h1>Not found</h1>}></Route>
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
