import { Monument } from "../../../types";
import getMonumentImage from "../getMonumentImage";

describe("Given the getImageFunction", () => {
  describe("When it receives Sagrada Família", () => {
    test("Then it should show an image with 'La Sagrada Família és una puta passada' as an alt description", () => {
      const expectedDescription = "General view of Sagrada Família";

      const screen = document.createElement("div");

      const sagradaFamilia: Monument = {
        city: "",
        country: "",
        description: "",
        id: "",
        imageUrl: "",
        name: "Sagrada Família",
      };

      const SagradaFamilia = getMonumentImage(sagradaFamilia);
      screen.appendChild(SagradaFamilia);

      const sagradaFamiliaImage = screen.querySelector("img");

      expect(sagradaFamiliaImage).not.toBeNull();
      expect(sagradaFamiliaImage?.alt).toBe(expectedDescription);
    });
  });
});
