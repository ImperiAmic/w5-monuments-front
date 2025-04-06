import { Monument } from "../../../types";
import getMonumentImage from "../getMonumentImage";

describe("Given the getImageFunction", () => {
  describe("When it receives Sagrada Família", () => {
    test("Then it should show an image with 'La Sagrada Família és una puta passada' as an alt description", () => {
      const screen = document.createElement("div");

      const sagradaFamilia: Monument = {
        city: "",
        country: "",
        description: "",
        id: "",
        imageUrl: "",
        name: "Sagrada Família",
      };

      const expectedImageDescription = `General view of ${sagradaFamilia.name}`;

      const SagradaFamilia = getMonumentImage(sagradaFamilia);
      screen.appendChild(SagradaFamilia);

      const sagradaFamiliaImage = screen.querySelector("img");

      expect(sagradaFamiliaImage).not.toBeNull();
      expect(sagradaFamiliaImage?.alt).toBe(expectedImageDescription);
    });
  });
});
