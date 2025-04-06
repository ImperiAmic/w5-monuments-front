import "./styles.css";
import "@fontsource-variable/roboto/wdth.css";
import getApp from "./components/App/getApp";

const rootElement = document.querySelector(".root");

if (!rootElement) {
  throw new Error("Missing root element");
}

const App = getApp();

rootElement.appendChild(App);
