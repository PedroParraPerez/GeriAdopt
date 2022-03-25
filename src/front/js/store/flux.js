const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      URLAPIDOGS:
        "https://3001-sromk-proyectofinalpl-8cnn4wumunq.ws-eu38.gitpod.io/api/",
      allAnimals: [], //Todos los animales
      allShelters: [], //Todas las protectoras
      detailAnimal: [], //Info de 1 solo animal
      isShelter: false, //false = Adopter ; true = Shelter
      validationToken: [], //validacion del token

      favlist: [], // Info de la lista de favoritos de un adoptante
      adopterInfo: [],
      shelterInfo: [],
      filteranimals: [],
      animalsInMyShelter: [],
      isloged: false,
      shelterInfoForViewAdopter: [],
      animalsInShelterForViewAdopter: [],
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
          setStore({ isloged: true });

          localStorage.setItem("token", data.token);
          localStorage.setItem("isShelter", data.type);
          if (data.type == false) {
            localStorage.setItem("isAdopter", true);
          }
          return true;
        } else {
          alert("Contraseña o usuario incorrectos");
          return false;
        }
      },

      logout: () => {
        localStorage.removeItem("token");
        localStorage.removeItem("isShelter");
        localStorage.removeItem("isAdopter");
        setStore({ isloged: false });
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
          setStore({ isloged: true });
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
          setStore({ isloged: true });
          return true; //Variable de control para el navigate si todo sale bien
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
          alert("animal creado");
        } else {
          alert("Falta un campo por especificar");
        }
      },
      // ...............................EDITAR DETERMINADOS VALORES DE LAS BASES DE DATOS............................................................

      editInfoAdopter: async (info) => {
        const response = await fetch(
          getStore().URLAPIDOGS + "editinfoadpoter",
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            body: JSON.stringify(info),
          }
        );
      },
      editInfoShelter: async (info) => {
        const response = await fetch(
          getStore().URLAPIDOGS + "editinfoshelter",
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            body: JSON.stringify(info),
          }
        );
      },

      editInfoAnimal: async (info, id) => {
        const response = await fetch(
          getStore().URLAPIDOGS + "editinfoanimal/" + id,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            body: JSON.stringify(info),
          }
        );
      },
      deleteAnimal: async (id) => {
        const response = await fetch(
          getStore().URLAPIDOGS + "deleteanimal/" + id,
          {
            method: "DELETE",
          }
        );
        if (response.ok) {
          getActions().getAnimalsOfMyShelter();
        } else {
          alert("No se ha podido borrar el animal");
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

      getAnimalsOfMyShelter: async () => {
        const response = await fetch(getStore().URLAPIDOGS + "profile/animal", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        const data = await response.json();

        setStore({ animalsInMyShelter: data.results });
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

      // .................Obtener info y aniamls for ladingShelter.........................................

      getShelterInfoForViewAdopter: async (id) => {
        const response = await fetch(
          getStore().URLAPIDOGS + "shelterinfoforviewadopter/" + id,
          {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          }
        );
        const data = await response.json();
        setStore({ shelterInfoForViewAdopter: data.results });
      },

      getAnimalsInShelterForViewAdopter: async (id) => {
        const response = await fetch(
          getStore().URLAPIDOGS + "animalsforviewadopter/" + id,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          }
        );
        const data = await response.json();

        setStore({ animalsInShelterForViewAdopter: data.results });
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
          getActions().getfavlist();
          const blabla = await response.json();
          return blabla.response;
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

      // .................................Barra de filtrado .........................................................

      filteranimals: async (filter) => {
        const response = await fetch(getStore().URLAPIDOGS + "filteranimals", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(filter),
        });
        if (response.ok) {
          const data = await response.json();
          setStore({ allAnimals: data.results });
        }
      },

      //............................ Validacion de token con la informacion de la protectora y adoptante....................................

      // Validacion de adopter con Token
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
