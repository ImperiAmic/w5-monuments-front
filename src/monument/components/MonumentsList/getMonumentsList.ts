import { Monument } from "../../types";
import getMonumentCard from "../MonumentCard/getMonumentCard";
import "./MonumentsList.css";

const getMonumentsList = (monuments: Monument[]): HTMLElement => {
  const MonumentsList = document.createElement("ul");
  MonumentsList.className = "monuments";

  monuments.forEach((monument) => {
    const MonumentWrapper = document.createElement("li");
    MonumentWrapper.className = "monument-wrapper";

    const MonumentCard = getMonumentCard(monument);

    MonumentWrapper.appendChild(MonumentCard);

    MonumentsList.appendChild(MonumentWrapper);
  });

  return MonumentsList;
};

export default getMonumentsList;
