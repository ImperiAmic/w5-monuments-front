import { Monument } from "../../../types";
import getMonumentLocation from "../getMonumentLocation";

describe("Given the getLocationMonument function", () => {
  describe("Whn it receives the Milano's Duomo monument", () => {
    test("Then it should show 'Italy' as a country and 'Milano' as a city", () => {
      const screen = document.createElement("div");

      const expectedLoctionItems = ["Country: Italy", "City: Milano"];

      const duomo: Monument = {
        city: "Milano",
        country: "Italy",
        description: "",
        id: "",
        imageUrl: "",
        name: "",
      };

      const Duomo = getMonumentLocation(duomo);
      screen.appendChild(Duomo);

      const locationMonument = screen.querySelector("div");
      const locationMonumentDetails = screen.querySelectorAll("span");

      expect(locationMonument).not.toBeNull();

      locationMonumentDetails.forEach((locationMonumentDetail, position) => {
        expect(locationMonumentDetail.textContent).toBe(
          expectedLoctionItems[position],
        );
      });
    });
  });
});
