import "./App.css";
import getHeader from "../Header/getHeader";
import monuments from "../../monument/data/monuments";
import getMonumentsList from "../../monument/components/MonumentsList/getMonumentsList";

const getApp = (): HTMLElement => {
  const mainContainer = document.createElement("div");
  mainContainer.className = "main-container";

  const Header = getHeader();
  mainContainer.appendChild(Header);

  const MonumentsList = getMonumentsList(monuments);
  mainContainer.appendChild(MonumentsList);

  return mainContainer;
};

export default getApp;
