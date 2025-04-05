import "./Header.css";

const getHeader = (): HTMLElement => {
  const header = document.createElement("header");
  header.classList.add("main-header");

  header.innerHTML = `
    <div class='header-container'>
      <h1 class='main-title'>Monuments - Backoffice</h1>
      <nav>
        <ul class='header-navigation'>
          <li>
            <a class='header-navigation__link header-navigation__link--active' href='/'>Monuments</a>
          </li>
          <li>
          <a class='header-navigation__link' href='/add-monument'>Add Monument</a>
          </li>
        </ul>
      </nav>
    </div>`;

  const links = header.querySelectorAll("a");

  links.forEach((navigationElement) => {
    const userUrlLocation = window.location.href;
    const linkElementUrl = navigationElement.href;

    if (userUrlLocation === linkElementUrl) {
      navigationElement.classList.add("header-navigation__link--active");
    }

    if (userUrlLocation !== linkElementUrl) {
      navigationElement.classList.remove("header-navigation__link--active");
    }
  });

  return header;
};

export default getHeader;
