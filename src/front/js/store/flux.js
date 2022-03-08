const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      URLAPIDOGS:
        "https://3001-sromk-proyectofinalpl-gs9jblaj5kj.ws-eu34xl.gitpod.io/api/",
      allAnimals: [],
      detailAnimal: [],
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
        const response = await fetch(getStore().URLAPIDOGS + "user/", {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        const data = await response.json();
        console.log(data); // informacion del usuario que inicio sesion
      },
      login: async (username, password) => {
        const response = await fetch(getStore().URLAPIDOGS + "login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            username: username,
            password: password,
          }),
        });
        const data = await response.json();
        localStorage.setItem("token", data.token);
      },
    },
  };
};

export default getState;
