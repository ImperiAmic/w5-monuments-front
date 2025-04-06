import { Monument } from "../../types";
import getMonumentDescription from "./getMonumentDescription";
import getMonumentImage from "./getMonumentImage";
import getMonumentLocation from "./getMonumentLocation";
import "./MonumentCard.css";

const getMonumentCard = (monument: Monument): HTMLElement => {
  const monumentCard = document.createElement("article");
  monumentCard.className = "monument-card";

  const monumentName = document.createElement("h2");
  monumentName.className = "monument-name";
  monumentName.textContent = monument.name;

  monumentCard.appendChild(monumentName);

  const MonumentImage = getMonumentImage(monument);
  monumentCard.appendChild(MonumentImage);

  const MonumentDescription = getMonumentDescription(monument);
  monumentCard.appendChild(MonumentDescription);

  const MonumentLocation = getMonumentLocation(monument);
  monumentCard.appendChild(MonumentLocation);

  return monumentCard;
};

export default getMonumentCard;
