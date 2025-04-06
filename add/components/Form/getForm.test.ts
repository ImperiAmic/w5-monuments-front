import { beforeEach, describe, expect, test } from "vitest";
import getForm from "./getForm";

describe("Given the getForm function", () => {
  describe("Whenit renders", () => {
    const screen = document.createElement("div");
    beforeEach(() => {
      screen.innerHTML = "";
    });

    test("Then it should show 'Fill in all fields to add a new monument' as a fieldset", () => {
      const expectedFiledset = "Fill in all fields to add a new monument";

      const Form = getForm();

      screen.appendChild(Form);
      const fieldset = screen.querySelector("fieldset");

      expect(fieldset).not.toBeNull();
      expect(screen?.textContent).toContain(expectedFiledset);
    });

    test("Then it should show 'Monument Name: ' as an input", () => {
      const expectedInput = "Monument Name: ";

      const Form = getForm();
      screen.appendChild(Form);

      expect(screen.textContent).toContain(expectedInput);
    });

    test("Then it should show 'Monument Description: ' as an input", () => {
      const expectedInput = "Monument Description: ";

      const Form = getForm();
      screen.appendChild(Form);

      expect(screen.textContent).toContain(expectedInput);
    });

    test("Then it should show 'Monument Image URL: ' as an input", () => {
      const expectedInput = "Monument Image URL: ";

      const Form = getForm();
      screen.appendChild(Form);

      expect(screen.textContent).toContain(expectedInput);
    });

    test("Then it should show 'Monument Country: ' as an input", () => {
      const expectedInput = "Monument Country: ";

      const Form = getForm();
      screen.appendChild(Form);

      expect(screen.textContent).toContain(expectedInput);
    });

    test("Then it should show 'Monument City: ' as an input", () => {
      const expectedInput = "Monument City: ";

      const Form = getForm();
      screen.appendChild(Form);

      expect(screen.textContent).toContain(expectedInput);
    });
  });
});
