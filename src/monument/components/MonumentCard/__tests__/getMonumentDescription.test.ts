import { Monument } from "../../../types";
import getMonumentDescription from "../getMonumentDescription";

describe("Given the getMonumentDescription function", () => {
  describe("When it receives Rambla del Poblenou", () => {
    test("Then it should the text 'Rambla del Poblenou is a charming, tree-lined promenade in Barcelona, known for its relaxed vibe, local cafes, modernist buildings, and vibrant mix of culture and community.' as a description", () => {
      const screen = document.createElement("div");

      const poblenouRambla: Monument = {
        city: "",
        country: "",
        description:
          "Rambla del Poblenou is a charming, tree-lined promenade in Barcelona, known for its relaxed vibe, local cafes, modernist buildings, and vibrant mix of culture and community.",
        id: "",
        imageUrl: "",
        name: "",
      };

      const expectedDescription = poblenouRambla.description;

      const poblenouRamblaElement = getMonumentDescription(poblenouRambla);
      screen.appendChild(poblenouRamblaElement);

      expect(screen.textContent).toContain(expectedDescription);
    });
  });
});
