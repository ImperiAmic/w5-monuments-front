import { Monument } from "../../../types";
import getMonumentCard from "../getMonumentCard";

describe("Given the getMonumentCard function", () => {
  describe("When it receives Vilafranca del Penedès' Santa Maria Basilic", () => {
    const santaMaria: Monument = {
      city: "Vilafranca del Penedès",
      country: "Is Pain",
      description: "Maravillosa la iglesia hoygan",
      id: "",
      imageUrl: "",
      name: "Basílica de Santa María",
    };

    const screen = document.createElement("div");
    beforeEach(() => {
      screen.innerHTML = "";
    });

    test("Then it should show 'Basílica de Santa María' as a heading", () => {
      const expectedName = santaMaria.name;

      const santaMariaCard = getMonumentCard(santaMaria);
      screen.appendChild(santaMariaCard);

      const headingElement = santaMariaCard.querySelector("h2");

      expect(headingElement?.textContent).toBe(expectedName);
    });

    test("Then it should show the text 'Maravillosa la iglesia hoygan' as a description", () => {
      const expectedDescription = santaMaria.description;

      const santaMariaCard = getMonumentCard(santaMaria);
      screen.appendChild(santaMariaCard);

      expect(screen?.textContent).toContain(expectedDescription);
    });

    test("Then it should an image with 'General view of Basílica de Santa María' as an alt description", () => {
      const expectedImageDescription = `General view of ${santaMaria.name}`;

      const SagradaFamilia = getMonumentCard(santaMaria);
      screen.appendChild(SagradaFamilia);

      const sagradaFamiliaImage = screen.querySelector("img");

      expect(sagradaFamiliaImage).not.toBeNull();
      expect(sagradaFamiliaImage?.alt).toBe(expectedImageDescription);
    });

    test("Then it should show 'Is Pain' as a country", () => {
      const expectedLocationCountry = `Country: ${santaMaria.country}`;

      const duomoLocation = getMonumentCard(santaMaria);
      screen.appendChild(duomoLocation);

      expect(duomoLocation.textContent).toContain(expectedLocationCountry);
    });

    test("Then it should show 'Vilafranca del Penedès' as a city", () => {
      const expectedLocationCity = `City: ${santaMaria.city}`;

      const duomoLocation = getMonumentCard(santaMaria);
      screen.appendChild(duomoLocation);

      expect(duomoLocation.textContent).toContain(expectedLocationCity);
    });
  });
});
