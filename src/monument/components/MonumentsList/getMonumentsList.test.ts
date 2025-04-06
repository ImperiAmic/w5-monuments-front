import { Monument } from "../../types";
import getMonumentsList from "./getMonumentsList";

describe("Given the getMonumentsList function", () => {
  describe("When it receives Vilafranca del Penedès' Santa Maria Basilic, Vinseum and Ajuntament monuments", () => {
    test("Then it should show 'Capella Sant Joan', 'VINSEUM: Museu de les Cultures del Vi de Catalunya' and  'Ajuntament de Vilafranca' inside a heading", () => {
      const vilafrancaMonuments: Monument[] = [
        {
          city: "",
          country: "",
          description: "",
          id: "",
          imageUrl: "",
          name: "Capella Sant Joan",
        },
        {
          city: "",
          country: "",
          description: "",
          id: "",
          imageUrl: "",
          name: "VINSEUM: Museu de les Cultures del Vi de Catalunya",
        },
        {
          city: "",
          country: "",
          description: "",
          id: "",
          imageUrl: "",
          name: "Ajuntament de Vilafranca",
        },
      ];

      const vilafrancaMonumentsList = getMonumentsList(vilafrancaMonuments);

      const screen = document.createElement("div");
      screen.appendChild(vilafrancaMonumentsList);

      const vilafrancaMonumentNames = screen.querySelectorAll("h2");

      vilafrancaMonumentNames.forEach((vilafrancaMonumentName, position) => {
        expect(vilafrancaMonumentName.textContent).toBe(
          vilafrancaMonuments[position].name,
        );
      });
    });
  });
});
