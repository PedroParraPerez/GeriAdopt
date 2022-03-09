const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      URLAPIDOGS:
        "https://3001-sromk-proyectofinalpl-jawiotnf7ic.ws-eu34.gitpod.io/api/",
      allAnimals: [],
      detailAnimal: [],
      logedUser: false, //No indica si hay ALGUN usuario conectado
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
      login: async (email, password) => {
        const response = await fetch(getStore().URLAPIDOGS + "login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        });

        if (response.status == 200) {
          const data = await response.json();
          localStorage.setItem("token", data.token);
          setStore({ logedUser: true });
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
    },
  };
};
//localStorage.getItem("token");
export default getState;
