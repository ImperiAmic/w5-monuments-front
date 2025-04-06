import { Monument } from "../../../types";
import getMonumentLocation from "../getMonumentLocation";

describe("Given the getLocationMonument function", () => {
  describe("When it receives the Milano's Duomo monument", () => {
    const screen = document.createElement("div");

    beforeEach(() => {
      screen.innerHTML = "";
    });

    const duomo: Monument = {
      city: "Milano",
      country: "Italy",
      description: "",
      id: "",
      imageUrl: "",
      name: "",
    };

    test("Then it should show 'Italy' as a country", () => {
      const expectedLocationCountry = `Country: ${duomo.country}`;

      const duomoLocation = getMonumentLocation(duomo);
      screen.appendChild(duomoLocation);

      expect(duomoLocation.textContent).toContain(expectedLocationCountry);
    });

    test("Then it should show 'Milano' as a city", () => {
      const expectedLocationCity = `City: ${duomo.city}`;

      const duomoLocation = getMonumentLocation(duomo);
      screen.appendChild(duomoLocation);

      expect(duomoLocation?.textContent).toContain(expectedLocationCity);
    });
  });
});
