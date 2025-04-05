import { Monument } from "../../types";
import getMonumentImage from "./getMonumentImage";
import "./MonumentCard.css";

const getMonumentCard = (monument: Monument): HTMLElement => {
  const monumentCard = document.createElement("article");
  monumentCard.className = "monument-card";

  const monumentName = document.createElement("h2");
  monumentName.className = "monument-name";
  monumentName.textContent = monument.name;

  monumentCard.appendChild(monumentName);

  const monumentImage = getMonumentImage(monument);
  monumentCard.appendChild(monumentImage);

  return monumentCard;
};

export default getMonumentCard;
