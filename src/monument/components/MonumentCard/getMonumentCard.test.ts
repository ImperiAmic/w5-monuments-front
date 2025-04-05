import { Monument } from "../../types";
import getMonumentCard from "./getMonumentCard";

describe("Given the getMonumentCard function", () => {
  describe("When it receives Vilafranca del Penedès' Santa Maria Basilic", () => {
    test("Then it should show 'Basílica de Santa María' as a heading", () => {
      const expectedName = "Basílica de Santa María";

      const santaMaria: Monument = {
        city: "",
        country: "",
        description: "",
        id: "",
        imageUrl: "",
        name: "Basílica de Santa María",
      };

      const screen = document.createElement("div");
      const santaMariaCard = getMonumentCard(santaMaria);
      screen.appendChild(santaMariaCard);

      const headingElement = santaMariaCard.querySelector("h2");

      expect(headingElement?.textContent).toBe(expectedName);
    });
  });
});
