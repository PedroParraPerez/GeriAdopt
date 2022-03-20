const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      URLAPIDOGS:
        "https://3001-sromk-proyectofinalpl-w200me8eqyg.ws-eu38.gitpod.io/api/",
      allAnimals: [], //Todos los animales
      allShelters: [], //Todas las protectoras
      detailAnimal: [], //Info de 1 solo animal
      isShelter: false, //false = Adopter ; true = Shelter
      validationToken: [], //validacion del token
      animalcreated: false, // variable de control para la creacion de animales
      favlist: [], // Info de la lista de favoritos de un adoptante
      controlfav: undefined,
      adopterInfo: [],
      shelterInfo: [],
    },
    actions: {
      //.....................Login, LogOut RegisterUser, RegisterShelter, RegisterAnimal ........................................    //

      login: async (email, password, type) => {
        const response = await fetch(getStore().URLAPIDOGS + "login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
            type: type,
          }),
        });
        if (response.status == 200) {
          const data = await response.json();
          setStore({
            currentMember: [data.user],
          });
          localStorage.setItem("token", data.token);
          localStorage.setItem("isShelter", data.type);
          return true;
        } else {
          alert("Contraseña o usuario incorrectos");
          return false;
        }
      },

      logout: () => {
        localStorage.removeItem("token");
        localStorage.removeItem("isShelter");
        window.location.reload(false);
      },

      registerUser: async (user) => {
        const response = await fetch(getStore().URLAPIDOGS + "signupadopter", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(user),
        });
        if (response.status == 201) {
          const data = await response.json();
          setStore({
            currentMember: [data.user],
          });
          localStorage.setItem("token", data.token);
          localStorage.setItem("isShelter", false);
          return true;
        } else {
          alert("Ya hay un usuario registrado con ese email");
          return false;
        }
      },

      registerShelter: async (shelter) => {
        const response = await fetch(getStore().URLAPIDOGS + "signupshelter", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(shelter),
        });

        if (response.status == 201) {
          const data = await response.json();
          localStorage.setItem("token", data.token);
          localStorage.setItem("isShelter", true);
          window.location.reload(false);
        } else {
          alert("Ya hay una protectora registrada con ese email");
        }
      },

      registerAnimal: async (animal) => {
        const response = await fetch(getStore().URLAPIDOGS + "registeranimal", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify(animal),
        });

        if (response.status == 200) {
          const data = await response.json();
          // setStore({ animalcreated: !animalcreated });
          alert("animal creado");
          window.location.reload(false);
        } else {
          alert("Ya hay una protectora registrada con ese email");
        }
      },

      // ................... Obtener info de: TODOS los animales, UN SOLO animal,  TODAS las protectora.............................

      getAllAnimal: async () => {
        const response = await fetch(getStore().URLAPIDOGS + "allanimals");
        const data = await response.json();
        setStore({ allAnimals: data.results });
      },

      getAllShelters: async () => {
        const response = await fetch(getStore().URLAPIDOGS + "allshelters");
        const data = await response.json();
        setStore({ allShelters: [...data.results] });
      },

      getDetailOfOneAnimal: async (id) => {
        const response = await fetch(
          getStore().URLAPIDOGS + "detailanimal/".concat(id)
        );
        const data = await response.json();
        setStore({ detailAnimal: data.results });
      },
      //..................................Obtener info de individual de ADOPTANTE Y PROTECTORA para perfil

      getAdopterInfo: async () => {
        const response = await fetch(getStore().URLAPIDOGS + "adopterinfo", {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        const data = await response.json();
        setStore({ adopterInfo: data.results });
      },
      getShelterInfo: async () => {
        const response = await fetch(getStore().URLAPIDOGS + "shelterinfo", {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        const data = await response.json();
        setStore({ shelterInfo: data.results });
      },

      // ................Añadir(y quitar) a favoritos, Obtener TODOS los favoritos de 1 adopter ..............................

      saveFavAnimal: async (animalId) => {
        const response = await fetch(
          getStore().URLAPIDOGS + "favanimal/" + animalId,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );

        if (response.status == 200) {
          alert("Añadido a me gusta");
          setStore({ controlfav: Math.random() });
          console.log(getStore().controlfav);
        } else {
          alert("Nose ha podido añadir a me gusta");
        }
      },
      getfavlist: async () => {
        const response = await fetch(getStore().URLAPIDOGS + "user/favlist", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        if (response.ok) {
          const data = await response.json();
          setStore({ favlist: data });
        }
      },

      //............................ Validacion de token con la informacion de la protectora y adoptante....................................

      //Validacion de adopter con Token
      getUserInformation: async () => {
        const response = await fetch(getStore().URLAPIDOGS + "user", {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setStore({ validationToken: data });
        }
      },
      //Validacion de protectora con Token
      getShelterInformation: async () => {
        const response = await fetch(getStore().URLAPIDOGS + "shelter", {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        if (response.ok) {
          const data = await response.json();
          setStore({ validationToken: data });
        }
      },
    },
  };
};

export default getState;
