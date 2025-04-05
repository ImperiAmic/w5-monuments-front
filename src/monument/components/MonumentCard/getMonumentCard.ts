import { Monument } from "../../types";

const getMonumentCard = (monument: Monument): HTMLElement => {
  const MonumentCard = document.createElement("article");
  MonumentCard.className = "monument-card";

  const MonumentName = document.createElement("h2");
  MonumentName.className = "monument-name";
  MonumentName.textContent = monument.name;

  MonumentCard.appendChild(MonumentName);

  return MonumentCard;
};

export default getMonumentCard;
