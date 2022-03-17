const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      URLAPIDOGS:
        "https://3001-sromk-proyectofinalpl-3l24yedv65r.ws-eu38.gitpod.io/api/",
      allAnimals: [],
      allShelters: [],
      detailAnimal: [],
      isShelter: false, //false = Adopter ; true = Shelter
      detailUser: [],
      AdopterInfo: [], //MAPEO DE LA VARIBLE EN EL PERFIL DE PERFIL
      animalcreated: false,
    },
    actions: {
      // Obtener un listado de TODOS los animales
      getAllAnimal: async () => {
        const response = await fetch(getStore().URLAPIDOGS + "animal");
        const data = await response.json();
        setStore({ allAnimals: data.results });
      },
      // Obtener un listado de TODAS las protectoras
      getAllShelters: async () => {
        const response = await fetch(getStore().URLAPIDOGS + "shelters");
        const data = await response.json();
        setStore({ allShelters: [...data.results] });
      },
      // Obtener toda la información de un solo animal
      getDetailOfOneAnimal: async (id) => {
        const response = await fetch(
          getStore().URLAPIDOGS + "detailanimal/".concat(id)
        );
        const data = await response.json();
        setStore({ detailAnimal: data.results });
      },
      // Iniciar sesión
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
      // Desconexion de la cuenta
      logout: () => {
        localStorage.removeItem("token");
        localStorage.removeItem("isShelter");
        window.location.reload(false);
      },
      // Registro de adoptante
      registerUser: async (user) => {
        const response = await fetch(getStore().URLAPIDOGS + "signup", {
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
      // Registro de protectora
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
      // Creación de animal
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

      favanimal: async (animalId) => {
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
          const data = await response.json();
        } else {
          alert("Ya hay una protectora registrada con ese email");
        }
      },
      //Validacion de usuario con Token
      getUserInformation: async () => {
        const response = await fetch(getStore().URLAPIDOGS + "user", {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        const data = await response.json();
        setStore({ AdopterInfo: data });
        console.log(data); // informacion del usuario que inicio sesion
      },
      //Validacion de protectora con Token
      getShelterInformation: async () => {
        const response = await fetch(getStore().URLAPIDOGS + "shelter", {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        const data = await response.json();
        console.log(data); // informacion de la protectora que inicio sesion
      },
    },
  };
};

export default getState;
