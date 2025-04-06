import { Monument } from "../../types";
import getMonumentCard from "../MonumentCard/getMonumentCard";
import "./MonumentsList.css";

const getMonumentsList = (monuments: Monument[]): HTMLElement => {
  const monumentsContainer = document.createElement("div");
  monumentsContainer.className = "monuments-container";

  const monumentsList = document.createElement("ul");
  monumentsList.className = "monuments";

  monuments.forEach((monument) => {
    const monumentWrapper = document.createElement("li");
    monumentWrapper.className = "monument-wrapper";

    const MonumentCard = getMonumentCard(monument);

    monumentWrapper.appendChild(MonumentCard);

    monumentsList.appendChild(monumentWrapper);
  });

  monumentsContainer.appendChild(monumentsList);

  return monumentsContainer;
};

export default getMonumentsList;
