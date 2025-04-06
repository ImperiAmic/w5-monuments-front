import { Monument } from "../../../types";
import getMonumentDescription from "../getMonumentDescription";

describe("Given the getMonumentDescription function", () => {
  describe("When it receives Rambla del Poblenou", () => {
    test("Then it should the pharagraph 'Rambla del Poblenou is a charming, tree-lined promenade in Barcelona, known for its relaxed vibe, local cafes, modernist buildings, and vibrant mix of culture and community.' as a description", () => {
      const expectedDescription =
        "Rambla del Poblenou is a charming, tree-lined promenade in Barcelona, known for its relaxed vibe, local cafes, modernist buildings, and vibrant mix of culture and community.";

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

      const PoblenouRambla = getMonumentDescription(poblenouRambla);
      screen.appendChild(PoblenouRambla);

      const poblenouRamblaDescription = screen.querySelector("p");

      expect(poblenouRamblaDescription).not.toBeNull();
      expect(poblenouRamblaDescription?.textContent).toBe(expectedDescription);
    });
  });
});
