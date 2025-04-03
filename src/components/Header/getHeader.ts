import "./Header.css";

const getHeader = (): HTMLElement => {
  const Header = document.createElement("header");
  Header.classList.add("main-header");

  Header.innerHTML = `<h1 class='main-title'>Monuments - Backoffice</h1>
  <nav>
    <ul class='navigation-elements'>
      <li class='navigation-element'>
        <a href='/monuments'>Monuments</a>
      </li>
      <li class='navigation-element'>
        <a href='/add-monument'>Add Monument</a>
      </li>
    </ul>
  </nav>`;

  return Header;
};

export default getHeader;
