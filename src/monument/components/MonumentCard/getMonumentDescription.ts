import { Monument } from "../../types";

const getMonumentDescription = (monument: Monument): HTMLElement => {
  const monumentDescription = document.createElement("p");
  monumentDescription.className = "monument-description";

  monumentDescription.textContent = monument.description;

  return monumentDescription;
};

export default getMonumentDescription;
