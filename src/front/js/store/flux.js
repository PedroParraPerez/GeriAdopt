const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      URLAPIDOGS:
        "https://3001-sromk-proyectofinalpl-fne4f6f8sur.ws-eu34.gitpod.io/api/",
      allAnimals: [],
      allShelters: [],
      detailAnimal: [],
      logedUser: false, //No indica si hay ALGUN usuario conectado
      isShelter: false, //false = Adopter ; true = Shelter
      detailUser: [],
      currentMember: [], //MAPEO DE LA VARIBLE EN EL PERFIL DE PERFIL
      animalcreated: false,
    },
    actions: {
      getAllAnimal: async () => {
        const response = await fetch(getStore().URLAPIDOGS + "animal");
        const data = await response.json();
        setStore({ allAnimals: data.results });
      },
      getAllShelters: async () => {
        const response = await fetch(getStore().URLAPIDOGS + "shelters");
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
          localStorage.setItem("token", data.token);
          setStore({ isShelter: data.type });
          localStorage.setItem("isShelter", getStore().isShelter);
          setStore({ logedUser: true });
          setStore({ currentMember: [data.user] });
        } else {
          alert("Contraseña o usuario incorrectos");
        }
      },
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
          localStorage.setItem("token", data.token);
          setStore({ logedUser: data.token });
        } else {
          alert("Ya hay un usuario registrado con ese email");
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
          setStore({ logedUser: data.token, isShelter: true });
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
          },
          body: JSON.stringify(animal),
        });

        if (response.status == 200) {
          const data = await response.json();
          setStore({ animalcreated: !animalcreated });
          alert("animal creado");
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
        setStore({ detailUser: data });
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
