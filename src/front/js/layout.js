import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Home } from "./pages/home";
import { BlogSection } from "./pages/blogsection.js";
import { QuienesSomos } from "./pages/QuienesSomos.js";
import injectContext from "./store/appContext";
import { Footer } from "./component/footer.js";
import { PerfilAdopter } from "./pages/PerfilAdopter";
import { Navbar } from "./component/navbar";
import { AllDogsList } from "./pages/alldogslist";
import { DetailDog } from "./pages/detaildog";
import { LandingShelter } from "./pages/landingShelter.js";
import { AllShelterList } from "./pages/allShelters.js";
import { FormRegisterUser } from "./pages/formRegisterUser.js";
import { Login } from "./pages/login";
import { FormRegisterProte } from "./pages/formRegisterProte";
import { BlogArt } from "./pages/blogart.js";
import { BlogNoticias } from "./pages/blognoticias.js";
import { PerfilProtectora } from "./pages/PerfilProtectora";

import { FormRegisterAnimal } from "./pages/formRegisterAnimal";

const Layout = () => {
  const basename = process.env.BASENAME || "";

  // Validación para mostrar page perfil adoptante o de protectora
  const [validation, setValidation] = useState(false);
  useEffect(() => {
    setValidation(JSON.parse(localStorage.getItem("isShelter")));
  });

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            {validation === true ? (
              <Route path="/profile" element={<PerfilProtectora />} />
            ) : (
              <Route path="/profile" element={<PerfilAdopter />} />
            )}
            <Route path="/alldogslist" element={<AllDogsList />} />
            <Route path="/blogsection" element={<BlogSection />} />
            <Route path="/blogart" element={<BlogArt />} />
            <Route path="/blognoticias" element={<BlogNoticias />} />
            <Route path="/quienes-somos" element={<QuienesSomos />} />
            <Route path="/detailanimal/:id" element={<DetailDog />} />
            <Route path="/allshelters" element={<AllShelterList />} />
            <Route path="/formregisteruser" element={<FormRegisterUser />} />
            <Route path="/formregisterprote" element={<FormRegisterProte />} />
            <Route
              path="/formregisteranimal"
              element={<FormRegisterAnimal />}
            />
            <Route path="/landingshelter" element={<LandingShelter />} />
            <Route path="*" element={<h1>Not found</h1>}></Route>
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
