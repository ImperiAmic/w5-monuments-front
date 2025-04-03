import getApp from "./getApp";

describe("Given the getApp function", () => {
  describe("When it renders", () => {
    test("Then it should show 'Monuments - Backoffice' as a heading", () => {
      const screen = document.createElement("div");
      const expectAppTitle = "Monuments - Backoffice";

      const App = getApp();

      screen.appendChild(App);

      const appName = screen.querySelector("h1");

      expect(appName).not.toBeNull();
      expect(appName?.textContent).toBe(expectAppTitle);
    });
  });
});
