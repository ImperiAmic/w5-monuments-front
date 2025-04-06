import { Monument } from "../../types";

const getMonumentLocation = (monument: Monument): HTMLElement => {
  const locationContainer = document.createElement("div");
  locationContainer.className = "monument-location";

  const monumentCountry = monument.country;
  const monumentCity = monument.city;

  const monumentCountryElement = document.createElement("span");
  monumentCountryElement.className = "monument-location__details";

  const monumentCityElement = document.createElement("span");
  monumentCityElement.className = "monument-location__details";

  monumentCountryElement.textContent = `Country: ${monumentCountry}`;
  monumentCityElement.textContent = `City: ${monumentCity}`;

  locationContainer.appendChild(monumentCountryElement);
  locationContainer.appendChild(monumentCityElement);

  return locationContainer;
};

export default getMonumentLocation;
