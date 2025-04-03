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
          <a class='navigation-element navigation-element--active' href='/monuments'>Monuments</a>
        </li>
        <li>
         <a class='navigation-element' href='/add-monument'>Add Monument</a>
        </li>
      </ul>
    </nav>
  </div>`;

  const navigationElements = Header.querySelectorAll("a");

  navigationElements.forEach((navigationElement) => {
    const userPathLocation = window.location.pathname;
    const linkElementPath = navigationElement.getAttribute("href");

    if (userPathLocation === linkElementPath) {
      navigationElement.classList.add("navigation-element--active");
    }

    if (userPathLocation !== linkElementPath) {
      navigationElement.classList.remove("navigation-element--active");
    }
  });

  return Header;
};

export default getHeader;
