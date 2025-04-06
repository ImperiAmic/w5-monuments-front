import "./App.css";
import getForm from "../Form/getForm";
import getHeader from "../../../src/components/Header/getHeader";
const getApp = (): HTMLElement => {
  const mainContainer = document.createElement("div");
  mainContainer.className = "main-container";

  const Header = getHeader();
  mainContainer.appendChild(Header);

  const Form = getForm();
  mainContainer.appendChild(Form);

  return mainContainer;
};

export default getApp;
