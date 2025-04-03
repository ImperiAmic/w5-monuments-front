import getHeader from "./getHeader";

describe("Given the getHeader function", () => {
  describe("When it renders", () => {
    test("Then it should show 'Monuments - Backoffice' inside a heading", () => {
      const screen = document.createElement("div");
      const expectedTitle = "Monuments - Backoffice";

      const Header = getHeader();

      screen.appendChild(Header);

      const appName = screen.querySelector("h1");

      expect(appName).not.toBeNull();
      expect(appName?.textContent).toBe(expectedTitle);
    });
  });
});
