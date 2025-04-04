import "./Header.css";

const getHeader = (): HTMLElement => {
  const Header = document.createElement("header");
  Header.classList.add("main-header");

  Header.innerHTML = `
    <div class='header-container'>
      <h1 class='main-title'>Monuments - Backoffice</h1>
      <nav>
        <ul class='navigation-elements'>
          <li>
            <a class='navigation-element navigation-element--active' href='/'>Monuments</a>
          </li>
          <li>
          <a class='navigation-element' href='/add-monument'>Add Monument</a>
          </li>
        </ul>
      </nav>
    </div>`;

  const links = Header.querySelectorAll("a");

  links.forEach((navigationElement) => {
    const userUrlLocation = window.location.href;
    const linkElementUrl = navigationElement.href;

    if (userUrlLocation === linkElementUrl) {
      navigationElement.classList.add("navigation-element--active");
    }

    if (userUrlLocation !== linkElementUrl) {
      navigationElement.classList.remove("navigation-element--active");
    }
  });

  return Header;
};

export default getHeader;
