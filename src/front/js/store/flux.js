const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      URLAPIDOGS:
        "https://3001-sromk-proyectofinalpl-trwe44w0qq3.ws-eu34.gitpod.io/api/",
      allAnimals: [],
      detailAnimal: [],
      logedUser: false, //No indica si hay ALGUN usuario conectado
      isShelter: false,
    },
    actions: {
      getAllAnimal: async () => {
        const response = await fetch(getStore().URLAPIDOGS + "animal");
        const data = await response.json();
        setStore({ allAnimals: data.results });
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
        console.log(type);
        if (response.status == 200) {
          const data = await response.json();
          localStorage.setItem("token", data.token);
          setStore({ logedUser: true, isShelter: data.type });
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
        console.log("Esta ejecutando el fetch");
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
          setStore({ logedUser: data.token });
        } else {
          alert("Ya hay una protectora registrada con ese email");
        }
      },
      getUserInformation: async () => {
        const response = await fetch(getStore().URLAPIDOGS + "user", {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        const data = await response.json();
        console.log(data); // informacion del usuario que inicio sesion
      },
      getShelterInformation: async () => {
        const response = await fetch(getStore().URLAPIDOGS + "shelter", {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        const data = await response.json();
        console.log(data); // informacion del usuario que inicio sesion
      },
    },
  };
};
//localStorage.getItem("token");
export default getState;
