import getMonuments from "../client/getMonuments";

const monuments = await getMonuments(
  "https://imperiamic-monuments-back.onrender.com/monuments",
);

export default monuments;
