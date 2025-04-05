import getHeader from "./getHeader";

describe("Given the getHeader function", () => {
  describe("When it renders", () => {
    const screen = document.createElement("div");
    beforeEach(() => {
      screen.innerHTML = "";
    });

    test("Then it should show 'Monuments - Backoffice' inside a heading", () => {
      const expectedTitle = "Monuments - Backoffice";

      const Header = getHeader();

      screen.appendChild(Header);

      const appName = screen.querySelector("h1");

      expect(appName).not.toBeNull();
      expect(appName?.textContent).toBe(expectedTitle);
    });

    test("Then it should show 'Monuments' as a link", () => {
      const expectedLink = "Monuments";

      const Header = getHeader();

      screen.appendChild(Header);

      const links = Array.from(screen.querySelectorAll("a"));
      const filteredLink = links.filter(
        (anchor) => anchor.textContent === expectedLink,
      );
      const monumentLinkText = filteredLink[0].textContent;

      expect(monumentLinkText).toBe(expectedLink);
    });

    test("Then it should show 'Add Monument' as a link", () => {
      const expectedLink = "Add Monument";

      const Header = getHeader();

      screen.appendChild(Header);

      const links = Array.from(screen.querySelectorAll("a"));
      const filteredLink = links.filter(
        (anchor) => anchor.textContent === expectedLink,
      );
      const monumentLinkText = filteredLink[0].textContent;

      expect(monumentLinkText).toBe(expectedLink);
    });
  });
});
